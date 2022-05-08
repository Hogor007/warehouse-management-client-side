import React from "react";
import { Link } from "react-router-dom";
import thunderly from "../../assets/images/thunderly.gif";

const Header = () => {
  return (
    <div>
      {/* <div
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
      </div> */}
      <div className="relative bg-gray-500 overflow-hidden -z-0">
        <div className="max-w-7xl mx-auto">
          <div className="relative z-10 pb-8 bg-gray-500 sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
            <div>
              <div className="absolute z-10 top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden">
                <div className="rounded-lg shadow-md bg-gray-500 ring-1 ring-gray-500 ring-opacity-5 overflow-hidden">
                  <div className="px-5 pt-4 flex items-center justify-between">
                    <div>
                      <img className="h-8 w-auto" src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg" alt="" />
                    </div>
                    <div className="-mr-2">
                      <button type="button" className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                        <span className="sr-only">Close main menu</span>
                        <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" aria-hidden="true">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
                <div className="sm:text-center lg:text-left">
                  <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                    <span className="block xl:inline">For Gamers,{" "}</span>
                    <span className="block text-green-600 xl:inline">By Gamers.</span>
                  </h1>
                  <p className="mt-3 text-base text-gray-100 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">GameSpot™ is a one-stop gaming solution platform for gamers to buy and sell their products. It is a platform where anyone can get from a Nintendo Console to a PS5! Need a gaming chair or an e-pal? We got you covered!</p>
                  <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                    <div className="rounded-md shadow">
                      <Link to="/about" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10"> Learn More </Link>
                    </div>
                  </div>
                </div>
              </main>
            </div>
          </div>
          <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
            <img className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full" src={thunderly} alt="" />
          </div>
        </div>

      </div>
    </div>
  )
};

export default Header;
