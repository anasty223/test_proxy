import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom"
import fetchUsers from "../../services/api";
import PostPage from "../Post/PostPage";

export default function Users() {
    const [users, setUsers] = useState([])

    useEffect(()=>{
    
     fetchUsers().then((users)=>{
     setUsers(users);
      console.log(users);
     })
    
    },[]);
    return(<>
         
    <ul>
        {users.map((user) => (
          <li key={user.id}>
             {user.name}
             <button> <NavLink   to={`/users/${user.id}`}>
           Posts
            </NavLink></button>



          </li>
        ))}
      </ul>
    </>)
}