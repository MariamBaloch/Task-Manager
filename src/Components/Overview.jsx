import React, { useState, useEffect } from 'react'
import { Chart } from 'primereact/chart'
import { Card } from 'primereact/card'
import { taskManager } from '../data'

function Overview() {
  const [chartData, setChartData] = useState({})
  const [chartOptions, setChartOptions] = useState({})
  const [taskCounts, setTaskCounts] = useState({
    allTasks: 0,
    incompleteTasks: 0,
    overdueTasks: 0
  })

  useEffect(() => {
    const { completed, incomplete } = taskManager.getTaskSummary()
    const overdueTasks = taskManager.getOverdueTasks().length
    const allTasks = Object.keys(taskManager.tasks).length

    setTaskCounts({
      allTasks,
      incompleteTasks: incomplete,
      overdueTasks
    })

    const data = {
      labels: [`Completed `, `Incomplete `, `Overdue `],
      datasets: [
        {
          data: [completed, incomplete, overdueTasks],
          backgroundColor: [
            'rgb(6, 214, 160)',
            'rgba(239, 203, 104)',
            'rgb(242, 97, 87)'
          ],
          hoverBackgroundColor: [
            'rgba(6, 214, 160, 0.8)',
            'rgba(239, 203, 104, 0.8)',
            'rgba(242, 97, 87, 0.8)'
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
            padding: 20
          }
        }
      },
      maintainAspectRatio: false
    }

    setChartData(data)
    setChartOptions(options)
  }, [])

  const renderCard = (title, count, icon, color) => (
    <Card
      style={{
        display: 'flex',
        alignItems: 'center',
        minWidth: '280px',
        maxHeight: '150px',
        borderRadius: '40px'
      }}
    >
      <div className="flex">
        <div
          style={{
            backgroundColor: color,
            borderRadius: '50%',
            width: '3.5em',
            height: '3.5em',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginRight: '1rem'
          }}
        >
          <i
            className={icon}
            style={{ fontSize: '2em', color: '#fff' }}
          ></i>
        </div>
        <div>
          <div style={{ fontSize: '1.4em', color, marginBottom: '10px' }}>
            {count}
          </div>
          <div style={{ fontSize: '1em', color: '#666' }}>{title}</div>
        </div>
      </div>
    </Card>
  )

  return (
    <div className="flex flex-row justify-content-between ">
      <div className="flex flex-row gap-4 align-items-center mr-8">
        {renderCard(
          'All Tasks',
          taskCounts.allTasks,
          'pi pi-briefcase',
          'rgb(6, 214, 160)'
        )}
        {renderCard(
          'Incomplete Tasks',
          taskCounts.incompleteTasks,
          'pi pi-exclamation-circle',
          'rgba(239, 203, 104)'
        )}
        {renderCard(
          'Overdue Tasks',
          taskCounts.overdueTasks,
          'pi pi-times-circle',
          'rgb(242, 97, 87)'
        )}
      </div>

      <div className="flex justify-content-center align-items-center w-full md:w-auto">
        <Chart
          type="pie"
          data={chartData}
          options={chartOptions}
          className="w-full md:w-20rem md:h-11rem"
        />
      </div>
    </div>
  )
}

export default Overview
