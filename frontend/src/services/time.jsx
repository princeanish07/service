import React, { useState, useEffect } from "react";

export default function Time({ Controller, setValue, control }) {
  const [color, setColor] = useState("24 Hours");
  console.log(color);

  const Time = ["24 Hours", "Add Time"];
  const addTime = ["start", "end"];

  const weeks = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

  return (
    <>
      <div className="  text-slate-500 flex flex-col gap-2">
        <span>Available Time</span>
        <div className="">
          <div className=" ">
            <div>
              <Controller
                name="time"
                control={control}
                defaultValue={{
                  hours: true,
                  set: {
                    start: "10:00",
                    end: "17:00",
                  },
                }}
                render={({ field }) => {
                  console.log(field);
                  return (
                    <div className="flex flex-col gap-3">
                      <div className="grid gap-10 grid-cols-2">
                        {Time.map((time) => (
                          <button
                            key={time}
                            className={`p-2 w-full ${
                              color === time
                                ? "bg-blue-500 text-white"
                                : " bg-gray-300 text-gray-800"
                            }`}
                            onClick={() => {
                              if (time === "24 Hours") {
                                setValue("time", { ...field, hours: true });
                                setColor(time);
                              }
                              if (time === "Add Time") {
                                setValue("time", {
                                  ...field,
                                  hours: false,
                                });
                                setColor(time);
                              }
                            }}
                          >
                            {time}
                          </button>
                        ))}
                      </div>
                      {!field.value.hours && (
                        <div className="grid grid-cols-2 gap-10">
                          {addTime.map((add) => (
                            <input
                              key={add}
                              type="time"
                              defaultValue={add === "start" ? "10:00" : "17:00"}
                              className="p-1.5 shadow-md border-2 border-gray-200 "
                              onChange={(e) => {
                                const { value } = e.target;
                                setValue(`time.set. ${add}`, value);
                              }}
                            />
                          ))}
                        </div>
                      )}
                    </div>
                  );
                }}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white flex flex-col  shadow shadow-gray-200 ">
        <span>Available Days</span>
        <div>
          <Controller
            name="Days"
            control={control}
            defaultValue={[]}
            render={({ field }) => {
              return (
                <div className="flex flex-col gap-2">
                  <div className="flex gap-2">
                    <input
                      type="checkbox"
                      name=""
                      id="all"
                      checked={
                        weeks.length === field.value.length ? true : false
                      }
                      onChange={(e) => {
                        weeks.length === field.value.length
                          ? setValue("Days", [])
                          : setValue(
                              "Days",
                              weeks.map((day) => day)
                            );
                      }}
                    />

                    <label htmlFor="all">All</label>
                  </div>

                  <ul className="grid lg:grid-cols-5 xl:grid-cols-7 xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-1 auto-rows-auto ">
                    {weeks.map((day) => (
                      <li key={day}>
                        <div className="flex gap-2  ">
                          <input
                            type="checkbox"
                            id={day}
                            value={day}
                            onChange={(e) => {
                              const { value, checked } = e.target;
                              setValue(
                                "Days",
                                field.value.includes(value)
                                  ? field.value.filter((item) => item !== value)
                                  : [...field.value, value]
                              );
                            }}
                            checked={field.value.includes(day)}
                          />
                          <label htmlFor={day}>{day}</label>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            }}
          />
        </div>
      </div>
    </>
  );
}
