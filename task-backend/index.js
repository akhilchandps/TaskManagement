import express,{json} from 'express';
import cors from 'cors';
import { userRoute } from './Router/UserRoute.js';

const app = express()
app.use(json())
app.use(cors({
    origin:"http://localhost:5174",
    credentials:true
}))

app.use("/",userRoute)

const PORT =4000;

app.listen(PORT,()=>{
    console.log("server running on PORT",PORT );
    
})