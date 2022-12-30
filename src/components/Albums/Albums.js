import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchPost } from "../../services/api";

export default function Albums() {
  const [showModal, setShowModal] = useState(false);
  const [modalList, setModalList] = useState("");
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
  
      <ol className="albums">
   
        {albums.map((album) => (
          <li className="album-item" key={album.id}>{album.title}</li>
        ))}
      </ol>
    </>
  );
}
