import express from 'express'
import { nanoid } from 'nanoid'
import taskList from './tasks.js'
import cors from 'cors'

const app = express()

app.use(express.json())
app.use(cors())
app.get('/', (req, res) => {
    res.send(`<h1>Hello from Server...<h1>`)
})

app.get('/api/tasks', (req, res) => {
    res.json({ taskList })
})

app.post('/api/tasks', (req, res) => {

    const { title } = req.body
    if(!title) {
        res.status(400).json({ msg: `Please provide title` })
        return
    }
    const newTask = { id: nanoid(), title, isDone: false }
    taskList.push(newTask)
    res.json({ task :newTask })
})

app.patch('/api/tasks/:id', (req, res) => {
    const { id } = req.params
    const { isDone } = req.body
    taskList = taskList.map((task) => {
        if(task.id == id) {
            return { ...task, isDone }
        }
        return task
    })
    res.json({ msg: `task updated` })
})

app.delete('/api/tasks/:id', (req, res) => {
    const { id } = req.params
    taskList = taskList.filter((taks) => task.id != id)
    res.json({ msg: `task removed` })
})

app.use((req, res) => {
    res.status(404).send(`Route does not exist`)
})

const port = 5001

const startApp = () => {
    try {
        app.listen(port, () => {
            console.log(`Server is listening on port ${port}...`)
        })
    } catch (e) {
        console.log(e)
        process.exit(1)
    }
}

startApp()
