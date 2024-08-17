import './App.css'
import 'primereact/resources/themes/lara-light-blue/theme.css'
import 'primereact/resources/primereact.min.css'
import 'primeflex/primeflex.css'
import 'primeicons/primeicons.css'
import { Toolbar } from 'primereact/toolbar'

import { useState, useEffect, useContext } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import Dashboard from './Pages/Dashboard'
import NavigationBar from './Components/NavigationBar'
import TaskManager from './Pages/TaskManager'
function App() {
  const location = useLocation()
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
  return (
    <div>
      <div className="flex">
        <NavigationBar />
        <main className="flex-grow-1">
          <Toolbar center={<h2>{getTitle()}</h2>} />
          <Routes>
            <Route
              path="/"
              element={<Dashboard />}
            />
            <Route
              path="/taskmanager"
              element={<TaskManager />}
            />
          </Routes>
        </main>
      </div>
    </div>
  )
}

export default App
