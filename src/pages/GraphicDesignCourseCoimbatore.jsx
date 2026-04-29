import React from "react";
import "./CoursesPageStyle.css";
import StudentsWork from "../components/StudentsWork";
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Accordion from "react-bootstrap/Accordion";
import GraphicDesignCourseTools from "../components/GraphicDesignCourseTools";
import { BsChatHeartFill } from "react-icons/bs";
import { FaPhoneVolume, FaWhatsapp } from "react-icons/fa";


const GraphicDesignCourseCoimbatore = () => {
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
            <p className="vfx-tagline">
              “- Graphic Design + Visual Communication-”
            </p>
            <h1>
              <span className="highlight">Graphic Design course </span> in
              coimbatore
            </h1>
            <p className="vfx-subtitle">
              No.1 graphic design training institute in coimbatore with 100%
              placement support
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
                <span> Graphic Design Course </span>in Coimbatore
              </h2>
              <p className="why-text">
                Our graphics design course is specially designed to cover all
                design aspects from basic to advanced level. We are the best
                graphic design institute in Coimbatore with Highly knowledgeable
                and trained staff to Guide students throughout the process
                turning the students into Professional Graphic Designer with our
                Graphic designer course.
              </p>
              <p>
                If you are looking for a Graphic Designer course near your Monzs
                Creative School is the best option for your Graphic design
                career, as we focus on Practical and Improving your creativity
                by giving real-time projects. We provide graphic design courses
                online and offline so students can attend on their own time.
              </p>
              <p>
                We provide the best graphic design institute in Coimbatore which
                covers Color theory, User Interface, User Experience, Photoshop,
                Figma & more. Graphic and design courses are taken based on the
                evaluation of the tasks students have completed and the time
                they have taken to complete the task decides the duration of
                Monz’s graphic design course in Coimbatore.
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
              <span>Graphic Design Course </span>in Coimbatorei with
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
                Become a
                <span className="head-highlight">
                  Job-Ready Graphic Design Professional.
                </span>
              </h2>

              <p className="text-muted mb-4">
                By completing professional graphic design courses, learners gain
                the creative skills and real-world design experience needed to
                qualify for the following high-demand job roles in the design
                industry.
              </p>

              <ul className="list-unstyled job-roles-list">
                <li className="mb-2">
                  <BsChatHeartFill />
                  Graphic Designer
                </li>
                <li className="mb-2">
                  <BsChatHeartFill />
                  Visual Designer
                </li>
                <li className="mb-2">
                  <BsChatHeartFill />
                  Brand Identity Designer
                </li>
                <li className="mb-2">
                  <BsChatHeartFill />
                  UI Graphic Designer
                </li>
                <li className="mb-2">
                  <BsChatHeartFill />
                  Digital Marketing Designer
                </li>
                <li className="mb-2">
                  <BsChatHeartFill />
                  Motion Graphic Designer
                </li>
                <li className="mb-2">
                  <BsChatHeartFill />
                  Print & Publishing Designer
                </li>
                <li className="mb-2">
                  <BsChatHeartFill />
                  Social Media Creative Designer
                </li>
                <li className="mb-2">
                  <BsChatHeartFill />
                  Freelance Graphic Designer
                </li>
              </ul>
            </Col>
          </Row>
        </Container>
      </section>

      <GraphicDesignCourseTools />

      <section className="tools-section py-5">
        <div className="tools-gradient"></div>

        <div className="container text-center content">
          <h2 className="tools-heading mb-3">Tools Covered</h2>
          <p className="tools-description mb-4">
            Master industry-standard graphic design tools such as Adobe
            Photoshop, Illustrator, InDesign, Figma, CorelDRAW, and design
            workflows to build strong visual communication skills and create a
            job-ready graphic design portfolio
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
              FAQ - Graphic Design Course in Coimbatore
            </h2>
            <Accordion defaultActiveKey="0">
              <Accordion.Item eventKey="0">
                <Accordion.Header>
                  1. What will I learn in the graphic design course?
                </Accordion.Header>
                <Accordion.Body>
                  In our Graphic Design Course at Monz Creative School, you'll
                  master tools like Adobe Photoshop, Illustrator, CorelDRAW,
                  InDesign, and Canva. You'll learn visual hierarchy,
                  typography, color theory, logo design, social media creatives,
                  branding, and layout design for print and digital platforms.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header>
                  2. Is this course suitable for beginners?
                </Accordion.Header>
                <Accordion.Body>
                  Yes, the course is designed for absolute beginners. Whether
                  you're a student, freelancer, or career switcher, we start
                  from the basics and gradually move to advanced-level
                  designing. No prior design or software knowledge is needed.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="3">
                <Accordion.Header>
                  3. What is the duration of the graphic design course? working?
                </Accordion.Header>
                <Accordion.Body>
                  The course duration ranges from 3 to 6 months, depending on
                  the module you choose (basic or advanced). Classes are
                  flexible — available on weekdays or weekends — to suit
                  students, working professionals, and freelancers.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="4">
                <Accordion.Header>
                  4. Can I build a career in graphic design after this course?
                </Accordion.Header>
                <Accordion.Body>
                  Definitely! Graphic design is in high demand across industries
                  like advertising, digital marketing, publishing, e-commerce,
                  and branding. After the course, you can work as a Graphic
                  Designer, UI Designer, Creative Executive, or even take up
                  freelance projects globally.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="5">
                <Accordion.Header>
                  5. Will I get a certificate after completing the graphic
                  design course?
                </Accordion.Header>
                <Accordion.Body>
                  <p>
                    Yes, you'll receive an industry-recognized certificate from
                    Monz Creative School. This certificate adds value to your
                    resume and helps you showcase your skills to clients or
                    employers. It also boosts your credibility as a certified
                    graphic designer.
                  </p>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="5">
                <Accordion.Header>
                  6. Do you offer placement assistance after the course?
                </Accordion.Header>
                <Accordion.Body>
                  <p>
                    Yes, we offer 100% placement support. Our career support
                    includes resume building, interview preparation, portfolio
                    guidance, and referrals to design studios, ad agencies,
                    startups, and MNCs. We also help connect you with freelance
                    gigs and internships.
                  </p>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Row>
        </Container>
      </section>
    </>
  );
};
export default GraphicDesignCourseCoimbatore;
