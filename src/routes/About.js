import React from "react";
import HeaderNav from "../components/HeaderNav";

const About = () => {
  return (
    <div className="w-full h-screen bg-[#f5f5f5] ">
      <HeaderNav />
      <div className="w-3/6 mx-auto border-2 rounded-md my-6 px-8 py-4 bg-white shadow-sm shadow-[#1717171a]">
        <h1 className="my-1">
          <strong>About DEV</strong>
        </h1>
        <p className="my-1">
          DEV is a community of software developers getting together to help one
          another out. The software industry relies on collaboration and
          networked learning. We provide a place for that to happen. DEV is
          built on Forem: open source software designed to empower communities.
          Because our application is open source, you can inspect every little
          detail of the code, or chip in yourself! Forem is available for anyone
          interested in creating similar communities in any niche or passion.
          Visit our meta Forem, forem.dev for more information. We believe in
          transparency and adding value to the ecosystem. We hope you enjoy
          poking around and participating!
        </p>
        <h1 className="my-1">
          <strong>
            <strong>Leadership</strong>
          </strong>
        </h1>
        <img src="" className="w-full h-[300px] my-1" />
        <p className="my-1">
          DEV is led by Forem's co-founders Ben Halpern, Jess Lee, and Peter
          Frank ("PB&J").
        </p>
        <h1 className="my-1">
          <strong>Team</strong>
        </h1>
        <img src="" className="w-full h-[300px] my-1" />
        <p className="my-1">
          Our team is distributed around the world. We have no office, but we
          come together online each day to build community and improve the
          software careers of millions. Happy coding ❤️
        </p>
      </div>
    </div>
  );
};

export default About;
