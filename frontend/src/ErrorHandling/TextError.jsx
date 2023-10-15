import React from "react";

const TextError = (props) => {
  return <div className=" text-red-600  text-sm col-start-2 col-span-2">
    {props.children}</div>;
};

export default TextError;
