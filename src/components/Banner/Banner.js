import React from "react";
import { Link } from "react-router-dom";
import bubbles from "../../assets/images/bubbles.jpg";
import thunderly from "../../assets/images/thunderly.gif";
import logo from "../../assets/images/bolt.gif";

const Header = () => {
  return (
    <div>
      <div
        className="hero"
        style={{
          backgroundImage: `url(${bubbles})`,
          minHeight: "70vh",
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content flex-col  lg:flex-row-reverse">
          <div className="lg:w-1/2 sm:w-2/3 w-full animate-wiggle">
            <img src={thunderly} className="rounded-2xl w-2/3 mx-auto" alt="" />
          </div>
          <div className="lg:w-1/2 sm:w-2/3 w-full animate-open px-4 my-3 ">
            <h1 className="md:text-5xl text-3xl text-center md:text-justify font-bold text-white font-sans tracking-widest md:italic">
              GameSpot™
              <span>
                <img src={logo} alt="" className="inline w-1/5" />
              </span>
            </h1>
            <h3 className=" md:text-2xl text-xl  font-bold text-slate-300 font-serif">
              For Gamers, By Gamers.
            </h3>
            <p className="py-3 md:py-6 mb-4 text-slate-200 md:text-lg ">
              GameSpot™ is a one-stop gaming solution platform for gamers to buy and sell their products. It is a platform where anyone can get from a Nintendo Console to a PS5! Need a gaming chair or an e-pal? We got you covered!
            </p>

            <Link
              to="/about"
              data-mdb-ripple="true"
              data-mdb-ripple-color="white"
              className="text-white bg-darki py-4 px-8 rounded-lg md:ml-48 shadow-lg active:scale-90 hover:text-gray-300 transition-all"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
