// import './App.css'
import { Routes, Route } from "react-router-dom";
 import Landing from "./landingPage/landing"; 
import Login from "./auth/login/login"
import CreateUser from "./profile/register/registerUser";
import Home from "./users/customer/Home";
import MerchantHome from "./users/merchant/homePage/Home"
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
        <Route path="/seller/*" element={<MerchantHome/>}>
          <Route path="profile" element={<Profile/>}></Route>
          <Route path="category" element={<Category />}>
            <Route path=":id" element={<CategoryId />} />
          </Route>
          <Route path="category/service/:id" element={<ServiceSetup/>}></Route>
          <Route path="qualification" element={<Qualification />} />
          <Route path="portfolio" element={<Portfolio />} />
        </Route>

        <Route path="/" element={<Landing />}></Route>
        <Route
          path="seller/login"
          element={<Login role="seller" roleId="2" />}
        ></Route>
        <Route path="seller/create" element={<CreateUser role="2" />}></Route>

        <Route path="buyer/create" element={<CreateUser role="1" />}></Route>
        <Route path="buyer" element={<Home />}></Route>
        <Route
          path="buyer/login"
          element={<Login role="buyer" roleId="1" />}
        ></Route>

        <Route path="profile/category" element={<Category />}></Route>

        <Route path="profile/service/create" element={<ServiceCreation />} />
        <Route path="profile/service/scope" element={<Scope />} />
        <Route path="profile/qualification" element={<Qualification />} />

      </Routes>
    </>
  );
}

export default App;
