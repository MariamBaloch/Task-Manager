import React from 'react'
import { Panel } from 'primereact/panel'
import HighestPriorityTasks from '../Components/HighestPriorityTasks'
import DueSoonTasks from '../Components/DueSoonTasks'
import Schedule from '../Components/Schedule'
import Chart from '../Components/Chart'

function Dashboard() {
  return (
    <div class="grid m-5">
      <div class="col-6">
        <Panel header="Highest Priority Tasks">
          <HighestPriorityTasks />
        </Panel>
      </div>
      <div class="col-6">
        <Schedule />
      </div>
      <div class="col-6">
        <Panel header="Tasks Due Soon">
          <DueSoonTasks />
        </Panel>
      </div>
      <div class="col-6">
        <Panel header="Tasks Overview">
          <Chart />
        </Panel>
      </div>
    </div>
  )
}

export default Dashboard
