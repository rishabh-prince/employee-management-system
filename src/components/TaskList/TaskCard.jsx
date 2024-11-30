


const TaskCard = ({tasks}) => {
  return (
    <>
    {tasks.map((task)=>{
      return (
        <div
          className="h-full flex-shrink-0 bg-red-400 rounded-xl p-5 box-border"
          key={task.task_title}
        >
          <div className="flex justify-between items-center">
            <h1 className="mt-5 text-xl font-semibold bg-zinc-700 px-2 py-1 rounded-lg">{task.category}</h1>
            <h4 className="mt-5 text-lg font-semibold">{task.task_date}</h4>
          </div>
          <h1 className="mt-5 text-2xl font-semibold">{task.task_title}</h1>
          <p className="text-lg mt-2">{task.task_description}</p>
          <div className="flex gap-2 mt-5 items-center justify-center">
            {task.active && (
              <span className="p-2 bg-emerald-500 rounded-md">Accepted</span>
            )}
            {task.new && (
              <span className="p-2 bg-yellow-500 rounded-md">New</span>
            )}
            {task.completed && (
              <span className="p-2 bg-green-500 rounded-md">Completed</span>
            )}
            {task.failed && (
              <span className="p-2 bg-red-500 rounded-md">Failed</span>
            )}
          </div>
        </div>
      );
    }
    )}
  </>
  )
}

export default TaskCard