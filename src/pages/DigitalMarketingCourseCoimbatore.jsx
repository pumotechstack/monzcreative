import React from "react";
import "./CoursesPageStyle.css";
import StudentsWork from "../components/StudentsWork";
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Accordion from "react-bootstrap/Accordion";
import DigitakMarketingCourseTools from "../components/DigitalMarketingCourseTools";
import { BsChatHeartFill } from "react-icons/bs";
import { FaPhoneVolume, FaWhatsapp } from "react-icons/fa";


const DigitalMarketingCourseCoimbatore = () => {
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
              “SEO • Social Media Marketing • Performance Marketing”
            </p>
            <h1>
              <span className="highlight">Digital marketing course </span> in
              coimbatore
            </h1>
            <p className="vfx-subtitle">
              No.1 digital marketing training institute in coimbatore with 100%
              placement
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
                <span>Digital Marketing Course </span>in Coimbatore
              </h2>
              <p className="why-text">
                For high earnings, you should consider the Digital Marketing
                Course in Coimbatore at Monz Creative School at affordable
                prices. It is a profession that always has demand across every
                sector because of rapid digital evolution. Aspirants can explore
                extensive job opportunities with the support of the best digital
                marketing certification from a reputable center easily. From
                start-ups to global-level organisations, having expertise in
                this domain will provide a huge reputation and recognition. This
                means students, graduates, and even working professionals should
                embark on this career path to enjoy unlimited thriving rewards.
                Scroll down below to learn about this leading Digital Marketing
                Training Institute in Coimbatore with detailed information.
              </p>
              <h2 className="why-heading">
                About the Digital Marketing Course in Coimbatore{" "}
              </h2>
              <p>
                {" "}
                With holistic mentorship, the Digital Marketing Course in
                Coimbatore is offered to bridge the gaps in learners’
                understanding. Trainers have a wide experience in teaching
                services, so you will have the best learning experience at each
                session. Especially, the custom schedules are intended to
                support students' and working professionals' career goals while
                continuing their ideal job or studies. Hence, take action to
                sign up at this Digital Marketing Training Institute in
                Coimbatore immediately and chase your passion.
              </p>
              <h2 className="why-heading">
                Monz Creative School Services & Facilities:{" "}
              </h2>
              <ul>
                <li>Practical training </li>
                <li>Dedicated placement preparation </li>
                <li>Extensive job opportunities & support </li>
                <li>Expert trainers’ personal coaching </li>
                <li>Live practice on real-world projects </li>
                <li>Authorised certification recognitions </li>
                <li>Enhanced professional networking </li>
                <li>Faculty helps with project completions </li>
                <li>Best career guidance from industry professionals </li>
              </ul>
              <h2 className="why-heading">
                Benefits of the Digital Marketing Course in Coimbatore:{" "}
              </h2>
              <ul>
                <li>
                  Students who attend the digital marketing classes in
                  Coimbatore at Monz Creative School experience prolonged focus
                  and eagerness while studying.{" "}
                </li>
                <li>
                  Live project involvement includes the best digital marketing
                  training in Coimbatore to enhance learners' hands-on skills on
                  the latest marketing tools.{" "}
                </li>
                <li>
                  Employability range might reach its peak when doing social
                  media marketing courses with certificates from an authorised
                  learning platform.{" "}
                </li>
                <li>
                  Top enterprises' partnership increased students' credibility
                  for completing the seo course Coimbatore, leading them towards
                  high packages.{" "}
                </li>
                <li>
                  A big impact on your recognition and priority can be witnessed
                  among industries by studying at the best institute for digital
                  marketing with limitless provisions.{" "}
                </li>
              </ul>
              <h2 className="why-heading">Career Opportunities: </h2>
              <p>
                After completing your studies at the famous Digital Marketing
                Training Institute in Coimbatore, you will be eligible for the
                listed promising job roles.
              </p>
              <p>
                <b>Digital Marketing Specialist</b>
              </p>
              <p>
                Contributes to various platforms by developing, implementing,
                and maintaining digital marketing campaigns. Achieves enhanced
                engagement online by collaborating with design and content
                teams.
              </p>
              <p>
                <b>Social Media Manager</b>
              </p>
              <p>
                Highly active in managing the brand profile across various
                social media platforms. Another job is to develop content
                strategies tailored to each platform and improve online
                followers and communities.
              </p>
              <p>
                <b>SEO Specialist</b>
              </p>
              <p>
                Initiate a deep analysis to address and collect high-performing
                keywords to target immense organic traffic. The on-page and
                off-page SEO management involves improving page speed and
                optimising meta tags, URLs, and mobile responsiveness. By using
                cutting-edge tools, understanding users' behaviour, and keyword
                ranks on search engines.
              </p>
              <p>
                <b>Content Marketing Manager</b>
              </p>
              <p>
                Plan a content calendar aligned with brand goals and audience
                needs while managing overall visual creation documents.
                Professionals also focus on expanding brand reach and promotions
                to target high ROI over time.
              </p>
              <p>
                <b>Email Marketing Specialist</b>
              </p>
              <p>
                The main task is to develop, design, and implement targeted
                email marketing campaigns. The next task is to create compelling
                subject lines, email content, and CTAs that boost conversions.
                The final report is maintained after tracking open rate, CTR,
                bounce rate, and conversions.
              </p>
              <h2 className="why-heading">Takeaway</h2>
              You might have learned that pursuing the Digital Marketing Course
              in Coimbatore is a key to embarking on a rewarding journey in the
              future. Available tailored programs will allow you to take and
              develop in-demand skills either faster or extended period
              according to the individual’s needs. In addition, you have the
              option to study a digital marketing course online with certificate
              and individualised mentorship. It discloses that Monz Creative
              School can be the first Digital Marketing Training Institute in
              Coimbatore, prioritising learners' comfort, professional growth,
              personal choice, and aims.
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
              <span>Digital Marketing Course </span>in Coimbatore with{" "}
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
                  Become a Job-Ready Digital Marketer.
                </span>
              </h2>
              <p className="text-muted mb-4">
                Our dedicated UI/UX training program in Coimbatore prepares you
                to confidently step into the most in-demand design roles.
                Kickstart Your Career As:
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
                  UI Prototyping Designer
                </li>
              </ul>
            </Col>
          </Row>
        </Container>
      </section>

      <DigitakMarketingCourseTools />

      <section className="tools-section py-5">
        <div className="tools-gradient"></div>

        <div className="container text-center content">
          <h2 className="tools-heading mb-3">Tools Covered</h2>
          <p className="tools-description mb-4">
            Master industry-standard UI/UX tools like Figma, Adobe XD,
            Photoshop, and Illustrator. Learn user-centered design workflows and
            build strong design skills to create a job-ready UI/UX portfolio
            that stands out in the digital industry.
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
              FAQ - Digital marketing Course in Coimbatore
            </h2>
            <Accordion defaultActiveKey="0">
              <Accordion.Item eventKey="0">
                <Accordion.Header>
                  1. Did you offer a digital marketing course with placement?
                </Accordion.Header>
                <Accordion.Body>
                  Yes! Learners at Monz Creative School will get assured
                  placement assistance along with many other credentials. They
                  will be trained under experienced mentors with unwavering
                  support and career guidance to prepare them with enough
                  potential for their desired future designations. For enquiry
                  other digital marketing course details, better contact the
                  institution directly.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header>
                  2. Does the digital marketing course for beginners require any
                  prerequisites?
                </Accordion.Header>
                <Accordion.Body>
                  No! Digital marketing is not just a future-proof career choice
                  but also remains a beginner-friendly course. Emerging expert
                  in this specialised area allows you to contribute to business
                  growth by improving online visibility on search engines. It
                  encompasses diverse job opportunities and earning potential,
                  so master it from scratch.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="3">
                <Accordion.Header>
                  3. What covers the advanced digital marketing course?
                </Accordion.Header>
                <Accordion.Body>
                  If you choose to master advanced concepts, the training will
                  equip you with knowledge of voice search, influencer
                  marketing, and AI in digital marketing optimisation according
                  to trends. Being an expert in these areas helps you target
                  rewarding designations, including digital marketing
                  specialist, social media manager, content marketer, etc.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="4">
                <Accordion.Header>
                  4. Did Monz Creative School offer digital marketing training
                  online?
                </Accordion.Header>
                <Accordion.Body>
                  Yes! Here, you can learn the Digital Marketing Course in
                  Coimbatore online and in physical classrooms at affordable
                  prices from experts. It highly benefits working professionals
                  and students to learn diligently.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="5">
                <Accordion.Header>
                  5. Which is the popular seo training institute in Coimbatore?
                </Accordion.Header>
                <Accordion.Body>
                  Monz Creative School can be one of the best SEO training
                  institutes to explore a wide range of courses and learn from
                  highly talented instructors. This learning platform is
                  renowned for its practical training, authorised certification
                  recognitions, and personalised coaching from industrial
                  professionals.
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Row>
        </Container>
      </section>
    </>
  );
};
export default DigitalMarketingCourseCoimbatore;
