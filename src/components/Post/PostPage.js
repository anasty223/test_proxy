import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { fetchPost, fetchUsersById } from "../../services/api";

export default function PostPage({items}) {
const [posts, setPost] = useState([])
    useEffect(()=>{
    
        fetchPost().then((posts)=>{
            setPost(posts);
         console.log(posts);
        })
       
       },[]);



    return <>

    <h3>PostPage</h3>
    <ul>
        {posts.map((post) => (
          <li key={post.id}>
        <NavLink   to={`/post/${post.id}`}>
            {post.title}
            </NavLink>
          </li>
        ))}
      </ul>


    </>}