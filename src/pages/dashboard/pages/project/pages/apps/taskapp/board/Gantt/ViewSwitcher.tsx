import React from "react";
import "gantt-task-react/dist/index.css";
type ViewSwitcherProps = {
    isChecked: boolean;
    onViewListChange: (isChecked: boolean) => void;
};
export const ViewSwitcher: React.FC<ViewSwitcherProps> = ({
    onViewListChange,
    isChecked,
}) => {
    return (
        <div className="flex items-center gap-[0.7rem] leading-none mt-4 mb-2 ml-4">
            <label htmlFor="showlist" className="Switch_Toggle select-none text-black dark:text-white">
                Show Task List
            </label>
            <input
                type="checkbox"
                id="showlist"
                className="translate-y-[.3px]"
                defaultChecked={isChecked}
                onClick={() => onViewListChange(!isChecked)}
            />
        </div>
    );
};