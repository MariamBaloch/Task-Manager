export class Task {
  constructor(id, title, priority, deadline, completed = false) {
    this.id = id
    this.title = title
 
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

  updateDeadline(newDeadline) {
    this.deadline = newDeadline
  }
}
