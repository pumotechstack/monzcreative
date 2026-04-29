import React from "react";
import "./CoursesPageStyle.css";
import StudentsWork from "../components/StudentsWork";
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Accordion from "react-bootstrap/Accordion";
import UiuxCourseTools from "../components/UiuxCourseTools";
import { BsChatHeartFill } from "react-icons/bs";
import { FaPhoneVolume, FaWhatsapp } from "react-icons/fa";


const UiuxCourseCoimbatore = () => {
  const topRowStudents = [
    {
      name: "Aarav Sharma",
      package: "8.2 LPA",
      company: "Amazon",
      companyLogo:
        "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
      photo: "https://randomuser.me/api/portraits/men/45.jpg",
    },
    {
      name: "Diya Patel",
      package: "7.5 LPA",
      company: "Netflix",
      companyLogo:
        "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg",
      photo: "https://randomuser.me/api/portraits/women/32.jpg",
    },
    {
      name: "Rahul Mehta",
      package: "9 LPA",
      company: "Google",
      companyLogo:
        "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
      photo: "https://randomuser.me/api/portraits/men/50.jpg",
    },
    {
      name: "Sneha Iyer",
      package: "6.8 LPA",
      company: "Adobe",
      companyLogo:
        "https://upload.wikimedia.org/wikipedia/commons/5/51/Adobe_Systems_logo_and_wordmark.svg",
      photo: "https://randomuser.me/api/portraits/women/41.jpg",
    },
  ];

  const bottomRowStudents = [
    {
      name: "Vikram Nair",
      package: "10.5 LPA",
      company: "Microsoft",
      companyLogo:
        "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
      photo: "https://randomuser.me/api/portraits/men/12.jpg",
    },
    {
      name: "Ishita Das",
      package: "7.9 LPA",
      company: "Apple",
      companyLogo:
        "https://upload.wikimedia.org/wikipedia/commons/0/02/Apple_logo_black.svg",
      photo: "https://randomuser.me/api/portraits/women/33.jpg",
    },
    {
      name: "Arjun Rao",
      package: "8.4 LPA",
      company: "Infosys",
      companyLogo:
        "https://upload.wikimedia.org/wikipedia/commons/4/45/Infosys_logo.svg",
      photo: "https://randomuser.me/api/portraits/men/27.jpg",
    },
    {
      name: "Priya Sen",
      package: "6.5 LPA",
      company: "Wipro",
      companyLogo:
        "https://upload.wikimedia.org/wikipedia/commons/f/f5/Wipro_Primary_Logo_Color_RGB.svg",
      photo: "https://randomuser.me/api/portraits/women/26.jpg",
    },
  ];
  return (
    <>
      <section className="vfx-hero">
        <Container>
          <Row>
            <p className="vfx-tagline">“UI Design + UX Design + Prototyping”</p>
            <h1>
              <span className="highlight">ui ux design course </span> in
              coimbatore
            </h1>
            <p className="vfx-subtitle">
              No.1 ui ux training institute in coimbatore with 100% placement
            </p>

            <div className="vfx-buttons">
                  <a href="tel:9626010008" className="cta-btn-banner">
                <FaPhoneVolume className="cta-icon" />
                <span>Get 30% Off – Call 9626010008 Now</span>
              </a>
            </div>
          </Row>
        </Container>
      </section>

      <section className="why-section">
        <Container>
          <Row>
            <Col lg={6} className="mb-4">
              <h2 className="why-heading">
                <span>UI/UX Design Course </span>in Coimbatore
              </h2>
              <p className="why-text">
                Monzs Creative School UI / UX designer classes are specifically
                designed to gain knowledge with 90% practical & 10% theory
                classes combined with Placement Guidance combined with mock
                interview sessions to turn you into a UIUX Designer.
              </p>
              <p className="why-text">
                UI UX Training starts from basic to advanced level with
                Industrial expert training. Monzs Creative Schools also provides
                Internship Program and Placement Assistance. Our UX and UI
                courses program has placed more than 2000+ students with a
                package of 6-8 lakh annually.
              </p>
              <p className="why-text">
                We provide the best UI UX course in Coimbatore which covers
                Color theory, User Interface, User Experience, Photoshop, Figma
                & more. UI UX Classes are taken based on the evaluation of the
                tasks students have completed and the time they have taken to
                complete the task decides the duration of Monz’s UI UX design
                course in Coimbatore.
              </p>
            </Col>

            <Col lg={5} className="enquiryForm">
              <div className="enquiry-box p-4">
                <h5 className="enquiry-title">
                  Fill the Form Now! <br />
                  <span> Grab Your 30% Discount</span>
                </h5>

                <form>
                  <input type="text" placeholder="Enter Name *" required />
                  <input
                    type="email"
                    placeholder="Enter Email Address *"
                    required
                  />
                  <input
                    type="tel"
                    placeholder="Enter Phone Number *"
                    required
                  />
                  <input
                    type="text"
                    placeholder="Enter Desired Course *"
                    required
                  />
                  <textarea
                    placeholder="Have something to say? Type it here! *"
                    rows="4"
                    required
                  ></textarea>

                  <button type="submit" className="btn-submit w-100">
                    SUBMIT
                  </button>
                </form>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="plecement-marquee-section">
        <Container>
          <Row>
            <h2 className="students-heading">
              <span>SAP Course </span>in Saravanampatti with{" "}
              <span> Placement</span>
            </h2>
          </Row>
        </Container>

        <Row>
          <div className="students-marquee mt-4">
            <div className="marquee-group">
              {[...topRowStudents, ...topRowStudents].map((student, i) => (
                <div className="student-card" key={i}>
                  <img
                    src={student.photo}
                    alt={student.name}
                    className="student-photo"
                  />
                  <div className="student-info">
                    <h4>{student.name}</h4>
                    <p className="package">{student.package}</p>
                    <div className="company">
                      <img src={student.companyLogo} alt={student.company} />
                      <span>{student.company}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="students-marquee reverse">
            <div className="marquee-group reverse">
              {[...bottomRowStudents, ...bottomRowStudents].map(
                (student, i) => (
                  <div className="student-card" key={i}>
                    <img
                      src={student.photo}
                      alt={student.name}
                      className="student-photo"
                    />
                    <div className="student-info">
                      <h4>{student.name}</h4>
                      <p className="package">{student.package}</p>
                      <div className="company">
                        <img src={student.companyLogo} alt={student.company} />
                        <span>{student.company}</span>
                      </div>
                    </div>
                  </div>
                )
              )}
            </div>
          </div>
        </Row>
      </section>

      <StudentsWork />

      <section className="job-ready-section py-5">
        <Container>
          <Row>
            <Col lg={6}>
              <div className="row g-3">
                <div className="col-6">
                  <img
                    src="/images/animation/animation-1.jpg"
                    alt="Studio Training"
                    className="img-fluid rounded-4 shadow-sm"
                  />
                </div>
                <div className="col-6">
                  <img
                    src="/images/animation/animation-2.jpeg"
                    alt="Online Class"
                    className="img-fluid rounded-4 shadow-sm"
                  />
                </div>
                <div className="col-12 mt-3"></div>
              </div>
            </Col>

            <Col lg={6} className="ps-md-5 mt-4 mt-md-0">
              <h2 className="fw-bold mb-3">
                Become a{" "}
                <span className="head-highlight">
                  Become a Job-Ready UI/UX Designer.
                </span>
              </h2>
              <p className="text-muted mb-4">
                The dedicated training program at this UI/UX Institute in
                Coimbatore makes you a perfect candidate for the most in-demand
                design jobs.
              </p>
              <ul className="list-unstyled job-roles-list">
                <li className="mb-2">
                  <BsChatHeartFill />
                  UI/UX Designer
                </li>
                <li className="mb-2">
                  <BsChatHeartFill />
                  UX Researcher
                </li>
                <li className="mb-2">
                  <BsChatHeartFill />
                  UI Designer
                </li>
                <li className="mb-2">
                  <BsChatHeartFill />
                  Product Designer
                </li>
                <li className="mb-2">
                  <BsChatHeartFill />
                  Interaction Designer
                </li>
                <li className="mb-2">
                  <BsChatHeartFill />
                  Visual Designer
                </li>
                <li className="mb-2">
                  <BsChatHeartFill />
                  UX Writer
                </li>
                <li className="mb-2">
                  <BsChatHeartFill />
                  Design System Specialist
                </li>

                <li className="mb-2">
                  <BsChatHeartFill />
                  Figma Designer
                </li>
                <li className="mb-2">
                  <BsChatHeartFill />
                  User Interface Prototype Designer
                </li>
              </ul>
            </Col>
          </Row>
        </Container>
      </section>

      <UiuxCourseTools />

      <section className="tools-section py-5">
        <div className="tools-gradient"></div>

        <div className="container text-center content">
          <h2 className="tools-heading mb-3">Tools Covered</h2>
          <p className="tools-description mb-4">
            Master industry-standard UI/UX tools such as Figma, Adobe XD,
            Photoshop, Illustrator, and user-centered design workflows to build
            strong design skills and create a job-ready UI/UX portfolio.
          </p>

          <div className="row justify-content-center">
            <div className="col-6 col-sm-4 col-md-3 col-lg-2 mb-4">
              <div className="tool-card">
                <img src="/tools/ps.png" alt="Photoshop" />
                <p>Photoshop</p>
              </div>
            </div>

            <div className="col-6 col-sm-4 col-md-3 col-lg-2 mb-4">
              <div className="tool-card">
                <img src="/tools/ae.png" alt="After Effects" />
                <p>Adobe After Effects</p>
              </div>
            </div>

            <div className="col-6 col-sm-4 col-md-3 col-lg-2 mb-4">
              <div className="tool-card">
                <img src="/tools/pr.png" alt="Premiere Pro" />
                <p>Adobe Premiere Pro</p>
              </div>
            </div>

            <div className="col-6 col-sm-4 col-md-3 col-lg-2 mb-4">
              <div className="tool-card">
                <img src="/tools/s.png" alt="Seal" />
                <p>Seal</p>
              </div>
            </div>

            <div className="col-6 col-sm-4 col-md-3 col-lg-2 mb-4">
              <div className="tool-card">
                <img src="/tools/au.png" alt="Adobe Audition" />
                <p>Adobe Audition</p>
              </div>
            </div>

            <div className="col-6 col-sm-4 col-md-3 col-lg-2 mb-4">
              <div className="tool-card">
                <img src="/tools/blender.png" alt="Blender" />
                <p>Blender</p>
              </div>
            </div>

            <div className="col-6 col-sm-4 col-md-3 col-lg-2 mb-4">
              <div className="tool-card">
                <img src="/tools/m.png" alt="Seal" />
                <p>Maya</p>
              </div>
            </div>

            <div className="col-6 col-sm-4 col-md-3 col-lg-2 mb-4">
              <div className="tool-card">
                <img src="/tools/u.png" alt="Unreal Engine" />
                <p>Unreal Engine</p>
              </div>
            </div>

            <div className="col-6 col-sm-4 col-md-3 col-lg-2 mb-4">
              <div className="tool-card">
                <img src="/tools/marmost.png" alt="Marmoset" />
                <p>Marmoset</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="floating-icons">
      <div className="floating-cta">
  <a href="tel:9626010008" className="cta-float call">
    <FaPhoneVolume />
  </a>
  <a
    href="https://wa.me/919626010008"
    target="_blank"
    rel="noopener noreferrer"
    className="cta-float whatsapp">
    <FaWhatsapp />
  </a>
</div>
</section>

      <section className="faq-section py-5">
        <Container>
          <Row>
            <h2 className="faq-headding">
              FAQ - UI/UX Course in Coimbatore
            </h2>
            <Accordion defaultActiveKey="0">
              <Accordion.Item eventKey="0">
                <Accordion.Header>
                  1. What is the duration of the UI/UX Design course?
                </Accordion.Header>
                <Accordion.Body>
                  Our UI/UX Design course at Monz Creative School spans 3 to 4
                  months, covering the complete design process from wireframing
                  to prototyping. You’ll get hands-on training with tools like
                  Figma, Adobe XD, and Illustrator, along with real-world
                  projects to build your portfolio.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header>
                  2. Who can join the UI/UX Design course?
                </Accordion.Header>
                <Accordion.Body>
                  Anyone interested in design can join! Whether you're a
                  student, graduate, developer, or creative enthusiast, this
                  course is beginner-friendly and requires no prior experience.
                  Basic computer knowledge is sufficient to get started.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="3">
                <Accordion.Header>
                  3. What software tools will I learn in this course?
                </Accordion.Header>
                <Accordion.Body>
                  You will gain hands-on experience with industry-standard tools
                  such as Figma, Adobe XD, Sketch, Photoshop, and Illustrator.
                  You'll also learn how to create responsive designs and
                  interactive prototypes.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="4">
                <Accordion.Header>
                  4. Will I learn both UI and UX in this course?
                </Accordion.Header>
                <Accordion.Body>
                  Absolutely! The course covers both User Interface (UI) and
                  User Experience (UX) design. You’ll learn how to conduct user
                  research, create wireframes, design interfaces, and test
                  usability — ensuring you become a complete UI/UX designer.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="5">
                <Accordion.Header>
                  5. Is UI/UX Design a good career option in India?
                </Accordion.Header>
                <Accordion.Body>
                  Yes, UI/UX Design is one of the most in-demand and rewarding
                  careers today. With businesses focusing on digital presence,
                  skilled designers are needed in tech companies, startups, and
                  design agencies. The demand is rapidly growing in India and
                  globally.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="6">
                <Accordion.Header>
                  6. Will I get a certificate and placement assistance?
                </Accordion.Header>
                <Accordion.Body>
                  Yes! Upon completing the course, you'll receive a recognized
                  certification from Monz Creative School. We also provide
                  placement support, resume building sessions, and interview
                  preparation to help you start your career as a UI/UX designer.{" "}
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Row>
        </Container>
      </section>
    </>
  );
};
export default UiuxCourseCoimbatore;
