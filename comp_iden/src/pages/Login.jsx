import Lottie from "react-lottie";
import animationData from "../lotties/animation1.json";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

// import TextField from "@mui/material/TextField";

function Login() {
  const [un, setun] = useState("");
  const [pass, setpass] = useState("");

  const defaultOptions1 = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  const navigate = useNavigate();
  const handleLogin = () => {
    // Handle login logic here
    if (un === "21z114@psgitech.ac.in" && pass === "1234") {
      navigate("/");
    }
  };

  return (
    <div className="bg-[#F5F3F7] min-h-screen flex items-center justify-center">
      <div className="bg-[#E9E4ED] flex rounded-2xl shadow-custom max-w-[1200px] p-7 m-10">
        <div className="sm:w-1/2 sm:block hidden">
          <div className="rounded-2xl ">
            <Lottie options={defaultOptions1} height="100%" width="100%" />
          </div>
        </div>
        <div className="sm:w-1/2 px-16 mt-[70px] ">
          <h1 className="text-[#4A4A4A] font-bold ml-60 text-5xl :mr-20">
            WELCOME
          </h1>
          <p className="text-[#4A4A4A] text-md mt-4 ml-40 mb-5">
            {" "}
            We are glad to see you back with us
          </p>
          <form action="" className="flex flex-col gap-8">
            <input
              className="p-4 mt-8 ml-4 mr-10
               rounded-xl border "
              type="text"
              name="email"
              placeholder="Email"
              value={un}
              onChange={(e) => setun(e.target.value)}
            ></input>
            <input
              className="p-4 mr-10 rounded-xl border  ml-4"
              type="password"
              name="password"
              placeholder="Password"
              value={pass}
              onChange={(e) => setpass(e.target.value)}
            ></input>
            <button
              className="bg-[#8B5FBF] text-white text-xl font-bold whitespace-nowrap ml-4 mr-10  self-stretch justify-center items-center mt-12 px-4 py-4 rounded-xl max-md:mt-10 max-md:px-5"
              aria-label="Login"
              role="button"
              onClick={handleLogin}
            >
              LOGIN
            </button>
          </form>
          <div className="mr-12 mt-10 grid grid-cols-3 items-center text-gray-500">
            <hr className="border-gray-400 ml-20"></hr>
            <p className="text-center mr-6"> OR</p>
            <hr className="border-gray-400 mr-20"></hr>
          </div>
          <p className="mt-5 ml-4">Forgot password?</p>
        </div>
      </div>
    </div>
  );
}

export default Login;
