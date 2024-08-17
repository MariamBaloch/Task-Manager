import React from 'react'
import { Panel } from 'primereact/panel'
import HighestPriorityTasks from '../Components/HighestPriorityTasks'
import DueSoonTasks from '../Components/DueSoonTasks'
import Schedule from '../Components/Schedule'
import Overview from '../Components/Overview'

function Dashboard() {
  return (
    <div className=" mt-5 mx-8">
      <div className="flex flex-wrap justify-content-between">
        <div className="w-7 p-2">
          <Panel header="Schedule">
            <Schedule />
          </Panel>
        </div>
        <div className="w-5 p-2">
          <Panel header="Highest Priority Tasks">
            <HighestPriorityTasks />
          </Panel>
        </div>
        <div className="w-7 p-2">
          <Panel header="Tasks Due Soon">
            <DueSoonTasks />
          </Panel>
        </div>
        <div className="w-5 p-2">
          <Panel header="Tasks Overview">
            <Overview />
          </Panel>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
