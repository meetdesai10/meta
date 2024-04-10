import React from "react";
import Navbar from "../Components/Navbar";
import Hero from "../Components/Hero";
import Info from "../Components/Info";
import About from "../Components/About";
import BookAppointment from "../Components/BookAppointment";
import Reviews from "../Components/Reviews";
import Doctors from "../Components/Doctors";
import Footer from "../Components/Footer";
import "../index.css"

function Home() {
  return (
    <div className="home-section">
      <div style={{marginTop: "100px"}}>
        <Hero />
        <Info />
        <About />
        <BookAppointment />
        <Reviews />
        <Doctors />
      </div>
    </div>
  );
}

export default Home;