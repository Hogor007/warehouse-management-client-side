import React from "react";
import { Link } from "react-router-dom";
import NotFoundImg from "../../assets/images/404.png";

const NotFound = () => {
  return (
    <div>
      <h1 className="md:text-5xl text-3xl text-center text-white my-12">
        You've found a page that doesn't exist!
      </h1>
      <img className="mx-auto my-12" src={NotFoundImg} alt="" />
      <h3 className="md:text-4xl text-2xl text-center text-yellow-500">
        Are you lost?
      </h3>
      <h4 className="md:text-6xl text-4xl text-center text-zinc-300 my-6">
        Its just a <span className="text-8xl text-red-500">404</span> error
      </h4>
      <h5 className="md:text-4xl text-3xl text-center text-white my-6">
        No worries ! You still have an option to go back,{" "}
        <span className="text-4xl md:text-6xl text-purple-400 font-serif">
          Yet!
        </span>
      </h5>
      <br />
      <div className="flex justify-center items-center">
        <Link
          to={"/"}
          className=" inline-flex items-center justify-center h-16 px-32 font-medium tracking-wide text-white transition duration-200 rounded-xl md:px-96 shadow-md bg-green-700 hover:bg-green-600 focus:shadow-outline active:scale-90 focus:outline-none"
        >
          Take me back!
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
