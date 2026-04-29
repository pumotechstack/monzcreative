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


const UiuxCourseSaravanampatti = () => {
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
              saravanampatti
            </h1>

            <p className="vfx-subtitle">
              No.1 ui ux training institute in saravanampatti with 100%
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
                <span>UI/UX Design Course </span>in Saravanampatti
              </h2>
              <p className="why-text">
                Looking for an easy yet thriving career? Join the UI UX Design
                Course in Saravanampatti at Monz Creative School to enjoy
                professional coaching services. It can be the best learning
                institution to utilize UI UX online courses with certificate,
                which offer job security for learners. They can chase their
                dream regardless of their core field in this environment and are
                expected to earn lucratively. Moreover, trainers are also
                meticulously hired in order to maintain the service of
                excellence and prepare youngsters for a bright future with
                unwavering support. To learn about other available perks and
                outstanding services, enroll at this popular UI UX Design
                Training Institute in Saravanampatti.
              </p>
              <h2 className="why-heading">
                <span> About the UI UX Design Course </span>in Saravanampatti
              </h2>
              <p>
                About the UI UX Design Course in Saravanampatti Students
                learning the UI UX Design Course in Saravanampatti will gain
                knowledge of the principles and usage of user interface design
                for developing digital applications and websites. They will know
                how to design an engaging, user-friendly, and visually pleasing
                interface. Expert-led syllabus of Courses for UI UX design will
                educate on theoretical and practical sessions to develop a deep
                insight into the field. Learners can explore plenty of
                provisions, facilities, and services under a single roof.
                Therefore, join the UI UX Designer Training in Saravanampatti as
                soon as possible to secure a position among the limited seats.
              </p>
              <h2 className="why-heading">Monz Creative School Services:</h2>
              <p>• Advanced tech campus </p>
              <p>• Cutting-edge tools and technologies</p>
              <p>• Personalised staff support</p>
              <p>• Accessible well-equipped resources</p>
              <p>• Develop professional networks</p>
              <p>• Extensive job opportunities</p>
              <p>• Industry-best instructors</p>
              <p>• Exceptional placement prep</p>
              <h2 className="why-heading">
                <span> Benefits of the </span>UI UX Design Course in
                Saravanampatti:
              </h2>
              <p>
                • Holistic mentorship of the UI UX designer classes is centered
                on delivering in-depth practical knowledge on real-world
                projects.{" "}
              </p>
              <p>
                • Creating demand for your skill after the User experience
                design courses, especially in sectors like education,
                healthcare, finance, technology, etc.
              </p>
              <p>
                • Earning certification and placement assistance is common for
                those who do the UI UX design course online at the training
                completion.
              </p>
              <p>
                • Boosting employability is simple with the UI UX design
                certification keeps your future more secure and thriving.
              </p>
              <p>
                • Personalised talented faculty’s coaching will allow you to
                learn UI UX design in the best possible way.
              </p>
              <p>
                • Learners will see multiple UI UX design programs due to offer
                the greatest insight without any restrictions or inconvenience.
              </p>
              <p>
                • It is not limited to a particular profession but also extends
                knowledge on the web design course or something else in this
                single learning platform.
              </p>

              <h2 className="why-heading">Employment Opportunities:</h2>
              <p>
                {" "}
                An in-depth understanding of the UI and UX designer course
                training makes you eligible for the listed promising job roles
                in the future
              </p>
              <p>
                <b>UI Designer</b>
              </p>
              <p>
                The UI Designer’s ideal job is to enhance visual and interactive
                elements in a product interface, preserving a user-friendly
                experience.
              </p>
              <p>
                <b>UX Designer</b>
              </p>
              <p>
                By mastering user needs, designing with intuitive details, and
                using metrics to boost audience engagement, building digitalized
                products.
              </p>
              <p>
                <b>Interaction Designer</b>
              </p>
              <p>
                Constructing design interaction in order to maintain an
                effective connection between digital products and users with
                precision details to stimulate socialization.
              </p>
              <p>
                <b>Product Designer</b>
              </p>
              <p>
                From assessment to product lifecycle implementation, a
                professional needs to take charge of functionality, product
                form, and touchpoints development.
              </p>
              <p>
                <b>UX Writer</b>
              </p>
              <p>
                The main task of the content creation encompasses copy and
                interface texts for web experiences and products.
              </p>
              <p>
                <b>Usability Tester</b>
              </p>
              <p>
                Experts in the field ideally work to track real users’ behaviors
                and interactions with websites, software products, and
                applications to optimize effectiveness and user-friendliness.
              </p>

              <h2 className="why-heading">
                {" "}
                <span>Conclusion</span>{" "}
              </h2>
              <p>
                Registering for the UI UX Design Course in Saravanampatti can
                remain your career milestone and guide you with industrial
                specialists. They have extensive knowledge in teaching and
                cultivating in-demand skills for learners with different
                knowledge levels. It is possible to study the Web Designing
                Course in Saravanampatti or develop skills in any other
                specialized areas. Therefore, join Monz Creative School - the
                famous UI UX Design Training Institute in Saravanampatti for an
                affordable fee.
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
              <span>UI-UX Course </span>in Saravanampatti with{" "}
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
              FAQ - UI/UX Design Course in Saravanampatti
            </h2>
            <Accordion defaultActiveKey="0">
              <Accordion.Item eventKey="0">
                <Accordion.Header>
                  1. What is the UI UX Design training duration?
                </Accordion.Header>
                <Accordion.Body>
                  The significant variation you can witness in the UI UX Design
                  training is due to the type of the program and the depth of
                  the course. For collecting accurate details, contact the
                  leading UI UX Design Training Institute in Saravanampatti -
                  Monz Creative School.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header>
                  2. Will students get assured placement assistance?
                </Accordion.Header>
                <Accordion.Body>
                  Of course, yes! Students will acquire guaranteed placement
                  assistance regardless of their course choice and learning
                  mode. It is delivered by industrial professionals with
                  dedicated support and effort, so you can expect the best
                  learning experience.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="3">
                <Accordion.Header>
                  3. What is the definition of UI UX Design?
                </Accordion.Header>
                <Accordion.Body>
                  The User Interface design vision fully falls into visual
                  elements and interactive component optimization. The UX design
                  reflects a product's info and aims for a seamless experience.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="4">
                <Accordion.Header>
                  4. Does Monz Creative School offer online classes?
                </Accordion.Header>
                <Accordion.Body>
                  Yes! Everyone will have access to virtual learning with the
                  facility of custom schedules and authorized certification.
                  Hence, you can follow your passion no matter whether you are a
                  student, a fresher, or a working professional without
                  struggles.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="5">
                <Accordion.Header>
                  5. What is the UI UX Design Course in Saravanampatti pay?
                </Accordion.Header>
                <Accordion.Body>
                  Learning mode and other metrics will decide the UI UX Design
                  Course in Saravanampatti fees. It is guaranteed to come into
                  your budget for registering at the best UI UX Designer
                  Training in Saravanampatti - Monz Creative School, along with
                  limitless perks.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="6">
                <Accordion.Header>
                  6. Will I get a certificate after completing the UI/UX course?
                </Accordion.Header>
                <Accordion.Body>
                  Yes, you’ll receive a recognized certification from Monz
                  Creative School upon course completion. This certificate adds
                  value to your resume and proves your expertise in the UI/UX
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
export default UiuxCourseSaravanampatti;
