import React, { useState, useEffect } from 'react'
import { InputText } from 'primereact/inputtext'
import { Calendar } from 'primereact/calendar'
import { Dropdown } from 'primereact/dropdown'
import { MultiSelect } from 'primereact/multiselect'
import { Button } from 'primereact/button'
import { taskManager } from '../data'

function AddTaskForm({ onClose }) {
  const [taskData, setTaskData] = useState({
    id: '',
    title: '',
    deadline: null,
    priority: null,
    dependencies: []
  })
  const [priorities] = useState([
    { label: 'Critical', value: 1 },
    { label: 'High', value: 2 },
    { label: 'Medium', value: 3 },
    { label: 'Low', value: 4 },
    { label: 'Minimal', value: 5 }
  ])
  const [availableTasks, setAvailableTasks] = useState([])

  useEffect(() => {
    setAvailableTasks(
      taskManager.getAllTasks().map((task) => ({
        label: task.title,
        value: task.id
      }))
    )
  }, [])

  const handleAddTask = () => {
    const { id, title, deadline, priority, dependencies } = taskData
    if (id && title && deadline && priority !== null) {
      const newTask = { id, title, deadline, priority, completed: false }
      taskManager.addTask(newTask)
      dependencies.forEach((depId) => {
        taskManager.addDependency(id, depId)
      })
      setAvailableTasks(
        taskManager.getAllTasks().map((task) => ({
          label: task.title,
          value: task.id
        }))
      )
      onClose()
      setTaskData({
        id: '',
        title: '',
        deadline: null,
        priority: null,
        dependencies: []
      })
    }
  }

  return (
    <div className="p-fluid">
      <div className="field">
        <InputText
          id="taskId"
          placeholder="Task ID"
          keyfilter="int"
          value={taskData.id}
          onChange={(e) => setTaskData({ ...taskData, id: e.target.value })}
        />
      </div>
      <div className="field">
        <InputText
          id="taskTitle"
          placeholder="Task Name"
          value={taskData.title}
          onChange={(e) => setTaskData({ ...taskData, title: e.target.value })}
        />
      </div>
      <div className="field">
        <Calendar
          id="taskDeadline"
          placeholder="Due Date"
          value={taskData.deadline}
          onChange={(e) => setTaskData({ ...taskData, deadline: e.value })}
          showIcon
        />
      </div>
      <div className="field">
        <Dropdown
          id="taskPriority"
          value={taskData.priority}
          options={priorities}
          onChange={(e) => setTaskData({ ...taskData, priority: e.value })}
          placeholder="Select a Priority"
        />
      </div>
      <div className="field">
        <MultiSelect
          id="taskDependencies"
          value={taskData.dependencies}
          options={availableTasks}
          onChange={(e) => setTaskData({ ...taskData, dependencies: e.value })}
          placeholder="Select Dependencies"
        />
      </div>
      <div className="p-field">
        <Button
          label="Add Task"
          icon="pi pi-check"
          onClick={handleAddTask}
        />
      </div>
    </div>
  )
}

export default AddTaskForm
