import Footer from "../components/Footer";
import Navbar from "../components/Navbar";


export default function Contact() {
  return (
    <div>
      <Navbar />
      <section className="contact-section">
        <div className="container">
          <h1>CONTACT ME</h1>
          <p>You can contact me on the following platforms:</p>
          <ul>
            <li>Instagram: asghar_ali_126</li>
            <li>Email: smasgharali840@gmail.com</li>
          </ul>
          <Footer />
        </div>
      </section>
    </div>
  );
}
