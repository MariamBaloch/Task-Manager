import React, { useState, useEffect } from 'react'
import { Calendar } from 'primereact/calendar'
import { taskManager } from '../data'

function Schedule() {
  const [date, setDate] = useState(new Date())
  const [tasksForSelectedDate, setTasksForSelectedDate] = useState([])

  const markedDates = Object.values(taskManager.tasks).map(
    (task) => task.deadline
  )

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
              backgroundColor: '#2563eb',
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

  useEffect(() => {
    const tasksForDate = Object.values(taskManager.tasks).filter(
      (task) => task.deadline.toDateString() === date.toDateString()
    )
    setTasksForSelectedDate(tasksForDate)
  }, [date])

  return (
    <div style={{ display: 'flex', gap: '20px', overflow: 'hidden' }}>
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
          Tasks due{' '}
          {date.toDateString() === new Date().toDateString() ? (
            <span style={{ color: 'rgb(6, 214, 160)' }}>today</span>
          ) : (
            <span style={{ color: 'rgb(6, 214, 160)' }}>
              {date.toDateString()}
            </span>
          )}
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
