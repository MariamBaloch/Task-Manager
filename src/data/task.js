export class Task {
  constructor(id, title, priority, deadline, completed = false) {
    this.id = id
    this.title = title
    this.priority = priority
    this.deadline = deadline
    this.completed = completed
  }
  markComplete() {
    this.completed = true
  }
}
