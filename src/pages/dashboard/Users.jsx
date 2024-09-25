import axios from "axios";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux"
import { setLoading, setUsers } from "../../redux/slices/usersSlice";
import { toast } from "react-toastify";
import AddUser from "../../components/AddUser";

export default function Users(){
    const { loading, users } = useSelector(state => state.users);
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(setLoading(true));
        axios.get("https://jsonplaceholder.typicode.com/users")
        .then(res=>{            
            dispatch(setUsers(res.data))
        }).catch((err)=>{
            console.log(err);
            toast.error("There was an error!")
        })
        .finally(dispatch(setLoading(false)))
    },[])
    return(
        <div className="ml-56 mt-3">
            {loading ? <p>Loading...</p>:(<>
                <h1 className="text-2xl font-semibold mb-3">This users list</h1>
                <AddUser/>
            {users.length ? 
            <table className="border border-collapse border-gray-500">
            <thead>
                <tr>
                    <th className="border border-gray-500">#</th>
                    <th className="border border-gray-500">Name</th>
                    <th className="border border-gray-500">Username</th>
                    <th className="border border-gray-500">Email</th>
                    <th className="border border-gray-500">Actions</th>
                </tr>
            </thead>
            <tbody>
                {users.map((us, index)=>(
                    <tr key={us.id}>
                        <th className="border border-gray-500">{index+1}</th>
                        <td className="border border-gray-500">{us.name}</td>
                        <td className="border border-gray-500">{us.username}</td>
                        <td className="border border-gray-500">{us.email}</td>
                        <td className="border border-gray-500"></td>
                    </tr>
                ))}
            </tbody>
        </table>:
        <p>No user found!</p>}
            </>)}
        </div>
    )
}