/* eslint-disable react/prop-types */


const TaskNumber = ({data}) => {
  return (
    <div className="flex flex-wrap justify-evenly sm:justify-between gap-2 mt-10 screen">
      <div className="rounded-xl px-6 py-6 md:w-[22%] w-[40%] bg-yellow-500 min-w-40">
        <h2 className="text-2xl font-semibold">{data.task_number.new}</h2>
        <h3 className="text-xl font-medium">New Task</h3>
      </div>
      <div className="rounded-xl px-6 py-6 md:w-[22%] w-[40%] bg-green-500 min-w-40">
        <h2 className="text-2xl font-semibold">{data.task_number.completed}</h2>
        <h3 className="text-xl font-medium">Completed Task</h3>
      </div>
      <div className="rounded-xl px-6 py-6 md:w-[22%] w-[40%] bg-emerald-500 min-w-40">
        <h2 className="text-2xl font-semibold">{data.task_number.active}</h2>
        <h3 className="text-xl font-medium">Accepted Task</h3>
      </div>
      <div className="rounded-xl px-6 py-6 md:w-[22%] w-[40%] bg-red-500 min-w-40">
        <h2 className="text-2xl font-semibold">{data.task_number.failed}</h2>
        <h3 className="text-xl font-medium">Failed Task</h3>
      </div>
    </div>
  );
}

export default TaskNumber