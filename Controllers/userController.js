import Task from '../Models/taskModel.js'
import {errorHandler} from "../Utils/Error.js";


export const addTask = async (req, res, next) => {
    try {
        const { title, description, dueDate, priority, status, user } = req.body;

        console.log(title, description, dueDate, priority, status, user )

        if(!title || !description || !dueDate || !priority || !status || !user){
            return next(errorHandler(400,'Some credentials are missing'))
        }

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

export const getTasks = async(req,res,next)=>{
    const {id} = req.params
    
    try {
        const tasks = await Task.find({ user: id })
        console.log(tasks)
     if(!tasks || tasks.length === 0){
        return next(errorHandler(400,'There are no tasks to be displayed. Please add a task.'))
     }
     else{
        res.status(200).json({message:'Tasks fetched successfully.',tasks})
     }
    } catch (error) {
        console.log(error)
        return next(errorHandler(500,'Something went wrong. Cannot fetch tasks'))
    }

}

export const deleteTask = async(req,res,next)=>{
    const {id} = req.params

    if(!id){
        next(errorHandler(400,'Id is missing cannot delete task'))
    }
    
     try {
        const deletedtasks = await Task.findByIdAndDelete(id)

     res.status(200).json({message:"Task deleted successfully"})
     } catch (error) {
        next(errorHandler(500,'Something went wrong. Could not delete task'))
     }
}

export const getTask = async(req,res,next)=>{
    const {id} = req.params
    if(!id){
        return next(errorHandler(401,'Task ID is missing'))
    }
    try {
        const task = await Task.findById(id)
        if(!task){
            return next(errorHandler(401,'Task not found'))
        }
        res.status(200).json({message:"Task fetched successfully",task})
    } catch (error) {
        next(errorHandler(500,'Something went wrong. Cannot fetch task'))
        console.log(error)
    }
}

export const editTask = async (req, res, next) => {
    const { id } = req.params;
    const { title, description, dueDate, priority, status } = req.body;

    if (!id) {
        return next(errorHandler(401, 'Task ID is missing'));
    }

    try {
        const updatedTask = await Task.findByIdAndUpdate(
            id,
            { title, description, dueDate, priority, status },
            { new: true, runValidators: true }
        );

        if (!updatedTask) {
            return next(errorHandler(404, 'Task not found'));
        }

        res.status(200).json({
            message: 'Task updated successfully',
            task: updatedTask,
        });
    } catch (error) {
        next(errorHandler(500, 'Something went wrong. Cannot update task.'));
    }
};
