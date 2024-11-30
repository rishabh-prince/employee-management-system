const employees = [
  {
    id: 1,
    email: "employee1@example.com",
    password: "12345678",
    firstname: "Arjun",
    task_number: {
      active: 2,
      new: 1,
      completed: 1,
      failed: 1,
    },
    tasks: [
      {
        active: true,
        new: true,
        completed: false,
        failed: false,
        task_title: "Complete report",
        task_description: "Finish the monthly performance report",
        task_date: "2024-11-15",
        category: "Work",
      },
      {
        active: true,
        new: false,
        completed: true,
        failed: false,
        task_title: "Attend team meeting",
        task_description: "Participate in the weekly sync-up meeting",
        task_date: "2024-11-14",
        category: "Meeting",
      },
      {
        active: false,
        new: false,
        completed: false,
        failed: true,
        task_title: "Submit project proposal",
        task_description: "Submit the final project proposal document",
        task_date: "2024-11-10",
        category: "Work",
      },
    ],
  },
  {
    id: 2,
    email: "employee2@example.com",
    password: "12345678",
    firstname: "Priya",
    task_number: {
      active: 2,
      new: 1,
      completed: 1,
      failed: 1,
    },
    tasks: [
      {
        active: true,
        new: true,
        completed: false,
        failed: false,
        task_title: "Prepare presentation",
        task_description: "Prepare slides for the upcoming client meeting",
        task_date: "2024-11-16",
        category: "Work",
      },
      {
        active: true,
        new: false,
        completed: false,
        failed: true,
        task_title: "Update website",
        task_description: "Make updates to the company website",
        task_date: "2024-11-13",
        category: "Web Development",
      },
      {
        active: false,
        new: false,
        completed: true,
        failed: false,
        task_title: "Finish documentation",
        task_description: "Complete the user manual for the new software",
        task_date: "2024-11-12",
        category: "Documentation",
      },
    ],
  },
  {
    id: 3,
    email: "employee3@example.com",
    password: "12345678",
    firstname: "Amit",
    task_number: {
      active: 2,
      new: 1,
      completed: 1,
      failed: 0,
    },
    tasks: [
      {
        active: true,
        new: true,
        completed: false,
        failed: false,
        task_title: "Research new tools",
        task_description: "Look into new tools for team collaboration",
        task_date: "2024-11-17",
        category: "Research",
      },
      {
        active: true,
        new: false,
        completed: true,
        failed: false,
        task_title: "Fix server issue",
        task_description: "Resolve the issue with the internal server",
        task_date: "2024-11-11",
        category: "IT",
      },
      {
        active: false,
        new: true,
        completed: false,
        failed: false,
        task_title: "Draft blog post",
        task_description:
          "Write a blog post about the new features of the software",
        task_date: "2024-11-18",
        category: "Content",
      },
    ],
  },
  {
    id: 4,
    email: "employee4@example.com",
    password: "12345678",
    firstname: "Neha",
    task_number: {
      active: 2,
      new: 1,
      completed: 1,
      failed: 1,
    },
    tasks: [
      {
        active: true,
        new: true,
        completed: false,
        failed: false,
        task_title: "Client call",
        task_description:
          "Call the client to discuss their feedback on the product",
        task_date: "2024-11-19",
        category: "Client",
      },
      {
        active: true,
        new: false,
        completed: true,
        failed: false,
        task_title: "Write test cases",
        task_description: "Write automated test cases for the latest update",
        task_date: "2024-11-10",
        category: "Testing",
      },
      {
        active: false,
        new: false,
        completed: false,
        failed: true,
        task_title: "Update internal wiki",
        task_description:
          "Update the internal documentation for the development process",
        task_date: "2024-11-07",
        category: "Documentation",
      },
    ],
  },
  {
    id: 5,
    email: "employee5@example.com",
    password: "12345678",
    firstname: "Ravi",
    task_number: {
      active: 2,
      new: 2,
      completed: 1,
      failed: 1,
    },
    tasks: [
      {
        active: true,
        new: true,
        completed: false,
        failed: false,
        task_title: "Organize team event",
        task_description: "Plan and organize a team-building event",
        task_date: "2024-11-20",
        category: "Team Building",
      },
      {
        active: true,
        new: false,
        completed: true,
        failed: false,
        task_title: "Submit weekly update",
        task_description: "Send out the weekly project status report",
        task_date: "2024-11-13",
        category: "Work",
      },
      {
        active: false,
        new: false,
        completed: false,
        failed: true,
        task_title: "Prepare budget review",
        task_description: "Prepare the budget review for the quarter",
        task_date: "2024-11-08",
        category: "Finance",
      },
      {
        active: true,
        new: true,
        completed: false,
        failed: false,
        task_title: "Update team calendar",
        task_description:
          "Update the team calendar with new deadlines and meetings",
        task_date: "2024-11-15",
        category: "Work",
      },
    ],
  },
];


const admin = [ {
    id: 1,
    email: "admin@example.com",
    password: "12345678",
  },
];

export const setLocalStorage = ()=>{
    localStorage.setItem('employees',JSON.stringify(employees));
    localStorage.setItem("admin", JSON.stringify(admin)); 
}
export const getLocalStorage = () => {
  const employees=JSON.parse(localStorage.getItem("employees"));
  const admin = JSON.parse(localStorage.getItem("admin"));
   return {employees,admin};
};

