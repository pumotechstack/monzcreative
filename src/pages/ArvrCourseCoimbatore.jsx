import React from "react";
import "./CoursesPageStyle.css";
import StudentsWork from "../components/StudentsWork";
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Accordion from "react-bootstrap/Accordion";
import ArvrCourseTools from "../components/ArvrCourseTools";
import { BsChatHeartFill } from "react-icons/bs";
import { FaPhoneVolume, FaWhatsapp } from "react-icons/fa";

const ArvrCourseCoimabtiore = () => {
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
              — AR/VR Design + 3D Visualization + Motion Interaction -
            </p>
            <h1>
              <span className="highlight">AR VR Course </span> in Coimbatore
            </h1>
            <p className="vfx-subtitle">
              No.1 training institute in coimbatore with 100% placement support
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
                <span> AR VR Course </span>in Coimbatore
              </h2>
              <p className="why-text">
                To survive in the technology evolution, the AR VR Course in
                Coimbatore is the key you need to stay one step ahead in the
                competition forever. You will experience significant progress in
                critical thinking and problem-solving abilities with the support
                of skilled trainers. Explains the core concepts of the Virtual
                Reality Developer Course, such as Virtual Reality, Augmented
                Reality, Extended Reality, Mixed Reality, etc. Practical classes
                provide equal opportunity and personalised staff support to
                develop hands-on experience with the latest tools &
                technologies. Besides, mere registration at the best AR VR
                Training in Coimbatore leads to enjoying more provisions and
                services.
              </p>

              <h2 className="why-heading">
                <span> About the AR VR Course </span>in Coimbatore
              </h2>
              <p>
                Exploring fundamentals on the AR VR training course provides a
                detailed insight into the main technologies with their core
                mechanism, applications, and development operations. It makes
                aspirants strong in their field and switching over to advanced
                concepts to stay ahead timelessly. This can lead to in-demand
                job opportunities in the market, enabling you to earn amazingly
                from the beginning of your career. Practical learning,
                certification, and AR VR training with placement prep are
                commonly accessible at Monz Creative School.
              </p>

              <h2 className="why-heading">
                <span> Monz Creative School Highlights: </span>
              </h2>
              <p>Learning modes: Online | Physical Classes</p>

              <p>
                Certifications: Offers a wide level of recognition among
                industries
              </p>

              <p>
                Hands-on Training: Expertises live simulations and real-world
                projects
              </p>
              <p>
                Placement Support: Dedicatedly preparing students for promising
                jobs{" "}
              </p>

              <p>
                Exceptional Coaching: Trains highly talented mentors who have
                more experience in the industry{" "}
              </p>

              <p>
                Recruitment Tie-Ups: Increasing rewarding employability for
                learners{" "}
              </p>

              <p>
                Diverse Career Paths: Expanding job offers in healthcare,
                business & management, technology, and multimedia industries.
              </p>

              <h2 className="why-heading">
                Benefits of the <span>AR VR Course in Coimbatore: </span>
              </h2>

              <p>
                • Live training on the AR VR course focuses on developing
                industry-seeking skills and knowledge through a job-oriented
                approach.{" "}
              </p>
              <p>
                • Accessible project-based learning in the augmented and virtual
                reality course helps with a strong portfolio creation for
                students.
              </p>
              <p>
                • You can acquire real-world project experience from the Best AR
                VR course in Coimbatore, in gaming, product visualisation, and
                cutting-edge AR development techniques.
              </p>
              <p>
                • Enabling the AR VR course near me lets you explore other
                branches in your surroundings to attain convenience, short
                travel hours, and flexibility.
              </p>
              <p>
                • Learners can attend the augmented reality classes either
                online or offline while continuing their studies or work.
              </p>
              <p>
                • Earning certification with the AR VR design courses increases
                job opportunities in different sectors.
              </p>
              <p>
                • A study of the augmented reality training course makes you
                proficient in coding, case studies, and device handling.
              </p>

              <h2 className="why-heading">Career Opportunities:</h2>
              <p>
                After completing the AR VR development course, you can grab a
                job from the listed employment opportunities with ideal roles.
              </p>
              <p>
                <b>AR/VR Developer</b>
              </p>

              <p>
                Typically, professionals get the chance to work in industries
                like architecture, healthcare, gaming, and training simulations.
                Aspiring candidates need a good understanding of game engines,
                SDKs, 3D modelling, C#/C++, etc.
              </p>
              <p>
                <b>3D Artist</b>
              </p>

              <p>
                Ideal work involves the creation of 3D models, visual effects,
                textures, and environments for an outstanding imaginary world.
                This expert has a wide job opportunities in various fields,
                including advertising, virtual tours, and games.
              </p>
              <p>
                <b>UX/UI Designer</b>
              </p>

              <p>
                Design creation should focus on a user-centred approach while
                improving visual appearance and functionality. The next task is
                to do research, prototype, craft a visual design, and wireframe.
                A strong understanding of standard tools and spatial design,
                with a touch of 3D environments, helps to embark on the
                profession easily.
              </p>
              <p>
                <b>AR/VR Content Creator</b>
              </p>

              <p>
                Major contribution is delivered in storytelling, marketing,
                e-learning, and virtual tours. Developing immersive training,
                entertainment, and educational content. If you have expertise in
                scripting, storyboarding, and designing interaction, it is an
                optimal career.
              </p>
              <p>
                <b>Game Designer</b>
              </p>

              <p>
                To make a game with a fun, balanced, and engaging theme, they
                concentrate on creating rules, storylines, mechanics, and player
                experiences of a game consciously. The profession demands a good
                understanding of creative storytelling, scripting, strong
                gameplay, and communication.
              </p>

              <p>
                <b>AR/VR Project Manager</b>
              </p>
              <p>
                Overall supervision is carried out by this professional and
                often coordinates with designers, developers, and stakeholders.
                Their vision helps to track progress and manage resources.
                Reserves high priority in software development firms, training &
                simulation companies, healthcare, and real estate.
              </p>

              <h2 className="why-heading">
                <span>Takeaway</span>
              </h2>
              <p>
                By joining the AR VR Course in Coimbatore, start your journey in
                your passionate field under the guidance of experts. Available
                AR VR online courses at Monz Creatie School let you gain an
                authorised certification, placement support, and many other
                provisions. Along with these facilities, pursuing the AR VR
                Training in Coimbatore provides a comprehensive learning
                experience. These are invaluable assets, and career guidance is
                offered at the best price package for learners regardless of
                constraints.
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
              <span>AR VR Course </span>in Coimbatore with
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
                <span className="head-highlight">Job-Ready AR/VR Professional.</span>
              </h2>
              <p className="text-muted mb-4">
              Learning at the best AR/VR training institute in Coimbatore equips you with industry-relevant skills for today’s in-demand Augmented Reality and Virtual Reality job roles.
              </p>
              <ul className="list-unstyled job-roles-list">
                <li className="mb-2">
                  <BsChatHeartFill />
                  AR/VR Developer
                </li>
                <li className="mb-2">
                  <BsChatHeartFill />
                  3D Artist
                </li>
                <li className="mb-2">
                  <BsChatHeartFill />
                  Storyboard Artist
                </li>
                <li className="mb-2">
                  <BsChatHeartFill />
                  UX/UI Designer
                </li>
                <li className="mb-2">
                  <BsChatHeartFill />
                  AR/VR Content Creator
                </li>
                <li className="mb-2">
                  <BsChatHeartFill />
                  Game Designer
                </li>
                <li className="mb-2">
                  <BsChatHeartFill />
                  AR/VR Project Manager
                </li>
             
              </ul>
            </Col>
          </Row>
        </Container>
      </section>

      <ArvrCourseTools />

      <section className="tools-section py-5">
        <div className="tools-gradient"></div>

        <div className="container text-center content">
          <h2 className="tools-heading mb-3">Tools Covered</h2>
          <p className="tools-description mb-4">
          Master industry-standard tools used by AR/VR professionals to create immersive augmented and virtual reality experiences, interactive 3D environments, and high-quality real-time visual content.
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
              FAQ - Architectural Design Course in Coimbatore
            </h2>
            <Accordion defaultActiveKey="0">
              <Accordion.Item eventKey="0">
                <Accordion.Header>
                1. What is the AR VR Course in Coimbatore price?
                </Accordion.Header>
                <Accordion.Body>
               
                At Monz Creative School, the AR VR course in Coimbatore fees are designed to fit into anyone's budget. It is the best platform to utilise exceptional coaching, support, career guidance, practical training, and placement preparation.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header>
                2. What do AR and VR mean?
                </Accordion.Header>
                <Accordion.Body>
             
                Both Augmented Reality (AR) and Virtual Reality (VR) are the best technologies that differ in the way they interact with the user’s environment. With the help of a smart screen and digital AR overlays, imaginary objects can be viewed in a 3D view of the real surroundings. The VR allows users to interact with digital objects in the virtual world, which is created by professional creativity and intelligence.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="3">
                <Accordion.Header>
                3. How do AR and VR benefit medical training?
                  course? course?
                </Accordion.Header>
                <Accordion.Body>
               
                With the support of AR and VR technologies, professionals from the healthcare sector get the chance to train on complex anatomical structures. It encourages you to practice repeatedly on rare medical cases, and personalised learning experiences help to achieve better healthcare.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="4">
                <Accordion.Header>
                4. Which sectors will offer jobs after AR and VR training?
                </Accordion.Header>
                <Accordion.Body>
            
                Gained practical and theoretical knowledge from Monz Creative School allows you to work in industries like travel, retail, healthcare, education, and marketing. These well known for lucrative career choices to pay amazing income for expertise in AR and VR.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="5">
                <Accordion.Header>
                5. Are online classes accessible at the AR VR Training in Coimbatore?
                </Accordion.Header>
                <Accordion.Body>
              
                Everyone has the chance to learn the augmented reality courses online at an affordable price from a reputable institution. Industry-best instructors will offer both practical and theoretical knowledge with personalised guidance.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="6">
                <Accordion.Header>
                6. Does the animation course offer placement support?
                </Accordion.Header>
                <Accordion.Body>
              
                Absolutely! At Monz Creative School, we offer dedicated placement assistance including resume building, interview prep, and internship opportunities. Many of our students have been successfully placed in animation studios, advertising agencies, and production companies.
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Row>
        </Container>
      </section>
    </>
  );
};
export default ArvrCourseCoimabtiore;
