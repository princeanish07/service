// import './App.css'
import { Routes, Route } from "react-router-dom";
import Navbar from "./home/Navbar";
import SignUp from "./landing/authentication/signUp/create";
import SignIn from "./landing/authentication/signIn/login";
import Home from "./home/Home";
import Category from "./category/category";
import CategoryId from './category/categoryId'
import Profile from './profile/profile'
import Setup from "./landing/users/service/category/services/create/setup";
function App() {
  return (
    <>
    <Navbar/>

      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/signUp" element={<SignUp />}></Route>
        <Route path="/signIn" element={<SignIn />}></Route>
        <Route path="/user/*" element={<Home />}>
          <Route path="profile" element={<Profile />}></Route>
          <Route path="category" element/>
          <Route path="service/category" element={<Category />}>
            <Route path=":id" element={<CategoryId />} />
          </Route>
          <Route
            path="service/category/:id/service/:id"
            element={<Setup />}
          ></Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
