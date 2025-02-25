import express from 'express'
import { addTask, deleteTask, editTask, getTask, getTasks } from '../Controllers/userController.js'
import { verifyToken } from '../Middleware/verifyToken.js'

const router = express.Router()

router.post('/add-task',verifyToken,addTask)
router.get('/get-tasks/:id',verifyToken,getTasks)
router.delete('/delete-task/:id',verifyToken,deleteTask)
router.put('/edit-task/:id',verifyToken,editTask)
router.get('/get-task/:id',verifyToken,getTask)

export default router