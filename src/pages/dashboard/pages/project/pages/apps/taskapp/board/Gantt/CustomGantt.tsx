import React from "react";
import { Task, ViewMode, Gantt } from "gantt-task-react";
import { ViewSwitcher } from "./ViewSwitcher";
import { getStartEndDateForProject, initTasks } from "./helper";
import "gantt-task-react/dist/index.css";

// Init
const CustomGantt = () => {
	const [view, setView] = React.useState<ViewMode>(ViewMode.Day);
	const [tasks, setTasks] = React.useState<Task[]>(initTasks());
	const [isChecked, setIsChecked] = React.useState(true);
	let columnWidth = 65;
	if (view === ViewMode.Year) {
		columnWidth = 350;
	} else if (view === ViewMode.Month) {
		columnWidth = 300;
	} else if (view === ViewMode.Week) {
		columnWidth = 250;
	}

	const handleTaskChange = (task: Task) => {
		let newTasks = tasks.map(t => (t.id === task.id ? task : t));
		if (task.project) {
			const [start, end] = getStartEndDateForProject(newTasks, task.project);
			const project = newTasks[newTasks.findIndex(t => t.id === task.project)];
			if (
				project.start.getTime() !== start.getTime() ||
				project.end.getTime() !== end.getTime()
			) {
				const changedProject = { ...project, start, end };
				newTasks = newTasks.map(t =>
					t.id === task.project ? changedProject : t
				);
			}
		}
		setTasks(newTasks);
	};

	const handleTaskDelete = (task: Task) => {
		const conf = window.confirm("Are you sure about " + task.name + " ?");
		if (conf) {
			setTasks(tasks.filter(t => t.id !== task.id));
		}
		return conf;
	};

	const handleProgressChange = async (task: Task) => {
		setTasks(tasks.map(t => (t.id === task.id ? task : t)));
	};

	const handleExpanderClick = (task: Task) => {
		setTasks(tasks.map(t => (t.id === task.id ? task : t)));
	};

	return (
		<div id="scrollbar" className="bg-gray-200 dark:bg-slate-700 rounded-xl h-full">
			{/* <ViewSwitcher
				onViewModeChange={viewMode => setView(viewMode)}
				onViewListChange={setIsChecked}
				isChecked={isChecked}
			/> */}
			<Gantt
				tasks={tasks}
				viewMode={view}
				onDateChange={handleTaskChange}
				onDelete={handleTaskDelete}
				onProgressChange={handleProgressChange}
				onExpanderClick={handleExpanderClick}
				listCellWidth={isChecked ? "155px" : ""}
				columnWidth={columnWidth}
			/>
		</div>
	);
};

export default CustomGantt;