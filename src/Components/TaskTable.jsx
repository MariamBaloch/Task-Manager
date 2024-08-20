import React, { useState, useEffect } from 'react'
import { DataTable } from 'primereact/datatable'
import { Column } from 'primereact/column'
import { Dropdown } from 'primereact/dropdown'
import { Tag } from 'primereact/tag'
import { Button } from 'primereact/button'
import { Calendar } from 'primereact/calendar'
import { Dialog } from 'primereact/dialog'
import { classNames } from 'primereact/utils'
import { FilterMatchMode, FilterOperator } from 'primereact/api'
import DependencyChart from './DependencyChart'
import { taskManager } from '../data'

function TaskTable() {
  const [tasks, setTasks] = useState()
  useEffect(() => {
    setTasks(taskManager.getAllTasks())
  }, [])

  const [statuses] = useState([
    { label: 'Completed', value: true },
    { label: 'Incomplete', value: false }
  ])

  const [priorities] = useState([
    { label: 'Critical', value: 1 },
    { label: 'High', value: 2 },
    { label: 'Medium', value: 3 },
    { label: 'Low', value: 4 },
    { label: 'Minimal', value: 5 }
  ])

  const [filters, setFilters] = useState({
    title: {
      value: null,
      matchMode: FilterMatchMode.STARTS_WITH
    },
    completed: { value: null, matchMode: FilterMatchMode.EQUALS },
    deadline: {
      operator: FilterOperator.AND,
      constraints: [{ value: null, matchMode: FilterMatchMode.DATE_IS }]
    },
    priority: { value: null, matchMode: FilterMatchMode.EQUALS }
  })

  const [showDependencyModal, setShowDependencyModal] = useState(false)
  const [selectedTask, setSelectedTask] = useState(null)

  const getPrioritySeverity = (priority) => {
    switch (priority) {
      case 1:
        return 'danger'
      case 2:
        return 'warning'
      case 3:
        return 'info'
      case 4:
        return 'success'
      case 5:
        return 'success'
      default:
        return null
    }
  }

  const statusBodyTemplate = (rowData) => {
    const statusClassName = classNames(
      'border-circle w-1rem h-1rem inline-flex mx-5',
      {
        'bg-green-500': rowData.completed,
        'bg-yellow-400': !rowData.completed
      }
    )

    return <div className={statusClassName}></div>
  }

  const priorityBodyTemplate = (rowData) => {
    const priorityMap = {
      1: 'Critical',
      2: 'High',
      3: 'Medium',
      4: 'Low',
      5: 'Minimal'
    }

    return (
      <div style={{ textAlign: 'center', width: '70%' }}>
        <Tag
          value={priorityMap[rowData.priority]}
          severity={getPrioritySeverity(rowData.priority)}
        />
      </div>
    )
  }

  const deadlineBodyTemplate = (rowData) => {
    const date = new Date(rowData.deadline)
    return (
      <div style={{ textAlign: 'center', width: '70%' }}>
        {date.toLocaleDateString()}
      </div>
    )
  }

  const actionsBodyTemplate = (rowData) => {
    return (
      <div className="flex justify-content-center gap-2">
        <Button
          type="button"
          icon="pi pi-sitemap"
          className="p-button-sm p-button-text text-yellow-600"
          onClick={() => showDependencies(rowData)}
        />
        <Button
          icon="pi pi-check"
          type="button"
          className="p-button-sm p-button-text"
          onClick={() => handleCompleteTask(rowData.id)}
        />
        <Button
          type="button"
          icon="pi pi-pencil"
          className="p-button-sm p-button-text text-cyan-600"
          onClick={() => onEdit(rowData)}
        />
        <Button
          icon="pi pi-trash"
          type="button"
          className="p-button-sm p-button-text text-red-600"
          onClick={() => handleDeleteTask(rowData.id)}
        />
      </div>
    )
  }

  const statusFilterTemplate = (options) => {
    return (
      <Dropdown
        value={options.value}
        options={statuses}
        onChange={(e) => options.filterApplyCallback(e.value, options.index)}
        showClear
      />
    )
  }

  const deadlineFilterTemplate = (options) => {
    return (
      <Calendar
        value={options.value}
        onChange={(e) => options.filterApplyCallback(e.value, options.index)}
        dateFormat="yy-mm-dd"
        showButtonBar
      />
    )
  }

  const priorityFilterTemplate = (options) => {
    return (
      <Dropdown
        value={options.value}
        options={priorities}
        onChange={(e) => options.filterApplyCallback(e.value, options.index)}
        showClear
      />
    )
  }

  const showDependencies = (task) => {
    setSelectedTask(task)
    setShowDependencyModal(true)
  }

  const generateHierarchyData = (taskId) => {
    const task = taskManager.getTaskById(taskId)
    if (!task) return null

    const children = taskManager
      .getDependenciesForTask(taskId)
      .map((dep) => generateHierarchyData(dep.id))

    return {
      id: task.id,
      label: task.title,
      deadline: task.deadline,
      completed: task.completed,
      children
    }
  }

  const renderDependencyModal = () => {
    if (!selectedTask) return null

    const hierarchyData = [generateHierarchyData(selectedTask.id)]

    return (
      <Dialog
        visible={showDependencyModal}
        onHide={() => setShowDependencyModal(false)}
        header="Task Dependencies"
        style={{ width: '50vw', textAlign: 'center' }}
      >
        <DependencyChart data={hierarchyData} />
      </Dialog>
    )
  }

  const handleCompleteTask = (taskId) => {
    taskManager.markTaskComplete(taskId)
    setFilters({ ...filters })
  }
  const handleDeleteTask = (taskId) => {
    taskManager.removeTask(taskId)
    setTasks(taskManager.getAllTasks())
  }

  return (
    tasks && (
      <div className="card p-fluid">
        <DataTable
          value={tasks}
          paginator
          rows={9}
          filters={filters}
          filterDisplay="row"
          onFilter={(e) => setFilters(e.filters)}
          dataKey="id"
          tableStyle={{ minWidth: '50rem' }}
        >
          <Column
            field="id"
            header="ID"
            style={{ width: '5%' }}
          ></Column>
          <Column
            field="title"
            header="Title"
            filter
            style={{ width: '20%' }}
          ></Column>
          <Column
            field="completed"
            header="Status"
            body={statusBodyTemplate}
            filter
            filterElement={statusFilterTemplate}
            style={{ width: '1%' }}
          ></Column>
          <Column
            field="deadline"
            header="Deadline"
            body={deadlineBodyTemplate}
            filter
            filterElement={deadlineFilterTemplate}
            style={{ width: '20%' }}
          ></Column>
          <Column
            field="priority"
            header="Priority"
            body={priorityBodyTemplate}
            filter
            filterElement={priorityFilterTemplate}
            style={{ width: '20%' }}
          ></Column>
          <Column
            body={actionsBodyTemplate}
            headerStyle={{ width: '5%', minWidth: '8rem' }}
            bodyStyle={{ textAlign: 'center' }}
          ></Column>
        </DataTable>
        {renderDependencyModal()}
      </div>
    )
  )
}

export default TaskTable
