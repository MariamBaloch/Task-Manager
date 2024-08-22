export class PriorityQueue {
  constructor() {
    this.tasks = []
    this.positions = {}
  }

  enqueue(task) {
    this.tasks.push(task)

    let childIndex = this.tasks.length - 1
    let parentIndex = Math.floor((childIndex - 1) / 2)

    while (
      parentIndex >= 0 &&
      this.tasks[childIndex].priority < this.tasks[parentIndex].priority
    ) {
      ;[this.tasks[parentIndex], this.tasks[childIndex]] = [
        this.tasks[childIndex],
        this.tasks[parentIndex]
      ]
      this.positions[this.tasks[parentIndex].id] = parentIndex
      this.positions[this.tasks[childIndex].id] = childIndex
      childIndex = parentIndex
      parentIndex = Math.floor((childIndex - 1) / 2)
    }
    this.positions[task.id] = childIndex
  }

  dequeue(id) {
    id = id.toString()
    if (this.tasks.length === 0 || !(id in this.positions)) return null
    let index = this.positions[id]
    const removedTask = this.tasks[index]
    delete this.positions[removedTask.id]

    if (index === this.tasks.length - 1) {
      return this.tasks.pop()
    }

    this.tasks[index] = this.tasks.pop()
    this.positions[this.tasks[index].id] = index

    let parentIndex = index

    while (true) {
      let minIndex = parentIndex
      let leftChild = Math.floor(parentIndex * 2 + 1)
      let rightChild = Math.floor(parentIndex * 2 + 2)

      if (
        leftChild < this.tasks.length &&
        this.tasks[leftChild].priority < this.tasks[minIndex].priority
      ) {
        minIndex = leftChild
      }
      if (
        rightChild < this.tasks.length &&
        this.tasks[rightChild].priority < this.tasks[minIndex].priority
      ) {
        minIndex = rightChild
      }

      if (minIndex === parentIndex) break
      ;[this.tasks[parentIndex], this.tasks[minIndex]] = [
        this.tasks[minIndex],
        this.tasks[parentIndex]
      ]
      this.positions[this.tasks[parentIndex].id] = parentIndex
      this.positions[this.tasks[minIndex].id] = minIndex
      parentIndex = minIndex
    }
    return removedTask
  }

  peek() {
    if (this.isEmpty()) return []

    const highestPriority = this.tasks[0].priority

    const highestPriorityTasks = this.tasks.filter(
      (task) => task.priority === highestPriority
    )

    return highestPriorityTasks
  }

  isEmpty() {
    return this.tasks.length === 0
  }
}
