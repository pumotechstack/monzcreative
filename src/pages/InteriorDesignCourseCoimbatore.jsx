import React from "react";
import "./CoursesPageStyle.css";
import StudentsWork from "../components/StudentsWork";
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Accordion from "react-bootstrap/Accordion";
import InteriorDesignCourseTools from "../components/InteriorDesignCourseTools";
import { BsChatHeartFill } from "react-icons/bs";
import { FaPhoneVolume, FaWhatsapp } from "react-icons/fa";

const InteriorDesignCourseCoimbatore = () => {
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
              “-Interior Design + Space Planning & Visualization-”
            </p>
            <h1>
              <span className="highlight">Interior Design course </span> in
              coimbatore
            </h1>
            <p className="vfx-subtitle">
              No.1 interior design training institute in coimbatore with 100%
              placement support
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
                <span> Interior Design Course </span>in Coimbatore
              </h2>
              <p className="why-text">
                To develop in-demand skills, pursue the Interior Design Course
                in Coimbatore and enjoy unlimited provisions at Monz Creative
                School. This is why learners here receive the best learning
                experience and secure promising job opportunities. If your
                training is going to end sooner, then you will get placement
                preparation with extensive care, effort, and support. Moreover,
                this is the best career choice to study interior design courses
                online while continuing studies and work. In addition, multiple
                perks awaited in the queue for merely registering at this
                Interior design institute in Coimbatore, even within a small
                budget.
              </p>
              <h2 className="why-heading">
                <span> About the Interior Design Course </span>in Coimbatore
              </h2>
              <p>
                The expert-led curriculum structure of the Interior Design
                Course in Coimbatore will offer a deep understanding of on-site
                workflows. It is not just limited to physical classroom
                experience, but also facilitates interior design training online
                with custom schedules. This approach improves learners' comfort
                to learn remotely and gaining an authorised certification as
                well. On top of everything, studying at a reputable Interior
                design institute in Coimbatore directly elevates your
                recognition and credibility with ease.
              </p>

              <h2 className="why-heading">Monz Creative School Highlights:</h2>
              <p>• Personal Trainers </p>
              <p>• Exceptional Skill Development</p>
              <p>• Offline/Online classes</p>
              <p>• Holistic approach</p>
              <p>• Certificate recognition</p>
              <p>• Career-based syllabus</p>
              <p>• Custom learning slots/schedules</p>
              <p>• Experienced instructors</p>
              <p>• Hands-on Training</p>

              <h2 className="why-heading">
                Benefits of the Interior Design
                <span> Course in Coimbatore: </span>
              </h2>
              <p>
                • You can gain knowledge from experts during interior design
                classes, both practically and theoretically.
              </p>
              <p>
                • Experienced mentors will teach you, no matter whether you are
                pursuing an architecture and interior design course or any other
                specialised area.
              </p>
              <p>
                • Hands-on learning in interior design cad classes equips
                learners with in-depth industry-relevant knowledge and skills.
              </p>
              <p>
                • Job-oriented training makes you a technical expert on
                industry-standard tools and technologies.
              </p>
              <p>
                • Students and graduates will gain industry knowledge and
                experience in advance before joining an organisation.
              </p>

              <h2 className="why-heading">
                Future Scope of the Interior Design Course:
              </h2>
              <p>
                By pursuing the best interior designing course, you can become
                any one of the listed designations.
              </p>
              <p>
                <b>Residential Designer</b>
              </p>

              <p>
                Craft functional interior spaces while maintaining pleasing
                visuals and housing regulations. Needs to gather homeowners'
                needs through collaboration to construct homes that meet their
                personal tastes.
              </p>
              <p>
                <b>Commercial Designer</b>
              </p>

              <p>
                Spatial planning is one of the ideal roles for a commercial
                designer, which should boost customer engagement and
                productivity. Collaborating with engineers, contractors, and
                architects in order to tolerate high-traffic usage.
              </p>
              <p>
                <b>Healthcare Designer</b>
              </p>

              <p>
                Craft designs by keeping users' comfort and requirements in mind
                while balancing aesthetics. It is also necessary to align with
                the clinical needs and workflow of the staff. Another essential
                part is to confirm safety compliance and infection control.
              </p>
              <p>
                <b>Furniture Designer</b>
              </p>

              <p>
                A deep understanding of material selections helps you to target
                the highest durability and outer visuals. The next priority task
                is to create prototypes or technical drawings and supervise
                production with manufacturers.
              </p>
              <p>
                <b>Visual Merchandiser</b>
              </p>

              <p>
                Experts mainly focus on in-store product arrangements and
                uplifting visual appearance. They provide ideal contributions in
                meetings with marketing and sales teams to enhance
                effectiveness.
              </p>
              <p>
                <b>Interior Design Assistant</b>
              </p>

              <p>
                Conducting a deep analysis on products, materials, and trends to
                boost productivity. Managing presentations, proposals, sample
                sourcing, and vendor communication.
              </p>
              <h2 className="why-heading">
                <span>Summary</span>
              </h2>
              <p>
                Overall, Monz Creative School is the best platform to pursue the
                Interior Design Course in Coimbatore with expert trainers.
                Learners will receive unwavering guidance and support to achieve
                their aims and career goals over time. Make sure to sign up at
                the leading Interior design institute in Coimbatore - Monz
                Creative School as soon as possible. It can remain your career
                milestone towards your thriving journey in the future without
                fail.
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
              <span>Interior Design Course </span>in Coimbatorei with
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
    Become a
    <span className="head-highlight">
      Job-Ready Interior Design Professional.
    </span>
  </h2>

  <p className="text-muted mb-4">
    By completing professional interior design courses, learners gain practical
    design knowledge, space planning expertise, and real-world project experience
    required to succeed in today’s interior design industry.
  </p>

  <ul className="list-unstyled job-roles-list">
    <li className="mb-2">
      <BsChatHeartFill />
      Interior Designer
    </li>
    <li className="mb-2">
      <BsChatHeartFill />
      Residential Interior Designer
    </li>
    <li className="mb-2">
      <BsChatHeartFill />
      Commercial Interior Designer
    </li>
    <li className="mb-2">
      <BsChatHeartFill />
      Space Planning Designer
    </li>
    <li className="mb-2">
      <BsChatHeartFill />
      Furniture & Lighting Designer
    </li>
    <li className="mb-2">
      <BsChatHeartFill />
      3D Interior Visualizer
    </li>
    <li className="mb-2">
      <BsChatHeartFill />
      Set & Exhibition Designer
    </li>
    <li className="mb-2">
      <BsChatHeartFill />
      Interior Styling Consultant
    </li>
    <li className="mb-2">
      <BsChatHeartFill />
      Freelance Interior Designer
    </li>
  </ul>
</Col>

          </Row>
        </Container>
      </section>

      <InteriorDesignCourseTools />

      <section className="tools-section py-5">
        <div className="tools-gradient"></div>

        <div className="container text-center content">
          <h2 className="tools-heading mb-3">Tools Covered</h2>
          <p className="tools-description mb-4">
          Master industry-standard interior design tools such as AutoCAD, SketchUp, 3ds Max, V-Ray, Lumion, and professional design workflows to build strong space planning, visualization, and presentation skills, and create a job-ready interior design portfolio.
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
              FAQ - Interior Design Course in Coimbatore 
            </h2>
            <Accordion defaultActiveKey="0">
              <Accordion.Item eventKey="0">
                <Accordion.Header>
                  1. What will I learn in the graphic design course?
                </Accordion.Header>
                <Accordion.Body>
                  In our Graphic Design Course at Monz Creative School, you'll
                  master tools like Adobe Photoshop, Illustrator, CorelDRAW,
                  InDesign, and Canva. You'll learn visual hierarchy,
                  typography, color theory, logo design, social media creatives,
                  branding, and layout design for print and digital platforms.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header>
                  2. Is this course suitable for beginners?
                </Accordion.Header>
                <Accordion.Body>
                  Yes, the course is designed for absolute beginners. Whether
                  you're a student, freelancer, or career switcher, we start
                  from the basics and gradually move to advanced-level
                  designing. No prior design or software knowledge is needed.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="3">
                <Accordion.Header>
                  3. What is the duration of the graphic design course? working?
                </Accordion.Header>
                <Accordion.Body>
                  The course duration ranges from 3 to 6 months, depending on
                  the module you choose (basic or advanced). Classes are
                  flexible — available on weekdays or weekends — to suit
                  students, working professionals, and freelancers.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="4">
                <Accordion.Header>
                  4. Can I build a career in graphic design after this course?
                </Accordion.Header>
                <Accordion.Body>
                  Definitely! Graphic design is in high demand across industries
                  like advertising, digital marketing, publishing, e-commerce,
                  and branding. After the course, you can work as a Graphic
                  Designer, UI Designer, Creative Executive, or even take up
                  freelance projects globally.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="5">
                <Accordion.Header>
                  5. Will I get a certificate after completing the graphic
                  design course?
                </Accordion.Header>
                <Accordion.Body>
                  <p>
                    Yes, you'll receive an industry-recognized certificate from
                    Monz Creative School. This certificate adds value to your
                    resume and helps you showcase your skills to clients or
                    employers. It also boosts your credibility as a certified
                    graphic designer.
                  </p>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="5">
                <Accordion.Header>
                  6. Do you offer placement assistance after the course?
                </Accordion.Header>
                <Accordion.Body>
                  <p>
                    Yes, we offer 100% placement support. Our career support
                    includes resume building, interview preparation, portfolio
                    guidance, and referrals to design studios, ad agencies,
                    startups, and MNCs. We also help connect you with freelance
                    gigs and internships.
                  </p>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Row>
        </Container>
      </section>
    </>
  );
};
export default InteriorDesignCourseCoimbatore;
