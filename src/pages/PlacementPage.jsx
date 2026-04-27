import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "../components/css/PlacementPage.css";
import Footer from "../components/Footer";

import {
  Briefcase,
  Users,
  Lightbulb,
  GraduationCap,
  BookOpen,
  Rocket,
  Trophy,
} from "lucide-react";

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
  "/companies-logo/10.svg"
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
    "/companies-logo/20.svg"
];

function PlacementPage() {
  return (
    <div className="placement-page">
      <section className="placement-hero-section text-center">
        <div className="placement-hero-bg"></div>
        <Container>
          <Row>
            <Col>
              <div className="placement-hero-content">
                <h1>
                  WHY CHOOSE <br /> <span>MONZ CREATIVE SCHOOL </span> FOR PLACEMENT
                </h1>
                <p>
                  Our students don't just graduate — they get hired by industry
                  leaders.
                </p>
    
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="placement-section py-5">
        <Container>
          <div className="text-center mb-5">
            <h2 className="placement-title">Our Successful Placements</h2> 
            <p className="placement-description">
              We are proud of our students who have secured positions in top
              companies across design, development, and marketing fields.
            </p>
          </div>

          <Row className="g-4">
            <Col xs={6} md={4} lg={2} xl={2}>
              <Card className="placement-card text-center">
                <Card.Img
                  variant="top"
                  src="/images/placement2/Ihjaz.webp"
                  className="placement-img"
                />

                <Card.Body>
                  <Card.Title>Ihjaz ul islam M</Card.Title>
                  <Card.Text>VideoEditor </Card.Text>
                  <img
                    src="/assets/company/zoho.png"
                    alt="Zoho"
                    className="company-logo"
                  />

                </Card.Body>
              </Card>
            </Col>

            <Col xs={6} md={4} lg={2} xl={2}>
              <Card className="placement-card text-center">
                <Card.Img
                  variant="top"
                  src="/images/placement2/ferdine.webp" 
                  className="placement-img"
                />

                <Card.Body>
                  <Card.Title>Fredine b dhas</Card.Title>
                  <Card.Text>sap fico end user</Card.Text>
                  <img
                    src="/assets/company/amazon.png"
                    alt="Amazon"
                    className="company-logo"
                  />

                </Card.Body>
              </Card>
            </Col>

            <Col xs={6} md={4} lg={2} xl={2}>
              <Card className="placement-card text-center">
                <Card.Img
                  variant="top"
                  src="/images/placement2/yogesh.webp" 
                  className="placement-img"
                />

                <Card.Body>
                  <Card.Title>Yogesh</Card.Title>
                  <Card.Text>Fico consultant</Card.Text>
                  <img
                    src="/assets/company/zoho.png"
                    alt="Zoho"
                    className="company-logo"
                  />

                </Card.Body>
              </Card>
            </Col>

            <Col xs={6} md={4} lg={2} xl={2}>
              <Card className="placement-card text-center">
                <Card.Img
                  variant="top"
                  src="/images/placement2/mohan.webp" 
                  className="placement-img"
                />

                <Card.Body>
                  <Card.Title>Mohan Raj M </Card.Title>
                  <Card.Text>UI UX designer </Card.Text>
                  <img
                    src="/assets/company/accenture.png"
                    alt="Accenture"
                    className="company-logo"
                  />

                </Card.Body>
              </Card>
            </Col>

            <Col xs={6} md={4} lg={2} xl={2}>
              <Card className="placement-card text-center">
                <Card.Img
                  variant="top"
                  src="/images/placement2/dhava.webp" 
                  className="placement-img"
                />

                <Card.Body>
                  <Card.Title>Dhava Kumar K</Card.Title>
                  <Card.Text>UI-UX Designer</Card.Text>
                  <img
                    src="/assets/company/zoho.png"
                    alt="Zoho"
                    className="company-logo"
                  />

                </Card.Body>
              </Card>
            </Col>

            <Col xs={6} md={4} lg={2} xl={2}>
              <Card className="placement-card text-center">
                <Card.Img
                  variant="top"
                  src="/images/placement2/mohankumar.webp" 
                  className="placement-img"
                />

                <Card.Body>
                  <Card.Title>Manoj Kumar M </Card.Title>
                  <Card.Text>Graphic Designer</Card.Text>
                  <img
                    src="/assets/company/zoho.png"
                    alt="Zoho"
                    className="company-logo"
                  />

                </Card.Body>
              </Card>
            </Col>

            <Col xs={6} md={4} lg={2} xl={2}>
              <Card className="placement-card text-center">
                <Card.Img
                  variant="top"
                  src="/images/placement2/asarudeen.webp" 
                  className="placement-img"
                />

                <Card.Body>
                  <Card.Title>Asarudeen A</Card.Title>
                  <Card.Text>sap fico end user</Card.Text>
                  <img
                    src="/assets/company/zoho.png"
                    alt="Zoho"
                    className="company-logo"
                  />

                </Card.Body>
              </Card>
            </Col>

            <Col xs={6} md={4} lg={2} xl={2}>
              <Card className="placement-card text-center">
                <Card.Img
                  variant="top"
                  src="/images/placement2/abinaya.webp" 
                  className="placement-img"
                />

                <Card.Body>
                  <Card.Title>Abinaya shree.v</Card.Title>
                  <Card.Text>Graphic Designer</Card.Text>
                  <img
                    src="/assets/company/zoho.png"
                    alt="Zoho"
                    className="company-logo"
                  />

                </Card.Body>
              </Card>
            </Col>

            <Col xs={6} md={4} lg={2} xl={2}>
              <Card className="placement-card text-center">
                <Card.Img
                  variant="top"
                  src="/images/placement2/bharanidharan.webp" 
                  className="placement-img"
                />

                <Card.Body>
                  <Card.Title>Bharanidharan </Card.Title>
                  <Card.Text>HR Recruiter </Card.Text>
                  <img
                    src="/assets/company/zoho.png"
                    alt="Zoho"
                    className="company-logo"
                  />

                </Card.Body>
              </Card>
            </Col>

            <Col xs={6} md={4} lg={2} xl={2}>
              <Card className="placement-card text-center">
                <Card.Img
                  variant="top"
                  src="/images/placement2/Priyadharshini.webp" 
                  className="placement-img"
                />

                <Card.Body>
                  <Card.Title>Priyadharshini.K</Card.Title>
                  <Card.Text>Fico consultant</Card.Text>
                  <img
                    src="/assets/company/zoho.png"
                    alt="Zoho"
                    className="company-logo"
                  />

                </Card.Body>
              </Card>
            </Col>

            <Col xs={6} md={4} lg={2} xl={2}>
              <Card className="placement-card text-center">
                <Card.Img
                  variant="top"
                  src="/images/placement2/Santosh.webp" 
                  className="placement-img"
                />

                <Card.Body>
                  <Card.Title>Santosh Kumar  </Card.Title>
                  <Card.Text>sap fico end user</Card.Text>
                  <img
                    src="/assets/company/zoho.png"
                    alt="Zoho"
                    className="company-logo"
                  />

                </Card.Body>
              </Card>
            </Col>

            <Col xs={6} md={4} lg={2} xl={2}>
              <Card className="placement-card text-center">
                <Card.Img
                  variant="top"
                  src="/images/placement2/bhuvaneshwari.webp" 
                  className="placement-img"
                />

                <Card.Body>
                  <Card.Title>Bhuvaneshwari  </Card.Title>
                  <Card.Text>sap fico end user</Card.Text>
                  <img
                    src="/assets/company/zoho.png"
                    alt="Zoho"
                    className="company-logo"
                  />

                </Card.Body>
              </Card>
            </Col>

          
          </Row>
          <Row className="g-4 mt-4"></Row>
        </Container>
      </section>

   

      <section className="why-placement-section">
        <div className="why-placement-bg"></div>
        <Container>
          <Row className="text-center mb-5">
            <Col>
              <h2>
                Why Choose <span>Monz</span> for <span>Placement</span>
              </h2>
              <p>
                We don’t just teach you design — we prepare you for a successful
                creative career.
              </p>
            </Col>
          </Row>

          <Row className="g-4 justify-content-center">
            <Col xl={3} lg={4} md={6} sm={10}>
              <div className="why-card">
                <Users className="why-icon" />
                <h4>Dedicated Career Cell</h4>
                <p>
                  Personal career advisors guide you from portfolio building to
                  job offers.
                </p>
              </div>
            </Col>
            <Col xl={3} lg={4} md={6} sm={10}>
              <div className="why-card">
                <Briefcase className="why-icon" />
                <h4>Industry Projects & Internships</h4>
                <p>
                  Work on real client projects and gain hands-on experience
                  before graduation.
                </p>
              </div>
            </Col>
            <Col xl={3} lg={4} md={6} sm={10}>
              <div className="why-card">
                <Lightbulb className="why-icon" />
                <h4>1-on-1 Portfolio Mentoring</h4>
                <p>
                  Expert mentors help you create a portfolio that stands out to
                  recruiters.
                </p>
              </div>
            </Col>
            <Col xl={3} lg={4} md={6} sm={10}>
              <div className="why-card">
                <GraduationCap className="why-icon" />
                <h4>Mock Interviews & Resume Building</h4>
                <p>
                  Practice with industry professionals and perfect your
                  interview skills.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

   

      <section className="placement-journey-section">
        <Container>
          <h2 className="placement-journey-title">Your Journey</h2>
          <p className="placement-journey-subtitle">
            From your first day to your dream job — we're with you every step of
            the way.
          </p>

          <Row className="journey-cards-row justify-content-center">
            <Col xs={12} sm={6} md={4} lg={2}>
              <div className="journey-card d-flex flex-column">
                <BookOpen className="journey-icon" size={64} />
                <h5 className="journey-card-title">Learning</h5>
                <p className="journey-card-text">
                  Master industry-standard tools and techniques
                </p>
              </div>
            </Col>

            <Col xs={12} sm={6} md={4} lg={2}>
              <div className="journey-card d-flex flex-column">
                <Rocket className="journey-icon" size={64} />
                <h5 className="journey-card-title">Project Work</h5>
                <p className="journey-card-text">
                  Build real-world projects for your portfolio
                </p>
              </div>
            </Col>

            <Col xs={12} sm={6} md={4} lg={2}>
              <div className="journey-card d-flex flex-column">
                <Users className="journey-icon" size={64} />
                <h5 className="journey-card-title">Mentoring</h5>
                <p className="journey-card-text">
                  Get personalized guidance from experts
                </p>
              </div>
            </Col>

            <Col xs={12} sm={6} md={4} lg={2}>
              <div className="journey-card d-flex flex-column">
                <BookOpen className="journey-icon" size={64} />
                <h5 className="journey-card-title">Internship</h5>
                <p className="journey-card-text">
                  Gain hands-on industry experience
                </p>
              </div>
            </Col>

            <Col xs={12} sm={6} md={4} lg={2}>
              <div className="journey-card d-flex flex-column">
                <Trophy className="journey-icon" size={64} />
                <h5 className="journey-card-title">Placement</h5>
                <p className="journey-card-text">
                  Land your dream creative career
                </p>
              </div>
            </Col>
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

    
      <section className="service-section">
        <Container fluid>
          <Row className="align-items-center">
            <Col lg={4} md={12} className="service-left">
              <div className="service-text">
                <h2>
                  Service we are <br /> offering
                </h2>
                <p>
                  We develop an individual integrated solution for your business
                  and select a unique set of services for it, combining them
                  with a single strategy and goal.
                </p>
              </div>
            </Col>

            <Col lg={8} md={12} className="service-right">
              <Row className="g-0">
                <Col lg={4} md={6} sm={12}>
                  <div className="service-card">
                    <img
                      src="https://img.freepik.com/free-photo/smiling-female-office-worker-glasses-using-laptop_1262-20654.jpg"
                      alt="Job"
                      className="service-img"
                    />

                    <div className="service-overlay">
                      <h3>Job</h3>
                      <button className="apply-btn">Apply Now →</button>
                    </div>
                  </div>
                </Col>

                <Col lg={4} md={6} sm={12}>
                  <div className="service-card">
                    <img
                      src="https://img.freepik.com/free-photo/team-business-people-collaborating-office-project_23-2148899435.jpg"
                      alt="Internship"
                      className="service-img"
                    />

                    <div className="service-overlay">
                      <h3>Internship</h3>
                      <button className="apply-btn">Apply Now →</button>
                    </div>
                  </div>
                </Col>

                <Col lg={4} md={6} sm={12}>
                  <div className="service-card">
                    <img
                      src="https://img.freepik.com/free-photo/portrait-young-woman-wearing-headphones-sitting-desk_23-2148320120.jpg"
                      alt="Online Exam"
                      className="service-img"
                    />

                    <div className="service-overlay">
                      <h3>Online Exam</h3>
                      <button className="apply-btn">Apply Now →</button>
                    </div>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </section>

      <Footer />
    </div>
  );
}

export default PlacementPage;
