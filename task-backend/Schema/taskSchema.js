import mongoose from "mongoose";

const TaskSchema = new mongoose.Schema({

    title:{
        type:String,
        required:true,
        trim:true
    },
    description:{
        type:String,
        required:true,

    },
    status:{
        type:String,
        required:true,
    },

    priority: {
        type:String,
        required:true,
        },

   createdAt: {
    type:String,
    required:true,
            }

})

const Task = mongoose.model("taskdetails",TaskSchema);

export {Task}