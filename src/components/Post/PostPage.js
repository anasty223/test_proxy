import { useEffect, useState } from "react";
import { NavLink, useLocation, useParams } from "react-router-dom";
import { fetchPost } from "../../services/api";

export default function PostPage() {
  const [posts, setPosts] = useState([]);
  const psramPost = useParams();
  const location = useLocation();

  const paramsIdPost = psramPost.id;
  // console.log(paramsIdPost);
  useEffect(() => {
    async function fetchPosts() {
      try {
        const results = await fetchPost(paramsIdPost);

        setPosts(results);
      } catch (error) {
        alert("Movie not found");
      }
    }
    fetchPosts();
  }, [paramsIdPost]);

  return (
    <>

<NavLink to={location.state?.from ?? "/"}>
       Go back
      </NavLink>
      <h3>Posts</h3>
      <ol className="albums">
        {posts.map((post) => (
          <li className="album-item" key={post.id}>{post.title}</li>
        ))}
      </ol>
    </>
  );
}
