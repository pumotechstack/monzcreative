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
import SapCourseTools from "../components/SapCourseTools";
import { BsChatHeartFill } from "react-icons/bs";
import { FaPhoneVolume, FaWhatsapp } from "react-icons/fa";


const SapCourseSaravanampatti = () => {
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
            <p className="vfx-tagline">“SAP ERP + SAP FICO + SAP MM”</p>
            <h1>
              <span className="highlight">SAP Course </span> in Coimbatore
            </h1>
            <p className="vfx-subtitle">
              No.1 sap training institute in coimbatore with 100% placement
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
                <span>SAP Course </span>in Coimbatore
              </h2>
              <p className="why-text">
                Learners who decide to pursue the SAP Course in Coimbatore will
                acquire high earning potential. It is suitable for everyone,
                even beginners with no experience, due to offering chances to
                embrace faster professional growth. On top of everything,
                trainers and coaching services are essential to evaluate.
                Therefore, join the reputed SAP Training Institute in Coimbatore
                - Monz Creative School and learn from industrial experts. They
                will guide you by bringing knowledge and skills that have been
                gained from many years of real-world service. Limitless
                provisions will support you in the future, so you can explore
                them one by one in the following.
              </p>

              <h2 className="mt-4 why-heading">
                About the <span>SAP Course in in Coimbatore </span>
              </h2>

              <p>
                Instructors are highly experienced at this popular SAP Training
                Institute in Coimbatore to offer comprehensive skill
                development. Their job-oriented approach gives real-time job
                experience in advance. This means students can get an overall
                idea regarding their future designations, including every nook.
                It can play a major role in their promotions and contribute more
                efficiently from the beginning in an organisation.
              </p>

              <h2 className="mt-4 why-heading">SAP Modules:</h2>
              <p>
                Aspirants should know about the types of modules prior to
                joining the SAP Course in Coimbatore to pick the right career
                path.
              </p>
              <p>
                <b>SAP Basic</b>
              </p>

              <p>
                It is essential to pursue this module from the reputed SAP
                training center in Coimbatore for learning from experts. They
                will guide on how to work in the underlying technical
                environment according to specific industries.
              </p>
              <p>
                <b>SAP MM</b>
              </p>

              <p>
                Learners who choose this module will understand the SAP for
                supply chain management from scratch. It lets them gain
                knowledge of overall inventory processes from planning to
                payment.
              </p>
              <p>
                <b>SAP FICO</b>
              </p>

              <p>
                To unravel information from finances and transaction history,
                choosing the SAP fico course is the perfect module for students.
                Corporations get assistance to make better decisions, understand
                cost behaviour, and improve their finances eventually.
              </p>
              <p>
                <b>SAP ABAP</b>
              </p>

              <p>
                People who prefer to complete the SAP certification course can
                aid in optimising the system based on a specific firm's
                requirements. It is a popular programming language, allowing to
                achieve improved outcomes.
              </p>
              <p>
                <b>SAP PP</b>
              </p>

              <p>
                Deciding to learn SAP Course online with specialisation in
                production planning lets you work in the manufacturing,
                logistics, and consulting sectors. You will know how to target
                smooth and efficient production.
              </p>
              <p>
                <b>SAP PM</b>
              </p>

              <p>
                Virtual coaching of the instructors on the SAP software training
                online makes you excel at achieving a streamlined process while
                reducing costs and resource allocation. This career path creates
                maintenance managers, solution architects, asset management
                analysts, etc.
              </p>

              <h2 className="mt-4 why-heading">
                Highlights of <span> Monz Creative School Facilities:</span>
              </h2>
              <ul>
                <li> Assured placement assistance </li>
                <li> Professional career guidance</li>
                <li> Dedicated support from trainers</li>
                <li> Certification offers recognition </li>
                <li> Best learning infrastructure</li>
                <li> A Well-Defined curriculum</li>
                <li> 500+ hiring partners</li>
                <li> Real-time project experience</li>
                <li> Highly skilled trainers</li>
                <li> Live practice on modern technologies</li>
              </ul>

              <h2 className="mt-4 why-heading">SAP Modules:</h2>
              <li>One-on-one training </li>
              <li>Career-based curriculum </li>
              <li>Practical learning facility </li>
              <li>Accessible modern tools & technologies </li>
              <li>Expert mentorship </li>
              <li>Outstanding placement prep </li>
              <li>Educates students, professionals, & graduates </li>
              <li>24X7 support for project completion </li>
              <li>Real time work experience </li>
              <li>Authorised unlimited credentials </li>

              <h2 className="mt-4 why-heading">
                Benefits of the <span> SAP Course in Saravanampatti:</span>
              </h2>
              <ul>
                <li>
                  <p>
                    <b> SAP Basic </b>
                  </p>
                  <p>
                    Students who learn SAP Course online will be introduced to
                    fundamentals and basic concepts, which are widely exploited
                    in logistics, finance, and managing several operations.
                  </p>
                </li>
                <li>
                  <p>
                    <b> SAP FICO </b>
                  </p>

                  <p>
                    Obtain comprehensive knowledge from the SAP FICO training
                    and start to optimize a firm’s accounting, transactions, and
                    internal cost controls.
                  </p>
                </li>
                <li>
                  <p>
                    <b> SAP MM </b>
                  </p>

                  <p>
                    Leveraging the SAP for supply chain management aids in
                    multiple aspects, including maintenance of smooth
                    operations, and good customer relationships while reducing
                    cost and forecasting demands with precision
                  </p>
                </li>
                <li>
                  <p>
                    <b> SAP PP </b>
                  </p>

                  <p>
                    It is one of the crucial modules in the manufacturing
                    processes, which is harnessed in sales, inventory, and
                    procurement.
                  </p>
                </li>
                <li>
                  <p>
                    <b> SAP PM </b>
                  </p>

                  <p>
                    The module plays a huge role in enhancing machinery and
                    infrastructure operations, so learning at this renowned SAP
                    training center in Coimbatore helps to get a clear idea of
                    the entire workflow.
                  </p>
                </li>
                <li>
                  <p>
                    <b> SAP ABAP </b>
                  </p>

                  <p>
                    It is essential for enabling customizations and applications
                    integration within the system.
                  </p>
                </li>
              </ul>

              <p>
                • Students are getting dedicated support when pursuing the SAP
                course in Coimbatore with placement assistance, preparing them
                for a bright future consistently.{" "}
              </p>
              <p>
                • You can get comprehensive knowledge on the SAP FICO course,
                especially in areas like accounts receivable, accounts payable,
                and bank accounting.{" "}
              </p>
              <p>
                • Turning into a competitive professional is simple with the
                training of the SAP coaching centre in Coimbatore and the
                experts’ holistic coaching service.{" "}
              </p>
              <p>
                • Utilize the flexibility and freedom of the SAP software
                training online that can make you an industry-ready professional
                while learning from your comfort zo ne.{" "}
              </p>
              <p>
                • Earning recognition through the SAP training and certification
                enables you to attract the industry-best income effortlessly.{" "}
              </p>
              <p>
                • Many reasons to join the Best SAP training institute in
                Coimbatore, including opportunities for higher salaries, career
                advancement, im proved credibility, etc.{" "}
              </p>
              <p>
                • Fostering your career development by doing the SAP developer
                certification can be the right choice, expanding job
                opportunities in different sectors.{" "}
              </p>
              <p>
                • Live practical SAP classes in Coimbatore grow your skills and
                develop proficiency with real-world projects.{" "}
              </p>

              <h2 className="mt-4 why-heading">Takeaway</h2>
              <p>
                You might have learned that doing the SAP Course in
                Saravanampatti is the only chance to keep walking on a
                future-proof career path. Growing in-demand skills with the
                support of leading professionals, opening the door to diverse
                job opportunities. No matter what designation you grab, earning
                certification at this popular SAP Training Institute in
                Saravanampatti helps you enjoy a lucrative salary. To avoid
                missing the opportunity, take quick action to register your name
                and secure your place smartly.
              </p>

              <h2 className="mt-4 why-heading">
                Key Features of <span>Monz Creative School:</span>{" "}
              </h2>
              <p>• One-on-one training </p>
              <p>• Career-based curriculum</p>
              <p>• Practical learning facility</p>
              <p>• Accessible modern tools & technologies</p>
              <p>• Expert mentorship</p>
              <p>• Outstanding placement prep</p>
              <p>• Educates students, professionals, & graduates</p>
              <p>• 24X7 support for project completion</p>
              <p>• Real time work experience</p>
              <p>• Authorised unlimited credentials</p>

              <h2 className="mt-4 why-heading">
                Benefits of the <span>SAP Course in Coimbatore:</span>{" "}
              </h2>
              <p>
                • Students can only pursue the SAP course in Coimbatore with
                placement assistance at Monz Creative School, expanding their
                career prospects.{" "}
              </p>
              <p>
                • Expert-led SAP training and certification improve your
                potential to make you eligible for an industry-best pay scale.
              </p>
              <p>
                • Hands-on learning of SAP classes in Coimbatore boosts your
                confidence by offering an advanced glance at the overall on-site
                duties.
              </p>
              <p>
                • Attracting promising jobs is simple with the SAP developer
                certification from various sectors.
              </p>
              <p>
                • An in-depth understanding of finance management through SAP
                FICO training leads to increased earning potential effortlessly.
              </p>
              <p>
                • Countless provisions of the SAP Institute in Coimbatore remain
                the backbone of learners' significant progress in professional
                life.
              </p>

              <h2 className="mt-4 why-heading"> Career Opportunities: </h2>
              <p>
                Acknowledgement of the SAP certification makes you eligible for
                the following highly recognised designations.
              </p>

              <p>
                <b>SAP Consultant</b>
              </p>

              <p>
                The ideal job involves creating and customising SAP systems
                after gathering clients' needs, designing solutions, and
                achieving seamless functioning within organisations.
              </p>
              <p>
                <b>SAP Project Manager</b>
              </p>

              <p>
                People with leadership, communication, and organisational skills
                are perfect for this job role.
              </p>
              <p>
                <b>SAP ABAP Developer</b>
              </p>

              <p>
                The major duty of developing and tailoring programs within the
                SAP system is carried out by the SAP ABAP developer to keep it
                working efficiently.
              </p>
              <p>
                <b>SAP Functional Specialist</b>
              </p>

              <p>
                It focuses on any one SAP module, including Finance (FICO),
                Material Management (MM), and Sales and Distribution (SD).
              </p>
              <p>
                <b>SAP Business Analyst</b>
              </p>

              <p>
                The main task is centred on analysing business processes and
                addressing areas where improvement is needed to integrate with
                SAP solutions to enhance operations.
              </p>
              <p>
                <b>SAP Trainer</b>
              </p>

              <p>
                As a professional, you will be concentrated on teaching others
                how to leverage the SAP system in the best possible way.
              </p>
              <p>
                <b>SAP Support Specialist</b>
              </p>

              <p>
                Supporting SAP users technically assists in troubleshooting
                issues and targets smooth operations effortlessly.
              </p>

              <h2 className="mt-4 why-heading">
                <span>Conclusion</span>{" "}
              </h2>
              <p>
                Young talents might approach the SAP Course in Coimbatore to
                unleash greater financial and career opportunities. It does not
                ask for prior experience or high-level requirements to embark on
                a rewarding journey in the future. This is a different career
                path, allows students, graduates, and professionals with
                different levels to seek noticeable progress professionally. If
                you are one of those categories, then sign up at this reputed
                SAP Training Institute in Coimbatore immediately to kickstart
                the training program.
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
              <span>SAP Course </span>in Saravanampatti with{" "}
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
                <span className="head-highlight">Job-Ready SAP Expert.</span>
              </h2>
              <p className="text-muted mb-4">
                The dedicated training program at this SAP Institute in
                Coimbatore makes you a perfect candidate for the listed
                promising jobs.
              </p>
              <ul className="list-unstyled job-roles-list">
                <li className="mb-2">
                  <BsChatHeartFill />
                  SAP Consultant
                </li>
                <li className="mb-2">
                  <BsChatHeartFill />
                  SAP FICO Consultant
                </li>
                <li className="mb-2">
                  <BsChatHeartFill />
                  SAP ABAP Consultant
                </li>
                <li className="mb-2">
                  <BsChatHeartFill />
                  SAP HANA Consultant
                </li>
                <li className="mb-2">
                  <BsChatHeartFill />
                  SAP SD Consultant
                </li>
                <li className="mb-2">
                  <BsChatHeartFill />
                  SAP Basis Administrator
                </li>
                <li className="mb-2">
                  <BsChatHeartFill />
                  SAP Project Manager
                </li>
                <li className="mb-2">
                  <BsChatHeartFill />
                  SAP Trainer
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

      <SapCourseTools />

      <section className="tools-section py-5">
        <div className="tools-gradient"></div>

        <div className="container text-center content">
          <h2 className="tools-heading mb-3">Tools Covered</h2>
          <p className="tools-description mb-4">
            Master industry-standard SAP tools and modules such as SAP FICO, SAP
            MM, SAP SD, SAP HANA, and real-time business workflows to build
            strong ERP skills and create a job-ready SAP project portfolio.
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
              FAQ - SAP Course in Coimbatore
            </h2>
            <Accordion defaultActiveKey="0">
              <Accordion.Item eventKey="0">
                <Accordion.Header>
                  1. How much should I pay for the SAP Course?
                </Accordion.Header>
                <Accordion.Body>
                  The price of the SAP Course in Coimbatore has a significant
                  impact from factors like training provider, course depth, and
                  learning types. If you want to complete it at reasonable
                  rates, Monz Creative - the leading SAP coaching centre in
                  Coimbatore is the right choice.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header>
                  2. Can I complete the SAP Course in Coimbatore as soon as
                  possible?
                </Accordion.Header>
                <Accordion.Body>
                  It is possible to learn the SAP Course in Coimbatore within a
                  short duration with the right guidance and support. Hence, the
                  best SAP training institute in Coimbatore - Monz Creative is
                  the platform you need to approach first to foster skill
                  development or attain career advancement.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="3">
                <Accordion.Header>
                  3. Which SAP Course should I choose?
                </Accordion.Header>
                <Accordion.Body>
                  Modules like FICO, MM, SD, and ABAP are popular for certain
                  reasons among people and industries. The right selection is to
                  choose any one module from the lists after considering your
                  interest, career goals, and degree background.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="4">
                <Accordion.Header>
                  4. How much can I earn after SAP training?
                </Accordion.Header>
                <Accordion.Body>
                  The exact pay scale information is only decided by your choice
                  and interest in a specific module. However, you will get a
                  decent income even as a fresher in the field. As you gain
                  further experience, you will be eligible for extraordinary
                  remuneration in the future.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="5">
                <Accordion.Header>
                  5. Is anyone eligible for the SAP training?
                </Accordion.Header>
                <Accordion.Body>
                  Pursuing the associate-level job roles is easy with SAP
                  training, regardless of constraints. Some platforms also offer
                  coaching even for those who didn’t have a degree when it comes
                  to this profession. People from backgrounds like B.Sc, BTech,
                  or B.Com can anticipate perks from this career path.
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
export default SapCourseSaravanampatti;
