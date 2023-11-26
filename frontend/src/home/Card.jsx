import React from "react";
import { FaEnvelope } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { FaHome } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import {setProviderId} from "../redux/cardSlice"
function Card({ cards }) {
  const navigate=useNavigate();
  const dispatch=useDispatch();
  return (
    <section className="  grid grid-cols-2 grid-flow-row gap-20  font-sans bg-white p-20 ">
      {cards &&
        cards.map((card) => {
          return (
            <div
              key={card.id}
              className="grid w-[20Vw] justify-self-center  gap-4 rounded-md text-gray-600 text-[1em] p-3 shadow shadow-gray-500 box-border hover:cursor-pointer "
              onClick={()=>{
                dispatch(setProviderId({id:card?.id,category:card?.category?.name}))
                navigate(`/Category/${card?.category?.name}/${card?.name}`)
              }}
            >
              <div className="w-full h-[200px]  box-border bg-white">
                <img
                  src={`http://localhost:8000/${card?.profile?.photo}`}
                  alt=""
                  className=" w-full h-full object-cover rounded-md"
                />
              </div>
              <div className="flex  flex-col gap-5   box-border  ">
                <div>
                  <h3 className=" text-center font-semibold font-sans text-[1.4em] ">
                    {card.category.name.toUpperCase()}
                  </h3>
                </div>
                <div className=" flex gap-5  place-content-center">
                  {Array(card.rating)
                    .fill()
                    .map((_, index) => (
                      <div key={index} className=" ">
                        <FaStar className=" text-[#FA130C] text-[1.8em]" />
                      </div>
                    ))}
                </div>
                <div className="grid place-content-center gap-5  ">
                  <ul className=" text-center grid gap-2">
                    <li className=" ">
                      {" "}
                      <ul className=" flex gap-2 place-content-center">
                        <li className=" grid place-content-center">
                          <i>
                            <FaUser className=" text-blue-600 text-[1.5em]" />
                          </i>
                        </li>
                        <li className=" text-[1.2em] font-medium">
                          {card?.name.toUpperCase()}
                        </li>
                      </ul>
                    </li>

                  
                   
                  
                    <li className=" ">
                      {card?.profile?.phone_number && (
                        <ul className=" flex gap-2 place-content-center">
                          <li className=" grid place-content-center">
                            <i>
                              <FaPhoneAlt className=" text-blue-600 text-[1em]" />
                            </i>
                          </li>
                          <li className="text-[1em]">
                            {card?.profile?.phone_number}
                          </li>
                        </ul>
                      )}
                    </li>
                  </ul>
                  <div>
                    <button className="bg-blue-600 text-white font-semibold p-2 w-full">CALL NOW</button>
                  </div>
                </div>
                
              </div>
            </div>
          );
        })}
    </section>
  );
}

export default Card;
