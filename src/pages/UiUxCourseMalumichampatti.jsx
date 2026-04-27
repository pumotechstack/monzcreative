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
import UiuxCourseTools from "../components/UiuxCourseTools";
import { BsChatHeartFill } from "react-icons/bs";
import { FaPhoneVolume, FaWhatsapp } from "react-icons/fa";

const UiuxCourseMalumichampatti = () => {
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
            <p className="vfx-tagline">“UI Design + UX Design + Prototyping”</p>
            <h1>
              <span className="highlight">ui ux design course </span> in
              Malumichampatti
            </h1>

            <p className="vfx-subtitle">
              No.1 ui ux training institute in Malumichampatti with 100%
              placement
            </p>

            <div className="vfx-buttons">
              <a href="tel:9843337779" className="cta-btn-banner">
                <FaPhoneVolume className="cta-icon" />
                <span>Get 30% Off – Call 9843337779 Now</span>
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
                <span>UI/UX Design Course </span>in Malumichampatti
              </h2>
              <p className="why-text">
                Today, pursuing the UI UX Design Course in Malumichampatti is
                the power for students to cultivate highly in-demand skills,
                such as creative thinking, technological confidence, and
                user-centred digital design expertise. The program is designed
                to accommodate both beginners and professionals by integrating
                theory, actual projects, and mentorship that align with the
                current product development requirements. Students at the
                midpoint of the course can rapidly participate in exposure to
                AI-powered design tools and industry practices that are
                continually updated. Learning flexibly through UI UX online
                courses with certificate empowers learners to continue academic
                or professional commitments while validating their skills. As a
                leading UI UX Design Training Institute in Malumichampatti, the
                facility is a place that nurtures the qualities of curiosity,
                collaboration, and long-term growth in the design ecosystem.
              </p>

              <h2 className="why-heading"> Course Overview </h2>
              <h2 className="why-heading">What Is a Web Design Course? </h2>
              <p>
                The syllabus comprises Courses for ui ux design fundamentals,
                with emphasis on user research, interaction design, visual
                hierarchy, and usability principles. Students also benefit from
                a ui ux design course online platform that integrates recorded
                lessons, live sessions, and guided practical assignments. This
                introduction guarantees that the participants have thorough
                knowledge of the design workflow from start to finish, and at
                the same time, get ready for the collaborative roles in agile
                and product-driven organisations.
              </p>

              <h2 className="why-heading"> Tailored UI UX Programs: </h2>
              <p>
                Individualised learning paths in UI UX designer classes are
                created to align with personal objectives, providing starter,
                intermediate, and advanced levels. Each journey emphasises the
                development of skills, building a portfolio, and deepening the
                knowledge of the chosen field, thus allowing learners to move
                forward in a way they are comfortable with. Mentors identify the
                strengths of learners on a regular basis and determine the level
                of understanding, the intricacy of the project, and the
                frequency of the feedback in order to achieve measurable,
                personalised results.{" "}
              </p>

              <h2 className="why-heading"> Choose Any Learning Mode: </h2>
              <p>
                Students have the option to choose the UI UX Design Course in
                Malumichampatti from various flexible formats. They can attend
                classes in a physical location, join live online sessions, or
                opt for self-paced learning. Each mode offers the same
                curriculum depth, practical exposure, and mentor interaction,
                thus ensuring the achievement of the desired results
                irrespective of the study format chosen. Such flexibility helps
                students, graduates, and working professionals to manage their
                time efficiently and make continuous progress towards their
                design mastery goals.
              </p>

              <h2 className="why-heading"> UI UX Course Fee: </h2>
              <p>
                Course fees for UI UX Designer Training in Malumichampatti are
                structured affordably, reflecting curriculum depth, mentorship
                quality, and practical resources.
              </p>

              <h2 className="why-heading"> UI UX Course Fee: </h2>
              <p>
                The trainers are equipped with long industry experience as they
                have contributed to the creation of digital products in various
                domains, such as SaaS, e-commerce, healthcare, and fintech. They
                blend job experience with their teaching expertise, thus making
                it easy for them to break down complex ideas and, at the same
                time, provide the learners with the practical side of the most
                recent design challenges. The continuous skill upgrade of the
                trainers enables them to stay updated with the ever-changing
                tools, methods, and requirements that characterise the modern UI
                UX roles worldwide.
              </p>

              <h2 className="why-heading"> Trainer Profile: </h2>
              <p>
                The trainers are equipped with long industry experience as they
                have contributed to the creation of digital products in various
                domains, such as SaaS, e-commerce, healthcare, and fintech. They
                blend job experience with their teaching expertise, thus making
                it easy for them to break down complex ideas and, at the same
                time, provide the learners with the practical side of the most
                recent design challenges. The continuous skill upgrade of the
                trainers enables them to stay updated with the ever-changing
                tools, methods, and requirements that characterise the modern UI
                UX roles worldwide.
              </p>

              <h2 className="why-heading">
                {" "}
                UI UX Course Practical Training:{" "}
              </h2>
              <p>
                Hands-on sessions encourage you to learn UI UX design principles
                through live projects, case studies, wireframes, prototypes, and
                iterative feedback cycles. Practical exposure is a reflection of
                the workplace scenarios, thus the learners to apply theory
                confidently while creatively and systematically solving
                usability problems effectively. By UI UX Designer Training in
                Malumichampatti, they develop a solid portfolio exhibiting their
                thorough research, design rationale, and quality of execution.
              </p>

              <h2 className="why-heading"> UI UX Course Certificate: </h2>
              <p>
                Certification is a confirmation of the learner's skills, which
                is a result of a rigorous assessment that matches the industry
                expectations and global design standards for today. The
                certificate is issued by a reputed UI UX Design Training
                Institute in Malumichampatti enhances the candidate's
                credibility during the interviews and professional evaluations.
                Employers recognise the certification as a ticket to practical
                readiness, well-organised learning, and the graduate's pledge to
                continuous professional development growth.
              </p>

              <h2 className="why-heading"> UI UX Course Eligibility </h2>
              <p>
                The course is open to students, graduates, and professionals
                from any background interested in design, technology, or digital
                innovation. No prior design experience is mandatory, as
                foundational concepts are taught progressively with supportive
                mentoring and practice sessions.
              </p>

              <h2 className="why-heading"> Placement Assistances: </h2>
              <p>
                Exclusive placement assistance arms the students with skills
                required for job acquisition through resume building, portfolio
                reviews, mock interviews, and career guidance sessions, which
                are of an individual nature. Students who choose the UI UX
                Designer course with placement in Coimbatore meet the recruiting
                partners, startups, and companies which are already established.
                The assistance available after the course completion is the
                continuation of the support, which enables them to handle job
                opportunities and career changes in the competitive markets
                successfully.
              </p>

              <h2 className="why-heading"> Careers in UI UX Course </h2>
              <p>
                After completion, learners can pursue diverse roles across
                product, research, and visual design domains within global
                technology industries.
              </p>
              <p>• UI Designer </p>
              <p>• UX Designer</p>
              <p>• Product Designer</p>
              <p>• UX Researcher</p>
              <p>• Interaction Designer</p>
              <p>• Visual Designer</p>
              <p>• Design Analyst</p>

              <h2 className="why-heading">
                <span>Takeaway</span>{" "}
              </h2>
              <p>
                Choosing a UI UX Design Course in Malumichampatti equips
                learners with structured skills, confidence, and adaptability
                for evolving digital careers. Guided by a reliable UI UX Design
                Training Institute in Malumichampatti, students gain clarity,
                mentorship, and industry-aligned exposure. The program
                ultimately transforms interest into employable expertise,
                enabling learners to contribute meaningfully within
                collaborative, innovation-driven organisations worldwide.
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
              <span>UI-UX Course </span>in Malumichampatti with{" "}
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
          <a href="tel:9843337779" className="cta-float call">
            <FaPhoneVolume />
          </a>
          <a
            href="https://wa.me/919843337779"
            target="_blank"
            rel="noopener noreferrer"
            className="cta-float whatsapp"
          >
            <FaWhatsapp />
          </a>
        </div>
      </section>

      <section className="faq-section py-5">
        <Container>
          <Row>
            <h2 className="faq-headding">
              FAQ - UI/UX Design Course in Malumichampatti
            </h2>
            <Accordion defaultActiveKey="0">
              <Accordion.Item eventKey="0">
                <Accordion.Header>
                  1. What are the skills you can gain from user interface design
                  training?
                </Accordion.Header>
                <Accordion.Body>
                  User interface design training provides skills such as
                  prototyping, usability testing, visual design, and
                  user-centred thinking. Students who join the UI UX design
                  course in Malumichampati can become proficient in harnessing
                  design software.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header>
                  2. Who should take the user experience design courses?
                </Accordion.Header>
                <Accordion.Body>
                  This is perfect for students, creative professionals, and
                  career switchers who are enthusiastic about the field. Active
                  participation during every session of the UI UX Design Course
                  in Malumichampatti would be the best for any individual to
                  grasp design, technology, and enhance digital experiences.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="3">
                <Accordion.Header>
                  3. How soon does the online ui ux course in Malumichampatti
                  take?
                </Accordion.Header>
                <Accordion.Body>
                  The time of an online UI UX course is normally between several
                  weeks and a few months, which is determined by the curriculum
                  and learning pace. A lot of learners opt for programs that
                  seize the opportunity to unlock the Best UI UX Design course
                  in Coimbatore standards; thus, they offer depth and a balanced
                  timeline.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="4">
                <Accordion.Header>
                  4. Does UI UX design certification lead to demanding careers?
                </Accordion.Header>
                <Accordion.Body>
                  Yes! Acknowledgement of the UI UX online courses with
                  certificate can facilitate access to highly demanding roles,
                  such as UI designer, UX researcher, product designer, etc.
                  Completing the Best ui ux course in Malumichampatti makes your
                  portfolio stand out among numerous applications.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="5">
                <Accordion.Header>
                  5. Can professionals take UI UX design programs on flexible
                  schedules?
                </Accordion.Header>
                <Accordion.Body>
                  Yes! Depth coverage of the ui and ux designer course is
                  designed with flexible schedules, including weekend and
                  self-paced learning options. This allows working professionals
                  to upskill without disrupting their current job commitments.
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
export default UiuxCourseMalumichampatti;
