export class Task {
  constructor(
    id,
    title,
    description,
    priority,
    deadline,
    dependencies,
    completed
  ) {
    this.id = id
    this.title = title
    this.description = description
    this.priority = priority
    this.deadline = deadline
    this.dependencies = dependencies
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

  addDependency(taskId) {
    if (!this.dependencies.includes(taskId)) {
      this.dependencies.push(taskId)
    }
  }

  removeDependency(taskId) {
    this.dependencies = this.dependencies.filter((dep) => dep !== taskId)
  }
}
