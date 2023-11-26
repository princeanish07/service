// import './App.css'
import { Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Landing from "./landingPage/landing";
import SignUp from "./authentication/SignUP";
import SignIn from "./authentication/SignIn";
import Home from "./home/Home";
import CardAll from "./home/CardAll";
import Provider from "./home/Provider";
import { CardId } from "./category/CardById";
import { CategoryPage } from "./category/categoryPage";
import Profile from "./profile/Profile";
import Edit from "./profile/edit";
import EditCategory from "./category/EditCategory";
import Service from "./services/home";
import Category from "./services/cat-Service/category";
import CategoryId from "./services/cat-Service/categoryId";
import ServiceSetUP from "./services/setup/setup";
import CategoryAll from "./services/cat-Service/categoryAll";
import AllServices from "./services/AllServices";
import { ServiceById } from "./services/ServiceById";
<<<<<<< HEAD
import { useEffect } from "react";
function App() {
  
=======
import { useSelector } from "react-redux";


function App() {
  const selected=useSelector((state)=>state.categorySlice.category)
>>>>>>> develop
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/register" element={<SignUp />}></Route>
        <Route path="/signIn" element={<SignIn />}></Route>
        <Route path="/customer/" element={<Home />}>
          <Route path="Category/All/" element={<CardAll />} />
          <Route path=":category/" element={<CardId />} />
        </Route>
        <Route path="/Category/:category/:name" element={<Provider />} />
        <Route path="/user/*">
          <Route path="profile/" element={<Profile />} />
          <Route path="profile/create" element={<Edit />} />
          <Route path="category/" element={<CategoryPage />}>
            {
            selected?.id && <Route path=":name" element={<CardId />} />
            }
              
            <Route path=":name/:subname" element={<EditCategory />} />
            <Route path=":name/:subname/:child" element={<EditCategory />} />
          </Route>
          
          <Route path="service/" element={<Service />}>
            <Route path="All" element={<AllServices />} />
            <Route path=":category" element={<ServiceById />} />
          </Route>
          <Route path="service/category/" element={<Category />}>
            <Route path="all" element={<CategoryAll />} />

            <Route path=":parent" element={<CategoryId />} />
            <Route path=":parent/:subparent" element={<CategoryId />} />
            <Route path=":parent/:subparent/:child" element={<CategoryId />} />
          </Route>
         
          <Route path="service/:service/setup" element={<ServiceSetUP />} />
        </Route>
      </Routes>

      <Footer />
    </>
  );
}

export default App;
