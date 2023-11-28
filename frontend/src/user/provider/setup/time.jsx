import React, { useState, useEffect } from "react";

export default function Time({ Controller, setValue, control, time, days }) {
  const [color, setColor] = useState("24 Hours");

  const Time = ["24 Hours", "Add Time"];
  const addTime = ["start", "end"];

  const weeks = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

  return (
    <>
      <div className="  text-slate-800 text-[1.1em] flex flex-col gap-2">
        <span>Service Time</span>
        <div className="">
          <div className=" ">
            <div>
              <Controller
                name="time"
                control={control}
                defaultValue={{
                  start: "10:00",
                  end: "17:00",
                }}
                render={({ field }) => {
                  return (
                    <div className="flex flex-col gap-3">
                      <div className="grid gap-10 grid-cols-2">
                        <input
                          type="time"
                          className="p-1.5 border-2 border-gray-200 "
                          onChange={(e) => {
                            const { value } = e.target;
                            setValue("time.start", value);
                            
                          }}
                          defaultValue={ time && time?.start || "10:00"}
                        />

                        <input
                          type="time"
                          className="p-1.5 border-2 border-gray-200 "
                          onChange={(e) => {
                            const { value } = e.target;
                            setValue("time.end", value);
                          }}
                          defaultValue={time && time?.end || "17:00"}
                        />
                      </div>
                    </div>
                  );
                }}
              />
            </div>
          </div>
        </div>
      </div>

      <div className=" flex flex-col text-slate-800 text-[1.1em]  ">
        <span>Servicing Days</span>
        <div>
          <Controller
            name="days"
            control={control}
            defaultValue={days ? days : []}
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
                          ? setValue("days", [])
                          : setValue(
                              "days",
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
                                "days",
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
