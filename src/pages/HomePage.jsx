import React from "react";
import Hero from "../components/Hero";
import Info from "../components/Info";
import BookAppointment from "../components/BookAppointment";
import Reviews from "../components/Reviews";
import Doctors from "../components/Doctors";
import About from "../components/About";
export default function HomePage() {
  return (
    <div className="home-section">
      <div style={{ marginTop: "100px" }}>
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
