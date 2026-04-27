import React from "react";
import "./CoursesPageStyle.css";
import StudentsWork from "../components/StudentsWork";
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Accordion from "react-bootstrap/Accordion";
import Footer from "../components/Footer";
import Menu from "../components/Menu";
import CivilDesignCourseTools from "../components/CivilDesignCourseTools";
import { BsChatHeartFill } from "react-icons/bs";
import { FaPhoneVolume, FaWhatsapp } from "react-icons/fa";


const CivilDesignCourseSaravanampatti = () => {
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
      <Menu />
      <section className="vfx-hero">
        <Container>
          <Row>
            <p className="vfx-tagline">
              “- Civil Design + Structural Design + MEP Design -”
            </p>
            <h1>
              <span className="highlight">civil design course </span> in
              Saravanampatti
            </h1>
            <p className="vfx-subtitle">
              No.1 civil training institute in saravanampatti with 100%
              placement support
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
                {" "}
                <span> Civil Design Course </span>in Saravanampatti{" "}
              </h2>
              <p className="why-text">
                Students who pursue the Civil Design Course in Saravanampatti at
                Monz Creative School will learn from experts and grow with
                professional skills. Especially, the practical sessions are
                meticulously structured to develop hands-on experience and
                knowledge. This job-oriented training directly impacts learners'
                employability in diverse, promising sectors, including
                construction, transportation, infrastructure development, etc.
                Multiple services and provisions are also accessible at
                affordable prices on this learning platform, so explore further
                sections. To avoid missing those perks, take action to join this
                popular Civil Course Training Institute in Saravanampatti
                immediately.
              </p>

              <h2 className="why-heading"> About the Civil Design Course </h2>
              <p>
                Discovering the Civil Design Course in Saravanampatti with
                industry professionals’ coaching targets a great learning
                experience easily. Instructors are highly experienced in
                preparing students from different knowledge levels through
                personal career guidance. Besides, the curriculum of the Civil
                Course Training Institute in Saravanampatti is also designed to
                develop experience in real-world projects. It never goes wrong
                to stand out among the crowd and guide you to reach a
                competitive edge in the profession quickly.
              </p>
              <h2 className="why-heading">
                {" "}
                <span> We Offer </span>Civil Design Courses:{" "}
              </h2>
              <p>
                Key areas of the listed courses focus on developing essential
                skills for designing and implementing infrastructure with
                enhanced functionality. Practical classes offers software
                proficiency and emphasizes environmental impact assessment,
                project management, and other core concepts. Eventually,
                prepares industry-ready professionals with potential to grab
                amazing salary package in the future.
              </p>
              <p>• BIM </p>
              <p>• Structural Design Course</p>
              <p>• 3DS MAX</p>
              <p>• Revit Architect Course</p>
              <p>• Interior Design Course</p>
              <p>• Architectural Design Course</p>
              <p>• Building Design Course</p>

              <h2 className="why-heading"> Campus Highlights: </h2>
              <p>• Certified Trainers</p>
              <p>• Modern Infrastructure</p>
              <p>• Job-Oriented Curriculum</p>
              <p>• World-Class Learning Experience</p>
              <p>• Guaranteed Placement Assistance</p>
              <p>• Certification Recognition</p>
              <p>• Real-Time Job Experience</p>
              <p>• Live Project Trainings</p>
              <p>• Diverse Career Opportunities</p>
              <p>• Personalised Coaching from Real Experts</p>

              <h2 className="why-heading"> Certificate Benefits: </h2>
              <p>
                • Let you get significant recognition for learning at the best
                Civil Course Training Institute in Saravanampatti with an
                authorized certificate.{" "}
              </p>
              <p>
                • Enhancing your credibility and career prospects with civil
                drafting courses by connecting you with leading hiring partners.{" "}
              </p>
              <p>
                • Advanced skills like enhanced design visualisation, planning,
                and collaboration elaborated in SketchUp for civil engineering
                lead to increased career prospects.{" "}
              </p>

              <h2 className="why-heading">
                {" "}
                <span>Monz Creative School</span> Training Outcomes:{" "}
              </h2>
              <p>
                • Comprehensive Syllabus: The structure of the civil engineering
                design courses aligns with career-based requirements to prepare
                youngsters for real industries efficiently.
              </p>

              <p>
                • Online Training: Enhanced flexibility is achieved with virtual
                learning of the civil autocad course, and creates a dedicated
                phase for learners to study deeply.
              </p>

              <p>
                • Accessible Resources: Learning the AutoCAD course for civil
                engineering develops software proficiency and strengthens your
                technical knowledge.
              </p>

              <p>
                • Practical Sessions: Hands-on training in the civil 3d course
                is intended to gain experience with real-world projects.
              </p>

              <p>
                • One-on-one Training: Personal coaching from professional
                trainers on interior design courses in civil engineering
                strengthens you in your core field.
              </p>

              <p>
                • Placement Prep: The mentor’s coaching of the civil design
                course is intended to stimulate students' interest and grow
                their professional skills, potentially.
              </p>

              <p>
                • Live Projects: Getting opportunities in the civil structural
                design course to directly explore and work on live projects aids
                in mastering real-time duties in advance.
              </p>

              <h2 className="why-heading">
                <span>Summary </span>
              </h2>
              <p>
                By registering for the Civil Design Course in Saravanampatti at
                Monz Creative School, you will acquire invaluable skills. They
                have the greatest priority across numerous industries and
                readily pay with remunerative income. You can even switch to any
                other specialised area according to your specific interest with
                this one-stop solution, which is well-known for reshaping
                countless youngsters’ careers for more than a decade
                consistently. Therefore, kickstart your passionate journey
                confidently at this renowned Civil Course Training Institute in
                Saravanampatti and elevate your financial status to the next
                level under exceptional guidance.
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
              <span>civil design Course </span>in Saravanampatti with{" "}
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
                  Job-Ready Civil Design Professional.
                </span>
              </h2>
              <p className="text-muted mb-4">
                By completing civil cad courses, professionals will obtain
                increased chances to grab the following job roles in the future.
              </p>
              <ul className="list-unstyled job-roles-list">
                <li className="mb-2">
                  <BsChatHeartFill />
                  Design Engineer
                </li>
                <li className="mb-2">
                  <BsChatHeartFill />
                  Site Engineer
                </li>
                <li className="mb-2">
                  <BsChatHeartFill />
                  Structural Engineer
                </li>
                <li className="mb-2">
                  <BsChatHeartFill />
                  Project Manager
                </li>
                <li className="mb-2">
                  <BsChatHeartFill />
                  Construction Manager
                </li>
                <li className="mb-2">
                  <BsChatHeartFill />
                  CAD Technician
                </li>
                <li className="mb-2">
                  <BsChatHeartFill />
                  Quantity Surveyor
                </li>
                <li className="mb-2">
                  <BsChatHeartFill />
                  Transportation Engineer
                </li>

                <li className="mb-2">
                  <BsChatHeartFill />
                  Environmental Engineer
                </li>
              </ul>
            </Col>
          </Row>
        </Container>
      </section>

      <CivilDesignCourseTools />

      <section className="tools-section py-5">
        <div className="tools-gradient"></div>

        <div className="container text-center content">
          <h2 className="tools-heading mb-3">Tools Covered</h2>
          <p className="tools-description mb-4">
            Master industry-standard civil design tools such as AutoCAD, STAAD
            Pro, ETABS, SAFE, and Civil 3D to build strong civil and structural
            design skills and create a job-ready civil design project portfolio.
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
              FAQ - Civil Design Course in Saravanampatti
            </h2>
            <Accordion defaultActiveKey="0">
              <Accordion.Item eventKey="0">
                <Accordion.Header>
                  1. How to become a certified civil designer?
                </Accordion.Header>
                <Accordion.Body>
                  Earning proof of a certificate from a recognised institution
                  is considered to be a basic eligibility requirement. The next
                  requirement is to focus on estimating hands-on experience in a
                  relevant field. Lastly, validating proficiency level in
                  problem-solving, technical skills, and industry-standard tools
                  and technologies.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header>
                  2. What is the Civil Design Course fee structure?
                </Accordion.Header>
                <Accordion.Body>
                  Ideal factors like the training campus and program will decide
                  your budget for the civil design course. In such a situation,
                  this renowned Civil Course Training Institute in
                  Saravanampatti can allow you to acquire invaluable skills with
                  expert coaching at a small price.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="3">
                <Accordion.Header>
                  3. What skills can you acquire from the Civil Design Course?
                </Accordion.Header>
                <Accordion.Body>
                  Attending the Civil Design Course in Saravanampatti on a daily
                  basis helps you master other crucial project management
                  processes, like construction management, design, and
                  structural analysis. Other than core knowledge, you can
                  witness visible progress in teamwork, communication, and
                  leadership skills.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="4">
                <Accordion.Header>
                  4. Did Monz offer a certificate and placement support?
                  software?
                </Accordion.Header>
                <Accordion.Body>
                  Definitely! Students who do the Civil Design Course in
                  Saravanampatti will get industry-recognising certification and
                  placement assistance without a doubt. These two credentials
                  directly affect youngsters' career prospects profoundly.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="5">
                <Accordion.Header>
                  5. How long do the civil architecture courses take?
                </Accordion.Header>
                <Accordion.Body>
                  It is totally up to your choice of knowledge development and
                  software proficiency requirements. Hence, make sure to have a
                  clear idea of these needs to complete structural design
                  courses for civil engineering as soon as possible.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="5">
                <Accordion.Header>
                  6. Will I get a certificate after completing the Civil Design
                  Course?
                </Accordion.Header>
                <Accordion.Body>
                  Yes, you’ll receive a recognized certification from Monz
                  Creative School upon course completion. This certificate adds
                  value to your resume and proves your expertise in the Civil
                  domain.
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Row>
        </Container>
      </section>
      <Footer />
    </>
  );
};
export default CivilDesignCourseSaravanampatti;
