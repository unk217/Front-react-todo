import { useNavigate } from "react-router-dom";



export function TaskCard({task}) {
  const navigate=useNavigate()
  return (
    <div className="bg-slate-900 p-3 rounded-xl  hover:bg-emerald-50 hover:cursor-pointer"
    onClick={()=>
      navigate('/tasks/' + task.id)}>
            <h1 className="font-bold uppercase">{task.title}</h1>
            <p className="text-slate-400">{task.id}</p>
            <p className="italic">{task.description}</p>
            <p>{task.f_creation}</p>
            <p>{task.done}</p>
            {/* <hr/> */}
        </div>
  )
} 

