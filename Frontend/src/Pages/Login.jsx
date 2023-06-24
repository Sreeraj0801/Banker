import { Link } from "react-router-dom";
import Logo from "../assets/Logo";

const Login = () => {
  const inputStyle = "border border-slate-500 p-2 w-full ";

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
          <input type="text" className={inputStyle} placeholder="Email" />
          <input type="text" className={inputStyle} placeholder="Password" />
          <button className="bg-green-500 p-3 font-bold hover:bg-green-700">
            Login
          </button>
        <div className="text-end">
        <Link className="w-fit text-end underline text-blue-900" to={'/'}>New to Banker ? </Link>
        </div>
        </div>
      </div>
    </>
  );
};

export default Login;
