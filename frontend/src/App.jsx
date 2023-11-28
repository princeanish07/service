// import './App.css'
import { Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Landing from "./landingPage/landing";
import SignUp from "./authentication/SignUP";
import SignIn from "./authentication/SignIn";
import Home from "./user/customer/home/Home";
import CardAll from "./user/customer/home/CardAll";
import Provider from "./user/customer/home/Provider";
import { CategoryPage } from "./category/categoryPage";
import Profile from "./profile/Profile";
import Edit from "./profile/edit";
import EditCategory from "./category/EditCategory";
import  ServiceSetUp from "./user/provider/setup/home";

import { useSelector } from "react-redux";
import ProviderHome from "./user/provider/home/home";
import Services from "./user/provider/services/service";


function App() {
  const selected=useSelector((state)=>state.categorySlice.category)
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/register" element={<SignUp />}></Route>
        <Route path="/signIn" element={<SignIn />}></Route>
        <Route path="/customer/" element={<Home />}>
          <Route path="Category/All/" element={<CardAll />} />
        </Route>
        <Route path="/Category/:category/:name" element={<Provider />} />
        <Route path="/user/*">
          <Route path="profile/" element={<Profile />} />
          <Route path="profile/create" element={<Edit />} />
          <Route path="category/" element={<CategoryPage />}>
            
              
            <Route path=":name/:subname" element={<EditCategory />} />
            <Route path=":name/:subname/:child" element={<EditCategory />} />
          </Route>
          {/* <Route path=":id" element={<CategoryId />} /> */}
          {/* <Route
            path="service/category/:id/service/:id"
            element={<Setup />}
          ></Route> */}
        
           
          </Route>
         
        <Route path="/provider/*" element={<ProviderHome />}>
            {/* <Route path="all" element={<AllServices />} />
            <Route path=":category" element={<ServiceById />} /> */}
          </Route>
            <Route path="/provider/service/join" element={<ServiceSetUp />} />
            <Route path="/provider/services/*" element={<Services />} />


      </Routes>

      <Footer />
    </>
  );
}

export default App;
