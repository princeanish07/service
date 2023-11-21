import React from "react";
import { useState } from "react";

const Charge = ({ register, setValue, Controller, control }) => {
  const [color, setColor] = useState("After Service");
  const Charge = ["After Service", "Add Charge"];

  return (
    <>
      <div className="  text-slate-500 flex flex-col gap-2">
        <span>Service Charge</span>

        <div>
          <Controller
            name="charge"
            control={control}
            defaultValue={{}}
            render={({ field }) => {
              console.log(field);
              return (
                <div className="">
                  <div className="grid grid-cols-2 gap-10">
                      <input
                        type="number"
                        placeholder="Minimum Charge"
                        className="p-1.5  border-2 border-gray-200 "
                        {...register("charge.min")}
                        min={0}
                      />
                      <input
                        type="number"
                        placeholder=" Maximum Charge"
                        className="p-1.5  border-2 border-gray-200 "
                        {...register("charge.max")}
                        min={field.value.min}
                      />
                    </div>
                 
                
                </div>
              );
            }}
          />
        </div>
      </div>
    </>
  );
};

export default Charge;
