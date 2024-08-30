# Task Manager Application

This is a task manager application built using React, PrimeReact, PrimeFlex, and advanced data structures, including a Priority Queue and a Directed Acyclic Graph (DAG). The application provides an efficient way to manage tasks, track progress, and visualize dependencies between tasks.

## Features

### 1. Dashboard

- **Overview Component**: Displays a pie chart showing the total number of incomplete, complete, and due tasks.
- **Cards**: Three cards displaying counts for incomplete, complete, and due tasks.
- **Calendar Component**: Allows users to view all tasks for a selected day. Clicking on a date shows the tasks scheduled for that day.
- **High-Priority Tasks**: Lists high-priority tasks, managed using a priority queue, and shows their progress based on the completion of dependent tasks.

### 2. Task Manager

- **Task Table**: Displays all tasks in a tabular format. The table includes search and filter functionalities to easily manage tasks.
- **Task Operations**: Users can add, edit, and delete tasks directly from the task manager page.
- **Task Dependencies**: View and manage dependencies between tasks using a Directed Acyclic Graph (DAG), ensuring that tasks are completed in the correct order.

## Data Structures Used

### Priority Queue

- Used to manage high-priority tasks. Tasks with higher priority are processed first.

### Directed Acyclic Graph (DAG)

- Used to represent and manage task dependencies. Ensures that tasks are completed in a logical order, respecting their dependencies.

## Technologies

- **React**: Frontend framework used to build the user interface.
- **PrimeReact**: UI component library for React, used to create rich, interactive elements.
- **PrimeFlex**: A CSS utility library used for layout and flexbox-based designs.
- **JavaScript**: Programming language used for all logic and data structure implementations.

## Deployed Link

- [View the Live Application](https://mariambaloch.github.io/Task-Manager/)

## Screenshots

### Dashboard 
![Dashboard Screenshot](/public/images/dashboard.png)

### Add Task 
![Add Task Screenshot](/public/images/add-task.png)

### Task Manager 
![Task Manager Screenshot](/public/images/task-manager.png)

### Task Dependencies 
![Task Dependencies Screenshot](/public/images/dependencies.png)
