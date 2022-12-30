import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom"
import fetchUsers from "../../services/api";
import Modal from "../Modal/Modal";


export default function Users() {
    const [users, setUsers] = useState([])
    const [showModal, setShowModal] = useState(false);
    const [modalList, setModalList] = useState("");

    const toggleModal = (albumList) => {
        setShowModal((prev) => ({
          showModal: !prev.showModal,
          modalList: albumList,
   
        }));
        setModalList(albumList);
      };

    useEffect(()=>{
    
     fetchUsers().then((users)=>{
  
     setUsers(users);
    //   console.log(users);
     })
  
    },[]);


    return(<>
         
    <ul>
        {users.map((user) => (
          <li key={user.id}>
         <h2>   Name: {user.name}</h2>
             <button> <NavLink   to={`/users/${user.id}/post`}>
           Posts
            </NavLink></button>

            <button> <NavLink   to={`/users/${user.id}/albums`}>
           Albums
            </NavLink></button>

          { showModal && <Modal  handleTogleModal={toggleModal} modalList={modalList} />}
          </li>
        ))}
      </ul>
    </>)
}