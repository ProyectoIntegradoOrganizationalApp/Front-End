import { useEffect, useState } from "react";
import { ColumnData } from "../domain/apps/taskman/ColumnData.interface";
import { DropResult } from "react-beautiful-dnd";
import { Column, TaskAppInfo } from "../adapters/api/useTaskAppApi";

export const useBoard = ( data: TaskAppInfo | undefined ) => {
    const [ columnOrder, setColumnOrder ] = useState<string[]>([]);
    const [ columnsData, setColumnsData ] = useState<ColumnData>({});

    useEffect(() => {
        if( data && data.columns ) {
            setColumnOrder([]);
            setColumnsData({});

            console.log(data)

            data.columns.map(( col: Column ) => {
                setColumnOrder([...columnOrder, col.id]);

                const cols: ColumnData = { } 
                cols[col.id] = {
                    id: col.id,
                    title: col.title,
                    taskIds: col.tasks.map( task => {
                        return task.id
                    })
                }

                setColumnsData({...columnsData, ...cols})

            })
        }
        
    }, [data?.columns])
    
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

        if (result.type == "COLUMN") {
            const columnOrderCopy = [...columnOrder];
            moveIndex(columnOrderCopy, source.index, destination.index);
            setColumnOrder(columnOrderCopy);
        } else {
            const columnsCopy = structuredClone(columnsData);
            const sourceColumn = columnsCopy[source.droppableId];
            const destinationColumn = columnsCopy[destination.droppableId];
            const task = sourceColumn.taskIds[source.index];
            
            if (source.droppableId === destination.droppableId) {
                moveIndex(sourceColumn.taskIds, source.index, destination.index);
                setColumnsData(columnsCopy);
            } else {
                changeTaskToColumn(destinationColumn.taskIds, destination.index, task);
                removeTaskFromColumn(sourceColumn.taskIds, task);
                setColumnsData(columnsCopy)
            }
        }
    };

    return { onDragEnd, columnOrder, columnsData };
}