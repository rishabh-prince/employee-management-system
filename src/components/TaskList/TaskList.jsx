import TaskCard from "./TaskCard";

const TaskList = ({ data }) => {
  return (
    <div className="min-h-80 overflow-x-auto flex items-center justify-start gap-5 w-full mt-10 py-5">
      <TaskCard tasks={data.tasks} />
    </div>
  );
};

export default TaskList;
