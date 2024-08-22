import React from 'react'
import { Dialog } from 'primereact/dialog'
import { Button } from 'primereact/button'
import { Calendar } from 'primereact/calendar'
import { Dropdown } from 'primereact/dropdown'
import { InputText } from 'primereact/inputtext'

function EditDialog({
  visible,
  onHide,
  title,
  setTitle,
  deadline,
  setDeadline,
  priority,
  setPriority,
  priorities,
  completed,
  setCompleted,
  statuses,
  onSave
}) {
  return (
    <Dialog
      visible={visible}
      onHide={onHide}
      header="Edit Task"
      style={{ width: '30vw' }}
      footer={
        <div>
          <Button
            label="Cancel"
            icon="pi pi-times"
            className="p-button-text"
            onClick={onHide}
          />
          <Button
            label="Save"
            icon="pi pi-check"
            className="p-button-text"
            onClick={onSave}
          />
        </div>
      }
    >
      <div className="p-fluid">
        <div className="field">
          <label htmlFor="title">Title</label>
          <InputText
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            type="text"
          />
        </div>

        <div className="field">
          <label htmlFor="deadline">Deadline</label>
          <Calendar
            id="deadline"
            value={deadline}
            onChange={(e) => setDeadline(e.value)}
            dateFormat="yy-mm-dd"
          />
        </div>

        <div className="field">
          <label htmlFor="priority">Priority</label>
          <Dropdown
            id="priority"
            value={priority}
            options={priorities}
            onChange={(e) => setPriority(e.value)}
          />
        </div>

        <div className="field">
          <label htmlFor="completed">Status</label>
          <Dropdown
            id="completed"
            value={completed}
            options={statuses}
            onChange={(e) => setCompleted(e.value)}
          />
        </div>
      </div>
    </Dialog>
  )
}

export default EditDialog
