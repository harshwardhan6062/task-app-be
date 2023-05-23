import { nanoid } from 'nanoid'

var taskList = [
    { id: nanoid(), title: `walk the dog`, isDone: false },
    { id: nanoid(), title: `wash dishes`, isDone: false},
    { id: nanoid(), title: `drink coffee`, isDone: true },
    { id: nanoid(), title: `take a nap`, isDone: false }
]

export default taskList