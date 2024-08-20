import React from 'react'
import { OrganizationChart } from 'primereact/organizationchart'
import { classNames } from 'primereact/utils'

function DependencyChart({ data }) {
  const nodeTemplate = (node) => {
    const isCompleted = node.completed
    const nodeClass = classNames('p-3', {
      'bg-teal-100': isCompleted,
      'bg-yellow-100': !isCompleted
    })

    return (
      <div
        className={nodeClass}
        style={{ textAlign: 'center', padding: '10px' }}
      >
        <div
          className="font-bolder"
          style={{ color: '#495057', marginBottom: '10px' }}
        >{`ID#  ${node.id}`}</div>
        <div className="font-bold">{node.label}</div>
        <div style={{ color: '#6c757d' }}>
          {new Date(node.deadline).toLocaleDateString()}
        </div>
      </div>
    )
  }

  const prepareData = (node) => {
    return {
      ...node,
      expanded: true,
      template: nodeTemplate(node),
      children: node.children?.map(prepareData)
    }
  }

  const processedData = data.map(prepareData)

  return (
    <div className="card overflow-x-auto">
      <OrganizationChart
        value={processedData}
        nodeTemplate={nodeTemplate}
      />
    </div>
  )
}

export default DependencyChart
