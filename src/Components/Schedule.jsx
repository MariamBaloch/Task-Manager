import React, { useState, useEffect } from 'react'
import { Calendar } from 'primereact/calendar'

function Schedule() {
  const [date, setDate] = useState(new Date())

  const tasks = [
    { id: 1, title: 'Task 1', date: new Date(2024, 7, 15) },
    { id: 2, title: 'Task 2', date: new Date(2024, 7, 15) },
    { id: 3, title: 'Task 3', date: new Date(2024, 7, 18) }
  ]

  const markedDates = [
    new Date(2024, 7, 15),
    new Date(2024, 7, 18),
    new Date(2024, 7, 22)
  ]

  const dateTemplate = (date) => {
    const isMarked = markedDates.some(
      (markedDate) =>
        markedDate.getDate() === date.day &&
        markedDate.getMonth() === date.month &&
        markedDate.getFullYear() === date.year
    )

    return (
      <div style={{ position: 'relative' }}>
        {date.day}
        {isMarked && (
          <span
            style={{
              position: 'absolute',
              width: '4px',
              height: '4px',
              backgroundColor: 'blue',
              borderRadius: '50%',
              bottom: '-5px',
              left: '50%',
              transform: 'translateX(-50%)'
            }}
          ></span>
        )}
      </div>
    )
  }

  const tasksForSelectedDate = tasks.filter(
    (task) => task.date.toDateString() === date.toDateString()
  )

  return (
    <div style={{ display: 'flex', gap: '20px' }}>
      <div>
        <Calendar
          value={date}
          onChange={(e) => setDate(e.value)}
          inline
          dateTemplate={dateTemplate}
        />
      </div>
      <div style={{ flex: 1 }}>
        <h3>
          Tasks for{' '}
          {date.toDateString() === new Date().toDateString()
            ? 'today'
            : date.toLocaleDateString()}
        </h3>
        <ul>
          {tasksForSelectedDate.length > 0 ? (
            tasksForSelectedDate.map((task) => (
              <li key={task.id}>{task.title}</li>
            ))
          ) : (
            <li>No tasks on this date</li>
          )}
        </ul>
      </div>
    </div>
  )
}

export default Schedule
