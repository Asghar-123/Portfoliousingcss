import Footer from "../components/Footer";
import Navbar from "../components/Navbar";



export default function About() {
  return (
    <div>
      <Navbar />
      <section className="about-section">
        <div className="container">
          <h1>ABOUT ME</h1>
          <p>
            My name is Syed Muhammad Asghar Ali Rizvi. I am a student of class Matric
            (10). I am 15 years old. My hobby is to play mobile games. I have
            skills as an advanced beginner in:
          </p>
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>Tailwind CSS</li>
            <li>Next.js</li>
          </ul>
          <p>
            Other than programming, I also have communication skills. I have no
            experience but am looking for an opportunity after my exams as a
            fresh candidate.
          </p>
          <Footer />
        </div>
      </section>
    </div>
  );
}
