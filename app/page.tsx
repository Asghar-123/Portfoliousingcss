

import Image from "next/image";
import mineimage from "../public/mineimage.jpg";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div>
      <Navbar />
      <section className="home-section">
        <div className="container">
          <Image src={mineimage} alt="My Profile Image" className="profile-image" />
          <div className="content">
            <h1>
              I am <span className="highlight">Asghar Ali</span>
            </h1>
            <p>I am a Front End Developer as an Advanced Beginner.</p>
          </div>
          <Footer />
        </div>
      </section>
    </div>
  );
}
