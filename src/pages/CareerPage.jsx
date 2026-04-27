import React from "react";
import "./careerpage.css";
import Footer from "../components/Footer";
import { useState } from "react";
import { Container, Row, Col, Button, Modal, Form } from "react-bootstrap";

export default function CareerPage() {
  const [showEnquiry, setShowEnquiry] = useState(false);
  
  return (
    <>
      <section className="hero parallax-layer">
        <Container>
          <Row>
            <div className="hero-content">
              <h1>Build a Creative Career With Monz Creative School</h1>
              <p>Industry-ready courses, real projects, expert mentors.</p>
            </div>
          </Row>
        </Container>
      </section>
      <section className="application-section">
        <Container>
          <Row className="application-row">
           
            <div className="col-right illustration-area">
              <img
                src="/images/careerpage/formimage.webp"
                alt="career form illustration"
                className="application-image"
              />
            </div>

            <div className="col-left form-area">
              <h4 className="form-title">Application Form</h4>

              <label>Name</label>
              <input type="text" placeholder="Your Name" />

              <label>Mobile Number</label>
              <input type="text" placeholder="1234567890" />

              <label>Email Id</label>
              <input type="email" placeholder="e.g. yourname@gmail.com" />

              <label>Your Qualification</label>
              <input type="text" placeholder="e.g. MBA, Graduate, Diploma" />

              <label>Enter Department or Position</label>
              <input type="text" placeholder="e.g. Accounts Manager" />

              <div className="row two-columns">
                <div className="col-half">
                  <label>City:</label>
                  <select>
                    <option>Select</option>
                  </select>
                </div>

                <div className="col-half">
                  <label>Experience:</label>
                  <select>
                    <option>Select</option>
                  </select>
                </div>
              </div>

              <label className="resume-label">
                Resume (upload only doc, pdf, docx and file &lt; 5MB)
              </label>

              <div className="file-upload-row">
                <input type="file" />
              </div>

              <button className="submit-btn">Submit ✈</button>
            </div>
          </Row>
        </Container>
      </section>

      <section className="career-intro-section">
        <Container>
          <Row className="career-row">
         
            <div className="col-left">
              <h2 className="career-title">
                Career Opportunities at Monz Creative School
              </h2>

              <p className="career-text">
                Monz Creative School is a modern design & technology institute
                trusted by leading companies across India. We offer creative
                master courses including UI/UX Design, Motion Graphics, 3D
                Animation, VFX, Web Development, and Digital Branding. We have
                been shaping creators into industry-ready professionals for
                years.
              </p>

              <p className="career-text">
                Our institute stands out as one of the most preferred Creative
                Training Institutes because we offer globally recognized
                training, portfolio building guidance, and complete placement
                assistance. Our expert mentors bring real industry experience,
                helping students stay up-to-date with modern tools and
                workflows.
              </p>

              <p className="career-text">
                We offer advanced creative courses with job placement support.
                Our environment encourages innovation, creativity, healthy
                collaboration, and continuous learning.
              </p>

              <p className="career-text">
                Our platform provides a wide range of creative job opportunities
                for freshers, helping you build a successful career in the
                creative industry.
              </p>
            </div>

        
            <div className="col-right">
              <img
                src="/images/careerpage/careerinfo.webp"
                alt="career illustration"
                className="career-image"
              />
            </div>
          </Row>
        </Container>
      </section>

      <section className="values_section parallax-bg">
        <Container>
          <Row>
            <h2 className="values_title">
              What We Believe <br /> at Monz Creative School
            </h2>

         
            <div className="value_card col-12">
              <h3>Creativity First</h3>
              <p>
                Every learner has a unique creative spark. We empower students
                to think differently, experiment boldly, and express ideas
                fearlessly. Imagination is our foundation.
              </p>
            </div>

         
            <div className="value_card col-12">
              <h3>Learning by Doing</h3>
              <p>
                We believe that real growth happens through hands-on projects,
                rapid prototyping, and iterative improvement. Students learn by
                creating — not memorizing.
              </p>
            </div>

      
            <div className="value_card col-12">
              <h3>Industry-Minded Growth</h3>
              <p>
                Our curriculum evolves with industry trends. From design and
                media to emerging tech, we prepare students with skills that
                employers value now — and tomorrow.
              </p>
            </div>

       
            <div className="value_card col-12">
              <h3>Above & Beyond Professionalism</h3>
              <p>
                Creative careers demand discipline. We cultivate a culture of
                ownership, original thinking, and high-quality execution to
                ensure our learners stand out professionally.
              </p>
            </div>
          </Row>
        </Container>
      </section>

      <section className="career_paths_section">
        <div className="career_overlay"></div>
        <Container>
          <Row>
            <h2 className="career_heading">
              Build Your Creative Career at Monz Creative School
            </h2>

            <p className="career_subtext">
              Explore the most in-demand creative paths and choose the one that
              fits your passion. Monz Creative School helps you turn creativity
              into a successful career.
            </p>

            <div className="row career_cards_row">
              <div className="col-lg-4 col-md-6 col-12 career_col">
                <div className="career_card">
                  <div className="career_img_wrapper">
                    <img
                      src="/career-card-logo/career1.jpg "
                      alt="UI/UX Designer"
                    />
                  </div>
                  <h3>UI/UX Designer</h3>
                  <p>
                    Create user-centered digital experiences with modern design
                    tools.
                  </p>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 col-12 career_col">
                <div className="career_card">
                  <div className="career_img_wrapper">
                    <img
                      src="https://monzcreativeschool.com/assets/images/banner/popular-courses/digital.png"
                      alt="Graphic Designer"
                    />
                  </div>
                  <h3>Graphic Designer</h3>
                  <p>
                    Master visual communication and craft stunning brand
                    visuals.
                  </p>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 col-12 career_col">
                <div className="career_card">
                  <div className="career_img_wrapper">
                    <img
                      src="https://monzcreativeschool.com/assets/images/banner/popular-courses/vfx.png"
                      alt="Animator"
                    />
                  </div>
                  <h3>Animator</h3>
                  <p>
                    Bring characters and stories to life with professional
                    animation skills.
                  </p>
                </div>
              </div>
 
              <div className="col-lg-4 col-md-6 col-12 career_col">
                <div className="career_card">
                  <div className="career_img_wrapper">
                    <imgzjk
                      src="https://monzcreativeschool.com/assets/images/banner/popular-courses/uiux.png"
                      alt="Video Editor"
                    />
                  </div>
                  <h3>Video Editor</h3>
                  <p>
                    Craft compelling video stories using professional editing
                    tools.
                  </p>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 col-12 career_col">
                <div className="career_card">
                  <div className="career_img_wrapper">
                    <img
                      src="https://monzcreativeschool.com/assets/images/banner/popular-courses/game.png"
                      alt="VFX Artist"/>

                  </div>
                  <h3>VFX Artist</h3>
                  <p>
                    Create mind-blowing visual effects for films and digital
                    media.
                  </p>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 col-12 career_col">
                <div className="career_card">
                  <div className="career_img_wrapper">
                    <img
                      src="https://monzcreativeschool.com/assets/images/banner/popular-courses/game.png"
                      alt="Motion Graphics Designer"
                    />
                  </div>
                  <h3>Motion Graphics Designer</h3>
                  <p>Design dynamic visuals and animated content for brands.</p>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 col-12 career_col">
                <div className="career_card">
                  <div className="career_img_wrapper">
                    <img
                      src="https://monzcreativeschool.com/assets/images/banner/popular-courses/vr-arch.png"
                      alt="3D Generalist"
                    />
                  </div>
                  <h3>3D Generalist</h3>
                  <p>
                    Model, texture, render and animate 3D assets for films &
                    games.
                  </p>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 col-12 career_col">
                <div className="career_card">
                  <div className="career_img_wrapper">
                    <img
                      src="https://monzcreativeschool.com/assets/images/banner/popular-courses/graphic-design.png"
                      alt="Digital Marketer"
                    />
                  </div>
                  <h3>Digital Marketer</h3>
                  <p>
                    Grow brands with data-driven digital marketing strategies.
                  </p>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 col-12 career_col">
                <div className="career_card">
                  <div className="career_img_wrapper">
                    <img
                      src="https://monzcreativeschool.com/assets/images/banner/popular-courses/motion-graphic.png"
                      alt="Game Designer"
                    />
                  </div>
                  <h3>Game Designer</h3>
                  <p>
                    Design gameplay, characters, and worlds for the gaming
                    industry.
                  </p>
                </div>
              </div>
            </div>
          </Row>
        </Container>
      </section>
      <section className="cta_section">
  <div className="cta_overlay"></div>

  <Container>
    <Row className="justify-content-center">
      <Col lg={10} className="text-center cta_content">

        <h2 className="cta_title">Start Your Creative Career Today</h2>

        <p className="cta_subtitle">
          Join Monz Creative School and turn your passion into a
          professional career in design, animation, editing, VFX & more.
        </p>

        <Button
          variant="danger"
          size="lg"
          className="mt-4"
          onClick={() => setShowEnquiry(true)}
        >
          Enquire Now
        </Button>

        <Modal
          show={showEnquiry}
          onHide={() => setShowEnquiry(false)}
          centered
          size="lg"
          backdrop="static"
          keyboard={false}
          className="enquiry-modal"
        >
          <Modal.Body className="enquiry-body">
            <button
              className="enquiry-close-btn"
              onClick={() => setShowEnquiry(false)}
              aria-label="Close"
            >
              ✕
            </button>

            <div className="enquiry-card">
              <h3 className="enquiry-title">Book Your Free Demo</h3>

              <Form className="enquiry-form">
                <Form.Control type="text" placeholder="Full Name" className="enquiry-input" />
                <Form.Control type="email" placeholder="Email Address" className="enquiry-input" />
                <Form.Control type="tel" placeholder="Mobile Number" className="enquiry-input" />

                <Form.Select className="enquiry-input">
                  <option value="">Course Interested</option>
                  <option>Animation</option>
                  <option>Graphic Design</option>
                  <option>UI / UX Design</option>
                  <option>VFX</option>
                </Form.Select>

                <Button className="enquiry-submit-btn">
                  Submit Enquiry
                </Button>
              </Form>
            </div>

          </Modal.Body>
        </Modal>

      </Col>
    </Row>
  </Container>
</section>


      <Footer />
    </>
  );
}
