import { useEffect, useState } from "react";
import { Outlet, useParams } from "react-router-dom";
import { fetchPost, fetchUsersById } from "../../services/api";

export default function UsersDetails() {
    const [users, setUsers] = useState("")
    const [posts,setPosts]=useState([])

    const{id}=useParams()
    const psramPost= useParams();
    
    const paramsIdPost = psramPost.id;


    useEffect(() => {
        // async function fetchUsers() {
        //   try {
        //     const results = await fetchUsersById(paramsIdPost);
    
        //     setUsers(results);
        //   } catch (error) {
        //    alert("Movie not found", {
        //       duration: 1000,
        //     });
        //   }
        // }
        // fetchUsers();

        async function fetchPosts(){
            try{
                const results=await fetchPost(paramsIdPost);
                
                setPosts(results)
            }catch(error){
                alert("Movie not found")
            }
        }
        fetchPosts();
      }, [id, paramsIdPost]);


    return <div><h3>Users Details Page</h3>
{/* {users&&  <h2>Name: {users.name}</h2>} */}


  <h3>Post {users.name} :<h2>{posts.title}</h2></h3>
{/* <ul>
        {posts.map((post) => (
          <li key={post.id}>
             {post.title}
            



          </li>
        ))}
      </ul> */}


    <Outlet/></div>
}

