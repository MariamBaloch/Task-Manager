import React, { useState, useEffect } from 'react'
import { Toolbar } from 'primereact/toolbar'
import { Dialog } from 'primereact/dialog'
import { Button } from 'primereact/button'
import { Badge } from 'primereact/badge'
import { Route, Routes, useLocation } from 'react-router-dom'
import Dashboard from './Pages/Dashboard'
import { taskManager } from './data'
import NavigationBar from './Components/NavigationBar'
import ManageTasks from './Pages/ManageTasks'
import DueSoonTasks from './Components/DueSoonTasks'
import AddTaskForm from './Components/AddTaskForm'
import 'primereact/resources/themes/lara-light-green/theme.css'
import 'primereact/resources/primereact.min.css'
import 'primeflex/primeflex.css'
import 'primeicons/primeicons.css'
import './App.css'

function App() {
  const [visible, setVisible] = useState(false)
  const [addTaskVisible, setAddTaskVisible] = useState(false)
  const [dueTasksCount, setDueTasksCount] = useState(0)
  const location = useLocation()

  useEffect(() => {
    const tasks = taskManager.getDueSoonTasks()
    setDueTasksCount(tasks.length)
  }, [])

  const getTitle = () => {
    switch (location.pathname) {
      case '/':
        return 'Dashboard'
      case '/taskmanager':
        return 'Task Manager'
      default:
        return 'Task Manager'
    }
  }

  const rightContent = (
    <div style={{ position: 'relative' }}>
      <Button
        className="p-button-rounded p-button-text"
        style={{ fontSize: '1.9rem', color: '#10b981' }}
        onClick={() => setAddTaskVisible(true)}
        aria-label="Add Task"
      >
        <i
          className="pi pi-plus-circle"
          style={{ fontSize: '1.9rem' }}
        ></i>
      </Button>
      <Button
        className="p-button-rounded p-button-text"
        style={{ fontSize: '1.9rem', color: '#10b981' }}
        onClick={() => setVisible(true)}
        aria-label="Notifications"
      >
        <i
          className="pi pi-bell p-overlay-badge"
          style={{ fontSize: '1.8rem' }}
        >
          <Badge
            value={dueTasksCount}
            severity="danger"
          ></Badge>
        </i>
      </Button>
    </div>
  )

  return (
    <div>
      <div className="flex">
        <NavigationBar />
        <main className="flex-grow-1">
          <Toolbar
            center={
              <h2 style={{ color: '#10b981', margin: '0px' }}>{getTitle()}</h2>
            }
            right={rightContent}
          />
          <Routes>
            <Route
              path="/"
              element={<Dashboard />}
            />
            <Route
              path="/taskmanager"
              element={<ManageTasks />}
            />
          </Routes>
        </main>
      </div>

      <Dialog
        header="Tasks Due Soon"
        visible={visible}
        style={{
          width: '400px',
          top: '80px',
          right: '40px',
          position: 'absolute'
        }}
        onHide={() => setVisible(false)}
      >
        <DueSoonTasks />
      </Dialog>

      <Dialog
        header="Add New Task"
        visible={addTaskVisible}
        style={{
          width: '400px',
          top: '80px',
          right: '40px',
          position: 'absolute'
        }}
        onHide={() => setAddTaskVisible(false)}
      >
        <AddTaskForm onClose={() => setAddTaskVisible(false)} />
      </Dialog>
    </div>
  )
}

export default App
