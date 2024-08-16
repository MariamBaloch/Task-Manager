import React, { useState, useEffect } from 'react'
import { Chart } from 'primereact/chart'
import { taskManager } from '../data'

function Overview() {
  const [chartData, setChartData] = useState({})
  const [chartOptions, setChartOptions] = useState({})

  useEffect(() => {
    const documentStyle = getComputedStyle(document.documentElement)

    const tasks = Object.values(taskManager.tasks)

    const completedTasks = tasks.filter((task) => task.completed).length
    const incompleteTasks = tasks.filter(
      (task) => !task.completed && task.deadline >= new Date()
    ).length
    const overdueTasks = tasks.filter(
      (task) => !task.completed && task.deadline < new Date()
    ).length

    const data = {
      labels: [
        `Completed (${completedTasks})`,
        `Incomplete (${incompleteTasks})`,
        `Overdue (${overdueTasks})`
      ],
      datasets: [
        {
          data: [completedTasks, incompleteTasks, overdueTasks],
          backgroundColor: [
            'rgb(6, 214, 160)',
            'rgba(239, 203, 104)',
            'rgb(242, 97, 87)'
          ],
          hoverBackgroundColor: [
            'rgb(6, 214, 160)',
            'rgba(239, 203, 104)',
            'rgb(242, 97, 87)'
          ]
        }
      ]
    }

    const options = {
      plugins: {
        legend: {
          display: true,
          position: 'right',
          labels: {
            usePointStyle: true,
            color: documentStyle.getPropertyValue('--text-color-secondary'),
            padding: 20
          }
        }
      },
      maintainAspectRatio: false
    }

    setChartData(data)
    setChartOptions(options)
  }, [])

  return (
    <div className="flex align-items-center justify-content-center">
      <Chart
        type="pie"
        data={chartData}
        options={chartOptions}
        className="w-20rem h-10rem"
      />
    </div>
  )
}

export default Overview
