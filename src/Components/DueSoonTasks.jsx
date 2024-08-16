import React, { useEffect, useState } from 'react'
import { ListBox } from 'primereact/listbox'
import { taskManager } from '../data'

function DueSoonTasks() {
  const [dueSoonTasks, setDueSoonTasks] = useState([])

  useEffect(() => {
    const today = new Date()
    const nextWeek = new Date()
    nextWeek.setDate(today.getDate() + 7)

    const tasks = Object.values(taskManager.tasks).filter(
      (task) => task.deadline >= today && task.deadline <= nextWeek
    )

    setDueSoonTasks(tasks)
  }, [])

  const itemTemplate = (task) => {
    return (
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <span>{task.title}</span>
        <span>{task.deadline.toDateString()}</span>
      </div>
    )
  }

  return (
    <div>
      <ListBox
        value={dueSoonTasks}
        options={dueSoonTasks}
        optionLabel="title"
        itemTemplate={itemTemplate}
        style={{ width: '100%' }}
        listStyle={{ maxHeight: '200px' }}
      />
    </div>
  )
}

export default DueSoonTasks
