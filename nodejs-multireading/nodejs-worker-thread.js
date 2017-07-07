
const Worker = require('webworker-threads').Worker;

const threadOne = new Worker(() => {
  for (let i = 0; i < 10; i++) {
    console.log("Thread 1: " + i)
	}
})

const threadTwo = new Worker(() => {
  for (let i = 0; i < 10; i++) {
    console.log("Thread 2: " + i)
  }
})