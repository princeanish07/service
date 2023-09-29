// import './App.css'
import { Routes, Route } from "react-router-dom";
import Landing from "./landingPage/landing";
import SignUp from "./auth/register/create";
import SignIn from "./auth/login/login";
import Home from "./users/customer/home/Home"
import MerchantHome from "./users/merchant/homePage/Home";
import Category from "./users/merchant/category/category";
import ServiceCreation from "./users/merchant/services/service";
import Scope from "./users/merchant/scope/scope";
import Qualification from "./users/merchant/profile/qualification";
import Portfolio from "./users/merchant/profile/portfolio";
import { useNavigate } from "react-router-dom";
import CategoryId from "./users/merchant/category/categoryId";
import Profile from "./users/merchant/profile/profile";
import ServiceSetup from "./users/merchant/services/serviceSetup";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Landing />}></Route>
        <Route path="/signUp" element={<SignUp/>}></Route>
        <Route path="/signIn" element={<SignIn/>}></Route>
        <Route path="/home/*" element={<Home/>}>
          <Route path="profile" element={<Profile />}></Route>

          </Route>
        <Route path="/seller/*" element={<MerchantHome />}>
          <Route path="category" element={<Category />}>
            <Route path=":id" element={<CategoryId />} />
          </Route>
          <Route path="category/service/:id" element={<ServiceSetup />}></Route>
          <Route path="qualification" element={<Qualification />} />
          <Route path="portfolio" element={<Portfolio />} />
        </Route>

     
        <Route path="buyer" element={<Home />}></Route>
        

        <Route path="profile/category" element={<Category />}></Route>

        <Route path="profile/service/create" element={<ServiceCreation />} />
        <Route path="profile/service/scope" element={<Scope />} />
        <Route path="profile/qualification" element={<Qualification />} />
      </Routes>
    </>
  );
}

export default App;
