import React from 'react'
import { ListBox } from 'primereact/listbox'

function HighestPriorityTasks() {
  const tasks = [
    { id: 1, title: 'Task 1' },
    { id: 2, title: 'Task 2' }
  ]

  return (
    <div>
      <p>aaa</p>
      <ListBox
        options={tasks}
        optionLabel="title"
        style={{ width: '100%' }}
        listStyle={{ maxHeight: '200px' }}
      />
    </div>
  )
}

export default HighestPriorityTasks
