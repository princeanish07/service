import React from "react";
import { FaEnvelope } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { FaHome } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
function Card({ cards }) {
  console.log('card',cards);
  const navigate=useNavigate();
  return (
    <section className="grid grid-cols-2  gap-1  font-sans bg-[#679BE0] ">
      {cards &&
        cards.map((card) => {
          return (
            <div
              key={card.id}
              className="flex   bg-[rgba(0,0,0,0.7)] text-white text-[1em] p-1 box-border hover:cursor-pointer "
              onClick={()=>{
                navigate(`/Category/${card?.category?.name}/${card?.name}`)
              }}
            >
              <div className="w-full h-[210px]  box-border bg-white">
                <img
                  src={`http://localhost:8000/${card?.profile?.photo}`}
                  alt=""
                  className=" w-full h-full object-cover"
                />
              </div>
              <div className="flex flex-1 flex-col  p-2 box-border gap-1  ">
                <div>
                  <h3 className=" text-center font-semibold font-sans text-[1.6em] ">
                    {card?.category?.name.toUpperCase()}
                  </h3>
                </div>
                <div className=" flex mt-2 place-content-center">
                  {Array(card.rating)
                    .fill()
                    .map((_, index) => (
                      <div key={index} className=" ">
                        <FaStar className=" text-[#FA130C]" />
                      </div>
                    ))}
                </div>
                <div className="grid place-content-center  ">
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

                    <li>
                      {card?.profile?.address && (
                        <ul className=" flex gap-2 place-content-center">
                          <li className=" grid place-content-center">
                            <i>
                              <FaHome className=" text-blue-600 text-[1.3em]" />
                            </i>
                          </li>
                          <li className=" italic">{`${card?.profile?.address?.chowk},${card?.profile?.address?.muncipility}-${card?.profile?.address?.ward},${card?.profile?.address?.district}`}</li>
                        </ul>
                      )}
                    </li>
                    <li>
                      <div className="grid place-content-center">
                        <button className="bg-[#FA130C] text-white p-2 w-[200px] text-[1em] rounded-md font-bold">
                          CALL NOW
                        </button>
                      </div>
                    </li>
                    <li className="grid justify-end ">
                    <ul className="flex gap-8 ">
                    <li className=" ">
                      {" "}
                      <ul className=" flex gap-2 place-content-center">
                        <li className=" grid place-content-center">
                          <i>
                            <FaEnvelope className=" text-blue-600 text-[1em]" />
                          </i>
                        </li>
                        <li className=" italic text-[0.9em]">{card.email}</li>
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
                          <li className="text-[0.9em]">
                            {card?.profile?.phone_number}
                          </li>
                        </ul>
                      )}
                    </li>
                  </ul>
                    </li>
                  </ul>
                </div>
                
              </div>
            </div>
          );
        })}
    </section>
  );
}

export default Card;
