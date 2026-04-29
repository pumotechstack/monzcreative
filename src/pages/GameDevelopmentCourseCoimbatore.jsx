import React from "react";
import "./CoursesPageStyle.css";
import StudentsWork from "../components/StudentsWork";
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Accordion from "react-bootstrap/Accordion";
import GameDevelopmentCourseTools from "../components/GraphicDesignCourseTools";
import { BsChatHeartFill } from "react-icons/bs";
import { FaPhoneVolume, FaWhatsapp } from "react-icons/fa";


const GraphicDesignCourseCoimbatore = () => {
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
              “- Game Design + Game Development + Game Art -”
            </p>
            <h1>
              <span className="highlight">Game development course </span> in
              coimbatore
            </h1>
            <p className="vfx-subtitle">
              No.1 game development training institute in coimbatore with 100%
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
                
                <span> Game Development Course </span>in Coimbatore
              </h2>
              <p className="why-text">
                If you seek an interesting profession with abundant pay, pursue
                the Game Development Course in Coimbatore at Monz Creative
                School. Training students with unwavering dedication to equip
                them with gaming technologies that target job-ready skills. It
                can create a huge demand for your potential and knowledge across
                every sector, including gaming studios, the simulation industry,
                software companies, multimedia, etc. Therefore, young aspirants
                should go for the Game Designing Course in Coimbatore to
                kickstart their journey in a future-proof career path. Enroll
                today at this Top Institute For Game Designing in Coimbatore and
                enjoy unlimited perks.
              </p>

              <h2 className="why-heading">
                
                About The Game Development Course
              </h2>
              <p>
                Instructors of the Game Development Course in Coimbatore will
                elaborate on operations like designing, developing, and
                programming video games. Delivers a deep insight into game
                engine usage, game design principles, programming, and art &
                animation techniques. Learning by registering at this Game
                development training institute helps to gain practical
                experiences on real-world projects. The budget also fits into
                your expected range, along with facilitating endless provisions
                and coaching services.
              </p>

              <h2 className="why-heading">
                
                Key Benefits of the <span>Monz Creative School:</span>
              </h2>
              <p>• Holistic approach </p>
              <p>• Industry-best instructors</p>
              <p>• Affordable course prices</p>
              <p>• Dedicated placement prep</p>
              <p>• Extraordinary teaching service</p>
              <p>• Live training on industry projects</p>
              <p>• Industry-Recognising certification</p>
              <p>• Extensive professional connections</p>

              <h2 className="why-heading">
                
                Benefits of the Game Development
                <span>Course in Coimbatore:</span>
              </h2>
              <p>
                
                • At the in-class workshop of the best game development courses,
                students acquire hands-on skills with modern tools and
                technologies.
              </p>
              <p>
                • The practical game development classes enable you to
                experience the core areas of the specialisation.
              </p>
              <p>
                • Creation of outstanding worlds, characters, and stories via
                video game programming courses teaches technical and artistic
                skills.
              </p>
              <p>
                • Profound impact will be acknowledged while doing mobile game
                development courses on coding with logic, physics simulation,
                and algorithmic thinking.
              </p>
              <p>
                • Achieve more convenience and less travel by game design
                courses near me with the support of multiple available branches
                that include the best trainers' coaching service.
              </p>
              <p>
                • Secure promising jobs through video game design classes with
                placement support that leads to earning amazingly since the
                career begins.
              </p>
              <p>
                • Increased job opportunities will be easily accessible to learn
                game design from diverse sectors.
              </p>
              <p>
                • Investment in game design courses for beginners is centred on
                strengthening the foundation of the field.
              </p>
              <p>
                • Gaining regular game development training and certification
                from an authorised platform brings your recognition to the next
                level.
              </p>

              <h2 className="why-heading"> Career Opportunities: </h2>
              <p>
                After completing the video game developer course, you will have
                more rewarding job opportunities. Some of them are listed in the
                following with their main responsibilities.
              </p>
              <p>
                <b>Game Designer</b>
              </p>

              <p>
                The profession will teach how to create storylines, gameplay
                concepts, game rules, challenges, and player progression. It is
                common to collaborate with programmers and artists before
                finalising design implementation.
              </p>
              <p>
                <b>Systems Designer</b>
              </p>

              <p>
                Creating resource management systems, combat, or economy remains
                the main task. Incorporating feedback that has been gathered
                from players or users while exploring gameplay systems. At the
                phase of integrating systems, professionals will work closely
                alongside game designers and programmers.
              </p>
              <p>
                <b>Level Designer</b>
              </p>

              <p>
                Testing takes place in order to achieve increased performance,
                pacing, and addressing difficulties. Craft scripts for triggers,
                in-game events, and enemy placement. The collaboration of game
                artists and programmers helps in completing environment
                integration.
              </p>
              <p>
                <b>Game Programmer</b>
              </p>

              <p>
                aking a major role in developing UI, AI, gameplay systems,
                physics, and multiplayer code. Integrating design and art assets
                into the game engine while working with scripting languages.
              </p>
              <p>
                <b>Game Artist</b>
              </p>

              <p>
                Jobs like art style consistency, 2D or 3D art creation,
                designing characters, props, environments, and UI elements are
                carried out by this professional. Highly contributes to
                optimisation in order to increase performance and memory usage.
              </p>
              <p>
                <b>Game Animator</b>
              </p>

              <p>
                The fieldwork is not limited to animate creatures, characters,
                and environmental elements, but also creating realistic or
                stylised movements, including attacks, walk cycles, etc. During
                the integration phase, artists and programmers collaborate to
                create animations that incorporate gameplay and cutscenes.
              </p>

              <h2 className="why-heading">
                
                <span>Conclusion</span>
              </h2>
              <p>
                Students who seek high-earning jobs should study the Game
                Development Course in Coimbatore to unlock rewarding services.
                This reputed campus offers both online and offline training in
                order to support working professionals’ and learning students’
                aims or passions. They get the chance to take the first step
                towards their dream career with the right guidance from experts.
                After completing the Game Designing Course in Coimbatore, your
                journey will begin to succeed in the future.
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
              <span>game development Course </span>in Coimbatorei with
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
      Job-Ready Game Development Professional.
    </span>
  </h2>
  <p className="text-muted mb-4">
    By completing professional game development courses, learners gain the
    skills and hands-on experience needed to qualify for the following
    high-demand job roles in the gaming industry.
  </p>
  <ul className="list-unstyled job-roles-list">
    <li className="mb-2">
      <BsChatHeartFill />
      Game Developer
    </li>
    <li className="mb-2">
      <BsChatHeartFill />
      Gameplay Programmer
    </li>
    <li className="mb-2">
      <BsChatHeartFill />
      Game Designer
    </li>
    <li className="mb-2">
      <BsChatHeartFill />
      Level Designer
    </li>
    <li className="mb-2">
      <BsChatHeartFill />
      Unity / Unreal Developer
    </li>
    <li className="mb-2">
      <BsChatHeartFill />
      Game Artist
    </li>
    <li className="mb-2">
      <BsChatHeartFill />
      Technical Artist
    </li>
    <li className="mb-2">
      <BsChatHeartFill />
      AR/VR Game Developer
    </li>
    <li className="mb-2">
      <BsChatHeartFill />
      QA Game Tester
    </li>
  </ul>
</Col>

          </Row>
        </Container>
      </section>

      <GameDevelopmentCourseTools />

      <section className="tools-section py-5">
        <div className="tools-gradient"></div>

        <div className="container text-center content">
          <h2 className="tools-heading mb-3">Tools Covered</h2>
          <p className="tools-description mb-4">
            Master industry-standard game development tools such as Unity,
            Unreal Engine, C#, C++, Blender, and game engines to build strong
            game design and programming skills and create a job-ready game
            development project portfolio.
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
              FAQ - Game Development Course in Coimbatore
            </h2>
            <Accordion defaultActiveKey="0">
              <Accordion.Item eventKey="0">
                <Accordion.Header>
                  1. Is a Game Development Course accessible at a low cost?
                </Accordion.Header>
                <Accordion.Body>
                  At reasonable prices, you can only pursue the Game Development
                  Course in Coimbatore at Monz Creative School. Additional
                  services like online training, placement assistance, and
                  certification are included.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header>
                  2. Can anyone pursue the Game Development Course?
                </Accordion.Header>
                <Accordion.Body>
                  If you have an interest and passion for video game development
                  courses, there is no hindrance to embarking on a promising
                  career path. From working professionals to students, anyone
                  can take this course regardless of restrictions at the right
                  institution.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="3">
                <Accordion.Header>
                  3. Can learners at Monz Creative School do the course while
                  working?
                </Accordion.Header>
                <Accordion.Body>
                  Of course, they can! At this best training institute, learners
                  can do game design and development courses while studying or
                  working without struggles. It is also possible to schedule
                  their time or study hours according to their convenience and
                  availability.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="4">
                <Accordion.Header>
                  4. Did Monz Creative School offer certification and placement?
                  software?
                </Accordion.Header>
                <Accordion.Body>
                  Yes! You can take game development courses with certificates
                  and placement preparation from this reputable learning
                  platform. These two services will have a profound impact on
                  your credibility and career prospects.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="5">
                <Accordion.Header>
                  5. What will you learn from game making courses?
                </Accordion.Header>
                <Accordion.Body>
                  <p>
                    
                    By pursuing the Game Designing Course in Coimbatore, you can
                    develop the following skills.
                  </p>

                  <p>• Principles of game design</p>
                  <p>• Game assets development</p>
                  <p>• Narrative and storytelling</p>
                  <p>• Team collaboration</p>
                  <p>
                    • Optimization in game development supports various
                    platforms.
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
export default GraphicDesignCourseCoimbatore;
