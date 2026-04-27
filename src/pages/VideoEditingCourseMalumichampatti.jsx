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
import VideoEditingCourseTools from "../components/VideoEditingCourseTools";
import { BsChatHeartFill } from "react-icons/bs";
import { FaPhoneVolume, FaWhatsapp } from "react-icons/fa";

const VideoEditingCourseMalumichampatti = () => {
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
              — Video Editing + Color Grading + Motion Graphics -
            </p>
            <h1>
              <span className="highlight">video editing course</span>in
              Malumichampatti
            </h1>
            <p className="vfx-subtitle">
              No.1 video editing training institute in Malumichampatti with 100%
              placement support
            </p>

            <div className="vfx-buttons">
              <a href="tel:09843337779" className="cta-btn-banner">
                <FaPhoneVolume className="cta-icon" />
                <span>Get 30% Off – Call 09843337779 Now</span>
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
                <span> Video Editing Course </span>in Malumichampatti{" "}
              </h2>
              <p className="why-text">
                Start your journey with the Video Editing Course in
                Malumichampatti at Monz Creative School that provides structured
                skills, hands-on experience, and industry-ready knowledge to
                make a successful career. The program allows novice and
                potential editors to understand video editing through gradual
                and detailed modules of storytelling, transitions, and
                professional post-production workflows. Through the learning
                journey, you here grasp knowledge of relevant AI tools and
                current industry updates. Learners benefit from expert-led Video
                editing classes in Malumichampatti that emphasise creativity,
                technical confidence, and real-world editing scenarios for
                digital platforms. The curriculum supports students aiming to
                build strong portfolios while understanding modern content
                demands across advertising, social media, films, and corporate
                communication environments.
              </p>

              <h2 className="why-heading"> Video Editing Course Overview </h2>
              <p>
                The detailed program includes carefully planned video and
                editing courses, which focus on creative concepts, technical
                skills, and the execution of the project with real industry
                needs. The students become familiar with the basics of editing,
                colour grading, audio synchronisation, motion effects, and
                output optimisation through the use of industry-standard
                software and workflows. The course on video editing emphasises
                practical work for students in the form of assignments
                simulating client briefs so that learners become capable of
                handling professional editing work independently.
              </p>

              <h2 className="why-heading"> Tailored Video Editing Programs </h2>
              <p>
                Offer a specialised curriculum that is organised as a
                professional video editing course that meets every student's
                pace and industry norms. The learners go under intensive
                training in an Adobe Premiere Pro course and other subjects like
                shortcuts, collaborative editing techniques, workflow
                optimisation, and project management. Personalised mentoring
                guarantees that each student can gain technical proficiency.
                Pursuing a master's level program transforms you into a strong,
                creative person, which is appropriate for various media
                production roles. Beginners and novices starting their journey
                with the basic program aid in understanding fundamentals, which
                is important for progressing further towards complex topics.
              </p>

              <h2 className="why-heading"> Learning Modes:</h2>
              <p>
                Students can opt for classes or take a video editing course
                online with flexible times according to their needs. Online
                students are able to access recorded sessions, actual meetings
                with the instructor, assignment work, and discussion activities
                without compromising the quality of practical work. This
                flexible system helps students, professionals, and freelancers
                to manage their commitments along with education effectively.
              </p>

              <h2 className="why-heading">Cost of the Video Editing Course:</h2>
              <p>
                Affordable plans are available with a transparent Video editing
                course in Coimbatore fees structured to ensure quality training
                and excellent value
              </p>

              <h2 className="why-heading">Video Editing Trainer Experience:</h2>
              <p>
                The tutors are experienced professionals in this field, with
                extensive knowledge in movie and video editing, advertising,
                production of digital media, and business video development. The
                mentors have hands-on professional knowledge in video and movie
                editing that incorporates personalised guidance and advice based
                on this expertise. Trainers are experienced in this field, with
                extensive knowledge and skills in this area.
              </p>

              <h2 className="why-heading"> Video Editing Practical Training</h2>
              <p>
                You will learn video editing with hands-on experience, as
                students will be working on constant assignments, live projects,
                and real-time editing tasks. They have to work on short films,
                marketing videos, reels, and client-style briefs to imitate
                real-world production settings. This is important so that they
                gain confidence, speed, and problem-solving skills for editing.
              </p>

              <h2 className="why-heading"> Video Editing Certification </h2>
              <p>
                Upon completion, students receive a recognised video editing
                course online with certificate validating their technical skills
                and practical expertise. The certificate has huge value among
                studios, agencies, and digital media companies and demonstrates
                hands-on experience. This credential enhances credibility,
                strengthens resumes, and supports career advancement
                opportunities across creative industries.
              </p>

              <h2 className="why-heading"> Video Editing Course Eligibility</h2>
              <p>
                This program is open to students, graduates, freelancers, and
                professionals interested in Video editing classes in
                Malumichampatti without prior editing experience. Basic computer
                knowledge and creative interest are sufficient to begin this
                structured and supportive learning journey confidently.
              </p>

              <h2 className="why-heading">
                {" "}
                Placement Assistance for Video Editing Course
              </h2>
              <p>
                The comprehensive placement support of the Video Editing Course
                in Malumichampatti with industry-best trainers keeps training
                smooth from preparation to secure rewarding jobs. It includes
                receiving dedicated assistance for creating a resume, reviewing
                a portfolio, and mock test prep. Creating a better environment
                to connect with leading hiring employers, which strengthens
                students' careers. Besides, increasing chances to enter top-tier
                enterprises over time and achieve fixed, dream goals in the
                future.
              </p>

              <h2 className="why-heading"> Careers in Video Editing:</h2>
              <p>
                • Video Editor working across films, digital platforms, and
                corporate productions with creative storytelling and technical
                execution responsibilities.{" "}
              </p>
              <p>
                • Motion Graphics Assistant supporting animated content
                creation, visual effects integration, and promotional media
                development projects.{" "}
              </p>
              <p>
                • Content Editor specialising in social media videos, reels, and
                branded digital campaigns for diverse online audiences.{" "}
              </p>
              <p>
                • Post-Production Executive managing editing workflows,
                timelines, and quality control for media production teams.{" "}
              </p>
              <p>
                • Freelance Video Editor delivering customised editing solutions
                for clients across industries and creative platforms.{" "}
              </p>

              <h2 className="why-heading">
                {" "}
                <span>Conclusion</span>
              </h2>
              <p>
                Regularly attending the video editing course in Malumichampatti
                at Monz Creative School is a great way for students to gain the
                confidence to be creative, the skills to harness the latest
                technology, and the knowledge of how the industry works. It
                helps students to be successful in the long run, as the
                structured video editing training combines real-world exposure.
                Thus, students will be able to compete in ever-changing media
                landscapes without challenges. With the help of mentors and
                hands-on experience, video editing classes in Malumichampatti
                are reshaping students’ passion into a promising career.
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
              <span>video editing Course </span>in Malumichampatti with
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
          <a href="tel:09843337779" className="cta-float call">
            <FaPhoneVolume />
          </a>
          <a
            href="https://wa.me/9109843337779"
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
              FAQ - video editing Course in Malumichampatti
            </h2>
            <Accordion defaultActiveKey="0">
              <Accordion.Item eventKey="0">
                <Accordion.Header>
                  1. How many days do I need for the Video Editing Course in
                  Malumichampatti?
                </Accordion.Header>
                <Accordion.Body>
                  The whole duration of the best video editing course in
                  Malumichampatti usually varies between 60 and 90 days. This
                  depends upon the pace of learning and some other metrics, like
                  understanding levels.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header>
                  2. Can I pursue the Davinci Resolve course in Malumichampatti?
                </Accordion.Header>
                <Accordion.Body>
                  Yes! You will explore Davinci Resolve through the Video
                  Editing Course in Malumichampatti as an advanced module. You
                  will be trained on how to colour grade, edit, and
                  professionally post-produce their content.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="3">
                <Accordion.Header>
                  3. Am I eligible for the Master in Video Editing Course in
                  Coimbatore? course? course?
                </Accordion.Header>
                <Accordion.Body>
                  Yes! Students, graduates, and working professionals possessing
                  basic knowledge of computers and creative ideas are eligible.
                  Editing experience provides a positive advantage but is not a
                  prerequisite for successful enrollment.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="4">
                <Accordion.Header>
                  4. What will you learn from the graphic design and video
                  editing courses? training?
                </Accordion.Header>
                <Accordion.Body>
                  You can expect to acquire skills in design principles, visual
                  storytelling, editing techniques, the basics of motion
                  graphics, and working with industry-standard software. The
                  courses lie in the area of practical skills for the digital
                  age, including electronic media, branding, and professional
                  content creation.
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
                  6. Can I complete the Video Editing Course in 3 months or
                  earlier? course?
                </Accordion.Header>
                <Accordion.Body>
                  Certainly, it is possible to finish the best video editing
                  course within three months by pursuing intensive learning and
                  practice sessions. Flexible Video editing classes in
                  Malumichampatti make it easier and quicker to complete based
                  on one's commitment levels.
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
export default VideoEditingCourseMalumichampatti;
