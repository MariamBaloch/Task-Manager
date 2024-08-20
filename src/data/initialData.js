import { Task } from './task.js'
import { TaskManager } from './taskManager.js'
import { PriorityQueue } from './priorityQueue.js'

const priorityQueue = new PriorityQueue()
const taskManager = new TaskManager(priorityQueue)

const tasks = [
  new Task(1, 'Design Database Schema', 1, new Date(2024, 6, 15)),
  new Task(2, 'Set up Backend', 2, new Date(2024, 7, 15)),
  new Task(3, 'Create API Endpoints', 3, new Date(2024, 7, 17)),
  new Task(4, 'Implement User Authentication', 1, new Date(2024, 7, 18)),
  new Task(5, 'Build Frontend Layout', 2, new Date(2024, 7, 18)),
  new Task(6, 'Integrate Frontend with Backend', 1, new Date(2024, 8, 5)),
  new Task(7, 'Write Unit Tests', 3, new Date(2024, 8, 5)),
  new Task(8, 'Optimize Performance', 2, new Date(2024, 8, 10)),
  new Task(9, 'Prepare Documentation', 3, new Date(2024, 8, 10)),
  new Task(10, 'Deploy Application', 1, new Date(2024, 7, 24)),
  new Task(11, 'Code Review', 2, new Date(2024, 7, 25)),
  new Task(12, 'Create Testing Plan', 3, new Date(2024, 7, 26)),
  new Task(13, 'Setup CI/CD Pipeline', 1, new Date(2024, 7, 27)),
  new Task(14, 'Conduct Security Audit', 2, new Date(2024, 7, 28)),
  new Task(15, 'Launch Product', 1, new Date(2024, 7, 29)),
  new Task(16, 'Fix Critical Bugs', 1, new Date(2024, 7, 1)),
  new Task(17, 'Update Dependencies', 2, new Date(2024, 7, 5))
]

tasks.forEach((task) => {
  taskManager.addTask(task)
})

taskManager.addDependency(3, 1)
taskManager.addDependency(4, 2)
taskManager.addDependency(6, 5)
taskManager.addDependency(10, 7)
taskManager.addDependency(10, 8)
taskManager.addDependency(15, 13)
taskManager.addDependency(15, 14)
taskManager.markTaskComplete(1)
taskManager.markTaskComplete(2)
taskManager.markTaskComplete(5)
taskManager.markTaskComplete(7)

export { taskManager, priorityQueue }
