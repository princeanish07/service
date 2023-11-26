import React from "react";
import image1 from "../images/plumber.jpg";
import { useDispatch, useSelector } from "react-redux";
import { setCategoryAciton } from "../redux/categorySlice";
const serviceCard = ({ cards }) => {
  const dispatch = useDispatch();
  const selected = useSelector((state) => state.categorySlice.subcategory);
  if (cards.length === 0) {
    return (
      <section className="grid place-content-center p-20">
        <div>
          <h2>No Service Are Found</h2>
          {selected?.id &&  (
            <button
              className="bg-gray-400 p-2 px-8 rounded-md m-5"
              onClick={() => {
                dispatch(setCategoryAciton("service"));
              }}
            >
              Create New
            </button>
          )}
        </div>
      </section>
    );
  }
  return (
    <section>
      {cards.map((card) => {
        return (
          <div
            class="featured-services  m-5  bg-[#fff]  rounded-lg flex gap-10"
            key={card?.id}
          >
            <div class="service-card">
              <img src={image1} alt="" />
              <div class="service-title">Graphic Design</div>
              <div class="service-description">
                Eye-catching visuals for your brand.
              </div>
              <a href="#" class="learn-more-btn">
                Learn More
              </a>
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default serviceCard;
