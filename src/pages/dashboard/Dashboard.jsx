import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { ToastContainer } from 'react-toastify';

export default function Dashboard(){    
    return(
        <div className=" w-screen h-screen pt-4">
            <ToastContainer/>
            <div className="w-52 h-screen fixed ml-0 z-10 border-r-2 block">
                <Link to="users">Users</Link>
            </div>
            <Outlet/>
        </div>
    )
}