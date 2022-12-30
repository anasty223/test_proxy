import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom"
import fetchUsers from "../../services/api";
import Albums from "../Albums/Albums";
import Modal from "../Modal/Modal";


export default function Users() {
    const [users, setUsers] = useState([])
    const [isShown, setIsshown] = useState(false);
    const [modalList, setModalList] = useState("");

    const toggleModal = () => {
        setIsshown(!isShown);
      };
    
    useEffect(()=>{
    
     fetchUsers().then((users)=>{
        setIsshown(false);
     setUsers(users);
    //   console.log(users);
     })
  
    },[]);


    return(<>
         
    <ul>
        {users.map((user) => (
          <li key={user.id}>
         <h2>   {user.name}</h2>
             <button> <NavLink   to={`/users/${user.id}/post`}>
           Posts
            </NavLink></button>

            <button type="button" onClick={toggleModal}> 
           
          
           Albums
          
            </button>

           
          </li>

          
        ))}
      </ul>

      {isShown && (
        <Modal isShown={isShown} onClose={toggleModal}>
    
   <Albums/>
 
        </Modal>
      )}
    </>)
}