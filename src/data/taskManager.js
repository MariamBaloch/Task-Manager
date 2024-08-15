export class TaskManager {
  constructor() {
    this.tasks = {} // Store tasks by their ID
    this.dependencies = {} // Store dependencies by task ID
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
    // Remove this task as a dependency from other tasks
    Object.keys(this.dependencies).forEach((tid) => {
      this.removeDependency(tid, taskId)
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
}
