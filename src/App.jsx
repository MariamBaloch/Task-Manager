import './App.css'
import 'primereact/resources/themes/lara-light-indigo/theme.css'
import 'primereact/resources/primereact.min.css'
import 'primeflex/primeflex.css'
import 'primeicons/primeicons.css'

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
      <NavigationBar title={getTitle()} />
      <main>
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
  )
}

export default App
