import { useEffect, useState } from "react";
import { Outlet, useParams } from "react-router-dom";
import { fetchUsersById } from "../../services/api";

export default function UsersDetails() {
    const [users, setUsers] = useState([])
    const { id } = useParams();


    useEffect(() => {
        async function fetchMouvie() {
          try {
            const results = await fetchUsersById(id);
    
            setUsers(results);
          } catch (error) {
           alert("Movie not found", {
              duration: 1000,
            });
          }
        }
        fetchMouvie();
      }, [id]);


    return <div><h3>Users Details Page</h3>
{users&&  <h2>{users.name}</h2>}



    <Outlet/></div>
}