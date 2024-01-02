"use client"
import { Input } from 'postcss'
import React, { useState } from 'react'

const page = () => {
  const [task, settask] = useState("")
  const [desc, setdesc] = useState("")
  const [mainTask, setmainTask] = useState([])

  const submithandle =(e)=>{
     e.preventDefault()
     setmainTask([...mainTask, {task,desc}])
     settask("")
     setdesc("")
    
  }


  const deletehandler =(i)=>{
   let copytask =[...mainTask]
   copytask.splice(i,1)
   setmainTask(copytask)
  }

  let rendertask = <h2 className='text-xl font-medium font-serif '> No Task Available</h2>;
  if(mainTask.length>0){
    rendertask = mainTask.map((t, i)=>{
      return (
      <li  key={i} className='flex justify-between items-center '>
         <div className=' flex  justify-between items-center w-2/3'>
        <h5 className='  capitalize font-semibold text-xl text-white'>{t.task}</h5>
        <h6 className=' capitalize font-bold text-xl text-white'> {t.desc}</h6>
      </div> 
      <button 

      onClick={()=>{
        deletehandler(i)
      }}
      className=' bg-red-400 rounded text-white p-2 mb-5'>Remove task</button> 
      </li>
      );
    });
  }
  return (
    <>  
    <h1 className=' text-5xl bg-black text-center font-bold text-white p-1 uppercase' >My to-do-list</h1>
     <form onSubmit={submithandle}>
      <input type='text' className=' border-current text-2xl    m-4  border-2  border-black-500 corner'
       placeholder='Enter task here'  
         value={task}
         onChange={(e)=>{
          settask(e.target.value)
         }}
       />

      <input type='text' className=' border-current text-2xl    ml-12 border-2  border-black-500 rounded' 
       placeholder='Enter des here'
       value={desc}
       onChange={(e)=>{
        setdesc(e.target.value)
       }}
       />
      <button className=' rounded m-8 p-2 uppercase bg-black text-white'>add task</button>
     </form>
     <hr/>
     <div className=' bg-slate-400 p-7 m-3'>
         <ul>
            {rendertask}
           
         </ul>
         
     </div>
         
    </>
  )
}

export default page