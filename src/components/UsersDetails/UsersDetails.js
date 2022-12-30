import { useEffect, useState } from "react";
import {  Outlet, useParams } from "react-router-dom";
import {  fetchUsersById } from "../../services/api";


export default function UsersDetails() {
    const [users, setUsers] = useState("")
   

    const{id}=useParams()
    // const psramPost= useParams();
    
    // const paramsIdPost = psramPost.id;


    useEffect(() => {
        async function fetchUsers() {
          try {
            const results = await fetchUsersById(id);
    
            setUsers(results);
          } catch (error) {
           alert("Movie not found", {
              duration: 1000,
            });
          }
        }
        fetchUsers();

       }, [id]);


    return <div>

  <h3> {users.name} </h3>



    <Outlet/></div>
}

