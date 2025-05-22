
//Business Name Global Variable
import { BUSINESS_NAME } from "./constants";

//Import CSS
import './App.css';

//Logo
import logo from './logo.svg';

//Borderless Logo
import logo_borderless from './logo_borderless.png';

//NDIS Logo
import ndis from './ndis.png';

//Cover Image
import cover from './cover.webp';

//Graphics
import graphic_a from './graphic-a.png';
import graphic_b from './graphic-a.png';
import graphic_c from './graphic-a.png';

//Map Pin
import customPin from "./icon.svg";

//Animations
import { motion } from "framer-motion";

//Map REMOVE FOR GOOGLE
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";





//App
function App() {

  //Scroll To Top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  //Custom Map Icon
  const customIcon = new L.Icon({
    iconUrl: customPin, // Replace with your pin image URL
    iconSize: [72, 72], // Adjust size of the pin
  });

  return (

    <div>

      <header>

        <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" rel="stylesheet"/>

        <div className="container">

          <div className="logo">
            <img src={logo_borderless} className="App-logo" alt="logo" />  
          </div>

          <nav>
            <ul className="nav-links">
              
              <li><a href="#about">About</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
            <button className="menu-toggle">☰</button>
          </nav>

          <img src={ndis} className="App-logo footer-logo NDIS-logo top" alt="NDIS Logo" />  

          <div class="social-media">
            <a href="https://www.facebook.com" target="_blank"><i class="fab fa-facebook-f"></i></a>
            <a href="https://www.instagram.com" target="_blank"><i class="fab fa-instagram"></i></a>
            <a href="https://www.linkedin.com" target="_blank"><i class="fab fa-linkedin-in"></i></a>
          </div>

        </div>

      </header>


      <main>

        <section id="home" className="hero" style={{background: `url(${cover})`,}} >

          <div className="container">
            <h1><span></span><br></br>Disability Care <br></br><span>It's What We Do</span></h1>

            <p className="hero-p">Providing compassionate and professional care for those in need.</p>


            <div className="service-card">

              <div className="card">
                <h3>Better Plan <span>Advocacy</span></h3>
                <p>Our professionals have 10 years experience in the industry and can advocate on your behalf.</p>
                <img src={graphic_a} className="graphic" alt="Personal Care Graphic" onClick={scrollToTop} />
              </div>

            </div>

            <br></br>
            


            <a href="#contact" className="btn">Get in Touch</a>

            
            





          </div>
        </section>

        <section id="about" className="about">
          <div className="container">
            <h2>About Us</h2>
            <p class="blurb">At Better Plan Advocacy, we are unwavering in our commitment to delivering exceptional support and care tailored to the unique needs of individuals with disabilities. We believe that everyone deserves the opportunity to lead a fulfilling and independent life, and our mission is to empower individuals through personalized care, compassionate support, and innovative solutions. Our dedicated team works closely with individuals, families, and communities to provide a wide range of services designed to enhance quality of life, promote personal growth, and foster meaningful connections. Whether it’s through daily living assistance, therapeutic interventions, or community engagement programs, we strive to create an inclusive environment where everyone feels valued, respected, and supported. Together, we are building a future where barriers are removed, opportunities are abundant, and every individual can confidently embrace their potential and live their best life.</p>
          </div>
        </section>

        <section id="services" className="services">
          <div className="container">
            <h2>Our Services</h2>
            <div className="service-cards">

              <div className="card">
                <h3>Advocacy</h3>
                <p>Specialized therapies tailored to individual needs.</p>
                <img src={graphic_a} className="graphic" alt="Personal Care Graphic" onClick={scrollToTop} />
              </div>

              <div className="card">
                <h3>Community Support</h3>
                <p>Engaging activities and social programs.</p>
                <img src={graphic_a} className="graphic" alt="Personal Care Graphic" onClick={scrollToTop} />
              </div>

              <div className="card">
                <h3>Personal Care</h3>
                <p>Customized personal assistance for daily activities.</p>
                <img src={graphic_a} className="graphic" alt="Personal Care Graphic" onClick={scrollToTop} />
              </div>

            </div>
          </div>
        </section>

        <section id="contact" className="contact">
          <motion.div
            className="container"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5 }}
          >
            <div className="container">
              <h2>Connect With Us Today</h2>
              <form className="contact-form">
                <input type="text" className="form-input" placeholder="Name" required />
                <input type="email" className="form-input" placeholder="Email" required />
                <textarea className="form-textarea" placeholder="Message" required></textarea>
                <button type="submit" className="form-button">Submit</button>
              </form>
            </div>
          </motion.div>
        </section>

        <section id="map" className="map">
          <div className="container">
            <div style={{ height: "400px", width: "100%" }}>
              <MapContainer
                center={[-34.00336, 151.06330]} // Replace with your desired coordinates
                zoom={13}
                scrollWheelZoom={false}
                style={{ height: "100%", width: "100%" }}
              >
              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              />
              <Marker position={[-34.00336, 151.06330]} icon={customIcon}>
              </Marker>
            </MapContainer>
            </div>      
          </div>
        </section>

      </main>

      <footer>
        <div className="container">

          <img src={ndis} className="App-logo footer-logo NDIS-logo" alt="NDIS Logo" />  
          
          <img src={logo_borderless} className="App-logo footer-logo" alt="Better Plan Logo" onClick={scrollToTop} /> 



          <p class="footer-cw">&copy; {new Date().getFullYear()} {BUSINESS_NAME}. All rights reserved.</p>
          
          <div class="social-media-footer">
            <a href="https://www.facebook.com" target="_blank"><i class="fab fa-facebook-f"></i></a>
            <a href="https://www.instagram.com" target="_blank"><i class="fab fa-instagram"></i></a>
            <a href="https://www.linkedin.com" target="_blank"><i class="fab fa-linkedin-in"></i></a>
          </div>

        </div>

      </footer>

    </div>

  );
}

export default App;
