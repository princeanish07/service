// import './App.css'
import { Routes, Route } from "react-router-dom";
import Navbar from "./home/Navbar";
import SignUp from "./authentication/SignUP";
import SignIn from "./authentication/SignIn";
import Home from "./home/Home";
import { CategoryPage } from "./category/categoryPage";
import { AddCategory } from "./category/AddCategory";
// import Category from "./category/category";
import CategoryId from "./category/categoryId";
import Profile from "./profile/Profile";
import Edit from "./profile/edit";
import Setup from "./landing/users/service/category/services/create/setup";
function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/signUp" element={<SignUp />}></Route>
        <Route path="/signIn" element={<SignIn />}></Route>
        <Route path="/user/*">
          <Route path="profile/" element={<Profile />} />
          <Route path="profile/create" element={<Edit />} />
          <Route path="category" element={<CategoryPage/>}>
            <Route path="create" element={<AddCategory/>}/>
            </Route>
            <Route path=":id" element={<CategoryId />} />
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
