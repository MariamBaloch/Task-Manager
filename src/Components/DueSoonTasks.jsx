import React, { useEffect, useState } from 'react'
import { ListBox } from 'primereact/listbox'
import { taskManager } from '../data'

function DueSoonTasks() {
  const [dueSoonTasks, setDueSoonTasks] = useState([])

  useEffect(() => {
    const tasks = taskManager.getDueSoonTasks()
    setDueSoonTasks(tasks)
  }, [])

  const getBackgroundColor = (deadline) => {
    const today = new Date()
    const diffInTime = deadline.getTime() - today.getTime()
    const diffInDays = Math.ceil(diffInTime / (1000 * 3600 * 24))

    if (diffInDays === 0) {
      return 'rgb(242, 97, 87)'
    } else if (diffInDays > 0 && diffInDays <= 3) {
      return 'rgba(245, 191, 66)'
    } else {
      return 'rgb(6, 214, 160)'
    }
  }

  const getDueText = (deadline) => {
    const today = new Date()
    const diffInTime = deadline.getTime() - today.getTime()
    const diffInDays = Math.ceil(diffInTime / (1000 * 3600 * 24))

    if (diffInDays === 0) {
      return 'Due Today'
    } else if (diffInDays === 1) {
      return 'Due Tomorrow'
    } else {
      return `Due in ${diffInDays} days`
    }
  }

  const itemTemplate = (task) => {
    const backgroundColor = getBackgroundColor(task.deadline)
    const dueText = getDueText(task.deadline)

    return (
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          color: backgroundColor,
          borderRadius: '4px'
        }}
      >
        <span style={{ fontWeight: '600' }}>{task.title}</span>
        <span style={{ fontWeight: '600' }}>{dueText}</span>
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
        listStyle={{ maxHeight: '200px', padding: '4px', minHeight: '159px' }}
      />
    </div>
  )
}

export default DueSoonTasks
