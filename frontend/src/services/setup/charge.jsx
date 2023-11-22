import React from "react";
import { useState } from "react";

const Charge = ({ register, setValue, Controller, control,charge }) => {
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
              return (
                <div className="">
                  <div className="grid grid-cols-2 gap-10">
                    <div>
                      <span className="mr-4">Rs</span>
                      <input
                        type="number"
                        placeholder="Minimum Charge"
                        className="p-1.5  border-b-2 border-gray-400 "
                        {...register("charge.min")}
                        defaultValue={charge && charge.min}
                        min={0}
                      />

                    </div>
                    <div>
                    <span className="mr-4">Rs</span>

                      <input
                        type="number"
                        placeholder=" Maximum Charge"
                        className="p-1.5  border-b-2 border-gray-400 "
                        {...register("charge.max")}
                        defaultValue={charge && charge.max}

                        min={field.value.min}
                      />

                    </div>
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
