import { Router } from "express";
import { Task } from "../Schema/taskSchema.js";
import mongoose, { trusted } from "mongoose";

const userRoute = Router();


mongoose.connect("mongodb://localhost:27017/TaskManagement")


userRoute.post("/addTask",async(req,res)=>{

    const {title,description,status,priority,createdAt} = req.body

    const result = await Task.findOne({title:title})
try {
    if(result){
        res.status(403).json({message:"task Already exist"})
    }else{
        const newTask = new Task({
            title:title,
            description:description,
            status:status,
            priority:priority,
            createdAt:createdAt
        })
        await newTask.save();

        res.status(200).json({message:"Task Added"})
    }
} catch (error) {
    res.status(500).json({message:error})
    console.log(error);
    
}

})


userRoute.get("/getTask",async(req,res)=>{

    const result = await Task.find();
    try {
        if(result){
            res.status(200).json(result)
        }else{
            res.status(404).json("no task Added")
        }
    } catch (error) {
        res.status(500).json({message:error})

    }
})

//get atask
userRoute.get("/getTask/:id",async(req,res)=>{

    const {id} = req.params
    const result = await Task.findById(id)
    try {
        if(result){
            res.status(200).json(result)
        }else{
            res.status(404).json("no task Added")
        }
    } catch (error) {
        res.status(500).json({message:error})

    }
})
userRoute.put("/updateTask/:id", async(req,res)=>{

    const {id} = req.params;
    console.log(id);
    
    const {title,description,status,priority,createdAt} = req.body

    const result = await Task.findById(id)

   try {
    if(result){
        result.title = title || result.title;
        result.description = description || result.description;
        result.status = status || result.status;
        result.priority = priority || result.priority;
        result.createdAt = createdAt || result.createdAt
    }
    await result.save();
    res.status(200).json(result)
   } catch (error) {
    res.status(500).json({message:error})

   }

})






export { userRoute}