import React from "react";
import { motion } from "framer-motion";
import "./StudentWorkGallery.css";

export default function StudentWorkGalleryPage() {
  return (
    <div className="student-gallery-page">
      <section className="hero-section">
        <div className="container">
          <div className="row">
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="hero-title"                 
            >
              Student Work Gallery                                                                              
            </motion.h1>    

            <motion.p
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
                className="hero-sub" 
            >
              
              Creative artworks crafted by students at Monz Creative School
            </motion.p>
          </div>
        </div>        
      </section>

      <section className="gallery-section">
        <div className="container">
          <div className="row gallery-grid">
            <motion.div
              className="col-lg-4 co  l-md-6 gallery-card"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="gallery-img-wrapper">
                <img src="https://monzcreativeschool.com/assets/images/grid-img.webp" alt="Digital Illustration" className="gallery-img" />
                <div className="overlay"><p>Digital Illustration</p></div>
              </div>
            </motion.div>

            {/* CARD 2 */}
            <motion.div
              className="col-lg-4 col-md-6 gallery-card"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="gallery-img-wrapper">
                <img src="https://monzcreativeschool.com/assets/images/grid-img.webp" alt="3D Character" className="gallery-img" />
                <div className="overlay"><p>3D Character</p></div>
              </div>
            </motion.div>

            {/* CARD 3 */}
            <motion.div
              className="col-lg-4 col-md-6 gallery-card"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="gallery-img-wrapper">
                <img src="https://monzcreativeschool.com/assets/images/grid-img.webp" alt="Graphic Poster" className="gallery-img" />
                <div className="overlay"><p>Graphic Poster</p></div>
              </div>
            </motion.div> 

            {/* CARD 4 */}
            <motion.div 
              className="col-lg-4 col-md-6 gallery-card"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="gallery-img-wrapper">
                <img src="https://monzcreativeschool.com/assets/images/grid-img.webp" alt="UI Design" className="gallery-img" />
                <div className="overlay"><p>UI Design</p></div>
              </div>
            </motion.div>

            {/* CARD 5 */}
            <motion.div
              className="col-lg-4 col-md-6 gallery-card"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="gallery-img-wrapper">
                <img src="https://monzcreativeschool.com/assets/images/grid-img.webp" alt="Motion Graphics" className="gallery-img" />
                <div className="overlay"><p>Motion Graphics</p></div>
              </div>
            </motion.div>

            {/* CARD 6 */}
            <motion.div
              className="col-lg-4 col-md-6 gallery-card"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="gallery-img-wrapper">
                <img src="https://monzcreativeschool.com/assets/images/grid-img.webp" alt="Animation Frame" className="gallery-img" />
                <div className="overlay"><p>Animation Frame</p></div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container">
          <div className="row">
            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="cta-title"
            >
              Want to Create Art Like This?
            </motion.h2>

            <motion.a
              href="#contact"
              className="cta-btn"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9 }}
            >
              Join Monz Creative School
            </motion.a>
          </div>
        </div>
      </section>
    </div>
  );
}
