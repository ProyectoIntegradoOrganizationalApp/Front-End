import { useEffect, useReducer, useState } from "react";

import { DropResult } from "react-beautiful-dnd";

import { Column, Task, TaskAppInfo } from "../adapters/api/useTaskAppApi";

interface UseBoardProps {
    data: TaskAppInfo | undefined,
    editColumn: ( column: Column ) => void,
    editTask: ( task: Task ) => void,
}

export const useBoard = ({ data, editColumn, editTask }: UseBoardProps) => {
    // Lista con las id de las columnas
    const [ columnOrder, setColumnOrder ] = useState<string[]>([]);

    // Manejo de estado con useReducer
    const [ columnsData, dispatch ] = useReducer(
        ( columnsData: any, action: any ) => {
            return {
                ...action
            }
        },
        {
            columns: [],
        }
    )

    // Efecto para cargar las columnas
    useEffect(() => {

        // Si hay datos y columnas generamos los estados
        if( data && data.columns ) {

            // Creamos copias de las columnas actuales
            const newColOrder = [...columnOrder];
            const newColList: Column[] = []

            console.log(data)

            data.columns.map(( col: Column ) => {

                // Reordenamos las tasks
                col.tasks = col.tasks.sort(( taskA: Task, taskB: Task) => {
                    return taskA.ordering - taskB.ordering;
                });

                // Añadimos la columna
                newColList.push(col);
                newColOrder.push(col.id);

            });

            dispatch({ columns: [...newColList] })
            setColumnOrder(newColOrder);
        }
    }, [data?.columns]);
    
    const moveIndex = ( list: any[], from: number, to: number ) => {
        list.splice(to, 0, list.splice(from, 1)[0]);
    }

    const changeTaskToColumn = ( list: Task[], index: number, task: Task)  => {
        list.push(task);
        moveIndex(list, list.length - 1, index);
    }

    const removeTaskFromColumn = ( list: Task[], task: Task ) => {
        list.splice(list.indexOf(task), 1);
    }

    const onDragEnd = (result: DropResult) => {

        const { destination, source, draggableId } = result;

        if (!destination) {
            return;
        }

        // Comprobamos si se mueve una columna
        if (result.type == "COLUMN") {
            const columnOrderCopy = [...columnOrder];

            if( source.index != destination.index ) {

                // Recogemos la columna a editard
                let column = columnsData.columns.find( (elem: Column) => elem.id === draggableId);

                // Si la columna existe la modificamos
                if( column ) {
                    column.order = destination.index;

                    // Editar la columna para cambiar el orden
                    editColumn(column);

                    moveIndex(columnOrderCopy, source.index, destination.index);
                    setColumnOrder(columnOrderCopy);
                }
            }

        }

        // Comprobamos si se mueve una task
        if ( result.type != "COLUMN") {
            // Copiamos el objeto
            const columnsCopy = [...columnsData.columns];

            // Recojemos la colummna de origen
            const sourceColumn = columnsCopy.find( value => value.id === source.droppableId);

            // Recogemos la columna de destino
            const destinationColumn = columnsCopy.find( value => value.id === destination.droppableId);

            // Recogemos la task
            const task = sourceColumn!.tasks.find(( task: Task ) => task.id === draggableId);
            
            // Comprobamos si se mueve dentro de la misma columna
            if ( source.droppableId === destination.droppableId && sourceColumn ) {

                // Si la tarea existe la modificamos
                if( task ) {
                    task.ordering = destination.index;
                    editTask(task);

                    moveIndex(sourceColumn.tasks, source.index, destination.index);
                    // setColumnsData.setState([...columnsCopy]);
                    dispatch({ columns: [...columnsCopy] })
                }
            } 

            // Comprobamos si se mueve hacia otra columna
            if ( source.droppableId != destination.droppableId && sourceColumn && destinationColumn && task ) {

                // Editar tarea para cambiar la columna a la que pertenece
                if( task ) {
                    task.ordering = destination.index;
                    task.idcolumn = destination.droppableId;

                    editTask(task);

                    changeTaskToColumn(destinationColumn.tasks, destination.index, task);
                    removeTaskFromColumn(sourceColumn.tasks, task);
                    dispatch({ columns: [...columnsCopy] })
                }
            }
        }
    };

    return { onDragEnd, columnOrder, columnsData };
}