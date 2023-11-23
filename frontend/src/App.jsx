// import './App.css'
import { Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import SignUp from "./authentication/SignUP";
import SignIn from "./authentication/SignIn";
import Home from "./home/Home";
import CardAll from "./home/CardAll";
import Provider from "./home/Provider";
import { CardId } from "./home/CardId";
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
import { useEffect } from "react";
function App() {
  
  return (
    <>
     <header>
        <Navbar/>
     </header>
   

      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="Category/All/" element={<CardAll/>}/>
          <Route path="Category/:category/" element={<CardId />} />
        </Route>
        <Route path="/Category/:category/:name" element={<Provider/>}/>
        <Route path="/signUp" element={<SignUp />}></Route>
        <Route path="/signIn" element={<SignIn />}></Route>
        <Route path="/user/*">
          <Route path="profile/" element={<Profile />} />
          <Route path="profile/create" element={<Edit />} />
          <Route path="category/" element={<CategoryPage />}>
            <Route path=":name" element={<EditCategory />} />
            <Route path=":name/:subname" element={<EditCategory />} />
            <Route path=":name/:subname/:child" element={<EditCategory />} />
          </Route>
          
          <Route path="service/" element={<Service />}>
            <Route path="All" element={<AllServices/>}/>
            <Route path=":category" element={<ServiceById/>}/>
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
      <div className="h-screen w-full bg-red-600">

</div>
    </>
  );
}

export default App;
