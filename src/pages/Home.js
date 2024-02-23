import React from "react";
import HeroBanner from "./HomeComponents/HeroBanner";
import Section2 from "./HomeComponents/Section2";
import Section3 from "./HomeComponents/Section3";
import Section4 from "./HomeComponents/Section4";
import Section5 from "./HomeComponents/Section5";
// import Section6 from "./HomeComponents/Section6";

export default function Home() {
  return (
    <div>
      <HeroBanner />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
      {/* <Section6 /> */}
    </div>
  );
}
