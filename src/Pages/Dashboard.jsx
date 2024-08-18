import React from 'react'
import { Panel } from 'primereact/panel'
import HighestPriorityTasks from '../Components/HighestPriorityTasks'
import Schedule from '../Components/Schedule'
import Overview from '../Components/Overview'

function Dashboard() {
  const headerTemplate = (options, icon, title) => {
    const className = `${options.className} justify-content-space-between`

    return (
      <div
        className={className}
        style={{ padding: '0.8rem 1rem', alignItems: 'center' }}
      >
        <div className="flex align-items-center gap-2">
          <i
            className={`pi ${icon}`}
            style={{ fontSize: '1.5rem' }}
          ></i>
          <span className="font-bold">{title}</span>
        </div>
      </div>
    )
  }

  return (
    <div className="mt-3 mx-8 max-w-min">
      <div className="flex flex-wrap justify-content-between">
        <div className="p-2">
          <Panel
            headerTemplate={(options) =>
              headerTemplate(options, 'pi-chart-pie', 'Tasks Overview')
            }
          >
            <Overview />
          </Panel>
        </div>
        <div className="w-7 p-2">
          <Panel
            headerTemplate={(options) =>
              headerTemplate(options, 'pi-calendar', 'Schedule')
            }
          >
            <Schedule />
          </Panel>
        </div>
        <div className="w-5 p-2">
          <Panel
            headerTemplate={(options) =>
              headerTemplate(
                options,
                'pi-exclamation-circle',
                'Highest Priority Tasks'
              )
            }
          >
            <HighestPriorityTasks />
          </Panel>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
