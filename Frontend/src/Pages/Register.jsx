import { useState } from "react";
import authAPI from "../API/authAPI";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

import { Link } from "react-router-dom";
import Logo from "../assets/Logo";

const Register = () => {
  const navigate = useNavigate();
  const [details, setDetails] = useState({
    email: "",
    password: "",
  });
  const [confirmPassword, setConfirmPassword] = useState("");

  const { registrationAPI } = authAPI();

  function changeInputDetails(e) {
    const { name, value } = e.target;
    setDetails({ ...details, [name]: value });
  }

  const onSubmit = async () => {
    if (
      !details?.email.trim() ||
      !details?.password.trim() ||
      !confirmPassword
    ) {
      toast.error("Please fill the credentials");
    } else if (
      !/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
        details.email
      )
    ) {
      toast.warn("Invalid email");
    } else if (details.password !== confirmPassword) {
      toast.error("Password does`not match");
    } else {
      try {
        const response = await registrationAPI(details);
        console.log("response is", response);
        toast.success("succesfully Registerd , Please Login", { delay: 0 });
        setTimeout(() => {
          navigate("/login");
        }, 900);
      } catch (error) {
        if (error?.error?.response?.data?.message)
          toast.error(error?.error?.response?.data?.message, { theme: "dark" });
        console.log("error is", error);
      }
    }
  };
  const inputStyle = "border border-slate-500 p-2 w-full ";

  return (
    <>
      <div className="flex justify-center items-center w-full h-screen p-5 ">
        <div className="grid gap-8 border border-slate-700 md:p-10 md:w-[30%] w-full p-5   ">
          <div>
            <Logo />
            <h1 className="text-xl text-center text-blue-900 font-bold">
              Registration
            </h1>
          </div>
          <input
            type="text"
            className={inputStyle}
            placeholder="Email"
            name="email"
            value={details.email}
            onChange={changeInputDetails}
          />
          <input
            type="password"
            className={inputStyle}
            placeholder="Password"
            name="password"
            value={details.password}
            onChange={changeInputDetails}
          />
          <input
            type="password"
            className={inputStyle}
            placeholder="Confirm password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <button
            className="bg-green-500 p-3 font-bold hover:bg-green-700"
            onClick={onSubmit}
          >
            Register
          </button>
          <div className="text-end">
            <Link
              className="w-fit text-end underline text-blue-900"
              to={"/login"}
            >
              Already an user?
            </Link>
          </div>
        </div>
        <ToastContainer />
      </div>
    </>
  );
};

export default Register;
