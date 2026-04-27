import React from "react";
import "./CoursesPageStyle.css";
import StudentsWork from "../components/StudentsWork";
import { Container, Row, Col, Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Accordion from "react-bootstrap/Accordion";
import Footer from "../components/Footer";
import Menu from "../components/Menu";
import VideoEditingCourseTools from "../components/VideoEditingCourseTools";
import { BsChatHeartFill } from "react-icons/bs";

const VideoEditingCourseCoimabtiore = () => {
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
              <span className="highlight">video editing course</span> in
              Coimbatore
            </h1>
            <p className="vfx-subtitle">
              No.1 video editing training institute in coimbatore with 100%
              placement support
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
                <span>Video Editing Course </span>in Coimbatore
              </h2>
              <p className="why-text">
                Video Editing Course in Coimbatore Develop in-demand skills by
                pursuing the Video Editing Course in Coimbatore at Monz Creative
                School to unlock the best learning experience. Trainers will
                guide you to master the art of transforming random videos into
                more appealing and engaging visuals. This is also an ideal
                career path for students, working professionals, and freelancers
                without restrictions. Besides, the curriculum of video and
                editing courses helps to upgrade your video editing skills.
                Offering hands-on experience with premium tools and software to
                prepare an industry-ready professional video editor in the
                future. For learning more details about the Video editing
                classes in Coimbatore and crucial details, explore the following
                information.
              </p>
              <h2 className="why-heading">
                <span>About the Video Editing Course </span>in Coimbatore
              </h2>
              About the Video Editing Course in Coimbatore
              <p>• Modern infrastructure campus </p>
              <p>• World-class coaching service</p>
              <p>• Comprehensive practical knowledge</p>
              <p>• Extensive provisions and facilities</p>
              <p>• Holistic skill development</p>
              <p>• Cutting-Edge tools & technologies</p>
              <p>• Assured placement preparation</p>
              <p>• Certified trainers</p>
              <p>• Industries recognition</p>
              <p>• Big professional network</p>
              Benefits of the Video Editing Course in Coimbatore:
              <h2 className="why-heading">
                <span>Benefits of the Video Editing Course </span>in Coimbatore
              </h2>
              <p>
                • Acknowledgement of the video editing course online with
                certificate leads to earning increased recognition and
                credibility with ease for students.{" "}
              </p>
              <p>
                • Students who pursue the davinci resolve course will attain
                proficiency with color correction, video editing, visual
                effects, and audio post-production.
              </p>
              <p>
                • With placement assistance, attending the Video editing classes
                in Coimbatore is guaranteed to secure promising job offers.
              </p>
              <p>
                • Working professionals and students who desire to pursue the
                video editing course online will get the opportunity to chase
                their passion after their work and studies.
              </p>
              <p>
                • Extensive benefits you can expect from graphic design and
                video editing courses include strong technical skills, improved
                creativity, and broad career opportunities.
              </p>
              <p>
                • Gaining skills like mastering editing techniques and creating
                professional-quality videos from the adobe premiere pro course
                boosts career prospects in the media industry.
              </p>
              <p>
                • The high-earning potential of the course on video editing
                helps you to grab jobs like junior video editor, assistant
                editor, content editor, VFX editor, and many others.
              </p>
              <p>
                • The exceptional coaching of the professional video editing
                course offers a clear understanding of industry-demanding skills
                such as visual effects, audio mixing, and color correction.
              </p>
              <h2 className="why-heading">Career Opportunities:</h2>
              <p>
                Your dedicated focus on the video editing training makes you a
                perfect applicant for the following career opportunities.
              </p>
              <p>
                <b>Video Editor</b>
              </p>
              <p>
                The profession offers priority for those who have proficiency
                with assembling and cutting footage to craft a video.
              </p>
              <p>
                <b>Film Editor</b>
              </p>
              <p>
                It is essential to work closely with directors and producers
                while creating feature-length films.
              </p>
              <p>
                <b>Television Editor</b>
              </p>
              <p>
                The professionals excel at the work of live TV broadcasts and
                footage edits in real-time.
              </p>
              <p>
                <b>Broadcast Technician</b>
              </p>
              <p>
                Maintains smooth transmission by providing technical support for
                TV and radio broadcasts.
              </p>
              <p>
                <b>Assistant Editor</b>
              </p>
              <p>
                Establishing effective collaboration with senior editors by
                supporting them to sync audio, arrange footage, and prepare
                timelines.
              </p>
              <p>
                <b>Post-Production Specialist</b>
              </p>
              <p>
                The main contribution will be witnessed in the post-production
                process, particularly at the phase of editing, audio mixing, and
                colour correction.
              </p>
              <h2 className="why-heading">
                <span>Takeaway</span>
              </h2>
              <p>
                Exposure to the Video Editing Course in Coimbatore at Monz
                Creative School is the only way to unlock rewarding job offers
                with industry-best income. After checking each employment
                opportunity, choose your career path that meets your interests
                and goals to continue it constantly. Mentors who have years of
                excellence in teaching will guide you from the day you start
                your training till the end. Don’t delay any more minutes!
                Utilise video editing classes in Coimbatore to undergo an
                immense career transformation.
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
      <Footer />
    </>
  );
};
export default VideoEditingCourseCoimabtiore;
