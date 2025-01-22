import React, { useState } from 'react'
import Table from './Table'

const Home = () => {

    const [title,setTitle] = useState("")
    const [description,setDescription] = useState("")
    const [status,setStatus] = useState("")
    const [priority,setPriority] = useState("")
     const [createdAt,setCreatedAt] = useState("")

const handleSubmit = async(e)=>{
e.preventDefault();
console.log(title,description,status,priority,createdAt);

const task ={
    title,
    description,
    status,
    priority,
    createdAt
}

const res= await fetch('http://localhost:4000/addTask',{
    method:"POST",
    headers:{"Content-Type":"application/json"},
    body:JSON.stringify(task)
})
console.log(res);
const data = await res.json()
console.log(data);
if(res.ok){
    alert(data.message)
}else{
    alert(data.message)
}


}


  return (
    <div className='flex flex-col mt-24'>
      <form className='bg-slate-400 p-5 w-96 m-auto' onSubmit={handleSubmit}>
        <label htmlFor="">title</label>
        <div>
            <input type="text" placeholder='title' className='w-full p-2' onChange={(e)=>setTitle(e.target.value)}/>
        </div>
        <label htmlFor="">description</label>
        <div>
            <input type="text" placeholder='description' className='w-full p-2 ' onChange={(e)=>setDescription(e.target.value)}/>
        </div>
        <label htmlFor="">status</label>
        <div>
            <select name="" id="" className='p-2' onChange={(e)=>setStatus(e.target.value)}>
                <option value="">Select</option>
                <option value="pending">pending</option>
                <option value="in-progress">in-progess</option>
                <option value="completed">completed</option>
            </select>
        </div>

        <label htmlFor="">priority</label>
        <div>
          <input type="text" onChange={(e)=>setPriority(e.target.value)} />
        </div>

        <label htmlFor="">craeted At</label>
        <div>
          <input type="date" onChange={(e)=>setCreatedAt(e.target.value)} />
        </div>


        <div className='text-center'>
<button className='bg-black text-white p-2'>Add</button>        
</div>
      </form>


<Table/>

    </div>
  )
}

export default Home
