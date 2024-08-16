import React from 'react'
import { Panel } from 'primereact/panel'
import HighestPriorityTasks from '../Components/HighestPriorityTasks'
import DueSoonTasks from '../Components/DueSoonTasks'
import Schedule from '../Components/Schedule'
import Overview from '../Components/Overview'

function Dashboard() {
  return (
    <div className="flex justify-content-center align-items-center mt-5">
      <div
        className="grid"
        style={{ maxWidth: '1300px' }}
      >
        <div className="col-7">
          <Panel header="Schedule">
            <Schedule />
          </Panel>
        </div>
        <div className="col-5">
          <Panel header="Highest Priority Tasks">
            <HighestPriorityTasks />
          </Panel>
        </div>
        <div className="col-7">
          <Panel header="Tasks Due Soon">
            <DueSoonTasks />
          </Panel>
        </div>
        <div className="col-5">
          <Panel header="Tasks Overview">
            <Overview />
          </Panel>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
