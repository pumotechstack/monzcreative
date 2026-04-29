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

const VideoEditingCourseTambaram = () => {
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
              <span className="highlight">video editing course</span> in
              tambaram
            </h1>
            <p className="vfx-subtitle">
              No.1 video editing training institute in tambaram with 100%
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
                {" "}
                <span>Video Editing Course </span>in Tambaram{" "}
              </h2>
              <p className="why-text">
                Video Editing Course in Tambaram For you, pursuing the Video
                Editing Course in Tambaram is the key to opening the door to a
                booming industry. Today, video content rules every corner of the
                world, and competition grows higher among aspirants. Therefore,
                joining the best Video Editing Training in Tambaram, Chennai -
                Monz Creative School with certified trainers only leads to
                staying outstanding even among thousands of young talents during
                interviews. Our mentors, through one-on-one training, teach in
                physical classrooms and video editing course online
                comprehensively. It integrates both theoretical lectures and
                practical training to give hands-on experience for each
                individual. In addition, emphasises learning of the latest
                AI-powered editing tools and updates with the current industry
                trends through the Video Editing Classes in Tambaram, so that
                you can grow as an editor that suits current tech evolution.
              </p>

              <h2 className="why-heading">
                {" "}
                Customisable Video Editing Programs{" "}
              </h2>
              <p>
                Every learner is unique, which is why the Best video editing
                course in Tambaram offers different pathways tailored to your
                background and objectives. If you are a beginner, the lecture of
                the video editing classes in Chennai guides you from the basics,
                including learning about video formats, timeline workflows,
                organising clips, basic transitions, etc. Professionals who have
                experience in the field are involved in complex activities such
                as multi-camera editing, cinematic colour correction, sound
                design, and social-media optimised exports.
              </p>
              <h2 className="why-heading">
                {" "}
                Learning Modes of the <span>Video Editing Course: </span>{" "}
              </h2>
              <p>
                Flexibility is something highly valued, so the filming and
                editing courses feature diverse learning options. You can select
                a mode of learning that suits your lifestyle. With the best
                editing courses online, you can study any corner of the world
                conveniently. The live sessions integrate live practices, group
                interactions, direct mentoring, and peer reviews that are
                beneficial for collaborative learning. Regardless of which mode
                you pick, you will have access to the same quality curriculum,
                software training, and project-based assignments.
              </p>

              <h2 className="why-heading"> Video Editing Course Fee: </h2>
              <p>
                The Video editing course in Chennai fees vary by program and
                learning mode.
              </p>
              <h2 className="why-heading">
                {" "}
                Video Editing Mentors Experience:{" "}
              </h2>
              <p>
                Instructors educate for many years, so the learning experience
                might deliver in-depth practical insights, industry best
                practices, and real editing discipline. Apart from helping you
                master the industry-standard software, the live practical
                training makes you think from the mindset of a professional
                video editor, complete deadlines, and meet client expectations
                perfectly. Enabling a video editing course near me directs you
                to address one of our branches within the shortest distance from
                the place where you reside.
              </p>

              <h2 className="why-heading">
                {" "}
                Video Editing Practical Training:{" "}
              </h2>
              <p>
                This advanced video editing software course provides great
                emphasis on practical, hands-on training rather than theory. You
                will undertake authentic video projects like short vlogs or
                social media clips, as our mentorship is designed to bring
                seamless output. As a result of these exercises, you will turn
                into a pro in the various editing techniques. Such practical
                exposure through the Adobe Premiere Pro course ensures that you
                are not only being taught theoretically but are also getting
                tangible experience, which is suitable for the actual workplace.
                Moreover, you will be able to create an actual portfolio
                containing a rewarding skill set that exemplifies your talents
                and creativity.
              </p>
              <h2 className="why-heading">
                Video Editing Course Certificate Recognition:{" "}
              </h2>
              <p>
                Receiving a recognised certificate by completing the Movie
                editing course in Chennai reflects your skills, which stimulates
                credibility when applying for jobs. This certification can give
                you an edge in today’s job market. Many employers prefer
                candidates who demonstrate a strong commitment to learning and
                have both technical and creative skills. Our certificate has
                been collaborated with more leading authorities, so you can
                prove your professionalism in the video editing field.
              </p>
              <h2 className="why-heading">
                Video Editing Course Eligibility:{" "}
              </h2>
              <p>
                The only thing you need is basic computer literacy and a passion
                for it. Prior video editing experience is not necessary.
                Regardless of your needs or careers, you can sign up for the
                Video Editing Classes in Tambaram and start immediately.
              </p>

              <h2 className="why-heading">
                Placement Assistance of the Video Editing Course:{" "}
              </h2>
              <p>
                Besides teaching, the learning platform empowers you to take the
                next step in the real world. As a part of the video editing
                course with placement assistance, we provide support for the
                creation of a professional portfolio, resume guidance, interview
                preparation, and connecting with industry opportunities. This is
                a great chance to enter media houses, content studios, or many
                other media sectors.
              </p>
              <h2 className="why-heading">
                Careers in Video Editing Training:{" "}
              </h2>
              <p>
                Possible career paths after completing the Video Editing Course:
              </p>
              <p>• Video Editor</p>

              <p>• Motion Graphics Designer / Animator</p>

              <p>• Film / Short Film Editor</p>

              <p>• E-learning / Educational Video Editor</p>

              <p>• Corporate Video Producer / Editor</p>

              <p>• YouTube / Digital Content Producer</p>

              <p>• Freelance Video Editor</p>

              <p>• Content Creator / Social Media Video Editor</p>

              <h2 className="why-heading">
                <span>Takeaway </span>{" "}
              </h2>
              <p>
                Investing in this Video Editing Course in Tambaram makes your
                every penny worth it for a lifetime. Regularly participating in
                every session is the best way to learn video editing and develop
                technical proficiency with professional software, which remains
                a constant requirement across every sector. With the provision
                of different learning modes, expert guidance, practical
                projects, and placement support at the Video Editing Classes in
                Tambaram, you are not merely learning but are getting ready for
                a real-time job. Therefore, join Monz Creative School
                immediately to learn and grow with professionalism.
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
              <span>video editing Course </span>in Tambaram with
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
                  1. How much does the Video Editing Course cost?
                </Accordion.Header>
                <Accordion.Body>
                  For the affordable fee, you can take the Video Editing Course
                  in Tambaram, along with more promising rewards. This includes
                  personalised schedules, authorised recognition, practical
                  training, etc.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header>
                  2. Can I learn a Video Editing Course in Tambaram quickly?
                  accessible?
                </Accordion.Header>
                <Accordion.Body>
                  Indeed! You can attend Video Editing Classes in Tambaram
                  shortly without skipping a critical topic. As you learn from
                  highly experienced mentors who can tailor their coaching and
                  incorporate necessary strategies that can speed up learning,
                  anyone can possibly finish a course within the expected
                  period.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="3">
                <Accordion.Header>
                  3. What will you learn from professional video editing?
                  course? course?
                </Accordion.Header>
                <Accordion.Body>
                  You can learn professional video editing that covers core
                  concepts such as colour correction, grading, audio design,
                  software mastery, motion graphics, etc. Infusing compelling
                  narratives aids in creating engaging video content that can
                  suit any media platform.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="4">
                <Accordion.Header>
                  4. Is the Video Editing Course challenging to learn?
                </Accordion.Header>
                <Accordion.Body>
                  At the beginning, you may find the Video Editing Course in
                  Chennai feels challenging. With dedicated practice and effort,
                  you can become an expert in video editing over time.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="5">
                <Accordion.Header>
                  5. Do you need prior experience to pursue a video editing
                  course?
                </Accordion.Header>
                <Accordion.Body>
                  It is not conditional to take the Video Editing Course in
                  Tambaram with prior experience, as some programs are designed
                  to suit from beginners to working professionals.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="6">
                <Accordion.Header>
                  6. Will I get a certificate after completing the video editing
                  course? course?
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
export default VideoEditingCourseTambaram;
