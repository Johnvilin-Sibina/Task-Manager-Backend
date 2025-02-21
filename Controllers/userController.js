import Task from '../Models/taskModel.js'
import {errorHandler} from "../Utils/Error.js";


export const addTask = async (req, res, next) => {
    try {
        const { title, description, dueDate, priority, status, user } = req.body;
        console.log(title, description, dueDate, priority, status, user )

        // Check if the task already exists (title must be unique)
        const existingTask = await Task.findOne({ title });
        if (existingTask) {
            return next(errorHandler(400, "Task with this title already exists"));
        }

        // Create a new task
        const newTask = new Task({
            user,
            title,
            description,
            dueDate,
            priority,
            status,
        });

        // Save the task to the database
        await newTask.save();

        res.status(200).json({ message: "Task added successfully", newTask });
    } catch (error) {
        next(errorHandler(500, "Error adding task"));
        console.log(error)
    }
};

