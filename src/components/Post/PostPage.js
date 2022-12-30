import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchPost } from "../../services/api";

export default function PostPage() {
  const [posts, setPosts] = useState([]);
  const psramPost = useParams();

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
      <h3>Posts</h3>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </>
  );
}
