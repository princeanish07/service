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
            defaultValue={{
              after: true,
            }}
            render={({ field }) => {
              console.log(field);
              return (
                <div className="flex flex-col gap-3">
                  <div className="grid gap-10 grid-cols-2">
                    {Charge.map((charge) => (
                      <button
                        key={charge}
                        className={`p-2 w-full ${
                          color === charge
                            ? "bg-blue-500 text-white"
                            : " bg-gray-300 text-gray-800"
                        }`}
                        onClick={() => {
                          if (charge === "After Service") {
                            setValue("charge", { after: true });
                            setColor(charge);
                          }
                          if (charge === "Add Charge") {
                            setValue("charge", {
                              after: false,
                              add: {
                                max: "",
                                min: "",
                              },
                            });
                            setColor(charge);
                          }
                        }}
                      >
                        {charge}
                      </button>
                    ))}
                  </div>
                  {!field.value.after && (
                    <div className="grid grid-cols-2 gap-10">
                      <input
                        type="number"
                        placeholder="Enter Minimum Charge"
                        className="p-1.5 shadow-md border-2 border-gray-200 "
                        {...register("charge.add.max")}
                      />
                      <input
                        type="number"
                        placeholder="Enter Maximum Charge"
                        className="p-1.5 shadow-md border-2 border-gray-200 "
                        {...register("charge.add.min")}
                      />
                    </div>
                  )}
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
