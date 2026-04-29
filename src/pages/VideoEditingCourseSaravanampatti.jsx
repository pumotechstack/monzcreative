import React from "react";
import "./CoursesPageStyle.css";
import StudentsWork from "../components/StudentsWork";
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Accordion from "react-bootstrap/Accordion";
import VideoEditingCourseTools from "../components/VideoEditingCourseTools";
import { BsChatHeartFill } from "react-icons/bs";
import { FaPhoneVolume, FaWhatsapp } from "react-icons/fa";


const VideoEditingCourseSaravanampatti = () => {
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
              — Video Editing + Color Grading + Motion Graphics -
            </p>
            <h1>
              <span className="highlight">video editing course</span>in
              Saravanampatti
            </h1>
            <p className="vfx-subtitle">
              No.1 video editing training institute in Saravanampatti with 100%
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
                <span> Video Editing Course </span>in Saravanampatti{" "}
              </h2>
              <p className="why-text">
                Learn visual storytelling with the Video Editing Course in
                Saravanampatti at Monz Creative School to grow under an expert’s
                guidance. It can be tailored according to different learners,
                like aspiring creators with zero experience, and professionals
                who seek a career upgrade. Your choice to learn video editing
                unlocks extensive job opportunities up to the international
                level in several sectors. Trainers' coaching of the Video
                Editing Classes in Saravanampatti is intended to develop
                creativity with technical mastery, so you learn to convert raw
                footage into engaging, high-quality content for online
                platforms. Combining practical learning, expert mentorship, and
                industry-standard tools proficiency stimulates confidence to
                edit professionally. For learning other essential details, check
                out the following sections.
              </p>
              <h2 className="why-heading"> Topics We Covered: </h2>
              <p>• Basic Editing Techniques</p>
              <p>• Colour Correction & Grading</p>
              <p>• Text and Motion Graphics</p>
              <p>• Layers, Timelines, & Compositions</p>
              <p>• Typography in Motion</p>
              <p>• 3D Motion Graphics</p>
              <p>• Explaining Complex Data Visually</p>
              <p>• MoGraph Module</p>
              <p>• User Interface & Navigation</p>
              <p>• Modelling</p>
              <p>• Texturing & Materials</p>
              <p>• Lighting & Rendering</p>
              <p>• VFX & Compositing</p>
              <h2 className="why-heading"> Software Practices Include: </h2>
              <p>• Adobe Photoshop</p>
              <p>• Adobe Premiere Pro</p>
              <p>• Illustrate</p>
              <p>• After Effects</p>
              <p>• In design</p>
              <p>
                You will get practice with trending AI tools used in this domain
                from scratch while pursuing the best video editing course, as it
                is an emerging demand across every sector to boost productivity
                and creativity.
              </p>
              <h2 className="why-heading"> Video Editing Course Overview: </h2>
              <p>
                The in-depth exposure to the curriculum of the Video Editing
                Course in Saravanampatti explains, from editing principles,
                colour grading, to visual effects and workflow management.
                Conducting practical assignments while you are doing the Davinci
                Resolve course gives you outstanding potential to edit
                professionally across various media formats.
              </p>
              <h2 className="why-heading">
                {" "}
                Types of Video Editing Course Programs:{" "}
              </h2>
              <p>
                Students from this renowned institution will see the graphic
                design and video editing courses with beginner, intermediate,
                and advanced levels, which are tailored to different skill
                levels. Learners can decide what to choose based on their
                preferences, such as budget, training duration, and flexibility.
              </p>
              <p>
                If you pick the advanced program of the Video Editing Classes in
                Saravanampatti, you will learn critical concepts that lead to
                specialisation, like film editing, motion graphics, colour
                grading, etc. Whether you pick the basic or master’s program,
                the syllabus balances theory and practice equally and assists
                learners to reach the edge of the job market in video editing.
              </p>
              <h2 className="why-heading"> Video Editing Course Fees: </h2>
              <p>
                You feel affordable as the Video Editing Course in
                Saravanampatti fees are structured to be affordable while
                maintaining high-value, industry-focused training.
              </p>
              <h2 className="why-heading"> Custom Learning Modes: </h2>
              <p>
                Monz Creative School's vision is to provide personalised
                mentorship and adaptive schedules to help you progress
                efficiently with a strong balance between theory, practice, and
                creative growth.
              </p>
              <p>
                Seeking a chance to grow a valuable skill from a remote
                location? You can pursue the video editing course online, which
                offers quality education and other essential supports without
                fail. Other flexible learning modes include classroom training,
                weekend/weekday batches, and evening training. At each mode of
                learning, students and working professionals can study
                comfortably according to their wishes.
              </p>
              <h2 className="why-heading">
                {" "}
                Infrastructure of the <span>Monz Creative School: </span>{" "}
              </h2>
              <p>
                The modern infrastructure of the Monz Creative School is
                well-known for being equipped with modern labs, powerful editing
                systems, high-speed connectivity, and a dedicated creative
                learning environment. Through the Adobe Premiere Pro course,
                learners gain immersive experience during active work and
                deliver seamless output. Eventually, you can be proficient with
                almost every industry-standard tool and technology used in the
                current video editing field.
              </p>
              <p>
                The learning platform allows you to take Video Editing Classes
                in Saravanampatti from expert instructors with extensive
                experience in coaching and the digital media industry. Each
                session incorporates deep practical insights, cool editing
                techniques or hacks, and professional workflows. You will get
                personalised guidance and immediate feedback from instructors to
                develop strong creative and technical foundations.
              </p>
              <h2 className="why-heading">
                {" "}
                Earn A Video Editing Certificate:{" "}
              </h2>
              <p>
                Your full commitment during the entire training will be
                complemented here, whether you prefer physical coaching or the
                video editing course online with certificate that holds
                significant value among industries. Its addition to the resume
                paves the way for employers to estimate your editing skills and
                technical proficiency at first glance. Make you stand out in a
                competitive and rapidly growing creative industry.
              </p>
              <h2 className="why-heading"> Hands-On Experience: </h2>
              <p>
                Each learner gains equal importance and acquires practical
                knowledge in a dedicated learning environment. Teaches each core
                concept with project-based coaching, including real editing
                projects and practical assignments. It boosts individuals'
                confidence level in their own potential and prepares them to
                handle real-world editing challenges with their creativity and
                precision.
              </p>
              <h2 className="why-heading">
                {" "}
                <span></span> Placement Sessions:{" "}
              </h2>
              <p>
                As the institution has a strong network connection with top
                media companies, doing the professional video editing course
                leads to secure, promising jobs effortlessly. It encourages each
                individual to participate in resume building, mock interviews,
                and portfolio preparation with personal instructors. Their
                dedicated attention to individual learners prepares you to meet
                industry expectations and identify job opportunities aligned
                with your skills.
              </p>
              <h2 className="why-heading">
                {" "}
                Future Career Opportunities in Video Editing:{" "}
              </h2>
              <p>• Video Editor</p>
              <p>• Film Editor</p>
              <p>• Assistant Editor</p>
              <p>• YouTube/Content Editor</p>
              <p>• Social Media Video Editor</p>
              <p>• Corporate Video Editor</p>
              <p>• Wedding/Events Video Editor</p>
              <p>• Colorist</p>
              <p>• Motion Graphics Designer</p>
              <p>• Promo/Trailer Editor</p>
              <p>• Short-Form Content Editor</p>
              <p>• Broadcast Editor</p>
              <p>• VFX Compositor (entry-level)</p>
              <p>• Multimedia Specialist</p>• Digital Content Creator<p></p>
              <p>• Post-Production Coordinator</p>
              <p>• Media Production Assistant</p>
              <p>• Freelance Video Editor</p>
              <p>• Creative Editor for Marketing Agencies</p>
              <p>• Video Producer (entry-level)</p>
              <h2 className="why-heading">
                {" "}
                <span>Takeaway </span>{" "}
              </h2>
              <p>
                Starting your journey with the Video Editing Course in
                Saravanampatti at Monz Creative School is the key to reshaping
                your future. It empowers you by teaching critical editing
                skills, creative understanding, industry exposure, and other
                essential topics. Gaining placement support while learning Video
                Editing Classes in Saravanampatti aids in clearing any kind of
                tough interviews. Both freshers and working professionals with
                this career path can grow confidently in the digital era.
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
              <span>video editing Course </span>in Coimbatore with
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
                <span className="head-highlight">Job-Ready Video Editor.</span>
              </h2>
              <p className="text-muted mb-4">
                Learning at the best video editing institute in Coimbatore
                prepares you with essential skills for the listed in-demand job
                roles.
              </p>
              <ul className="list-unstyled job-roles-list">
                <li className="mb-2">
                  <BsChatHeartFill />
                  Video Editor
                </li>
                <li className="mb-2">
                  <BsChatHeartFill />
                  Motion Graphics Editor
                </li>
                <li className="mb-2">
                  <BsChatHeartFill />
                  Film & TV Editor
                </li>
                <li className="mb-2">
                  <BsChatHeartFill />
                  YouTube / Content Editor
                </li>
                <li className="mb-2">
                  <BsChatHeartFill />
                  Color Grading Artist
                </li>
                <li className="mb-2">
                  <BsChatHeartFill />
                  Post-Production Executive
                </li>
                <li className="mb-2">
                  <BsChatHeartFill />
                  Motion Designer
                </li>
                <li className="mb-2">
                  <BsChatHeartFill />
                  Freelance Video Editor
                </li>
              </ul>
            </Col>
          </Row>
        </Container>
      </section>

      <VideoEditingCourseTools />

      <section className="tools-section py-5">
        <div className="tools-gradient"></div>

        <div className="container text-center content">
          <h2 className="tools-heading mb-3">Tools Covered</h2>
          <p className="tools-description mb-4">
            Master industry-standard tools used by professional video editors to
            create compelling edits, seamless transitions, cinematic color
            grading, engaging motion graphics, and high-quality visual content.
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
              FAQ - video editing Course in Coimbatore
            </h2>
            <Accordion defaultActiveKey="0">
              <Accordion.Item eventKey="0">
                <Accordion.Header>
                  1. What are the video editing course fees in Coimbatore?
                </Accordion.Header>
                <Accordion.Body>
                  By joining the reputable training center - Monz Creative
                  School, you can learn video editing and access unlimited
                  provisions at affordable prices. It discloses that you can
                  anticipate a premium learning experience without fail.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header>
                  2. Is the online video editing course in Coimbatore
                  accessible?
                </Accordion.Header>
                <Accordion.Body>
                  Learners have the option to master video editing in virtual
                  classes with personal trainers and dedicated guidance. After
                  completing the course, they will gain an industry-recognising
                  certification at the end of the training.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="3">
                <Accordion.Header>
                  3. What concepts does the best video editing course cover?
                  course? course?
                </Accordion.Header>
                <Accordion.Body>
                  The syllabus will cover fundamentals to core concepts with
                  comprehensive details. This includes learning video formats,
                  color corrections, codecs, resolutions, grading, and audio
                  editing.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="4">
                <Accordion.Header>
                  4. Will students be able to earn a certificate after the
                  training?
                </Accordion.Header>
                <Accordion.Body>
                  Yes! Students will receive an industry-recognising certificate
                  for completing the video editing course at this renowned
                  institution. Its mere addition to the portfolio increases
                  credibility and boosts job offers in sought-after industries.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="5">
                <Accordion.Header>
                  5. Is video editing an in-demand career path?
                </Accordion.Header>
                <Accordion.Body>
                  Indeed! The video editing course has significant demand across
                  various platforms due to the increasing technology’s
                  applications such as Instagram, TikTok, and YouTube. It
                  creates job opportunities in advertising, social media, film,
                  and television fields.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="6">
                <Accordion.Header>
                  6. Will I get a certificate after completing the video editing
                  course?
                </Accordion.Header>
                <Accordion.Body>
                  Yes, Monz Creative School provides an industry-recognized
                  certificate upon successful completion of the course. This
                  certificate adds value to your resume and helps you apply for
                  jobs or freelance projects with confidence. We also offer
                  placement assistance and internship opportunities for eligible
                  students.
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Row>
        </Container>
      </section>
    </>
  );
};
export default VideoEditingCourseSaravanampatti;
