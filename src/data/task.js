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

// export class Task {
//   constructor(id, title, description, priority, deadline, completed) {
//     this.id = id
//     this.title = title
//     this.description = description
//     this.priority = priority
//     this.deadline = deadline
//     this.dependencies = {}
//     this.completed = completed
//   }

//   updatePriority(newPriority) {
//     this.priority = newPriority
//   }

//   markComplete() {
//     this.completed = true
//   }

//   updateTitle(newTitle) {
//     this.title = newTitle
//   }

//   updateDescription(newDesc) {
//     this.description = newDesc
//   }

//   updateDeadline(newDeadline) {
//     this.deadline = newDeadline
//   }

//   addDependentTask(task) {
//     if (!this.dependencies[task.id]) {
//       this.dependencies[task.id] = []
//     }
//   }

//   addDependency(taskId, dependencyId) {
//     if (!this.dependencies[taskId]) {
//       this.dependencies[taskId] = []
//     }
//     if (!this.dependencies[taskId].includes(dependencyId)) {
//       this.dependencies[taskId].push(dependencyId)
//     }
//   }
//   removeDependency(taskId, dependencyId) {
//     if (this.dependencies[taskId]) {
//       this.dependencies[taskId] = this.dependencies[taskId].filter(
//         (dep) => dep !== dependencyId
//       )
//     }
//   }
//   removeDependentTask(taskId) {
//     this.dependencies[taskId].forEach((dependency) => {
//       this.removeDependency(taskId, dependency)
//     })
//     delete this.dependencies[taskId]
//   }

//   canCompleteTask(taskId, tasks) {
//     if (!this.dependencies[taskId]) return false
//     return this.dependencies[taskId].every((depId) => tasks[depId].completed)
//   }

//   markTaskComplete(taskId, tasks) {
//     if (this.canCompleteTask(taskId, tasks)) {
//       tasks[taskId].completed = true
//     } else {
//       return `Task ${taskId} cannot be completed because its dependencies are not completed.`
//     }
//   }
// }

// const taskA = new Task(1, 'Task A', 'Description A', 1, '2024-08-20')
// const taskB = new Task(2, 'Task B', 'Description B', 2, '2024-08-21')
// const taskC = new Task(3, 'Task C', 'Description C', 3, '2024-08-22')

// taskA.addDependentTask(taskA)
// taskA.addDependentTask(taskB)
// taskA.addDependentTask(taskC)

// taskA.addDependency(2, 1) // Task B depends on Task A
// taskA.addDependency(3, 2) // Task C depends on Task B

// console.log(taskA)
