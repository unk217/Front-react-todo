import { useForm } from "react-hook-form";
import { useEffect } from "react";
import { createTask, deleteTask, updateTask, getTask } from '../api/tasks.api';
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-hot-toast";


export function TaskFormPage() {

  const {
    register,
     handleSubmit,
      formState:{errors},
      setValue
      
    } = useForm();
    const navigate = useNavigate();
    const params =useParams();

    

  const onSubmit = handleSubmit(async data =>{
   if(params.id){
    await updateTask(params.id, data)
    toast.success('Task Update',{ style:{
      background: "#3EAC70"
    }})
   } else{
    await createTask(data)
    toast.success('Task created',{ style:{
      background: "#3EAC70"
    }})
   }
   navigate("/tasks")
  })

  useEffect(()=>{
  async  function loadTasks(){
      if(params.id){
      const {data} = await getTask(params.id)
      setValue('title', data.title)
      setValue('description', data.description)
      setValue('date_c', data.f_creation)
      setValue('done', data.done)
      }
      
    }
    loadTasks()
  },[]);

  useEffect

    return (
      <div className="max-w-xl mx-auto">
        <form onSubmit={onSubmit}>
          <input type="text" placeholder="Title"
          {...register("title", {required: true})} 
          className="bg-zinc-700 p-3 rounded-lg block w-full mb-3 hover:bg-stone-400 hover:cursor-pointer text-xl"
          />
          {errors.title && <span className="text-red-600">Field required</span>}

          <textarea rows="3" placeholder="Description"
          {...register("description", {required: true})} 
          className="bg-zinc-700 p-3 rounded-lg block w-full mb-3 hover:bg-stone-400 hover:cursor-pointer text-xl"
          ></textarea>
          {errors.description && <span className="text-red-600">Field required</span>}

          <input type="date"
          {...register("date_c", {required: true})}
          className="bg-zinc-700 p-3 rounded-lg block w-full mb-3 hover:bg-stone-400 hover:cursor-pointer text-xl"
          />
          {errors.date_c && <span className="text-red-600">Field required</span>}
          
          <h1 className="font-bold uppfont-bold uppercase">Done</h1>
          <input type="checkbox"  className="bg-zinc-700 p-3 block w-full mb- h-7"
          {...register("done")}
          />
          <button
          className='bg-lime-700 p-3 rounded-lg block w-full mt-3 hover:bg-lime-600 hover:cursor-pointer font-bold uppfont-bold uppercase'>
            Save</button>
        </form>  

        {params.id && <button onClick={async()=>{
          const accepted = window.confirm('Are you sure 🫵?')
          if (accepted){
            await deleteTask(params.id)
            toast.success('Task deleted',{ style:{
              background: "#811114"
            }})
            navigate("/tasks")
          }
        }}
        className="bg-red-600 p-3 rounded-lg block w-full mt-3 hover:bg-red-500 hover:cursor-pointer font-bold uppfont-bold uppercase"
        >
        Delete
        </button>} 
      </div>
    );
  }
  
  