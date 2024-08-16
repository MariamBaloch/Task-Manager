export class Task {
  constructor(id, title, description, priority, deadline, completed = false) {
    this.id = id
    this.title = title
    this.description = description
    this.priority = priority
    this.deadline = deadline
    this.completed = completed
  }

  updatePriority(newPriority) {
    this.priority = newPriority
  }

  markComplete() {
    this.completed = true
  }

  updateTitle(newTitle) {
    this.title = newTitle
  }

  updateDescription(newDesc) {
    this.description = newDesc
  }

  updateDeadline(newDeadline) {
    this.deadline = newDeadline
  }
}
