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
import JewelleryCadCourseTools from "../components/JewelleryCadCourseTools";
import { BsChatHeartFill } from "react-icons/bs";
import { FaPhoneVolume, FaWhatsapp } from "react-icons/fa";

const JewelleryCaddDesignCourseSaravanampatti = () => {
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
              -Jewellery CAD Fundamentals + 3D Modelling + Stone Setting
              Essentials-
            </p>
            <h1>
              <span className="highlight">Jewellery CAD design course</span>in
              Saravanampatti
            </h1>
            <p className="vfx-subtitle">
              No.1 Jewellery CAD design course in Saravanampatti with 100%
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
                <span> Jewellery CAD design course </span> in Saravanampatti{" "}
              </h2>
              <p className="why-text">
                Youngsters by choosing the Jewellery CAD design course in
                Saravanampatti at Monz Creative School, not just access the best
                teaching service but also get proficiency with the latest
                cutting-edge technologies. As tools start to dominate each
                sector, learn here to stay competent regardless of time. You can
                unlock your creative potential with our Jewellery CAD in
                Saravanampatti training designed for future professional
                designers and industry innovators. If you prefer the CAD
                jewellery design course online, it lets you take advantage of
                expert-led instruction with hands-on software practice for
                real-world skill building. Knowledge of essential 2D, 3D
                modelling techniques, industry-standard tools, practical
                workflows, and projects makes you job-ready from day one. Learn
                how modern jewellery design integrates CAD technology to
                streamline creativity, prototyping, and production efficiently.
                It is a thriving career for beginners or professionals seeking
                advanced skills. Join us now to chase your passion with
                unrivalled support and real industry insights.{" "}
              </p>
              <h2 className="why-heading"> Highlights: </h2>
              <p>• Free Demo Sessions </p>
              <p>• Personal Mentors </p>
              <p>• Career-Based Training </p>
              <p>• Flexible Batches </p>
              <p>• 80% Practical, 20% Theory </p>
              <p>• Live Practice on Real-World Projects </p>
              <p>• Wide Job Opportunities </p>
              <p>• Placement Support Even After Training </p>

              <h2 className="why-heading">
                {" "}
                About Jewellery Cad Design Course{" "}
              </h2>
              <p>
                To prepare students with outstanding potential, the Jewellery
                CAD design course in Saravanampatti revolves around effective
                yet essential skill development concepts. You will transform
                into a professional to make very accurate, production-ready
                jewellery designs using the latest computer-aided design
                software. Students get hands-on experience with the tools used
                in the industry, grasp the significance of accuracy in design,
                and enhance their creativity that fits the trend of the market.
                Besides, the training illustrates the work processes typical of
                real jewellery studios, enabling students to create impressive
                portfolios and have highly employable technical skills.
              </p>

              <h2 className="why-heading">
                {" "}
                What You Will Gain from Jewellery Cad Design Training?{" "}
              </h2>
              <p>
                To prepare students with outstanding potential, the Jewellery
                CAD design course in Saravanampatti revolves around effective
                yet essential skill development concepts. You will transform
                into a professional to make very accurate, production-ready
                jewellery designs using the latest computer-aided design
                software. Students get hands-on experience with the tools used
                in the industry, grasp the significance of accuracy in design,
                and enhance their creativity that fits the trend of the market.
                Besides, the training illustrates the work processes typical of
                real jewellery studios, enabling students to create impressive
                portfolios and have highly employable technical skills.
              </p>

              <h2 class="mt-4">
                What You Will Gain from Jewellery Cad Design Training?{" "}
              </h2>
              <p>
                <b>Master Professional Jewellery CAD Skills </b>
              </p>
              <p>
                Regularly attending jewellery design classes leads to having
                in-depth knowledge of industry-standard CAD software used across
                the real-time industry. Trains you to craft 2D sketches and
                advanced 3D models with precision prospects. Gives the discovery
                of how digital software improves design quality and production
                efficiency with detailed accuracy.
              </p>

              <p>
                <b>Develop Manufacturing-Ready Design Expertise</b>
              </p>
              <p>
                The foremost focus of the Jewellery CAD in Saravanampatti
                prioritises the development of jewellery design ready for real
                manufacturing processes. Moreover, making you familiar with
                stone setting techniques, weight optimisation, and thickness
                control. This knowledge makes you notice a big improvement in
                potential production errors and acceptance by manufacturers and
                brands.
              </p>

              <p>
                <b>Build a Strong Professional Portfolio</b>
              </p>
              <p>
                Practical knowledge of real-world projects assists in drafting a
                portfolio with learned skills that have gained from training to
                showcase creativity and technical skills. Each design reflects
                real market standards followed by jewellery companies. Making a
                strong portfolio is most important, as it have capacity to
                increase your chances of employment.
              </p>

              <p>
                <b>Gain Industry Workflow Knowledge</b>
              </p>
              <p>
                Learners can explore a real workflow that involves activities
                like CAD designs, moving from concept to production. On the
                other hand, they practice working together with other
                professionals like model makers, setters, designers, and
                manufacturers.
              </p>

              <p>
                <b>Enhance Creativity with Technical Accuracy</b>
              </p>
              <p>
                Often, practicing with interest improves creative thinking along
                with maintaining design precision. Active exposure to the ideal
                classes teaches conversion of ideas into visually appealing and
                functional digital designs. It is considered most essential for
                modern jewellery designers.
              </p>

              <p>
                <b>Improve Career and Freelancing Opportunities</b>
              </p>
              <p>
                Your decision to acquire significant Jewellery CAD design skills
                aids in accessing multiple career paths. It provides sufficient
                confidence to handle client requirements by your own effort and
                knowledge. Gaining training through CAD jewellery design classes
                near me from a reputed learning platform equips you with
                future-ready skills for long-term career growth.
              </p>

              <h2 class="mt-4">
                Top Reasons to Choose the Jewellery CAD Design Course in
                Saravanampatti:{" "}
              </h2>

              <p>
                <b>On-Campus Drive:</b>
              </p>
              <p>
                Monz Creative School frequently holds campus recruiting events
                where students get to meet and interact with real-world industry
                recruiters. During these sessions, you not only get to exhibit
                your portfolio projects but also get to interact with studio and
                design house hiring managers directly. Students coming into
                these events learn and practice how to professionally present
                their work and consequently get interview-ready, a significant
                plus for getting future opportunities.
              </p>
              <p>
                <b>Long-Term Career Support:</b>
              </p>
              <p>
                At Monz Creative School, lifelong career assistance is offered
                not only when one is pursuing Jewellery CAD in Saravanampatti
                but also after training completion. Skilled mentors on the best
                jewellery design course online provide personalised guidance on
                how to create your resume, portfolio, and interview techniques
                for the best impact in current job markets. This extended kind
                of support guarantees that you have the latest industry skills
                and connections to fresh design studio and manufacturing job
                openings.
              </p>
              <p>
                <b>Creates Industry-Ready Professionals:</b>
              </p>
              <p>
                The course material is based on the requirements of the
                jewellery industry, thus making the students capable of working
                with CAD tools routinely used by modern jewellery brands. As a
                result, graduates have a certificate acknowledging their skills,
                and it proves to be a significant asset in their favour when
                dealing with both prospective employers and clients. Such a
                certificate leads to higher trust, making it easier to step into
                professional services and freelance gigs anywhere in the world.
              </p>
              <p>
                <b>One-On-One Training: </b>
              </p>
              <p>
                Provides one, on, one CAD training sessions for jewellery design
                to help you get your hand skills and design right. An individual
                mentor helps you learn by reflecting their guidance, and the
                feedback is tailored to your own creative style. Build up
                confidence and speed up your progress toward becoming an expert
                jewellery CAD designer through regular interactions.
              </p>
              <p>
                <b>Tailored Programs:</b>
              </p>
              <p>
                Our programmes are aimed at different digital jewellery skill
                levels and aspirations of getting a career in the same field.
                The custom-made CAD programs for jewellery design can take a
                beginner or a seasoned designer to the maximum level of growth
                and industry relevance. Customised modules offer a mix of
                theoretical knowledge, software skills, and real-world projects
                that represent the existing market needs and trends.
              </p>
              <p>
                <b>Learning Modes:</b>
              </p>
              <p>
                Enables flexible modes of learning, like virtual and physical
                classroom trainings, to fit the hectic lifestyles of students.
                Pick CAD courses for jewellery design from either online or
                classroom learning options. Such a provision guarantees that
                students receive good tutoring, get interested in a course, and
                also have smooth access to the course materials from anywhere
                without any difficulties.
              </p>
              <p>
                <b>Fee:</b>
              </p>
              <p>
                Experts designed the CAD jewellery design course fees structure
                to fit into the average level student's budget after
                meticulously considering many factors. It helps many people to
                upgrade or direct their career to the bright path with the right
                professional guidance.{" "}
              </p>
              <p>
                <b>Duration:</b>
              </p>
              <p>
                It is possible at Pumo Technovation to complete a comprehensive
                program within your desired period through accessible, custom
                schedules and experienced trainers. No worries for you! Directly
                contact the official team and go for your preferred batch that
                matches your requirements or needs.{" "}
              </p>

              <h2 class="mt-4">Career Opportunities: </h2>
              <p>• Jewellery CAD Designer</p>
              <p>• 3D Jewellery Designer</p>
              <p>• Jewellery Design Engineer</p>
              <p>• Jewellery CAD Technician</p>
              <p>• Jewellery Rendering Specialist</p>
              <p>• CAM Operator</p>
              <p>• Product Development Executive</p>
              <p>• Custom Jewellery Designer</p>
              <p>• Freelance Jewellery CAD Designer</p>
              <p>• Jewellery Manufacturing Support Designer</p>
              <p>• Jewellery Design Consultant</p>
              <p>• Jewellery CAD Trainer</p>

              <h2 class="mt-4">
                <span>Summary</span>{" "}
              </h2>
              <p>
                Offers professionally industry-trained solutions through the
                Jewellery CAD design course in Saravanampatti for creative and
                technical professionals. Students effectively become proficient
                with Computer-aided jewellery design in 2D as well as 3D
                modelling through the use of the most up-to-date CAD software.
                Students get trained by experts with the Jewellery CAD in
                Saravanampatti, work on hands-on projects, and receive real-time
                guidance and therefore become job-ready. This is a stepping
                stone to the future career of the students in the field, thus
                helping aspirants who want to have a secure professional future
                with long-term yet potential career support.
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
              <span>Jewellery CAD design course </span>in Saravanampatti with
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
          <a href="tel:8925871588" className="cta-float call">
            <FaPhoneVolume />
          </a>
          <a
            href="https://wa.me/918925871588"
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
              FAQ - <span>Jewellery CAD design course in Saravanampatti</span>
            </h2>
            <Accordion defaultActiveKey="0">
              <Accordion.Item eventKey="0">
                <Accordion.Header>
                  1. Which is the No.1 Jewellery CAD Training Institution In
                  Coimbatore?
                </Accordion.Header>
                <Accordion.Body>
                  By enabling the jewellery CAD design course near me, you can
                  find the No.1 Training Institution - Monz Creative School.
                  Here, you can explore exceptional benefits include
                  personalised mentorship, long-term career growth, and support
                  even after training.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header>
                  2. What are the ways to become an expert in Jewellery CAD
                  Design?
                </Accordion.Header>
                <Accordion.Body>
                  As the foremost step, students learning the Jewellery CAD
                  design course in Saravanampatti receive a strong foundation by
                  mastering the basics. It includes knowledge of manufacturing
                  processes, design fundamentals, sketching, jewellery
                  terminology, and much more.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="3">
                <Accordion.Header>
                  3. What are the qualifications for the Jewellery CAD Course in
                  Saravanampatti?
                </Accordion.Header>
                <Accordion.Body>
                  The base metric is to have completed education for pursuing
                  the Jewellery CAD programs, and additionally, having
                  familiarity with computer skills is an added advantage. Among
                  all, your effort, passion, and practice are considered most
                  essential for achieving the goal.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="4">
                <Accordion.Header>
                  4. How much can I earn from a Jewellery CAD Design Career?
                </Accordion.Header>
                <Accordion.Body>
                  By completing the Best jewellery CAD course in Saravanampatti
                  - Monz Creative School, you can aim for great earnings even
                  from entry-level jobs. It might grow higher with experience
                  and knowledge, so kickstart your career in this field
                  confidently. opportunities.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="5">
                <Accordion.Header>
                  5. Is the Jewellery CAD Design Course worth doing today?
                </Accordion.Header>
                <Accordion.Body>
                  Yes! If you want to embark on a well-rounded career, pursue
                  the Jewellery CAD in Saravanampatti and gain proficiency with
                  core skills such as harnessing industry-standard software,
                  etc. This career path is also a key to opening door of
                  limitless job opportunities across different domains.
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
export default JewelleryCaddDesignCourseSaravanampatti;


