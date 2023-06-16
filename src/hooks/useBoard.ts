import { useEffect, useState } from "react";
import { ColumnData } from "../domain/apps/taskman/ColumnData.interface";
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

    // Lista con las columnas
    const [ columnsData, setColumnsData ] = useState<Column[]>([]);

    // Efecto para cargar las columnas
    useEffect(() => {

        // Si hay datos y columnas generamos los estados
        if( data && data.columns ) {

            // Creamos copias de las columnas actuales
            const newColList = [...columnsData];
            const newColOrder = [...columnOrder];

            // Recorremos las columnas que nos vienen del back para generar nuestra lista
            data.columns.map(( col: Column ) => {

                // Si no existe se añade, si existe no se añade
                if ( !columnsData.find( value => value.id === col.id) ) {
                    
                    col.tasks = col.tasks.sort(( taskA: Task, taskB: Task) => {
                        return taskA.ordering - taskB.ordering;
                    });

                    // Añadimos la columna
                    newColList.push(col);
                    newColOrder.push(col.id);
                };
            });

            newColList.sort(( colA: Column, colB: Column) => {
                return colA.order - colB.order;
            })

            // Seteamos los estados
            setColumnsData(newColList);
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
                let column = columnsData.find( elem => elem.id === draggableId);

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
            const columnsCopy = [...columnsData];

            // Recojemos la colummna de origen
            const sourceColumn = columnsCopy.find( value => value.id === source.droppableId);

            // Recogemos la columna de destino
            const destinationColumn = columnsCopy.find( value => value.id === destination.droppableId);

            // Recogemos la task
            const task = sourceColumn!.tasks.find( task => task.id === draggableId);
            
            // Comprobamos si se mueve dentro de la misma columna
            if ( source.droppableId === destination.droppableId && sourceColumn ) {

                // Si la tarea existe la modificamos
                if( task ) {
                    task.ordering = destination.index;
                    editTask(task);

                    moveIndex(sourceColumn.tasks, source.index, destination.index);
                    setColumnsData(columnsCopy);
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
                    setColumnsData(columnsCopy);
                }
            }
        }
    };

    return { onDragEnd, columnOrder, columnsData };
}