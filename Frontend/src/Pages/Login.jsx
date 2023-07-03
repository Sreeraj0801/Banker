import { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/Logo";
import { ToastContainer, toast } from "react-toastify";
import authAPI from "../API/authAPI";

const Login = () => {


  const [details, setDetails] = useState({
    email: "",
    password: "",
  });
  const {loginAPI} = authAPI();
  const inputStyle = "border border-slate-500 p-2 w-full ";
  const insertValue = (e) => {
    const { name, value } = e.target;
    setDetails({ ...details, [name]: value });
  };
  const onSubmit = async  () => {
    if(!details.email || !details.password){
      toast.warn('Please fill the credentials',{theme:'dark'})
    }else {
      const response = await loginAPI(details);
      console.log(response)
    }
  };

  return (
    <>
      <div className="flex justify-center items-center w-full h-screen p-5 ">
        <div className="grid gap-8 border border-slate-700 md:p-10 md:w-[30%] w-full p-5   ">
          <div>
            <Logo />
            <h1 className="text-xl text-center text-blue-900 font-bold">
              Login
            </h1>
          </div>
          <input
            type="text"
            className={inputStyle}
            placeholder="Email"
            name="email"
            value={details.email}
            onChange={insertValue}
          />
          <input
            type="text"
            className={inputStyle}
            placeholder="Password"
            name="password"
            value={details.password}
            onChange={insertValue}
          />
          <button
            className="bg-green-500 p-3 font-bold hover:bg-green-700"
            onClick={onSubmit}
          >
            Login
          </button>
          <div className="text-end">
            <Link className="w-fit text-end underline text-blue-900" to={"/"}>
              New to Banker ?{" "}
            </Link>
          </div>
        </div>
        <ToastContainer />
      </div>
    </>
  );
};

export default Login;
