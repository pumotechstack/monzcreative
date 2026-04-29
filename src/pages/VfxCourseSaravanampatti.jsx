import React from "react";
import "./CoursesPageStyle.css";
import StudentsWork from "../components/StudentsWork";
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Accordion from "react-bootstrap/Accordion";
import VfxCourseTools from "../components/VfxCourseTools";
import { BsChatHeartFill } from "react-icons/bs";
import { FaPhoneVolume, FaWhatsapp } from "react-icons/fa";


const VfxCourseSaravanampatti = () => {
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
              “VFX Compositing + CGI Effects + Roto & Paint”
            </p>
            <h1>
              <span className="highlight">VFX course </span> in Saravanampatti
            </h1>
            <p className="vfx-subtitle">
              No.1 VFX training institute in saravanampatti with 100% placement
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
                <span>VFX Course </span>in Saravanampatti
              </h2>
              <p className="why-text">
                Embrace foster career development with the VFX Course in
                Saravanampatti leads to extensive earning opportunities across
                several sectors. Industry-best instructors will educate
                students, graduates, and working professionals with a holistic
                VFX training approach. Unwavering placement preparation equips
                learners with skills and knowledge which are required for
                industry-ready professionals. It helps you develop proficiency
                in various specialized areas, like techniques, storytelling
                principles, and industry-standard digital applications. On top
                of everything, limitless provisions will be accessible at the
                leading VFX training in Coimbatore - Monz Creative School. For
                unlocking essential information, such as available job
                prospects, competitive salaries, and many other details, explore
                the following sections consistently.{" "}
              </p>

              <h2 className="mt-4 why-heading">
                About the <span>VFX Course in in Saravanampatti</span>
              </h2>

              <p>
                Learners who are pursuing the VFX and animation course will
                understand techniques and technologies exploited in television,
                games, film, and other media platforms. Develops practical
                skills with composting, special effects, motion graphics, 2D and
                3D animations. Grow under highly experienced trainers who hold
                years of excellent teaching experience in the field. Eventually,
                you will be eligible for designations like animator, character
                designer, storyboard artist, game designer, visual effects
                artist, etc.
              </p>

              <h2 className="mt-4 why-heading">
                Monz Creative School <span> Highlights:</span>
              </h2>
              <ul>
                <li>One-on-One Training</li>
                <li> Dedicated placement preparation</li>
                <li>Online/Offline training</li>
                <li>Career-focused approach</li>
                <li>Industry-best mentors</li>
                <li>Broaden job opportunities</li>
                <li>Accessible multiple provisions</li>
                <li>Numerous adaptable schedules</li>
                <li>Certification with industry-recognition</li>
                <li>Stimulates credibility and job prospects</li>
              </ul>

              <h2 className="mt-4 why-heading">
                Benefits of the <span> VFX Course in Saravanampatti:</span>
              </h2>
              <ul>
                <li>
                  Those who take the Blender VFX course will master technical
                  skills from scratch by developing proficiency in every
                  standard tool and software.
                </li>
                <li>
                  Along with all potential perks, the VFX course fees in
                  Coimbatore are designed to fit an affordable budget to make
                  everything accessible for everyone.
                </li>
                <li>
                  Having proof of completed VFX certificate courses at famous
                  institutions makes it simple to attract competitive-earning
                  work from diverse sectors.
                </li>
                <li>
                  Investing in the practical VFX training in Coimbatore will
                  deliver comprehensive, industry-specific knowledge.
                </li>
                <li>
                  Learners are getting the chance in visual effects classes to
                  work on advanced tools and technologies lively.
                </li>
                <li>
                  You can get all other branch locations by the VFX course near
                  me and start chasing your passion with the real experts’
                  guidance.
                </li>
                <li>
                  Outcomes of the guaranteed placement prep on the VFX animation
                  course in Coimbatore make you potential enough to get a job at
                  top enterprises easily.
                </li>
              </ul>

              <h2 className="mt-4 why-heading">Takeaway</h2>
              <p>
                Overall glance suggests that the VFX Course in Saravanampatti
                leads to overwhelming potential job offers with rewarding
                remunerative. At the stage of training completion, you will get
                excellent placement prep service, authorized certification,
                customized learning options, and many other facilities. Learners
                utilizing the VFX institute near me can help them find these
                services within the shortest distance from their locations. With
                mere registration in the best VFX training in Coimbatore - Monz
                Creative School, grow under industrial experts, regardless of
                any restrictions.
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
              <span>VFX Course </span>in Saravanampatti with{" "}
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
                <span className="head-highlight">Job-Ready VFX Expert.</span>
              </h2>
              <p className="text-muted mb-4">
                By completing the VFX Course in Saravanampatti, you will become
                an eligible candidate for the following job roles.
              </p>
              <ul className="list-unstyled job-roles-list">
                <li className="mb-2">
                  <BsChatHeartFill />
                  VFX Artist
                </li>
                <li className="mb-2">
                  <BsChatHeartFill />
                  Lighting Artist
                </li>
                <li className="mb-2">
                  <BsChatHeartFill />
                  Compositor
                </li>
                <li className="mb-2">
                  <BsChatHeartFill />
                  3D Modeler
                </li>
                <li className="mb-2">
                  <BsChatHeartFill />
                  Technical Director
                </li>
                <li className="mb-2">
                  <BsChatHeartFill />
                  Game Designer
                </li>
                <li className="mb-2">
                  <BsChatHeartFill />
                  Roto Artist
                </li>
                <li className="mb-2">
                  <BsChatHeartFill />
                  Storyboard Artist
                </li>
                <li className="mb-2">
                  <BsChatHeartFill />
                  Motion Graphics Designer
                </li>
                <li className="mb-2">
                  <BsChatHeartFill />
                  Animator
                </li>
              </ul>
            </Col>
          </Row>
        </Container>
      </section>

      <VfxCourseTools />

      <section className="tools-section py-5">
        <div className="tools-gradient"></div>

        <div className="container text-center content">
          <h2 className="tools-heading mb-3">Tools Covered</h2>
          <p className="tools-description mb-4">
            Master industry-standard VFX tools such as Nuke, After Effects,
            Mocha Pro, Blender, and AI-assisted workflows to build strong
            compositing skills and create a studio-ready VFX showreel
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
              FAQ - VFX Course in Saravanampatti
            </h2>
            <Accordion defaultActiveKey="0">
              <Accordion.Item eventKey="0">
                <Accordion.Header>
                  1. 1. What is the definition of VFX?
                </Accordion.Header>
                <Accordion.Body>
                  It will teach about image creation, manipulation, CGI,
                  animation, and several other important techniques in the
                  entertainment industry. Developing proficiency through VFX
                  training in Coimbatore will offer skills to create historical
                  events or anything that exists in the digital era.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header>
                  2. What will I learn from the best VFX course?
                </Accordion.Header>
                <Accordion.Body>
                  It covers the process of creating visual effects for
                  industries like movies, game development, education, etc. In
                  addition, developing hands-on experience with motion graphics,
                  3D modelling, compositing, and animation in order to bring
                  life to the incredible imaginary effects with a realistic
                  touch.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="3">
                <Accordion.Header>
                  3. Is prior knowledge necessary to study VFX? course?
                </Accordion.Header>
                <Accordion.Body>
                  Studying the VFX Course will not demand particular
                  qualifications or knowledge from aspiring learners. Mastering
                  the basics is necessary to further focus on the advanced
                  concepts and techniques.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="4">
                <Accordion.Header>
                  4. Can I complete the VFX Course shortly?
                </Accordion.Header>
                <Accordion.Body>
                  For gathering precise details regarding course duration, it is
                  crucial to have a clear idea of the depth of the knowledge you
                  desire to develop. The ideal training period falls between a
                  few months to even a year. Moreover, enabling VFX classes near
                  me lets you find another branch, which is located in your
                  surroundings.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="5">
                <Accordion.Header>
                  5. Can anyone be suitable for the VFX learning course?
                </Accordion.Header>
                <Accordion.Body>
                  From freshers to working professionals, anyone can pursue VFX
                  training in Coimbatore while choosing diploma programs. While
                  expecting deep knowledge of techniques, specific requirements
                  are considered mandatory.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="6">
                <Accordion.Header>
                  6. Will I get a certificate after completing the VFX course?
                </Accordion.Header>
                <Accordion.Body>
                  Yes, you’ll receive a recognized certification from Monz
                  Creative School upon course completion. This certificate adds
                  value to your resume and proves your expertise in the VFX
                  domain.
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Row>
        </Container>
      </section>
    </>
  );
};
export default VfxCourseSaravanampatti;
