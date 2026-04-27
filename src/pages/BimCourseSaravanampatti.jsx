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
import BimCourseTools from "../components/BimCourseTools";
import { BsChatHeartFill } from "react-icons/bs";

const BimCourseSaravanampatti = () => {
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
              “- BIM Architecture + BIM Structure + BIM MEP -”
            </p>
            <h1>
              <span className="highlight">BIM Course</span> in Saravanampatti
            </h1>
            <p className="vfx-subtitle">
              No.1 BIM Course in Saravanampatti with 100% placement support
            </p>

            <div className="vfx-buttons">
              <a
                href="tel:+918925871588"
                style={{ color: "inherit", textDecoration: "none" }}
              >
                <button className="btn enroll-btn">Enroll Now</button>
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
                <span> BIM Course </span>in Saravanampatti
              </h2>
              <p className="why-text">
                Seeking the best career and coaching? Choose the BIM Course in
                Saravanampatti at Monz Creative School. The popular software -
                BIMs (Building Information Modelling) interface empowers users
                with smarter planning, design, and project execution to
                transform the architecture, engineering, and construction
                industry seamlessly. Expert mentors equip students and
                professionals with practical, industry-ready skills by teaching
                the application of leading tools like Revit, Navisworks, etc.
                Through hands-on training, expert guidance, and real-world
                project experience at the best BIM Training Institute in
                Saravanampatti, you will learn to create accurate 3D models,
                collaborate efficiently, and streamline project workflows. It is
                a typical career path for other professionals, like an
                architect, engineer, or beginner aiming to enter the
                construction technology field. They seize the opportunity to
                advance their career and meet the growing global demand.
              </p>
              <h2 className="why-heading">Topics We Covered:</h2>
              <p>• Basics of BIM</p>
              <p>• Revit</p>
              <p>• Revit Structure </p>
              <p>• Navis Workflow</p>
              <p>• Assembly Drawing</p>
              <p>• Rendering</p>
              <p>• HVAC</p>
              <p>• Ventilation System</p>• Primaver<p>• HVAC</p>
              <p>• Project Codes</p>
              <p>• Cost Management</p>
              <h2 className="why-heading">Tools You Will Be Trained On:</h2>
              <p>• Navis</p>
              <p>• Tekla</p>
              <p>• Revit MEP</p>
              <p>• Primavera</p>
              <p>
                Indeed! You can be proficient at handling all exceptional
                software in BIM.
              </p>
              <h2 className="mt-4 why-heading">One-On-One Training:</h2>
              <p>
                Learning at the Best BIM Training Institute gives you exclusive
                access to 1-on-1 personalised training, equalising dedicated
                support and clear guidance. You can learn in any comfortable
                space with a flexible pace, ask doubts, and gain deeper clarity
                on complex BIM concepts. Through dedication, instructor
                attention fastens skill development, improves confidence, and
                strengthens project-ready abilities. If you need extra help and
                Individualized explanations, the one-on-one coaching makes your
                learning experience even smoother and effective.
              </p>
              <h2 className="mt-4 why-heading">
                Our Prestigious Partnerships:
              </h2>
              <p>
                <b>Certification Authorities:</b>
              </p>
              <p>
                India’s advanced AI Integrated Tech Campus earned invaluable
                recognition from authorised parties like ISO, NASSCOM, NSDC,
                IAF, and IAS.
              </p>
              <p>
                <b>Technology & Industry Partners:</b>
              </p>
              <p>
                FANUC India, Mitsubishi Cutting Tools, Accurate Gauges, Aditya
                Measurements, Renishaw, Mitutoyo, SolidWorks – giving access to
                cutting-edge tools and real-world industry practices.
              </p>
              <h2 className="mt-4 why-heading">
                Benefits for Students at Monz Creative School
              </h2>
              <p>
                • Gain universally recognised certifications that enhance
                employability.
              </p>
              <p>
                • Access industry-standard tools and software for hands-on
                training.
              </p>
              <p>
                • Learn through real-world projects aligned with current
                industry practices.
              </p>
              <p>
                • Build strong professional networks through our technology and
                certification partners.
              </p>
              <p>
                • Widen career opportunities in top engineering, manufacturing,
                and BIM companies.
              </p>
              <h2 className="mt-4 why-heading">Tailored Programs:</h2>
              <p>
                Basic Level - It is centred on strengthening the foundation by
                educating on BIM concepts and essential tools for beginners.
              </p>
              <p>
                Intermediate Level - Grows job-ready skills with practical
                applications and real-world project workflows.
              </p>
              <p>
                Expert Level - Lectures of the masters in BIM cover advanced BIM
                techniques and industry standards for professional excellence.
              </p>
              <h2 className="mt-4 why-heading">
                BIM Course Fees in Coimbatore:
              </h2>
              <p>
                Providing the Best BIM course in Saravanampatti at an affordable
                fee structure while staying fully committed to delivering
                high-quality, industry-focused education.
              </p>
              <h2 className="mt-4 why-heading"> Learning Modes/Batches: </h2>
              <p>
                • Online Training: Learn through BIM online courses from
                anywhere with flexible, convenient, and fully guided online
                sessions.{" "}
              </p>
              <p>
                • In-Classroom Training: Grow in offline classes to obtain
                hands-on learning with direct mentor collaboration in an engaged
                classroom environment.
              </p>
              <p>
                • Weekend Classes: Perfect for Career persons who want to
                upskill without disturbing their weekday routine.
              </p>
              <p>
                • Weekday Training: Ideal option for those who are ready to
                spend their entire week learning with consistency.
              </p>
              <p>
                • Evening Training: This schedule is featured for individuals
                who remain busy for the whole day and seek a chance to learning
                in the remaining hours.
              </p>
              <h2 className="mt-4 why-heading">
                {" "}
                The Best BIM Training Institute in Coimbatore: Monz Creative
                School{" "}
              </h2>
              <p>
                The powerful alliance of expert mentors, cutting-edge
                technology, and an Industry-specific learning environment makes
                Monz Creative School stand out as a leading BIM training
                institute, preparing students for high-demand BIM careers.
              </p>
              <h2 className="mt-4 why-heading"> Certificate Recognition </h2>
              <p>
                As the institute secures high-standard recognition with top
                authorities such as ISO, NASSCOM, NSDC, IAF, and IAS, you gain
                significant reputation and demand among the industries. In
                addition, it has support from leading technology partners like
                SolidWorks, FANUC India, Renishaw, Mitsubishi Cutting Tools,
                Mitutoyo, Accurate Gauges, and Aditya Measurements. It is
                ensuring for employers that you might meet their essential needs
                and have outstanding potential. Whether you prefer a BIM
                certification course online or offline at this institute, your
                potential will be globally respected.
              </p>
              <h2 className="mt-4 why-heading">Career-Based Curriculum: </h2>
              <p>
                The Pattern of the BIM course for civil engineers circles around
                real-world industry necessities, covering fundamental BIM tools,
                workflows, and guidelines to make students job-ready ASAP after
                training.
              </p>
              <h2 className="mt-4 why-heading"> Personalised Training: </h2>
              <p>
                With one-on-one mentoring and flexible schedules, each student
                receives individualised attention, enabling them to learn at
                their own pace and master concepts thoroughly.
              </p>
              <h2 className="mt-4 why-heading"> Project-Based Learning: </h2>
              <p>
                Students through the BIM software course gain hands-on
                experience through practical projects that simulate real-world
                workflows, strengthening problem-solving skills and technical
                expertise.
              </p>
              <h2 className="mt-4 why-heading">
                {" "}
                Facilities of the Advanced AI-Integrated Tech Campus:{" "}
              </h2>
              <p>
                Our state-of-the-art campus integrates AI-driven learning tools
                and modern infrastructure, offering smart classrooms, advanced
                labs, and digital resources. It encourages interaction among
                students that strengthens knowledge exchange and efficient
                learning.
              </p>
              <h2 className="mt-4 why-heading"> Placement Training: </h2>
              <p>
                While doing the BIM course with placement in Coimbatore, you
                will have internship opportunities, connections with 500+
                leading hiring partners, and exclusive on-campus recruitment
                drives. Besides, the training focuses on giving job-oriented,
                practical practices aligned with industry standards, ensuring
                they are fully prepared for interviews and real-world project
                demands. Trainer's career guidance will continue for you from
                skill-building to successful employment in top BIM companies.
              </p>
              <h2 className="mt-4 why-heading"> Trainer Experience: </h2>
              <p>
                Mentors from this renowned BIM Training Institute in
                Saravanampatti are highly experienced professionals who excel in
                delivering holistic coaching tailored to each learner’s pace and
                understanding. They ensure every student receives special,
                dedicated attention throughout the program, supporting different
                learning styles with patience and clarity. Our trainers stay
                committed to guiding you whenever needed, offering continuous
                assistance and mentoring until the completion of your training.
              </p>
              <h2 className="mt-4 why-heading">
                <span>Final Thoughts</span>{" "}
              </h2>
              <p>
                Boost your career with the BIM Course in Saravanampatti at Monz
                Creative School to learn and grow from an authorised
                institution. You can acquire practical experience from in-demand
                software with real-world project exposure. It makes you ready
                for job roles across sought-after industries with amazing
                income. Register today to master cutting-edge workflows, enhance
                your project productivity, and open doors to global
                opportunities in the emerging field.
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
              <span>BIM Course </span>in Saravanampatti with{" "}
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
                  Job-Ready BIM Professional.
                </span>
              </h2>
              <p className="text-muted mb-4">
                The dedicated training program at this BIM institute in
                Coimbatore equips you with industry-relevant skills, making you
                a strong candidate for today’s most promising BIM career
                opportunities.
              </p>
              <ul className="list-unstyled job-roles-list">
                <li className="mb-2">
                  <BsChatHeartFill />
                  BIM Modeler
                </li>
                <li className="mb-2">
                  <BsChatHeartFill />
                  BIM Engineer
                </li>
                <li className="mb-2">
                  <BsChatHeartFill />
                  BIM Coordinator
                </li>
                <li className="mb-2">
                  <BsChatHeartFill />
                  BIM Technician
                </li>
                <li className="mb-2">
                  <BsChatHeartFill />
                  BIM Specialist
                </li>
                <li className="mb-2">
                  <BsChatHeartFill />
                  BIM Architect
                </li>
                <li className="mb-2">
                  <BsChatHeartFill />
                  BIM Structural Engineer
                </li>
                <li className="mb-2">
                  <BsChatHeartFill />
                  BIM MEP Engineer
                </li>

                <li className="mb-2">
                  <BsChatHeartFill />
                  MEP BIM Modeller
                </li>

                <li className="mb-2">
                  <BsChatHeartFill />
                  Architectural BIM Modeller
                </li>
                <li className="mb-2">
                  <BsChatHeartFill />
                  Civil BIM Modeller
                </li>
                <li className="mb-2">
                  <BsChatHeartFill />
                  Revit Modeller (Architecture / Structure / MEP)
                </li>
                <li className="mb-2">
                  <BsChatHeartFill />
                  Revit Technician
                </li>
                <li className="mb-2">
                  <BsChatHeartFill />
                  BIM CAD Designer
                </li>
                <li className="mb-2">
                  <BsChatHeartFill />
                  BIM Draftsman
                </li>
                <li className="mb-2">
                  <BsChatHeartFill />
                  BIM Consultant
                </li>
                <li className="mb-2">
                  <BsChatHeartFill />
                  BIM Manager (requires more experience)
                </li>
                <li className="mb-2">
                  <BsChatHeartFill />
                  Digital Construction Engineer
                </li>
                <li className="mb-2">
                  <BsChatHeartFill />
                  VDC (Virtual Design & Construction) Engineer
                </li>
              </ul>
            </Col>
          </Row>
        </Container>
      </section>

      <BimCourseTools />

      <section className="tools-section py-5">
        <div className="tools-gradient"></div>

        <div className="container text-center content">
          <h2 className="tools-heading mb-3">Tools Covered</h2>
          <p className="tools-description mb-4">
          Master industry-standard BIM tools and platforms such as Revit Architecture, Revit Structure, Revit MEP, Navisworks, and AutoCAD to build strong Building Information Modeling skills and create a job-ready BIM project portfolio.
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

      <section className="faq-section py-5">
        <Container>
          <Row>
            <h2 className="faq-headding">
              FAQ - BIM Course in Saravanampatti
            </h2>
            <Accordion defaultActiveKey="0">
              <Accordion.Item eventKey="0">
                <Accordion.Header>
                  1. What is the price of the BIM Course in Saravanampatti?P?
                </Accordion.Header>
                <Accordion.Body>
                  At Monz Creative School, the BIM modelling course fee is
                  designed as budget-friendly. However, students are enjoying
                  exceptional resource supports, expert faculties, advanced lab
                  set-up, comprehensive curriculum, etc.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header>
                  2. Can anyone take the BIM Course in Saravanampatti?
                </Accordion.Header>
                <Accordion.Body>
                  One of the expectations is to come from backgrounds like
                  construction management, civil engineering, architecture, and
                  interior design. Whether you are a graduate or a working
                  professional, the career path is an ideal choice for
                  experiencing career advancement.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="3">
                <Accordion.Header>
                  3. How soon can I complete the BIM Course in Saravanampatti?
                </Accordion.Header>
                <Accordion.Body>
                  Even with focused practical training, you can finish the
                  building information modelling course at this reputed BIM
                  Training Institute in Saravanampatti as soon as possible. It
                  only consumes several months, including job-based practical
                  practices.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="4">
                <Accordion.Header>
                  4. Why are industries giving high priority to the BIM
                  software?
                </Accordion.Header>
                <Accordion.Body>
                  The BIM software has cool features, which support improved
                  visualisation, better collaboration, increased productivity,
                  and cost-effectiveness. Hence, pursuing the BIM software
                  course in Saravanampatti helps you to secure a high-paying
                  designation in diverse industries.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="5">
                <Accordion.Header>
                  5. Is BIM a good career choice?
                </Accordion.Header>
                <Accordion.Body>
                  Yes! As the BIM online certification course leads to getting a
                  job in a demanding industry like construction, architecture,
                  and civil engineering, preferring to take the BIM Course in
                  Saravanampatti is a good career choice.
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
export default BimCourseSaravanampatti;
