import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { basicDetails } from "../redux/profileslice";
import { BsPersonAdd } from "react-icons/bs";
export default function Basic() {
  const dispatch = useDispatch();
  const basic = useSelector((state) => state.profile.basic);
  console.log(basic);
  const navigate = useNavigate();
  const [previewImage, setPreviewImage] = useState(null);

  const form = useForm({
    defaultValues: basic,
  });
  const { register, handleSubmit } = form;
  const onSubmit = async (values) => {
    dispatch(basicDetails({ ...values, profile: previewImage }));
    navigate("/profile/category");
  };
  useEffect(() => {
    setPreviewImage(basic.profile);
  }, [basic]);
  const [show, showImage] = useState(false);
  const [image, isImage] = useState(false);

  return (
    <div className="flex ">
     <div>

     </div>
     <div className="flex-1">

     </div>
    </div>
  );
}
