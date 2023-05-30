import { useState } from "react";
import { ColumnData } from "../domain/apps/taskman/ColumnData.interface";
import { DropResult } from "react-beautiful-dnd";

export const useBoard = () => {
    const [ columnOrder, setColumnOrder ] = useState<string[]>(['column-0', 'column-1', 'column-2', 'column-3']);
    const [ columnsData, setColumnsData ] = useState<ColumnData>({
        "column-0": {
            id: "column-0",
            title: 'To Do',
            taskIds: ['task-1', 'task-2', 'task-3']
        },
        "column-1": {
            id: "column-1",
            title: 'In Progress',
            taskIds: ['task-4', 'task-5']
        },
        "column-2": {
            id: "column-2",
            title: 'Done',
            taskIds: ['task-6']
        },
        "column-3": {
            id: "column-3",
            title: 'sergioesBobo',
            taskIds: ['task-7', 'task-8']
        }
    });
    
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