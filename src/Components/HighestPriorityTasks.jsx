import React, { useEffect, useState } from 'react'
import { ListBox } from 'primereact/listbox'
import { ProgressBar } from 'primereact/progressbar'
import { priorityQueue, taskManager } from '../data'

function HighestPriorityTasks() {
  const [highestPriorityTasks, setHighestPriorityTasks] = useState([])

  useEffect(() => {
    const tasks = priorityQueue.peek()
    setHighestPriorityTasks(tasks)
  }, [])

  const calculateProgress = (taskId) => {
    const task = taskManager.tasks[taskId]
    const dependencies = taskManager.dependencies[taskId] || []
    const totalDependencies = dependencies.length
    const completedDependencies = dependencies.filter(
      (depId) => taskManager.tasks[depId].completed
    ).length

    if (totalDependencies === 0) {
      return task.completed ? 100 : 0
    }

    const dependenciesProgress =
      (completedDependencies / totalDependencies) * 100
    if (dependenciesProgress === 100 && !task.completed) {
      return 99
    }
    return task.completed ? 100 : dependenciesProgress
  }

  const itemTemplate = (task) => {
    const progress = calculateProgress(task.id)

    return (
      <div className="flex justify-content-between ">
        <div>{task.title}</div>
        <div
          className="flex align-items-center"
          style={{ width: '40%' }}
        >
          <ProgressBar
            value={progress}
            style={{ height: '10px', width: '70%' }}
            showValue={false}
          />
          <span style={{ marginLeft: '10px', whiteSpace: 'nowrap' }}>
            {progress.toFixed(0)}%
          </span>
        </div>
      </div>
    )
  }

  return (
    <div>
      <ListBox
        value={highestPriorityTasks}
        options={highestPriorityTasks}
        itemTemplate={itemTemplate}
        optionLabel="title"
        style={{ width: '100%' }}
        listStyle={{ minHeight: '400px' }}
      />
    </div>
  )
}

export default HighestPriorityTasks
