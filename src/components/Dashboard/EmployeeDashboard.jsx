import Header from "../extras/Header";
import TaskNumber from "../extras/TaskNumber";
import TaskList from "../TaskList/TaskList";

const EmployeeDashboard = ({ data, handleLogout, admin }) => {

  return (
    <div className="p-10 bg-[#1c1c1c] h-screen ">
      {!admin ? (
        <Header name={data.firstname} handleLogout={handleLogout} />
      ) : (
        <div className="">
          <h2 className="text-2xl font-semibold">
            Employee Name : {" "}
            <span className="text-3xl font-bold">{data.firstname}</span>
          </h2>
          {/* <a href=`mailto=${data.email}` >Send Message</a> */}
          </div>
      )}
      <TaskNumber data={data} />
      <TaskList data={data} />
    </div>
  );
};

export default EmployeeDashboard;
