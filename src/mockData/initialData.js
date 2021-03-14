const initialData = {
  tasks: {
    "task-1": {
      id: "task-1",
      content: "Take out the garbage",
      title: "Create columns",
      description:
        "Create a page with 3 task list columns (To do, In progress, Done)",
      status: "in_progress",
    },
    "task-2": {
      id: "task-2",
      content: "Watch my favorite show",
      title: "Create actions for task manager",
      description: "Some description",
      status: "in_progress",
    },
    "task-3": {
      id: "task-3",
      content: "Charge my phone",
      title: "Edit task",
      description:
        "By clicking on a task you should be able to edit name and description as well as task status",
      status: "in_progress",
    },
    "task-4": {
      id: "task-4",
      content: "Cook dinner",
      title: "Fech list of tasks",
      description: "Fetch list of tasks and populate the columns",
      status: "to_do",
    },
    "task-5": {
      id: "task-5",
      content: "Cook somer",
      title: "Delete task",
      description: "Add delete feature for each task",
      status: "done",
    },
  },
  columns: {
    "column-1": {
      id: "column-1",
      title: "To do",
      taskIds: ["task-4"],
    },
    "column-2": {
      id: "column-2",
      title: "In Progress",
      taskIds: ["task-2", "task-3"],
    },
    "column-3": {
      id: "column-3",
      title: "Done",
      taskIds: ["task-5"],
    },
  },
  columnOrder: ["column-1", "column-2", "column-3"],
};

export default initialData;
