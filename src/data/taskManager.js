export class TaskManager {
  constructor() {
    this.tasks = {}
    this.dependencies = {}
  }

  addTask(task) {
    if (!this.tasks[task.id]) {
      this.tasks[task.id] = task
      this.dependencies[task.id] = []
    }
  }

  addDependency(taskId, dependencyId) {
    if (!this.dependencies[taskId]) {
      this.dependencies[taskId] = []
    }
    if (!this.dependencies[taskId].includes(dependencyId)) {
      this.dependencies[taskId].push(dependencyId)
    }
  }

  removeDependency(taskId, dependencyId) {
    if (this.dependencies[taskId]) {
      this.dependencies[taskId] = this.dependencies[taskId].filter(
        (dep) => dep !== dependencyId
      )
    }
  }

  removeTask(taskId) {
    if (this.tasks[taskId]) {
      delete this.tasks[taskId]
      delete this.dependencies[taskId]
    }
    Object.keys(this.dependencies).forEach((tid) => {
      this.removeDependency(tid, taskId)
      if (this.dependencies[tid].length === 0) {
        this.removeTask(tid)
      }
    })
  }

  canCompleteTask(taskId) {
    if (!this.dependencies[taskId]) return false
    return this.dependencies[taskId].every(
      (depId) => this.tasks[depId].completed
    )
  }

  markTaskComplete(taskId) {
    if (this.canCompleteTask(taskId)) {
      this.tasks[taskId].markComplete()
    } else {
      return `Task ${taskId} cannot be completed because its dependencies are not completed.`
    }
  }
  updateTask(updatedTask) {
    if (this.tasks[updatedTask.id]) {
      this.tasks[updatedTask.id] = updatedTask
    }
  }
  getTasksByDeadline() {
    return Object.values(this.tasks).sort(
      (a, b) => new Date(a.deadline) - new Date(b.deadline)
    )
  }
  getOverdueTasks() {
    const now = new Date()
    return Object.values(this.tasks).filter(
      (task) => new Date(task.deadline) < now && !task.completed
    )
  }

  getTaskSummary() {
    let completed = 0
    let incomplete = 0
    Object.values(this.tasks).forEach((task) => {
      if (task.completed) {
        completed++
      } else {
        incomplete++
      }
    })
    return { completed, incomplete }
  }
}
