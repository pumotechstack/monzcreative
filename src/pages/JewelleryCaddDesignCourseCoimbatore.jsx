import React from "react";
import "./CoursesPageStyle.css";
import StudentsWork from "../components/StudentsWork";
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Accordion from "react-bootstrap/Accordion";
import JewelleryCadCourseTools from "../components/JewelleryCadCourseTools";
import { BsChatHeartFill } from "react-icons/bs";
import { FaPhoneVolume, FaWhatsapp } from "react-icons/fa";

const JewelleryCaddDesignCourseCoimbatore = () => {
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
              -Jewellery CAD Fundamentals + 3D Modelling + Stone Setting
              Essentials-
            </p>
            <h1>
              <span className="highlight">Jewellery CAD design course</span>in
              coimbatore
            </h1>
            <p className="vfx-subtitle">
              No.1 Jewellery CAD design course in coimbatore with 100% placement
              support
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
                {" "}
                <span> Jewellery CAD design course </span> in Coimbatore{" "}
              </h2>
              <p className="why-text">
                Jewellery CAD design course in Coimbatore To earn an amazing
                salary with your artistic skill, take the Jewellery CAD design
                course in Coimbatore at Monz Creative School. It will transform
                you become a certified jewellery designer who can unlock
                extensive, rewarding job offers from the moment of completing
                training. By learning Jewellery CAD in Coimbatore at this
                platform, you will get the chance to enjoy more perks. Industry
                specialists will train you from day one with dedicated support
                and efforts to deliver equal education to suit different
                understanding levels. Indeed! You can expect a tailored approach
                from experts. Therefore, this can be a prime destination whether
                you’re a beginner, graduate, student, or working professional.{" "}
              </p>

              <h2 className="why-heading">
                {" "}
                About The Jewellery CAD <span>in Coimbatore</span>:
              </h2>
              <p>
                The main objective of the Jewellery CAD design course in
                Coimbatore focuses on teaching the conversion of concepts into
                manufacturable 3D models. It provides familiarity with core
                areas such as design theory, materials study, rendering,
                dimensions, proportions, manufacturing process, and portfolio
                development. Industry experts help you to understand everything
                with comprehensive information. This is also the best choice to
                enter and work in booming industries under the guidance of
                excellent professionals.
              </p>

              <h2 className="why-heading">
                {" "}
                Essential Duties Of Jewellery Designers:
              </h2>
              <p>
                • One of the jobs includes manually developing jewellery designs
                or using CAD software.{" "}
              </p>
              <p>
                • Specialised in gemology or diamond grading needs to check the
                quality of gemstones.{" "}
              </p>
              <p>
                • Incorporates clients’ requirements, such as style, budget,
                material, and occasion, with precise details into designs.{" "}
              </p>
              <p>
                • Deeply research to be updated with current trends and market
                demands that assist in creating new collections and predict what
                will work in the future.{" "}
              </p>
              <p>
                • From reviewing and altering designs for technical accuracy
                through digital prototyping to finalising it with the client's
                approval.{" "}
              </p>
              <p>
                • Coordinating between craftsmen and manufacturers to grasp
                their design idea and improve it in accordance with standard
                requirements.{" "}
              </p>
              <p>
                • Be responsible for generating a design with visually
                enchanting and marks the brand’s authenticity at the same time,
                maintaining fixed cost points.{" "}
              </p>
              <p>
                • Learn about other roles after joining the Jewellery CAD in
                Coimbatore that emphasise career-based training.{" "}
              </p>

              <h2 className="why-heading">
                {" "}
                Why Learn CAD jewellery design at Monz Creative School?
              </h2>
              <p>
                • Experts designed the CAD jewellery design course fees
                structure to suit ordinary students' budgets, allowing them to
                chase their dream career without struggle.{" "}
              </p>
              <p>
                • Mentorship with the CAD programs for jewellery design delivers
                a practice-driven learning experience to develop software
                proficiency.{" "}
              </p>
              <p>
                • Pursuing a certified course at the No.1 Jewellery CAD Training
                Institute in Coimbatore automatically creates a big recognition
                for your potential.{" "}
              </p>
              <p>
                • Enabling the option of the jewellery CAD design course near me
                might bring you to one of our branches.{" "}
              </p>
              <p>
                • Preferring the best jewellery design course online is highly
                beneficial for professionals to balance work and study
                profoundly.{" "}
              </p>
              <p>
                • Industry specialists will boost your creativity level to be
                consistent with thinking innovatively and achieve antique
                jewellery ornaments production.{" "}
              </p>
              <p>
                • Witness a big difference in student-mentor interaction that is
                structured to enhance design thinking and correct mistakes.{" "}
              </p>
              <p>
                • Learners will understand real-time market demand and standards
                during live project sessions.{" "}
              </p>

              <h2 className="why-heading">
                {" "}
                <span>Job Opportunities After The Jewellery CAD Training:</span>
              </h2>
              <p>• Jewellery CAD Designer </p>
              <p>• Jewellery Manufacturing Technician </p>
              <p>• Custom Jewellery Designer </p>
              <p>• Jewellery Design Consultant </p>
              <p>• Freelance Jewellery Designer </p>
              <p>• Jewellery Business Owner </p>
              <p>• Jewellery Merchandiser </p>
              <p>• Jewellery Product Manager </p>
              <p>• Gemologist </p>
              <p>• Jewellery Instructor </p>

              <h2 className="why-heading">
                {" "}
                <span>Summary</span>
              </h2>
              <p>
                The training of the Jewellery CAD design course in Coimbatore
                prepares you with all possible support and assistance. It
                includes one-on-one coaching, job-oriented skill development,
                portfolio building, a tailored syllabus according to personal
                requirements, etc. As these powerful combination has behind your
                back, you can bring your lifestyle even up to a lavish level
                over time. Students will acquire the best career guidance from
                experts by pursuing the Jewellery CAD in Coimbatore with an
                accredited certification.
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
              <span>Jewellery CAD design course </span>in Coimbatore with
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
                    src="/images/jewellery/jewellery-cad-1.jpg"
                    alt="Jewellery CAD Lab Training"
                    className="img-fluid rounded-4 shadow-sm"
                  />
                </div>
                <div className="col-6">
                  <img
                    src="/images/jewellery/jewellery-cad-2.jpg"
                    alt="3D Jewellery Design Training"
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
                  Job-Ready Jewellery CAD Designer
                </span>
              </h2>

              <p className="text-muted mb-4">
                Our Jewellery CAD Design course equips you with hands-on 3D
                modelling skills, industry-standard software training, and
                real-world jewellery design workflows to succeed in the
                jewellery industry.
              </p>

              <ul className="list-unstyled job-roles-list">
                <li className="mb-2">
                  <BsChatHeartFill /> Jewellery CAD Designer
                </li>
                <li className="mb-2">
                  <BsChatHeartFill /> 3D Jewellery Modeller
                </li>
                <li className="mb-2">
                  <BsChatHeartFill /> Jewellery Product Designer
                </li>
                <li className="mb-2">
                  <BsChatHeartFill /> Ring & Pendant Design Specialist
                </li>
                <li className="mb-2">
                  <BsChatHeartFill /> Stone Setting Design Technician
                </li>
                <li className="mb-2">
                  <BsChatHeartFill /> CAD CAM Jewellery Executive
                </li>
                <li className="mb-2">
                  <BsChatHeartFill /> Jewellery Manufacturing CAD Artist
                </li>
                <li className="mb-2">
                  <BsChatHeartFill /> Freelance Jewellery Designer
                </li>
              </ul>
            </Col>
          </Row>
        </Container>
      </section>

      <JewelleryCadCourseTools />

      <section className="tools-section py-5">
        <div className="tools-gradient"></div>

        <div className="container text-center content">
          <h2 className="tools-heading mb-3">Tools Covered</h2>
          <p className="tools-description mb-4">
            Master industry-standard Jewellery CAD design tools used by
            professional jewellery designers and manufacturing units. Gain
            hands-on experience in 3D jewellery modelling, stone setting,
            rendering, and production-ready design workflows to become job-ready
            in the jewellery industry.
          </p>

          <div className="row justify-content-center">
            <div className="col-6 col-sm-4 col-md-3 col-lg-2 mb-4">
              <div className="tool-card">
                <img src="/tools/rhino.png" alt="Rhino 3D" />
                <p>Rhino 3D</p>
              </div>
            </div>

            <div className="col-6 col-sm-4 col-md-3 col-lg-2 mb-4">
              <div className="tool-card">
                <img src="/tools/matrix.png" alt="MatrixGold" />
                <p>Matrix / MatrixGold</p>
              </div>
            </div>

            <div className="col-6 col-sm-4 col-md-3 col-lg-2 mb-4">
              <div className="tool-card">
                <img src="/tools/jewelcad.png" alt="JewelCAD" />
                <p>JewelCAD</p>
              </div>
            </div>

            <div className="col-6 col-sm-4 col-md-3 col-lg-2 mb-4">
              <div className="tool-card">
                <img src="/tools/zbrush.png" alt="ZBrush" />
                <p>ZBrush</p>
              </div>
            </div>

            <div className="col-6 col-sm-4 col-md-3 col-lg-2 mb-4">
              <div className="tool-card">
                <img src="/tools/keyshot.png" alt="KeyShot" />
                <p>KeyShot</p>
              </div>
            </div>

            <div className="col-6 col-sm-4 col-md-3 col-lg-2 mb-4">
              <div className="tool-card">
                <img src="/tools/blender.png" alt="Blender" />
                <p>Blender (Jewellery)</p>
              </div>
            </div>

            <div className="col-6 col-sm-4 col-md-3 col-lg-2 mb-4">
              <div className="tool-card">
                <img src="/tools/photoshop.png" alt="Photoshop" />
                <p>Photoshop</p>
              </div>
            </div>

            <div className="col-6 col-sm-4 col-md-3 col-lg-2 mb-4">
              <div className="tool-card">
                <img src="/tools/coreldraw.png" alt="CorelDRAW" />
                <p>CorelDRAW</p>
              </div>
            </div>

            <div className="col-6 col-sm-4 col-md-3 col-lg-2 mb-4">
              <div className="tool-card">
                <img src="/tools/printing.png" alt="3D Printing" />
                <p>3D Printing Workflow</p>
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
              FAQ - <span>Jewellery CAD design course in Coimbatore</span>
            </h2>
            <Accordion defaultActiveKey="0">
              <Accordion.Item eventKey="0">
                <Accordion.Header>
                  1. What does the term CAD mean in Jewellery design? barrier?
                </Accordion.Header>
                <Accordion.Body>
                  The term CAD refers to a digital application that effectively
                  generates sketches or prototypes and converts them into 3D
                  printing models. It empowers individuals to see a design in
                  various aspects by incorporating increased precision, speed,
                  and creativity.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header>
                  2. What is the price of the Jewellery CAD design course in
                  Coimbatore?
                </Accordion.Header>
                <Accordion.Body>
                  Students and working professionals can attend the Jewellery
                  CAD programs at an affordable fee. However, it integrates a
                  personalised coaching service, practical sessions, and
                  software proficiency within this budget to prioritise
                  learners' professional growth.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="3">
                <Accordion.Header>
                  3. What is the best way to learn CAD Jewellery design?
                </Accordion.Header>
                <Accordion.Body>
                  Joining the Jewellery CAD in Coimbatore lets you explore a
                  combination of expert-led programs, hands-on experience, and
                  soft skill development. Start by enabling CAD jewellery design
                  classes near me and focus on strengthening your foundation in
                  the field.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="4">
                <Accordion.Header>
                  4. Who are the right candidates for the computer aided
                  jewellery design?
                </Accordion.Header>
                <Accordion.Body>
                  If you’re a candidate who possesses an eye for detail,
                  extensive creativity, and visual imagination, choosing to
                  pursue the Jewellery CAD design course in Coimbatore can be an
                  excellent choice. Students or graduates from any stream with
                  an unwavering passion for the field also do the course.
                  Moreover, earning certification with the Jewellery CAD design
                  course will help you to unlock limitless, promising job
                  opportunities.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="5">
                <Accordion.Header>
                  5. Can I learn a CAD jewellery design course online?
                </Accordion.Header>
                <Accordion.Body>
                  Yes! You can take the CAD courses for jewellery design at Monz
                  Creative School online and learn with the greatest dedication
                  by customising study hours. It allows learners to experience
                  generous convenience, which aids in continuing studies
                  regardless of an ideal job or other chores.
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Row>
        </Container>
      </section>
    </>
  );
};
export default JewelleryCaddDesignCourseCoimbatore;
