import React from "react";
import { Task, ViewMode, Gantt } from "gantt-task-react";
import { getStartEndDateForProject, initTasks } from "./helper";
import { ViewSwitcher } from "./ViewSwitcher";
import "gantt-task-react/dist/index.css";
import { useModal } from "../../../../../../../../../hooks/useModal";

// Init
const CustomGantt = (props: { column: string }) => {
	const [view, setView] = React.useState<ViewMode>(ViewMode.Day);
	const [tasks, setTasks] = React.useState<Task[]>(initTasks(props.column));
	const [isChecked, setIsChecked] = React.useState(true);
	const { openModal } = useModal();

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
		<div id="scrollbar" className="bg-gray-200 dark:bg-[#28292d] rounded-xl h-full flex flex-col justify-between">
			<div>
				<ViewSwitcher
					onViewListChange={setIsChecked}
					isChecked={isChecked}
				/>
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
			<div onClick={() =>
				openModal({
					isOpen: true,
					type: "crudProject",
					title: "Create Task",
					content: [],
					submitText: "Create Task",
					submitAction: () => { }
				})} className="bg-gray-300 dark:bg-black/30 hover:bg-gray-400/80 dark:hover:bg-black/50 transition-all cursor-pointer text-black dark:text-white p-4 select-none break-all w-full leading-[1.2rem] flex gap-2 justify-center items-center">
				<b><p className="leading-none">New Task</p></b><i className="fa-solid fa-plus"></i>
			</div>
		</div>
	);
};

export default CustomGantt;