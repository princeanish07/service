import React from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Categories from "../components/category";
import { useViewCategoryQuery } from "../Api/categoryApi";
import SearchBox from "../components/searchBox";
import { setCategory } from "../redux/cardSlice";
import CardAll from "./CardAll";
import { CardId } from "./CardId";
import photo from "../images/plumber.jpg";
const Home = () => {
  const selected = useSelector((state) => state.cardSlice.category);
  console.log("selected", selected);
  const {
    data: categories,
    isError: categoryIsError,
    isLoading: categoryLoading,
    error: cataegoryError,
  } = useViewCategoryQuery();
  if (categoryLoading ) {
    return <div>Loading..</div>;
  }
  return (
    <section className="  p-1  text-[1em]  ">
      {/* Banner Promotion Serction  */}
      <section className="promotinal-banner  bg-white  text-gray-400 p-5">
        <div className="promo-banner m-2 grid grid-cols-7 border border-gray-300 p-5">
          <img
            src={photo}
            alt="Promotion "
            className=" h-[80px] max-w-[80px] object-cover justify-self-center "
          />
          <p className="text-lg font-bold col-span-3 place-self-center">
            Special Offer: 20% off on selected services!
          </p>
          <p className="flex place-self-center text-green-500 font-bold">
            $4000
          </p>
          <div className="grid place-content-center">
            <button className="bg-orange-600 text-white p-1 px-4 rounded-full">
              Shop Now
            </button>
          </div>
        </div>
      </section>

      {/* Search Section  */}
      <section>
       <SearchBox/>
      </section>

      {/* Category Section */}
      <Categories
        categories={categories}
        setCategory={setCategory}
        selected={selected}
      />
   



      {/* service Section  */}
      {
        Object.keys(selected).length===0 ? <CardAll/> : <CardId/>
      }
     
    </section>
  );
};

export default Home;
