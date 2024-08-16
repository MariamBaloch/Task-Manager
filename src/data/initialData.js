import { Task } from './task'
import { TaskManager } from './taskManager'
import { PriorityQueue } from './priorityQueue'

const taskManager = new TaskManager()
const priorityQueue = new PriorityQueue()

const tasks = [
  new Task(
    1,
    'Design Database Schema',
    'Design the initial database schema',
    1,
    new Date(2024, 7, 15)
  ),
  new Task(
    2,
    'Set up Backend',
    'Set up the backend with Node.js and Express',
    2,
    new Date(2024, 7, 16)
  ),
  new Task(
    3,
    'Create API Endpoints',
    'Create RESTful API endpoints',
    3,
    new Date(2024, 7, 17)
  ),
  new Task(
    4,
    'Implement User Authentication',
    'Implement user login and registration',
    1,
    new Date(2024, 7, 18)
  ),
  new Task(
    5,
    'Build Frontend Layout',
    'Design the layout using React and PrimeReact',
    2,
    new Date(2024, 7, 19)
  ),
  new Task(
    6,
    'Integrate Frontend with Backend',
    'Connect the frontend with backend API',
    1,
    new Date(2024, 7, 20)
  ),
  new Task(
    7,
    'Write Unit Tests',
    'Write unit tests for the backend services',
    3,
    new Date(2024, 7, 21)
  ),
  new Task(
    8,
    'Optimize Performance',
    'Optimize the application for better performance',
    2,
    new Date(2024, 7, 22)
  ),
  new Task(
    9,
    'Prepare Documentation',
    'Prepare documentation for the project',
    3,
    new Date(2024, 7, 23)
  ),
  new Task(
    10,
    'Deploy Application',
    'Deploy the application to the production server',
    1,
    new Date(2024, 7, 24)
  ),
  new Task(
    11,
    'Code Review',
    'Review code for best practices',
    2,
    new Date(2024, 7, 25)
  ),
  new Task(
    12,
    'Create Testing Plan',
    'Create a testing plan for QA',
    3,
    new Date(2024, 7, 26)
  ),
  new Task(
    13,
    'Setup CI/CD Pipeline',
    'Set up Continuous Integration and Deployment pipeline',
    1,
    new Date(2024, 7, 27)
  ),
  new Task(
    14,
    'Conduct Security Audit',
    'Perform a security audit of the application',
    2,
    new Date(2024, 7, 28)
  ),
  new Task(
    15,
    'Launch Product',
    'Launch the product to the market',
    1,
    new Date(2024, 7, 29)
  )
]

tasks.forEach((task) => {
  taskManager.addTask(task)
  priorityQueue.enqueue(task)
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

export { taskManager, priorityQueue }
