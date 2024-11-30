// import React from 'react'
import Login from "./components/Auth/Login";
import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard";

import { useContext, useEffect, useState } from "react";
import AdminDashboard from "./components/Dashboard/AdminDashboard";
import { setLocalStorage } from "./utils/localStorage";
import { AuthContext } from "./context/AuthProvider";

const App = () => {
  const [userRole, setUserRole] = useState(null);
  const [loggedInUserData, setLoggedInUserData] = useState(null);

  const authData = useContext(AuthContext);


  useEffect(() => {
    setLocalStorage();
    const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));

    if (loggedInUser) {
      setUserRole(loggedInUser.role);

      setLoggedInUserData(JSON.parse(localStorage.getItem("user")));
    }
  }, []);

  const handleLogout=()=>{
    setUserRole(null);
    setLoggedInUserData(null);
    localStorage.removeItem("loggedInUser");
    localStorage.removeItem("user");
  }

  const handleLogin = (email, password) => {
    if (email == "admin@example.com" && password == "12345678") {
      setUserRole("admin");
      localStorage.setItem("loggedInUser", JSON.stringify({ role: "admin" }));
      setLoggedInUserData(authData.admin);
      localStorage.setItem("user", JSON.stringify(authData.admin));
    } else {
      const employee = authData.employees.find(
        (e) => email == e.email && password == e.password
      );
      if (employee) {
        setUserRole("employee");
        setLoggedInUserData(employee);
        localStorage.setItem("user", JSON.stringify(employee));
        localStorage.setItem(
          "loggedInUser",
          JSON.stringify({ role: "employee" })
        )
      } else {
        alert("invalid credentials");
      }
    }
  };
  return (
    <>
      {!userRole && <Login handleLogin={handleLogin} />}
      {userRole == "admin" && <AdminDashboard handleLogout={handleLogout}/>}
      {userRole == "employee" && <EmployeeDashboard data={loggedInUserData} handleLogout={handleLogout} />}
    </>
  );
};

export default App;
