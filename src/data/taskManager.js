export class TaskManager {
  constructor(priorityQueue) {
    this.tasks = {}
    this.dependencies = {}
    this.priorityQueue = priorityQueue
  }

  addTask(task) {
    if (!this.tasks[task.id]) {
      this.tasks[task.id] = task
      this.dependencies[task.id] = []
      this.priorityQueue.enqueue(task)
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
      this.priorityQueue.dequeue(taskId)
      delete this.dependencies[taskId]
      Object.keys(this.dependencies).forEach((tid) => {
        this.dependencies[tid] = this.dependencies[tid].filter(
          (depId) => depId !== taskId
        )
      })
    }
  }

  getAllTasks() {
    return Object.values(this.tasks)
  }
  getTaskById(taskId) {
    return this.tasks[taskId] || null
  }
  getDependenciesForTask(taskId) {
    const task = this.getTaskById(taskId)
    if (!task) return []

    const dependencies = this.dependencies[taskId] || []
    return dependencies.map((depId) => this.getTaskById(depId))
  }

  markDependenciesComplete(taskId) {
    const dependencies = this.dependencies[taskId] || []
    dependencies.forEach((depId) => {
      if (!this.tasks[depId].completed) {
        this.markDependenciesComplete(depId)
        this.tasks[depId].markComplete()
        this.priorityQueue.dequeue(depId)
      }
    })
  }

  markTaskComplete(taskId) {
    this.markDependenciesComplete(taskId)
    this.tasks[taskId].markComplete()
    this.priorityQueue.dequeue(taskId)
  }

  updateTask(updatedTask) {
    if (this.tasks[updatedTask.id]) {
      this.tasks[updatedTask.id] = updatedTask
      this.priorityQueue.dequeue(updatedTask.id)
      this.priorityQueue.enqueue(updatedTask)
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

  getDueSoonTasks() {
    const today = new Date()
    const nextWeek = new Date()
    nextWeek.setDate(today.getDate() + 7)

    return Object.values(this.tasks).filter(
      (task) =>
        !task.completed && task.deadline >= today && task.deadline <= nextWeek
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
