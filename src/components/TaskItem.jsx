const TaskItem = ({ task }) => {
  const getStatusClasses = () => {
    if (task.status === "done") {
      return "bg-[rgba(0,173,181,0.1)] text-[#00ADB5]";
    }

    if (task.status === "in_progress") {
      return "bg-[rgba(255,170,132,0.1)] text-[#FFAA84]";
    }
    if (task.status === "not_started") {
      return "bg-[rgba(43,45,66,0.1)] text-[#2B2D42]";
    }
  };
  return (
    <div
      className={`flex items-center gap-2 rounded-lg px-4 py-3 text-sm ${getStatusClasses()}`}
    >
      {task.title}
    </div>
  );
};

export default TaskItem;
