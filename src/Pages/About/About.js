import React from "react";
import sr from "../../assets/images/sr.png";
import bar from "../../components/Shared/Progress/Progress";

const About = () => {
  bar();
  return (
    <div className="bg-realBlack py-6 bg-[]">
      <div className="p-4 w-full md:w-2/3 bg-realBlack rounded-lg shadow-xl md:px-6 md:py-8  container mx-auto">
        <img src={sr} className="mx-auto my-4 rounded-xl" alt="" />
        <h1 className="text-center text-4xl font-serif text-white">
          <span className="text-3xl font-sans font-light text-slate-300">
            Created by :{" "}
          </span>{" "}
          Ashraful Islam
        </h1>
        <p className="md:w-2/4 mx-auto mt-8 font-sans text-gray-100">
          HI. I am Ashraful, 17 y/o from Bangladesh. Aiming to become a Junior Stack Web Developer. Also working at Hypixel for 2 years as a senior moderator. I love learning new technologies every day.
          Currently I am learning the skill of web development.
        </p>
        <hr className="my-4 w-1/3 mx-auto" />
        <p className=" my-4 text-center font-sans text-gray-100">
          Wanna listen to one of my current favourite song? 🙃
        </p>
        <iframe
          title="No Friends"
          style={{ borderRadius: "12px" }}
          src="https://open.spotify.com/embed/track/0ud4VAfTH1AOb904kWOTzJ?utm_source=generator"
          className="mx-auto"
          width="50%"
          height="80"
          frameBorder="0"
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        ></iframe>
      </div>
    </div>
  );
};

export default About;
