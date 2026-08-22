import CheckIcon from "../assets/icons/check.svg?react";
import LoaderIcon from "../assets/icons/loader.svg?react";
import DetailsIcon from "../assets/icons/details.svg?react";

const TaskItem = ({ task }) => {
  const getStatusClasses = () => {
    if (task.status === "done") {
      return "bg-[rgba(0,173,181)] text-[#00ADB5]";
    }

    if (task.status === "in_progress") {
      return "bg-[rgba(255,170,132)] text-[#FFAA84]";
    }
    if (task.status === "not_started") {
      return "bg-[rgba(43,45,66,0.1)] text-[#2B2D42]";
    }
  };
  return (
    <div
      className={`flex items-center justify-between gap-2 rounded-lg bg-current/10 px-4 py-3 text-sm ${getStatusClasses()}`}
    >
      <div className="flex items-center gap-2">
        <label
          className={`relative flex h-7 w-7 cursor-pointer items-center justify-center rounded-lg ${getStatusClasses()}`}
        >
          <input
            type="checkbox"
            checked={task.status === "done"}
            className="absolute h-full w-full cursor-pointer opacity-0"
          />
          {task.status === "done" && <CheckIcon />}
          {task.status === "in_progress" && (
            <LoaderIcon className="animate-spin" />
          )}
        </label>
        {task.title}
      </div>
      <a href="#" className="transition hover:opacity-75">
        <DetailsIcon />
      </a>
    </div>
  );
};

export default TaskItem;
