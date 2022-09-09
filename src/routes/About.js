import React from "react";
import Img from "../components/about/Img";
import Info from "../components/about/Info";
import Sub from "../components/about/Sub";
import Title from "../components/about/Title";
import HeaderNav from "../components/HeaderNav";

const About = () => {
  return (
    <div className="w-full min-h-screen bg-[#f5f5f5] overflow-hidden">
      <HeaderNav />
      <div className="w-3/6 mx-auto border-2 rounded-md my-6 px-8 py-4 bg-white shadow-sm shadow-[#1717171a]">
        <Title title={"About DEV"} />
        <Info>
          <p>
            DEV is a community of software developers getting together to help
            one another out. The software industry relies on collaboration and
            networked learning. We provide a place for that to happen. DEV is
            built on Forem: open source software designed to empower
            communities. Because our application is open source, you can inspect
            every little detail of the code, or chip in yourself! Forem is
            available for anyone interested in creating similar communities in
            any niche or passion. Visit our meta Forem, forem.dev for more
            information. We believe in transparency and adding value to the
            ecosystem. We hope you enjoy poking around and participating!
          </p>
        </Info>
        <Sub sub={"Leadership"} />
        <Img img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcST0URa1P9ZQuS3S_PPuGfx3QH8rRbZtHizxg&usqp=CAU" />
        <Info>
          <p className="my-4 text-xl">
            DEV is led by Forem's co-founders Ben Halpern, Jess Lee, and Peter
            Frank ("PB&J").
          </p>
        </Info>
        <Sub sub={"Team"} />
        <Img img="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/c03faee3-dbb1-43a8-8a16-08eaf87b7f29/dby3b60-eebdee56-5540-473a-9cde-8a036e58736f.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2MwM2ZhZWUzLWRiYjEtNDNhOC04YTE2LTA4ZWFmODdiN2YyOVwvZGJ5M2I2MC1lZWJkZWU1Ni01NTQwLTQ3M2EtOWNkZS04YTAzNmU1ODczNmYucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.Z0g5_5Pxa3EVCOfRT7oL_0Z-GqqJboeNL-VmTjIWFW4" />
        <Info>
          <p className="text-xl  my-1">
            Our team is distributed around the world. We have no office, but we
            come together online each day to build community and improve the
            software careers of millions. Happy coding ❤️
          </p>
        </Info>
      </div>
    </div>
  );
};

export default About;
