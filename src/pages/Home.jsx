import React from "react";
import Nav from "../components/Nav";
import Hero from "../components/Hero";
import Companies from "../components/Companies";
import Services from "../components/Services";
import Teams from "../components/Teams";

function Home() {
  return (
    <div>
      <Nav />
      <Hero />
      <Companies />
      <Services />
      <Teams />
    </div>
  );
}

export default Home;
