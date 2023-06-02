interface Task {
    start: Date;
    end: Date;
    name: string;
    id: string;
    progress: number;
    type: "project" | "task" | "milestone";
    hideChildren?: boolean;
    displayOrder?: number | undefined;
    dependencies?: string[];
    project?: string;
    isDisabled?: boolean;
}

export function initTasks() {
    const currentDate = new Date();
    const tasks: Task[] = [
        {
            start: new Date(currentDate.getFullYear(), currentDate.getMonth(), 1),
            end: new Date(currentDate.getFullYear(), currentDate.getMonth(), 2, 12, 28),
            name: "Idea",
            id: "Task 0",
            progress: 45,
            type: "task",
            displayOrder: 2,
        },
        {
            start: new Date(currentDate.getFullYear(), currentDate.getMonth(), 2),
            end: new Date(currentDate.getFullYear(), currentDate.getMonth(), 4, 0, 0),
            name: "Research",
            id: "Task 1",
            progress: 25,
            type: "task",
            displayOrder: 3,
        },
        {
            start: new Date(currentDate.getFullYear(), currentDate.getMonth(), 4),
            end: new Date(currentDate.getFullYear(), currentDate.getMonth(), 8, 0, 0),
            name: "Discussion with team",
            id: "Task 2",
            progress: 10,
            type: "task",
            displayOrder: 4,
        },
        {
            start: new Date(currentDate.getFullYear(), currentDate.getMonth(), 8),
            end: new Date(currentDate.getFullYear(), currentDate.getMonth(), 9, 0, 0),
            name: "Developing",
            id: "Task 3",
            progress: 2,
            type: "task",
            displayOrder: 5,
        },
        {
            start: new Date(currentDate.getFullYear(), currentDate.getMonth(), 8),
            end: new Date(currentDate.getFullYear(), currentDate.getMonth(), 10),
            name: "Review",
            id: "Task 4",
            type: "task",
            progress: 70,
            displayOrder: 6,
        },
        {
            start: new Date(currentDate.getFullYear(), currentDate.getMonth(), 18),
            end: new Date(currentDate.getFullYear(), currentDate.getMonth(), 19),
            name: "Party Time",
            id: "Task 5",
            progress: 0,
            type: "task"
        }
    ];
    return tasks;
}

export function getStartEndDateForProject(tasks: Task[], projectId: string) {
    const projectTasks = tasks.filter(t => t.project === projectId);
    let start = projectTasks[0].start;
    let end = projectTasks[0].end;

    for (let i = 0; i < projectTasks.length; i++) {
        const task = projectTasks[i];
        if (start.getTime() > task.start.getTime()) {
            start = task.start;
        }
        if (end.getTime() < task.end.getTime()) {
            end = task.end;
        }
    }
    return [start, end];
}