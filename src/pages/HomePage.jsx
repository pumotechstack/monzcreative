import React, { useState, useRef } from "react";
import { Container, Row, Col, Button, Form } from "react-bootstrap";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { FaQuoteRight } from "react-icons/fa";
import { AiFillStar } from "react-icons/ai";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "bootstrap/dist/css/bootstrap.min.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "../homepage.css";
import BranchAccordion from "../components/BranchAccordion";
import Footer from "../components/Footer";
import EnquiryModal from "../components/EnquiryForm";

export default function HomePage() {
  const { scrollY } = useScroll();
  const formRef = useRef(null);
  const isInView = useInView(formRef, { once: false, amount: 0.3 });

  const bgY = useTransform(scrollY, [0, 800], [0, 200]);
  const textY = useTransform(scrollY, [0, 600], [0, -100]);
  const yPos = useTransform(scrollY, [0, 500], [0, -100]);
  // const whyBgY = useTransform(scrollY, [0, 800], ["0%", "30%"]);

  const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbzChgMHQ5CSjvCHHuxgAmLZk4WhRMQQe9Zo5Yj-GwXWX9GWtaUYb5YQ2WkvTHY0gd-VOg/exec";

  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    setLoading(true);

    const formData = new FormData(e.target);

    fetch(SCRIPT_URL, {
      method: "POST",
      body: formData,
    })
      .then(() => {
        window.location = "/thank-you";
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
      });
  };

  const topLogos = [
    "/companies-logo/1.svg",
    "/companies-logo/2.svg",
    "/companies-logo/3.svg",
    "/companies-logo/4.svg",
    "/companies-logo/5.svg",
    "/companies-logo/6.svg",
    "/companies-logo/7.svg",
    "/companies-logo/8.svg",
    "/companies-logo/9.svg",
    "/companies-logo/10.svg",
  ];

  const bottomLogos = [
    "/companies-logo/21.svg",
    "/companies-logo/22.svg",
    "/companies-logo/11.svg",
    "/companies-logo/12.svg",
    "/companies-logo/13.svg",
    "/companies-logo/14.svg",
    "/companies-logo/15.svg",
    "/companies-logo/16.svg",
    "/companies-logo/17.svg",
    "/companies-logo/20.svg",
  ];

  return (
    <>
      {/* ======= Banner Section ======= */}
      <section className="banner-section">
        <motion.div
          className="banner-bg"
          style={{
            y: bgY,
            backgroundImage:
              "url('https://monzcreativeschool.com/assets/images/banner/banner-1.webp')",
          }}
        ></motion.div>

        <Container className="banner-content text-center">
          <Row>
            <Col>
              <motion.h1
                style={{ y: textY }}
                initial={{ opacity: 0, y: -60 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
              ></motion.h1>
            </Col>
          </Row>
        </Container>
      </section>

      {/* ====== About Section ====== */}
      <section className="about-section">
        <motion.video
          className="about-bg-video"
          src="/aboutvideobg2.mp4"
          autoPlay
          muted
          loop
          playsInline
          style={{ y: yPos }}
        ></motion.video>

        <div className="about-overlay"></div>


        <Container>
          <Row className="align-items-center">
            <Col lg={6} md={12} className="about-tsection">
              <h2>
                About Monz Creative School <br />
                Shaping <span className="highlight">Creative Futures</span>
              </h2>
            </Col>

            <Col lg={6} md={12} className="about-content-section">
              <p>
                Since 2009, Monz Creative School has been at the forefront of
                animation and digital media education in India. We transform
                passionate individuals into industry-ready professionals.
                <br />
                <br />
                Our comprehensive programs, expert faculty, and strong industry
                connections ensure that every student receives world-class
                training in animation, VFX, game design, and digital arts.
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      {/* ======= Enquiry Section ======= */}
      <section className="enquiry-section">
        <div className="parallax-bg"></div>
        <Container>
          <Row className="align-items-center">
            <Col lg={6}>
              <div className="video-wrapper">
                <video
                  className="enquiry-video"
                  src="/boyvideo3.mp4"
                  autoPlay
                  muted
                  loop
                  playsInline
                ></video>
              </div>
            </Col>

            {/* Right Side - Animated Form */}
            <Col className="animatedform" lg={5}>
              <motion.div
                ref={formRef}
                initial={{ opacity: 0, x: 100, y: 50 }}
                animate={
                  isInView
                    ? { opacity: 1, x: 0, y: 0 }
                    : { opacity: 0, x: 100, y: 50 }
                }
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="form-box p-4"
              >
                <h3 className="form-title">Fill the Form Now!</h3>
                <h2 className="discount-text">Grab Your 20% Discount</h2>

                <Form className="hero-form" onSubmit={handleSubmit}>

                  <Form.Group className="mb-3">
                    <Form.Control
                      type="text"
                      name="Name"
                      placeholder="Enter Your Name"
                      required
                    />
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Control
                      type="tel"
                      name="Phone Number"
                      placeholder="Enter Mobile Number"
                      required
                    />
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Control
                      type="email"
                      name="Email"
                      placeholder="Enter Your Email Id"
                      required
                    />
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Control
                      type="text"
                      name="Course"
                      placeholder="Enter Your Interested Course"
                      required
                    />
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Select name="Branch" required>
                      <option value="">Preferred Branch</option>

                      <option value="Coimbatore - Gandhipuram">
                        Coimbatore - Gandhipuram
                      </option>

                      <option value="Coimbatore - Malumichampatti">
                        Coimbatore - Malumichampatti
                      </option>

                      <option value="Coimbatore - Saravanampatti">
                        Coimbatore - Saravanampatti
                      </option>

                      <option value="Tiruppur">Tiruppur</option>

                      <option value="Chennai - Vadapalani">
                        Chennai - Vadapalani
                      </option>

                      <option value="Chennai - Velachery">
                        Chennai - Velachery
                      </option>

                      <option value="Chennai - Tambaram">
                        Chennai - Tambaram
                      </option>

                      <option value="Chennai - Poonamallee">
                        Chennai - Poonamallee
                      </option>

                      <option value="Chennai - Ambattur">
                        Chennai - Ambattur
                      </option>

                      <option value="Chennai - Guduvancheri">
                        Chennai - Guduvancheri
                      </option>

                      <option value="Kanchipuram">Kanchipuram</option>

                      <option value="Bangalore - Marathahalli">
                        Bangalore - Marathahalli
                      </option>

                      <option value="Bangalore - Bommasandra">
                        Bangalore - Bommasandra
                      </option>

                      <option value="Hosur">Hosur</option>

                    </Form.Select>
                  </Form.Group>

                  <Button className="submit-btn w-100" type="submit" disabled={loading}>
                    {loading ? (
                      <>
                        <span className="spinner"></span> Submitting...
                      </>
                    ) : (
                      "Submit"
                    )}
                  </Button>

                </Form>
              </motion.div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="monz-why-section">
        <div className="monz-why-overlay"></div>

        <Container className="monz-why-container">
          <Row className="text-center mb-5">
            <Col>
              <h2 className="monz-why-title">
                Why Choose Monz Creative School ?
              </h2>
              <p className="monz-why-subtitle">
                Where imagination meets innovation — we empower students with
                creative thinking, technical mastery, and professional
                excellence.
              </p>
            </Col>
          </Row>

          <Row className="gy-4">
            {[
              {
                title: "Creative Mentors",
                text: "Guided by experienced artists who inspire imagination and help you grow real creative skills.",
              },
              {
                title: "Real Industry Projects",
                text: "Get hands-on experience by working on live projects from real-world creative studios.",
              },
              {
                title: "Career Launchpad",
                text: "100% placement assistance with personalized portfolio building and interview preparation.",
              },
              {
                title: "State-of-the-Art Labs",
                text: "Learn in modern classrooms equipped with the latest design and production technologies.",
              },
              {
                title: "Creative Mindset",
                text: "We don’t just teach software — we train your mind to think like a true creator.",
              },
              {
                title: "Global Perspective",
                text: "Stay ahead with exposure to global design trends and international creative standards.",
              },
            ].map((item, i) => (
              <Col lg={4} md={6} key={i}>
                <motion.div
                  className="monz-why-card"
                  whileHover={{ scale: 1.05, y: -8 }}
                  transition={{ type: "spring", stiffness: 200 }}
                >
                  <div className="monz-why-icon">
                    <i className="fa-solid fa-palette"></i>
                  </div>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </motion.div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      <section className="creative-courses py-5" id="courses-section">
        <Container>
          <Row>
            <h2 className="text-center mb-3 fw-bold">
              Choose your Learning Track
            </h2>
            <Swiper
              modules={[Navigation, Autoplay]}
              spaceBetween={30}
              slidesPerView={3}
              navigation
              loop={true}
              breakpoints={{
                0: { slidesPerView: 1 },
                768: { slidesPerView: 2 },
                992: { slidesPerView: 3 },
              }}
              className="p-3"
            >
              {/* === VFX & Animation === */}
              <SwiperSlide>
                <div className="course-card">
                  <img
                    src="/images/homepage/course-card-image/vfx.webp"
                    alt="VFX & Animation"
                    className="course-img"
                  />
                  <div className="p-2">
                    <h3>Master in VFX</h3>
                    <div className="tools">
                      {[
                        "/tools/ps.png",
                        "/tools/blender.png",
                        "/tools/m.png",
                        "/tools/ae.png",
                        "/tools/au.png",
                        "/tools/s.png",
                        "/tools/u.png",
                        "/tools/marmost.png",
                        "/tools/color-m.png",
                        "/tools/houdini.png",
                        "/tools/nuke.png",
                        "/tools/davinci.png",
                        "/tools/z.png",
                      ].map((src, i) => (
                        <img key={i} src={src} alt={`Tool ${i + 1}`} />
                      ))}
                    </div>
                    <p>Duration: 12 Months</p>

                    <EnquiryModal courseName="Master in VFX" />
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="course-card">
                  <img
                    src="/images/homepage/course-card-image/graphic-design.webp"
                    alt="AR / VR Design"
                    className="course-img"
                  />
                  <div className="p-2">
                    <h3>Master in Graphic Design</h3>
                    <div className="tools">
                      {[
                        "/tools/ps.png",
                        "/tools/ai.png",
                        "/tools/coreldraw.png",
                        "/tools/dimension.png",
                        "/tools/id.png",
                        "/tools/xd.png",
                        "/tools/pr.png",
                        "/tools/ae.png",
                        "/tools/au.png",
                        "/tools/figma.png",
                      ].map((src, i) => (
                        <img key={i} src={src} alt={`Tool ${i + 1}`} />
                      ))}
                    </div>

                    <p>Duration: 6 Months</p>

                    <EnquiryModal courseName="Master in Graphic Design" />
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="course-card">
                  <img
                    src="/images/homepage/course-card-image/uiux.webp"
                    alt="Multimedia & Motion Graphics"
                    className="course-img"
                  />
                  <div className="p-2">
                    <h3>Master in UI/UX Design</h3>
                    <div className="tools">
                      {[
                        "/tools/ps.png",
                        "/tools/ai.png",
                        "/tools/coreldraw.png",
                        "/tools/dimension.png",
                        "/tools/id.png",
                        "/tools/xd.png",
                        "/tools/pr.png",
                        "/tools/ae.png",
                        "/tools/au.png",
                        "/tools/figma.png",
                        "/tools/image.png",
                        "/tools/js.png",
                        "/tools/hmtl.png",
                        "/tools/bootstrap.png",
                        "/tools/css.png",
                      ].map((src, i) => (
                        <img key={i} src={src} alt={`Tool ${i + 1}`} />
                      ))}
                    </div>
                    <p>Duration: 6 Months</p>

                    <EnquiryModal courseName="Master in UI/UX Design" />
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="course-card">
                  <img
                    src="/images/homepage/course-card-image/game.webp"
                    alt="Multimedia & Motion Graphics"
                    className="course-img"
                  />
                  <div className="p-2">
                    <h3>Master in Game Design</h3>
                    <div className="tools">
                      {[
                        "/tools/ps.png",
                        "/tools/blender.png",
                        "/tools/pr.png",
                        "/tools/m.png",
                        "/tools/s.png",
                        "/tools/u.png",
                        "/tools/python.png",
                        "/tools/z.png",
                        "/tools/c++.png",
                      ].map((src, i) => (
                        <img key={i} src={src} alt={`Tool ${i + 1}`} />
                      ))}
                    </div>
                    <p>Duration: 9 Months</p>

                    <EnquiryModal courseName="Master in Game Design" />
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="course-card">
                  <img
                    src="/images/homepage/course-card-image/digital.webp"
                    alt="Multimedia & Motion Graphics"
                    className="course-img"
                  />
                  <div className="p-2">
                    <h3>Master in Digital Marketing</h3>
                    <div className="tools">
                      {[
                        "/tools/blender.png",
                        "/tools/ps.png",
                        "/tools/google-ads.png",
                        "/tools/meta.png",
                        "/tools/hubspot.png",
                      ].map((src, i) => (
                        <img key={i} src={src} alt={`Tool ${i + 1}`} />
                      ))}
                    </div>
                    <p>Duration: 9 Months</p>

                    <EnquiryModal courseName="Master in Digital Marketing" />
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="course-card">
                  <img
                    src="/images/homepage/course-card-image/sap.webp"
                    alt="Multimedia & Motion Graphics"
                    className="course-img"
                  />
                  <div className="p-2">
                    <h3>Master in SAP</h3>
                    <div className="tools">
                      {["/tools/sap.png"].map((src, i) => (
                        <img key={i} src={src} alt={`Tool ${i + 1}`} />
                      ))}
                    </div>
                    <p>Duration: 9 Months</p>

                    <EnquiryModal courseName="Master in SAP" />

                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="course-card">
                  <img
                    src="/images/homepage/course-card-image/digital.webp"
                    alt="Multimedia & Motion Graphics"
                    className="course-img"
                  />
                  <div className="p-2">
                    <h3>Master in Animation</h3>
                    <div className="tools">
                      {[
                        "/tools/ps.png",
                        "/tools/blender.png",
                        "/tools/pr.png",
                        "/tools/ae.png",
                        "/tools/au.png",
                        "/tools/s.png",
                        "/tools/u.png",
                        "/tools/m.png",
                      ].map((src, i) => (
                        <img key={i} src={src} alt={`Tool ${i + 1}`} />
                      ))}
                    </div>
                    <p>Duration: 9 Months</p>

                    <EnquiryModal courseName="Master in Animation" />
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="course-card">
                  <img
                    src="/images/homepage/course-card-image/arch.webp"
                    alt="Multimedia & Motion Graphics"
                    className="course-img"
                  />
                  <div className="p-2">
                    <h3>Master in Architectural Design</h3>
                    <div className="tools">
                      {[
                        "/tools/blender.png",
                        "/tools/u.png",
                        "/tools/marmost.png",
                        "/tools/s.png",
                        "/tools/c++.png",
                        "/tools/python.png",
                        "/tools/pr.png",
                        "/tools/au.png",
                      ].map((src, i) => (
                        <img key={i} src={src} alt={`Tool ${i + 1}`} />
                      ))}
                    </div>
                    <p>Duration: 9 Months</p>


                    <EnquiryModal courseName="Master in Architectural Design" />
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </Row>
        </Container>
      </section>

      <section className="students-work-parallax-section">
        <div className="students-work-bg"></div>

        <Container className="text-center">
          <h2 className="students-work-heading">Where Our Students Work</h2>
        </Container>

        <Row className="students-work-marquee-row">
          <div className="students-work-marquee">
            <div className="students-work-marquee-group">
              {topLogos.map((src, index) => (
                <div className="students-work-logo-card" key={index}>
                  <img src={src} alt={`Company ${index + 1}`} />
                </div>
              ))}
            </div>
            <div className="students-work-marquee-group" aria-hidden="true">
              {topLogos.map((src, index) => (
                <div className="students-work-logo-card" key={index + 20}>
                  <img src={src} alt={`Company ${index + 1}`} />
                </div>
              ))}
            </div>
          </div>
        </Row>

        <Row className="students-work-marquee-row reverse">
          <div className="students-work-marquee reverse">
            <div className="students-work-marquee-group reverse">
              {bottomLogos.map((src, index) => (
                <div className="students-work-logo-card" key={index + 40}>
                  <img src={src} alt={`Company ${index + 1}`} />
                </div>
              ))}
            </div>
            <div
              className="students-work-marquee-group reverse"
              aria-hidden="true"
            >
              {bottomLogos.map((src, index) => (
                <div className="students-work-logo-card" key={index + 60}>
                  <img src={src} alt={`Company ${index + 1}`} />
                </div>
              ))}
            </div>
          </div>
        </Row>
      </section>

      <section className="students-gallery-section">
        <Container>
          <Row className="justify-content-center text-center">
            <Col lg={10}>
              <h2 className="students-gallery-heading">
                Our Students’ Work Gallery
              </h2>
              <p className="students-gallery-subtext">
                A glimpse of our talented students’ projects — creative,
                innovative, and inspiring.
              </p>
            </Col>
          </Row>
        </Container>

        <Row className="justify-content-center mt-4">
          <Col lg={12} md={10} sm={12}>
            <div className="students-gallery-image-wrapper">
              <img
                src="https://www.animaster.com/wp-content/uploads/2022/12/animation-gallery.jpg"
                alt="Students Work Collage"
                className="students-gallery-image"
              />
            </div>
          </Col>
        </Row>
      </section>
      <section className="testimonial-section">
        <div className="testimonial-overlay"></div>
        <h2>What Our Students Say</h2>

        <div className="testimonial-grid">
          {/* 1 */}
          <div className="testimonial-card">
            <div className="image-wrapper">
              <img
                src="https://cdn-icons-png.flaticon.com/512/848/848006.png"
                alt="profile"
              />
              <div className="quote-icon">
                <FaQuoteRight />
              </div>
            </div>
            <p>
              “Monz Creative School gave me industry-level exposure and
              confidence. The trainers explained concepts clearly and focused
              more on practical learning. I’m now confident in my creative
              skills and portfolio.”
            </p>
            <div className="star-rating">
              {[...Array(5)].map((_, i) => (
                <AiFillStar key={i} />
              ))}
            </div>
            <h3>— Arun Kumar</h3>
            <span>Graphic Design Student</span>
          </div>

          {/* 2 */}
          <div className="testimonial-card">
            <div className="image-wrapper">
              <img
                src="https://cdn-icons-png.flaticon.com/512/848/848006.png"
                alt="profile"
              />
              <div className="quote-icon">
                <FaQuoteRight />
              </div>
            </div>
            <p>
              “The learning environment at Monz Creative School is very
              supportive. Each student gets individual attention, and the
              faculty ensures we understand every concept thoroughly. Highly
              recommended for creative courses.”
            </p>
            <div className="star-rating">
              {[...Array(5)].map((_, i) => (
                <AiFillStar key={i} />
              ))}
            </div>
            <h3>— Priya S</h3>
            <span>UI/UX Design Student</span>
          </div>

          {/* 3 */}
          <div className="testimonial-card">
            <div className="image-wrapper">
              <img
                src="https://cdn-icons-png.flaticon.com/512/848/848006.png"
                alt="profile"
              />
              <div className="quote-icon">
                <FaQuoteRight />
              </div>
            </div>
            <p>
              “The VFX course at Monz Creative School is well-structured. The
              studio-style environment and guidance helped me build a strong
              professional portfolio.”
            </p>
            <div className="star-rating">
              {[...Array(5)].map((_, i) => (
                <AiFillStar key={i} />
              ))}
            </div>
            <h3>— Sathish R</h3>
            <span>Multimedia Student</span>
          </div>

          {/* 4 */}
          <div className="testimonial-card">
            <div className="image-wrapper">
              <img
                src="https://cdn-icons-png.flaticon.com/512/848/848006.png"
                alt="profile"
              />
              <div className="quote-icon">
                <FaQuoteRight />
              </div>
            </div>
            <p>
              “What I liked most about Monz Creative School is the practical
              approach. Live projects, expert guidance, and career support
              helped me prepare for real-world jobs.”
            </p>
            <div className="star-rating">
              {[...Array(5)].map((_, i) => (
                <AiFillStar key={i} />
              ))}
            </div>
            <h3>— Keerthana M,</h3>
            <span>Product Design Student</span>
          </div>

          {/* 5 */}
          <div className="testimonial-card">
            <div className="image-wrapper">
              <img
                src="https://cdn-icons-png.flaticon.com/512/848/848006.png"
                alt="profile"
              />
              <div className="quote-icon">
                <FaQuoteRight />
              </div>
            </div>
            <p>
              “Monz Creative School is the right place for anyone who wants to
              build a strong career in design. The trainers are friendly,
              experienced, and always ready to help.”
            </p>
            <div className="star-rating">
              {[...Array(5)].map((_, i) => (
                <AiFillStar key={i} />
              ))}
            </div>
            <h3>— Vignesh P</h3>
            <span>Animation Student</span>
          </div>

          {/* 6 */}
          <div className="testimonial-card">
            <div className="image-wrapper">
              <img
                src="https://cdn-icons-png.flaticon.com/512/848/848006.png"
                alt="profile"
              />
              <div className="quote-icon">
                <FaQuoteRight />
              </div>
            </div>
            <p>
              “The best creative training institute I’ve come across. From
              basics to advanced concepts, everything is taught clearly with
              real-time examples.”
            </p>
            <div className="star-rating">
              {[...Array(5)].map((_, i) => (
                <AiFillStar key={i} />
              ))}
            </div>
            <h3>— Nandhini R</h3>
            <span>Fashion Design Student</span>
          </div>
        </div>
      </section>

        {/* CTA SECTION */}
        <section className="cta-section text-center">
          <Container>
            <Row className="justify-content-center">
              <Col lg={8}>
                <h2 className="cta-heading">
                  Ready to Start Your Creative Journey?
                </h2>
                <p className="cta-subtext">
                  Join thousands of successful students who transformed their
                  careers with us
                </p>

                <div className="cta-buttons">
                  <Button className="cta-btn-dark">
                    <a className="redirect-bt" href="/courses">
                      View all Courses
                    </a>
                  </Button>

                  <EnquiryModal/>

                </div>
              </Col>
            </Row>
          </Container>
        </section>

      <BranchAccordion />
      <Footer />
    </>
  );
}
