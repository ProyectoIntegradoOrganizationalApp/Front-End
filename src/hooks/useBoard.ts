import { useEffect, useState } from "react";
import { ColumnData } from "../domain/apps/taskman/ColumnData.interface";
import { DropResult } from "react-beautiful-dnd";
import { Column, TaskAppInfo } from "../adapters/api/useTaskAppApi";

export const useBoard = ( data: TaskAppInfo | undefined ) => {

    const [ columnOrder, setColumnOrder ] = useState<string[]>([]);
    const [ columnsData, setColumnsData ] = useState<ColumnData[]>([]);

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

                    // Creamos una lista para las tasks
                    /**
                     * Esto me revienta la cabeza y esque le añade la task al siguiente de la 
                     * lista y no entiendo nada
                     */
                    const taskIds: string[] = [];
                    col.tasks.map( task => taskIds.push(task.id));

                    // Creamos la columna
                    const newCol = {
                        id: col.id,
                        title: col.title,
                        taskIds: taskIds
                    };

                    // Añadimos la columna
                    newColList.push(newCol);
                    newColOrder.push(newCol.id);
                };

                
            });

            // Seteamos los estados
            setColumnsData(newColList);
            setColumnOrder(newColOrder);
        }
    }, [data?.columns]);

    const loadColumns = () => {
        
        
    }
    
    const moveIndex = (list: string[], from: number, to: number) => {
        list.splice(to, 0, list.splice(from, 1)[0]);
    }

    const changeTaskToColumn = (list: string[], index: number, task: string) => {
        list.push(task);
        moveIndex(list, list.length - 1, index);
    }

    const removeTaskFromColumn = (list: string[], task: string) => {
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
            moveIndex(columnOrderCopy, source.index, destination.index);
            setColumnOrder(columnOrderCopy);
        }

        // Comprobamos si se mueve una task
        if ( result.type != "COLUMN") {
            // Copiamos el objeto
            const columnsCopy = [...columnsData];

            // Recojemos la colummna de origen
            console.log(columnsData)
            const sourceColumn = columnsCopy.find( value => value.id === result.source.droppableId);

            // Recogemos la columna de destino
            const destinationColumn = columnsCopy.find( value => value.id === result.destination!.droppableId);

            // Recogemos la task
            const task = sourceColumn!.taskIds[result.source.index];
            
            // Comprobamos si se mueve dentro de la misma columna
            if ( source.droppableId === destination.droppableId && sourceColumn ) {
                moveIndex(sourceColumn.taskIds, source.index, destination.index);
                setColumnsData(columnsCopy);
            } 

            // Comprobamos si se mueve hacia otra columna
            if ( source.droppableId != destination.droppableId && sourceColumn && destinationColumn ) {
                changeTaskToColumn(destinationColumn.taskIds, destination.index, task);
                removeTaskFromColumn(sourceColumn.taskIds, task);
                setColumnsData(columnsCopy);
            }
        }
    };

    return { onDragEnd, columnOrder, columnsData };
}