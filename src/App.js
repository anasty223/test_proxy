import { useEffect, useState } from 'react';
import './App.css';
import fetchUsers from "../src/services/api";
import Users from './components/Users/Users';
import { useGetContactsQuery } from './redux/contacts/contacts-operation';
import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import UsersDetails from './components/UsersDetails/UsersDetails';

function App() {
//   const [users, setUsers] = useState([])

// useEffect(()=>{

//  fetchUsers().then((users)=>{
//  setUsers(users);
  
//  })

// });


  return (
  //   <Routes>
  //   <Route path="/" element={<Layout />}>
  //     <Route index element={<Home />} />

  //     <Route path="mouvies" element={<MoviesPage />} />

  //     <Route path="mouvies/:id" element={<MovieDetailsPage />}>
  //       <Route path="cast" element={<Cast />} />
  //       <Route path="reviews" element={<Reviews />} />
  //     </Route>

  //     <Route path="*" element={<NotFound />} />
  //   </Route>
  // </Routes>
    <div className="App">
<Routes>
<Route path="/" element={<Layout />}>
<Route index element={<Users />} />

<Route path="users/:id" element={<UsersDetails />}>
      {/* <Route path="cast" element={<Cast />} />
       <Route path="reviews" element={<Reviews />} /> */}
    </Route>
</Route>

</Routes>

    

    
    </div>
  );
}

export default App;
