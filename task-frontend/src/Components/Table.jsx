import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const Table = () => {
const [subjectData,setArr] = useState([])
const getTask = async()=>{

    const res= await fetch("http://localhost:4000/getTask",{
        method:"GET"
    })
    console.log(res);
    const data = await res.json()
    console.log(data);
    setArr(data)
    
    // title,description,status,priority,createdAt
}

useEffect(()=>{
getTask();
},[])

  return (
    <div>
          <table className="border border-2 m-auto bg-[rgba(255,255,255,0.8)] mt-20 shadow-md shadow-black-600 ">
              <thead>
              <tr>
                    <th className="text-center p-5 border">Sl No</th>
                    <th className="text-center p-5 border">Title</th>
                    <th className="text-center p-5 border">Description</th>
                    <th className="text-center p-5 border">Status</th>
                    <th className="text-center p-5 border">priority</th>
                    <th className="text-center p-5 border">createdAt</th>

                
                </tr>
              </thead>
            
              <tbody>
                { subjectData.length>0?(subjectData.map((item,index)=>(

                         <tr key={index}>
                         <td className="text-center p-5 border">{index+1}</td>
                         <td className="text-center p-5 border">{item.title}</td>
                         <td className="text-center p-5 border">{item.description}</td>
                         <td className="text-center p-5 border">{item.status}</td>
                         <td className="text-center p-5 border">{item.priority}</td>
                         <td className="text-center p-5 border">{item.createdAt}</td>


 
                         <td className="text-center p-5 border flex justify-between">
                             <Link to={`/UpdateTask/${item._id}`} className='bg-orange-600 text-white p-1 mr-3' >Update</Link>
                             {/* <button onClick={()=>handleDelete(item._id)} className='bg-rose-700 text-white p-1 mr-3'>Delete</button> */}
                           </td>
                     </tr>
                ))):(
                  <tr>
                    <td colSpan="5" className="text-center p-5 border">No subjects available</td>
                  </tr>
                )
                 
                }
              </tbody>
             
    

            </table>
    </div>
  )
}

export default Table
