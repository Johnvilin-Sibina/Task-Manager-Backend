import express from 'express'
import { addTask } from '../Controllers/userController.js'

const router = express.Router()

router.post('/add-task',addTask)

export default router