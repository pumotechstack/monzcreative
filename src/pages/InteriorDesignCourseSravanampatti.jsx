import React from "react";
import "./CoursesPageStyle.css";
import StudentsWork from "../components/StudentsWork";
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Accordion from "react-bootstrap/Accordion";
import InteriorDesignCourseTools from "../components/InteriorDesignCourseTools";
import { BsChatHeartFill } from "react-icons/bs";
import { FaPhoneVolume, FaWhatsapp } from "react-icons/fa";


const InteriorDesignCourseSaravanampatti = () => {
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
              “-Interior Design + Space Planning & Visualization-”
            </p>
            <h1>
              <span className="highlight">Interior Design course </span> in
              Saravanampatti
            </h1>
            <p className="vfx-subtitle">
              No.1 interior design training institute in saravanampatti with
              100% placement support
            </p>

            <div className="vfx-buttons">
               <a href="tel:8925871588" className="cta-btn-banner">
                                                      <FaPhoneVolume className="cta-icon" />
                                                      <span>Get 30% Off – Call 8925871588 Now</span>
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
                <span> Interior Design Course </span>in Saravanampatti
              </h2>
              <p className="why-text">
                Want to grab an amazing salary package? Choose to study the
                Interior Design Course in Saravanampatti at Monz Creative
                School. It leads you to rule in-demand sectors like residential,
                commercial, hospitality, and corporate with your highest
                potential of design skills. However, the right professionals can
                only transform you to become a skilled designer regardless of
                evolving software. Here, you will get coaching from experienced
                trainers who are specialists at developing equal knowledge
                through tailored training methodology. Many facilities and
                services are accessible along with Interior Design Training in
                Saravanampatti, so explore below to learn about them.
              </p>

              <h2 className="why-heading">
                {" "}
                About the Interior Design Course{" "}
                <span> in Saravanampatti </span>{" "}
              </h2>
              <p>
                {" "}
                A comprehensive insight into the Interior Design Course in
                Saravanampatti will offer the potential to draft sketches of
                interior spaces with streamlined functional and aesthetic
                visuals. Discover core concepts, such as design principles,
                color theory, materials study, and digital software proficiency.
                These are taught through practical classes at the Interior
                Design Training in Saravanampatti in order to target
                professional skills and create industry-ready young talents. On
                top of everything, industry-best trainers’ coaching service,
                rewarding provisions, and other essential services are easily
                accessible for everyone.
              </p>

              <h2 className="why-heading">
                {" "}
                Monz Creative School Highlights:{" "}
              </h2>
              <p>• Dedicated Mentors Support </p>
              <p>• Live Training Sessions </p>
              <p>• Project-Based Teaching</p>
              <p>• Holistic Placement Prep</p>
              <p>• Broaden Career Prospects</p>
              <p>• Virtual Learning Facility</p>
              <p>• Certificate Recognition</p>
              <p>• Tailored Study Hours</p>
              <p>• Personalised Coaching Service</p>
              <p>• Connects with Leading Professionals</p>
              <p>• Custom Schedules - Weekend/Weekday Classes</p>

              <h2 className="why-heading">
                {" "}
                Benefits of the Interior Design Course in Saravanampatti:{" "}
              </h2>
              <p>
                • Allowing aspirants to pursue interior design courses online
                with certificate and gain recognition across every industry.{" "}
              </p>
              <p>
                • The reputable institute of interior design is not limited to
                this, but also offers many courses with field experts.
              </p>
              <p>
                • Job-oriented approach in interior decorating courses makes you
                confident about taking charge of on-site duties.
              </p>
              <p>
                • Mentors educate the interior design course with placement
                training that is conducted dedicatedly to raise students’
                potential professionally.
              </p>
              <p>
                • Completion of the interior design certificate course makes you
                a suitable employee for top-tier enterprises.
              </p>
              <p>
                • Each time, interior design classes explain every core concept
                by delivering live examples that develop deep knowledge for
                students.
              </p>
              <p>
                • Embracing comfort through the interior design training online
                increases the time for learning new skills.
              </p>
              <p>
                • Finding the best interior design classes near me is simple for
                you due to the availability of multiple branches.
              </p>

              <h2 className="why-heading">
                {" "}
                <span>Promising Career Paths: </span>{" "}
              </h2>
              <p>
                Learners are guaranteed to unlock rewarding careers after
                pursuing the Interior Design Course in Saravanampatti with an
                authorised certificate.
              </p>
              <p>• Interior Designers </p>
              <p>• Space Planners</p>
              <p>• Furniture Designers</p>
              <p>• Exhibition Designers</p>
              <p>• Visual Merchandisers</p>
              <p>• 3D Artists & CAD Designers</p>
              <p>• Commercial Interior Designers</p>

              <h2 className="why-heading">
                {" "}
                <span> Takeaway </span>{" "}
              </h2>
              <p>
                Utilising the Interior Design Course in Saravanampatti is the
                only way to secure well-paying designations. Whether you seek
                interior design classes online or classroom training, here you
                have the freedom to choose any learning mode with flexible study
                hours. If you are searching for the best Interior Design
                Training in Saravanampatti, you need to visit Monz Creative
                School. This is well known for remaining a leading interior
                design institute in Coimbatore with limitless provisions.
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
              <span>Interior Design Course </span>in Coimbatorei with
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
                  Job-Ready Interior Design Professional.
                </span>
              </h2>

              <p className="text-muted mb-4">
                By completing professional interior design courses, learners
                gain practical design knowledge, space planning expertise, and
                real-world project experience required to succeed in today’s
                interior design industry.
              </p>

              <ul className="list-unstyled job-roles-list">
                <li className="mb-2">
                  <BsChatHeartFill />
                  Interior Designer
                </li>
                <li className="mb-2">
                  <BsChatHeartFill />
                  Residential Interior Designer
                </li>
                <li className="mb-2">
                  <BsChatHeartFill />
                  Commercial Interior Designer
                </li>
                <li className="mb-2">
                  <BsChatHeartFill />
                  Space Planning Designer
                </li>
                <li className="mb-2">
                  <BsChatHeartFill />
                  Furniture & Lighting Designer
                </li>
                <li className="mb-2">
                  <BsChatHeartFill />
                  3D Interior Visualizer
                </li>
                <li className="mb-2">
                  <BsChatHeartFill />
                  Set & Exhibition Designer
                </li>
                <li className="mb-2">
                  <BsChatHeartFill />
                  Interior Styling Consultant
                </li>
                <li className="mb-2">
                  <BsChatHeartFill />
                  Freelance Interior Designer
                </li>
              </ul>
            </Col>
          </Row>
        </Container>
      </section>

      <InteriorDesignCourseTools />

      <section className="tools-section py-5">
        <div className="tools-gradient"></div>

        <div className="container text-center content">
          <h2 className="tools-heading mb-3">Tools Covered</h2>
          <p className="tools-description mb-4">
            Master industry-standard interior design tools such as AutoCAD,
            SketchUp, 3ds Max, V-Ray, Lumion, and professional design workflows
            to build strong space planning, visualization, and presentation
            skills, and create a job-ready interior design portfolio.
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
        <a href="tel:8925871588" className="cta-float call">
          <FaPhoneVolume />
        </a>
        <a
          href="https://wa.me/918925871588"
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
              FAQ - Interior Design Course in Saravanampatti
            </h2>
            <Accordion defaultActiveKey="0">
              <Accordion.Item eventKey="0">
                <Accordion.Header>
                  1. What are the entry requirements for the Interior Design
                  Course?
                </Accordion.Header>
                <Accordion.Body>
                  Proving to have completed a basic qualification from a reputed
                  campus is enough to do the course at Monz Creative School.
                  Students to working professionals can kickstart their careers
                  with an interior design certification here on an affordable
                  budget without any constraints.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header>
                  2. How long does it take to complete the Interior Design
                  Course?
                </Accordion.Header>
                <Accordion.Body>
                  To collect exact details, aspirants might directly visit the
                  institution or contact it due to the involvement of several
                  factors. While seeking to finish interior design courses
                  online quickly, it may help you to develop proficiency with
                  basic and mid-level concepts.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="3">
                <Accordion.Header>
                  3. How does the interior design skill benefit students?
                </Accordion.Header>
                <Accordion.Body>
                  High potential in designing interior space creates a promising
                  demand across various sectors and boosts credibility
                  profoundly. In addition, you will see immense progress
                  personally, such as improved creativity, soft skills,
                  problem-solving abilities, and many others.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="4">
                <Accordion.Header>
                  4. What is the Interior Design Course fee?
                </Accordion.Header>
                <Accordion.Body>
                  For completing the Interior Design Training in Saravanampatti
                  at an affordable price, visit this institution and take
                  advantage of seamless provisions. This includes practical
                  training, industry-recognising certification, and
                  comprehensive knowledge from experts.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="5">
                <Accordion.Header>
                  5. Can anyone attend the Interior Design Course? design
                  course?
                </Accordion.Header>
                <Accordion.Body>
                  <p>
                    It is totally up to an institution and the type of course,
                    so approach a reputable learning platform. Here at Monz
                    Creative School, learners with different knowledge and
                    background levels can attend the interior design course.
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
export default InteriorDesignCourseSaravanampatti;
