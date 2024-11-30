// import React from 'react'

import { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthProvider";
import EmployeeDashboard from "../Dashboard/EmployeeDashboard";

const AllTask = () => {
  const data = useContext(AuthContext);
  const [employeePage,setEmployeePage]=useState(false);
  const [employeeData,setEmployeeData]=useState({});

  const handleClick=(empName)=>{
    const employeeData=JSON.parse(localStorage.getItem("employees"));
      employeeData.forEach((employee) => {
       if(employee.firstname == empName){
        setEmployeeData(employee);
       }
    })
    setEmployeePage(true);
  }
  if(employeePage){
    return (
      <>
      <button className="my-5 md:mx-[45%] ml-[35%] p-2 w-40 bg-blue-500 rounded-md" onClick={()=>{setEmployeePage(false),setEmployeeData({})}}>Go back To All Task</button>
    <EmployeeDashboard data={employeeData} admin={true}/>
    </>
    )
  }
  return (
    <div className="bg-[#1c1c1c] p-5 rounded-lg mt-10">
      <h1 className="w-full p-3 text-center text-orange-700 text-3xl font-bold mt-5 mb- font-serif">List of Employees</h1>
      <div className="bg-zinc-700 py-2 px-4 flex rounded-lg md:font-bold mt-2 font-semibold text-xs md:text-lg">
        <h2 className="w-1/5 text-left text-blue-400">Name</h2>
        <h2 className="w-1/5 text-center text-emerald-600">Active task</h2>
        <h2 className="w-1/5 text-center text-yellow-400">New Task</h2>
        <h2 className="w-1/5 text-right text-orange-400">Completed Task</h2>
        <h2 className="w-1/5 text-right text-red-500">Failed Task</h2>
      </div>
      <div className="h-4/5">
        {data.employees.map((employee) => (
          <div
            className="bg-transparent border-2 border-zinc-600 py-2 px-4 flex justify-between rounded-lg font-bold mt-2 cursor-pointer"
            key={employee.id}
            onClick={()=>handleClick(employee.firstname)}
          >
            <h2>{employee.firstname}</h2>
            <h2>{employee.task_number.new}</h2>
            <h2>{employee.task_number.active}</h2>
            <h2>{employee.task_number.completed}</h2>
            <h2>{employee.task_number.failed}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllTask;
