import React from "react";
import "./CoursesPageStyle.css";
import StudentsWork from "../components/StudentsWork";
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Accordion from "react-bootstrap/Accordion";
import ArchitectureCourseTools from "../components/ArchitectureCourseTools";
import { BsChatHeartFill } from "react-icons/bs";
import { FaPhoneVolume, FaWhatsapp } from "react-icons/fa";


const ArchitectureCourseSaravanampatti = () => {
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
              — Architecture Design + 3D Architectural Modeling + Architectural
              Visualization -
            </p>
            <h1>
              <span className="highlight">Architecture Course </span> in
              Saravanampatti
            </h1>
            <p className="vfx-subtitle">
              No.1 Architecture training institute in saravanampatti with 100%
              placement
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
                <span>Architecture Course </span>in Saravanampatti
              </h2>
              <p className="why-text">
                Pursuing the Architecture Course in Saravanampatti at Monz
                Creative School is the key to getting lucrative opportunities
                and creating a profound impact in career. This includes that you
                will have the option to attend architect classes online or even
                at a physical learning institution. At the training end, you
                receive an authorised certificate, which demonstrates the
                highest potential across leading sectors. Besides, customisable
                schedules aid in attending classes when you have sufficient time
                and no distractions. It stimulates your interest to learn
                diligently and engage more deeply in each session. Eventually,
                you will unlock the best learning experience at the popular
                Architects Training Institute in Saravanampatti via experienced
                trainers support.
              </p>

              <h2 className="mt-4 why-heading">
                About the <span>Architecture Course in Saravanampatti</span>
              </h2>

              <p>
                Excellent mentors teach the Animation Course in Saravanampatti
                to equip exceptional skills and knowledge. They believe in
                practical learning more than theoretical knowledge, so they
                constantly involve students in live training. It also includes
                developing visual communication, storytelling, and technical
                aspects. Moreover, the curriculum of the Animation Training
                Institute in Saravanampatti is also designed to align with
                on-site jobs, which makes students capable of managing real-time
                duties potentially.
              </p>

              <h2 className="mt-4 why-heading">
                Key Benefits<span> Highlights:</span>
              </h2>
              <ul>
                <li>One-on-One Training</li>
                <li>Authorised Certificates</li>
                <li>High-Paying Courses</li>
                <li>Hands-On Skills</li>
                <li>Extensive Job Offers</li>
                <li>Online/Offline Classes</li>
                <li>Dedicated Placement Support</li>
                <li>Tailored Coaching from Trainers</li>
                <li>Project-Based Learning Experience</li>
              </ul>

              <h2 className="mt-4 why-heading">
                Skills Essentials to be an Architect:
              </h2>
              <ul>
                <li>
                  <p>
                    <b>Sketching & Rendering</b>
                  </p>
                  <p>
                    Candidates who choose the Architects Training Institute in
                    Saravanampatti must have an interest in hand-drawing to
                    develop initial concepts and digital visuals by modern
                    tools.
                  </p>
                </li>
                <li>
                  <p>
                    <b> CAD Software Proficiency</b>
                  </p>
                  <p>
                    Gain hands-on exposure to the latest technologies or
                    software that will offer proficiency for creating detailed
                    drawings and 3D models.
                  </p>
                </li>
                <li>
                  <p>
                    <b> CAD Software Proficiency</b>
                  </p>
                  <p>
                    Gain hands-on exposure to the latest technologies or
                    software that will offer proficiency for creating detailed
                    drawings and 3D models.
                  </p>
                </li>
                <li>
                  <p>
                    <b> Spatial Reasoning</b>
                  </p>
                  <p>
                    Crucial to know how spaces interact with each other and
                    undergo optimization when working for functionality and
                    aesthetics.
                  </p>
                </li>
                <li>
                  <p>
                    <b> Building Codes and Regulations </b>
                  </p>
                  <p>
                    Some important phases of the Architects Training Institute
                    in Saravanampatti syllabus will give you an in-depth
                    understanding of local and national building codes, safety
                    standards, and zoning laws.
                  </p>
                </li>
                <li>
                  <p>
                    <b> Sustainable Design </b>
                  </p>
                  <p>
                    Make you familiar with the integration of
                    environmental-friendly practices into designs.
                  </p>
                </li>
                <li>
                  <p>
                    <b> Building Materials & Construction</b>
                  </p>
                  <p>
                    Acquire comprehensive information on different construction
                    materials, methods, and structural principles.
                  </p>
                </li>
                <li>
                  <p>
                    <b> Engineering Principles</b>
                  </p>
                  <p>
                    Having a solid foundation in engineering concepts helps you
                    to identify structures and building systems.
                  </p>
                </li>
              </ul>

              <h2 className="mt-4 why-heading">
                Premium Features of Monz Creative School:
              </h2>
              <p>
                • Freshers or zero-experience candidates can also do an arch
                course to strengthen their foundation in the field.
              </p>
              <p>
                • Hands-on learning with the Revit Architecture Course provides
                knowledge to design, model, and visualize designs precisely.
              </p>
              <p>
                • Learners on urban design courses will be trained in the
                creation of sustainable, user-centric cities for the future.
              </p>
              <p>
                • You will get knowledge while doing interior architecture
                courses, and create innovative designs with the blend of
                aesthetics and functionality.
              </p>
              <p>
                • Mostly, the syllabus of architecture courses for beginners
                focuses on laying a strong foundation in fundamentals.
              </p>
              <p>
                • Anywhere in the world, you can study via online architecture
                courses with certificates on our campus and enjoy official
                credentials additionally.
              </p>
              <p>
                • Students who choose the architecture and interior design
                course will learn both interior and exterior design concepts.
              </p>
              <p>
                • Certified mentors train on landscape architecture courses,
                educate on how to create outdoor spaces that balance nature and
                design.
              </p>

              <h2 className="mt-4 why-heading">Summary</h2>
              <p>
                Earn job-ready skills by pursuing the Architecture Course in
                Saravanampatti and pave your career path meticulously. Acquiring
                knowledge and skills from architecture design courses makes you
                an expert at real-time duties. It reveals that you can come out
                of the Architects Training Institute in Saravanampatti as an
                industry-ready trainee for the society. Therefore, enroll today
                to get all possible exceptions along with the best education at
                a small price.
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
              <span>Animation Course </span>in Saravanampatti with{" "}
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
                <span className="head-highlight">Job-Ready Architect .</span>
              </h2>
              <p className="text-muted mb-4">
                Coaching of the Architects Training Institute in Saravanampatti
                prepares you with ample potential for the following roles.
              </p>

              <ul className="list-unstyled job-roles-list">
                <li className="mb-2">
                  <BsChatHeartFill /> Architect
                </li>
                <li className="mb-2">
                  <BsChatHeartFill /> Architectural Designer
                </li>
                <li className="mb-2">
                  <BsChatHeartFill /> Urban Planner
                </li>
                <li className="mb-2">
                  <BsChatHeartFill /> Interior Designer
                </li>
                <li className="mb-2">
                  <BsChatHeartFill /> Landscape Architect
                </li>
                <li className="mb-2">
                  <BsChatHeartFill /> Project Manager
                </li>
                <li className="mb-2">
                  <BsChatHeartFill /> Building Surveyor
                </li>
                <li className="mb-2">
                  <BsChatHeartFill /> Structural Engineer
                </li>
                <li className="mb-2">
                  <BsChatHeartFill /> Production Designer
                </li>
                <li className="mb-2">
                  <BsChatHeartFill /> CAD Technician
                </li>
                <li className="mb-2">
                  <BsChatHeartFill /> Architectural Technologist
                </li>
                <li className="mb-2">
                  <BsChatHeartFill /> Architectural Journalist / Historian
                </li>
                <li className="mb-2">
                  <BsChatHeartFill /> 3D Visualizer
                </li>
                <li className="mb-2">
                  <BsChatHeartFill /> Conservation Architect
                </li>
                <li className="mb-2">
                  <BsChatHeartFill /> Furniture Designer
                </li>
                <li className="mb-2">
                  <BsChatHeartFill /> Lecturer / Professor
                </li>
              </ul>
            </Col>
          </Row>
        </Container>
      </section>

      <ArchitectureCourseTools />

      <section className="tools-section py-5">
        <div className="tools-gradient"></div>

        <div className="container text-center content">
          <h2 className="tools-heading mb-3">Tools Covered</h2>
          <p className="tools-description mb-4">
            Master industry-standard tools used by architects to design precise
            floor plans, 3D models, visualizations, and high-quality
            architectural presentations.
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
              FAQ - Aechitectural Design Course in Saravanampatti
            </h2>
            <Accordion defaultActiveKey="0">
              <Accordion.Item eventKey="0">
                <Accordion.Header>
                  1. How much does the Architecture Course in Saravanampatti
                  fees?
                </Accordion.Header>
                <Accordion.Body>
                  The Architecture course in Coimbatore fee structure estimation
                  falls into metrics like program depth and learning modes. You
                  can even so unlock the best career assistance with the right
                  guidance at Monz Creative School.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header>
                  2. Can I get the best online architecture courses?
                </Accordion.Header>
                <Accordion.Body>
                  Yes! You can learn architecture online with variations in
                  program depth, which suits different skill levels. This
                  ensures a comprehensive learning experience for learners with
                  even gaps in education or no prior working experience.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="3">
                <Accordion.Header>
                  3. What are the basic eligibility requirements for the
                  Architecture Course? course?
                </Accordion.Header>
                <Accordion.Body>
                  Completing an education from a renowned academy or a degree in
                  streams like chemistry, physics, and mathematics are the basic
                  requirements for the course. It may vary for some
                  institutions, so enquiring directly is the right way to get an
                  immediate response with all details.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="4">
                <Accordion.Header>
                  4. What is the duration of the architectural design programs?
                </Accordion.Header>
                <Accordion.Body>
                  The duration might take a certain period to learn
                  theoretically, with practical training in the art of designing
                  and constructing buildings. With the right experienced
                  trainers, it is possible to finish the course as soon as
                  possible.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="5">
                <Accordion.Header>
                  5. What will you learn from the Architecture Course syllabus?
                </Accordion.Header>
                <Accordion.Body>
                  The expert-led curriculum will provide knowledge of
                  architectural design, structural systems, building technology,
                  history of architecture, professional practice, and
                  environmental studies. In addition, the program covers
                  graphics, architectural drawing, and computer applications.
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Row>
        </Container>
      </section>
    </>
  );
};
export default ArchitectureCourseSaravanampatti;
