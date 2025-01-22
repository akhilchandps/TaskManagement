import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const Update = () => {
  const [title,setTitle] = useState("")
    const [description,setDescription] = useState("")
    const [status,setStatus] = useState("")
    const [priority,setPriority] = useState("")
     const [createdAt,setCreatedAt] = useState("")

const {id} = useParams();
console.log(id);



const getATask = async()=>{

    const res= await fetch(`http://localhost:4000/getTask/${id}`,{
        method:"GET"
    })
    console.log(res);
    const data = await res.json()
    console.log(data);

    setTitle(data.title)
    setDescription(data.description)
    setStatus(data.status)
    setPriority(data.priority)
    setCreatedAt(data.createdAt)
    // title,description,status,priority,createdAt
}

useEffect(()=>{
getATask();
},[])


  return (
    <div>
            <form className='bg-slate-400 p-5 w-96 m-auto' >
        <label htmlFor="">title</label>
        <div>
            <input type="text" value={title} placeholder='title' className='w-full p-2' onChange={(e)=>setTitle(e.target.value)}/>
        </div>
        <label htmlFor="">description</label>
        <div>
            <input type="text" value={description} placeholder='description' className='w-full p-2 ' onChange={(e)=>setDescription(e.target.value)}/>
        </div>
        <label htmlFor="">status</label>
        <div>
            <select name="" id="" className='p-2' onChange={(e)=>setStatus(e.target.value)} value={status}>
                <option value="">Select</option>
                <option value="pending">pending</option>
                <option value="in-progress">in-progess</option>
                <option value="completed">completed</option>
            </select>
        </div>

        <label htmlFor="">priority</label>
        <div>
          <input type="text" onChange={(e)=>setPriority(e.target.value)} value={priority} />
        </div>

        <label htmlFor="">craeted At</label>
        <div>
          <input type="date" onChange={(e)=>setCreatedAt(e.target.value)} value={createdAt} />
        </div>


        <div className='text-center'>
<button className='bg-black text-white p-2'>Add</button>        
</div>
      </form>
    </div>
  )
}

export default Update
