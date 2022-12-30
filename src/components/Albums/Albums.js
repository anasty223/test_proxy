import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchPost } from "../../services/api";

export default function Albums() {
  const [albums, setAlboms] = useState([]);
  const psramAlbums = useParams();

  const paramsIdAlbums = psramAlbums.id;
  // console.log(paramsIdAlbums);
  useEffect(() => {
    async function fetchAlbums() {
      try {
        const results = await fetchPost(paramsIdAlbums);

        setAlboms(results);
      } catch (error) {
        alert("Allbums not found");
      }
    }
    fetchAlbums();
  }, [paramsIdAlbums]);

  return (
    <>
      <h3>Albums </h3>
      <ol>
        {albums.map((album) => (
          <li key={album.id}>{album.title}</li>
        ))}
      </ol>
    </>
  );
}
