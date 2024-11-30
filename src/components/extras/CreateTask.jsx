import { useState } from "react";

const CreateTask = () => {


  const [taskTitle, setTaskTitle] = useState("");
  const [taskDescription, setTaskDescription] = useState("");
  const [taskDate, setTaskDate] = useState("")
  const [assignTo, setAssignTo] = useState("");
  const [category, setCategory] = useState("");

  const [newTask, setNewTask] = useState({
    active: false,
    new: true,
    completed: false,
    failed: false,
    task_title: taskTitle,
    task_description: taskDescription,
    task_date: taskDate,
    category: category,
  });
 
  const handleSubmit=(e)=>{
    e.preventDefault();
    console.log(taskTitle, taskDescription, taskDate, assignTo, category);

    const data =JSON.parse(localStorage.getItem("employees"));
    console.log("new task = ",newTask)
    console.log(data);
    data.forEach((employee)=>{
      if(employee.firstname == assignTo){
        employee.task_number.new+=1;
        employee.tasks.push(newTask);
      }
    })
    console.log(data);
    localStorage.setItem("employees",JSON.stringify(data));
    setTaskTitle("");
    setTaskDescription("");
    setTaskDate("");
    setAssignTo("");
    setCategory("");
  }

  return (
    <div className="md:w-5/12 w-10/12 mt-10 mx-auto">
      <form
        onSubmit={handleSubmit}
        className="bg-zinc-600 w-full flex flex-col gap-5 rounded-lg p-5 mx-auto"
      >
        <div className="text-black">
          <h3 className="text-lg font-semibold text-black">Task Title</h3>
          <input
            type="text"
            className="h-5 outline-none border-2 border-gray-300 w-full p-5 rounded-3xl text-black mt-2"
            placeholder="e.g .. Make a Ui design"
            value={taskTitle}
            onChange={(e) =>{
              setNewTask({ ...newTask, task_title: e.target.value })
              setTaskTitle(e.target.value)
            }
            }
          />
        </div>
        <div>
          <h3 className="text-lg font-semibold text-black">Description</h3>
          <textarea
            className="outline-none border-2 border-gray-300 w-full p-2 rounded-xl text-black mt-2 scroll-none"
            rows="4"
            value={taskDescription}
            onChange={(e) =>{
              setNewTask({ ...newTask, task_description: e.target.value })
              setTaskDescription(e.target.value);
            }
            }
          ></textarea>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-black">Date</h3>
          <input
            type="date"
            className="outline-none border-2 border-gray-300 w-2/3 p-2 rounded-3xl text-black mt-2"
            value={taskDate}
            onChange={(e) =>{
              setNewTask({ ...newTask, task_date: e.target.value })
              setTaskDate(e.target.value);
            }
            }
          />
        </div>
        <div>
          <h3 className="text-lg font-semibold text-black">Assign to</h3>
          <input
            type="text"
            className="outline-none border-2 border-gray-300 w-full p-2 rounded-3xl text-black mt-2"
            placeholder="Employee Name"
            value={assignTo}
            onChange={(e) => setAssignTo(e.target.value)}
          />
        </div>
        <div>
          <h3 className="text-lg font-semibold text-black">Category</h3>
          <input
            type="text"
            className="outline-none border-2 border-gray-300 w-full p-2 rounded-3xl text-black mt-2"
            placeholder="design dev etc"
            value={category}
            onChange={(e) =>{
              setNewTask({ ...newTask, category: e.target.value })
              setCategory(e.target.value)
            }
            }
          />
        </div>
        <button className="outline-none p-3 mt-2 rounded-3xl bg-emerald-600 w-1/2 mx-auto font-bold text-xl">
          Create Task
        </button>
      </form>
    </div>
  );
}

export default CreateTask