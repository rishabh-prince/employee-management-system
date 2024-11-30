import AllTask from "../extras/AllTask";
import CreateTask from "../extras/CreateTask";
import Header from "../extras/Header"

const AdminDashboard = ({handleLogout}) => {
  return (
    <div className="md:h-screen md:w-full p-5 ">
      <Header name={"admin"} handleLogout={handleLogout}/>
      <CreateTask/>
      <AllTask/>
    </div>
  );
}

export default AdminDashboard