import "./App.css";

import Users from "./components/Users/Users";

import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import UsersDetails from "./components/UsersDetails/UsersDetails";
import PostPage from "./components/Post/PostPage";
import Albums from "./components/Albums/Albums";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Users />} />

          <Route path="users/:id" element={<UsersDetails />}>
            <Route path="post" element={<PostPage />} />
    
          </Route>

          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
