import TaskTable from '../Components/TaskTable'
import React, { useEffect, useState } from 'react'
import { taskManager } from '../data'
function ManageTasks() {
  const [tasks, setTasks] = useState()

  useEffect(() => {
    setTasks(taskManager.getAllTasks())
  }, [])
  return (
    <div>
      <div className="mx-2">
        <TaskTable
          tasks={tasks}
          taskManager={taskManager}
        />
      </div>
    </div>
  )
}

export default ManageTasks
