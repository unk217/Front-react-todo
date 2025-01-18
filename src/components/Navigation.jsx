import {Link} from 'react-router-dom';

export function Navigation(){
    return(
        <div className='flex justify-between py-3'>
            <Link to="/tasks">
                <h1 className='font-bold text-3xl mb-4'>Task App</h1>
                </Link>

            <button className='bg-sky-800 px-3 py-2 rounded-lg hover:bg-sky-700 hover:cursor-pointer font-bold uppfont-bold uppercase'>
                <Link to="/tasks-create">create task</Link>
            </button>
        </div>
    )
}
