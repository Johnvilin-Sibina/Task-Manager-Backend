import mongoose from 'mongoose'

const taskSchema = mongoose.Schema(
    {
        user:{
            type:mongoose.Schema.Types.ObjectId,
            ref:'User',
            require:true
        },
        title:{
            type:String,
            required:true,
            trim:true,
            unique:true
        },
        description:{
            type:String,
            required:true,
            trim:true,
            unique:true
        },
        dueDate:{
            type:Date
        },
        priority:{
            type:String,
            trim:true,
            enum:["Low","Medium","High"],
            default:"Medium"
        },
        status:{
            type:String,
            trim:true,
            enum:["Pending","In Progress","Completed"],
            default:"Pending"
        }
    },
    {timestamps:true}
)

const Task = mongoose.model('Task',taskSchema)
export default Task