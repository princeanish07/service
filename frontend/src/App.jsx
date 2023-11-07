// import './App.css'
import { Routes, Route } from "react-router-dom";
import Navbar from "./home/Navbar";
import SignUp from "./authentication/SignUP";
import SignIn from "./authentication/SignIn";
import Home from "./home/Home";
import { CategoryPage } from "./category/categoryPage";
import Profile from "./profile/Profile";
import Edit from "./profile/edit";
import EditCategory from "./category/EditCategory";
import Service from "./services/home"
import Category from "./services/setup/category";
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
          <Route path="category/" element={<CategoryPage/>}>
            <Route path=":name" element={<EditCategory/>}/>
            <Route path=":name/:subname" element={<EditCategory/>}/>
            <Route path=":name/:subname/:child" element={<EditCategory/>}/>


            </Route>
            {/* <Route path=":id" element={<CategoryId />} /> */}
          {/* <Route
            path="service/category/:id/service/:id"
            element={<Setup />}
          ></Route> */}
        <Route path="service" element={<Service/>}>
        </Route>
        <Route path="service/category" element={<Category/>}>

        </Route>

        </Route>
      </Routes>
    </>
  );
}

export default App;
