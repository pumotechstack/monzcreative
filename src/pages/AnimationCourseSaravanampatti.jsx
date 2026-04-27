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
import AnimationCourseTools from "../components/AnimationCourseTools";
import { BsChatHeartFill } from "react-icons/bs";
import { FaPhoneVolume, FaWhatsapp } from "react-icons/fa";


const AnimationCourseSaravanampatti = () => {
    const topRowStudents = [
        {
            name: "Aarav Sharma",
            package: "8.2 LPA",
            company: "Amazon",
            companyLogo: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
            photo: "https://randomuser.me/api/portraits/men/45.jpg",
        },
        {
            name: "Diya Patel",
            package: "7.5 LPA",
            company: "Netflix",
            companyLogo: "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg",
            photo: "https://randomuser.me/api/portraits/women/32.jpg",
        },
        {
            name: "Rahul Mehta",
            package: "9 LPA",
            company: "Google",
            companyLogo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
            photo: "https://randomuser.me/api/portraits/men/50.jpg",
        },
        {
            name: "Sneha Iyer",
            package: "6.8 LPA",
            company: "Adobe",
            companyLogo: "https://upload.wikimedia.org/wikipedia/commons/5/51/Adobe_Systems_logo_and_wordmark.svg",
            photo: "https://randomuser.me/api/portraits/women/41.jpg",
        },
    ];

    const bottomRowStudents = [
        {
            name: "Vikram Nair",
            package: "10.5 LPA",
            company: "Microsoft",
            companyLogo: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
            photo: "https://randomuser.me/api/portraits/men/12.jpg",
        },
        {
            name: "Ishita Das",
            package: "7.9 LPA",
            company: "Apple",
            companyLogo: "https://upload.wikimedia.org/wikipedia/commons/0/02/Apple_logo_black.svg",
            photo: "https://randomuser.me/api/portraits/women/33.jpg",
        },
        {
            name: "Arjun Rao",
            package: "8.4 LPA",
            company: "Infosys",
            companyLogo: "https://upload.wikimedia.org/wikipedia/commons/4/45/Infosys_logo.svg",
            photo: "https://randomuser.me/api/portraits/men/27.jpg",
        },
        {
            name: "Priya Sen",
            package: "6.5 LPA",
            company: "Wipro",
            companyLogo: "https://upload.wikimedia.org/wikipedia/commons/f/f5/Wipro_Primary_Logo_Color_RGB.svg",
            photo: "https://randomuser.me/api/portraits/women/26.jpg",
        },
    ];
    return (
        <>
            <Menu />
            
            <section className="vfx-hero">
                <Container>
                    <Row>
                        <p className="vfx-tagline">— 2D Animation + 3D Animation + Motion Design</p>
                        <h1>
                            <span className="highlight">Animation Course  </span> in Saravanampatti
                        </h1>
                        <p className="vfx-subtitle">

                            No.1 animation training institute in saravanampatti with 100% placement
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
                                <span>Animation Course </span>in Saravanampatti
                            </h2>
                            <p className="why-text">
                                Students who aspire to enter a demanding career should consider pursuing the Animation Course in Saravanampatti to gain the best learning experiences. A combination of skilled trainers and their consistent guidance focuses on uplifting learners' professional lives. Individualised supervision and coaching are also accessible at Monz Creative School in order to encourage them to acquire comprehensive knowledge flexibly. This renowned Animation Training Institute in Saravanampatti is trusted by thousands of youngsters due to reshaped their lifestyle significantly. Increasing chances for getting placed at top MNCs by equipping with essential skills, knowledge, and experience. Further exploration will provide detailed information regarding available benefits, services, and facilities.
                            </p>

                            <h2 className="mt-4 why-heading">About the <span>Animation Course in Saravanampatti</span></h2>

                            <p>
                                Excellent mentors teach the Animation Course in Saravanampatti to equip exceptional skills and knowledge. They believe in practical learning more than theoretical knowledge, so they constantly involve students in live training. It also includes developing visual communication, storytelling, and technical aspects. Moreover, the curriculum of the Animation Training Institute in Saravanampatti is also designed to align with on-site jobs, which makes students capable of managing real-time duties potentially.
                            </p>

                            <h2 className="mt-4 why-heading">Key Benefits<span> Highlights:</span></h2>
                            <ul>
                                <li>One-on-One Training</li>
                                <li>Authorised Certificates</li>
                                <li>High-Paying Courses</li>
                                <li>Hands-On Skills</li>
                                <li>Extensive Job Offers</li>
                                <li>Online/Offline Classes</li>
                                <li>Dedicated Placement Support</li>
                                <li>Tailored Coaching from Trainers</li>
                                <li>Project-Based Learning Experience</li>
                            </ul>

                            <h2 className="mt-4 why-heading">Benefits of the <span> Animation Course in Saravanampatti</span></h2>
                            <ul>
                                <li>Tailored training is centred on educating the course 3d animation according to the learners' knowledge and understanding levels.</li>
                                <li>Exposure to the 2d animation course aids in developing hands-on experience with leading industry-standard software from scratch.</li>
                                <li>From students to working professionals, consider the animation course in Coimbatore fees is reasonably priced, and enjoy limitless services.</li>
                                <li>A holistic coaching of 3d animation classes, expanding your knowledge in the core field, and boosting credibility.</li>
                                <li>Trainers who educate the VFX course with placement training offer extensive effort and support to increase your career prospects.</li>
                                <li>Another noticeable feature of the animation courses near me is directing and introducing you to other branches to access quality education without hassles.</li>
                                <li>Earn industry recognition by studying at animation classes in Coimbatore and contribute to society with your invaluable potential.</li>
                            </ul>
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
                            <span>Animation Course </span>in Saravanampatti with <span> Placement</span>
                        </h2>
                    </Row>
                </Container>

                <Row>
                    <div className="students-marquee mt-4">
                        <div className="marquee-group">
                            {[...topRowStudents, ...topRowStudents].map((student, i) => (
                                <div className="student-card" key={i}>
                                    <img src={student.photo} alt={student.name} className="student-photo" />
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
                            {[...bottomRowStudents, ...bottomRowStudents].map((student, i) => (
                                <div className="student-card" key={i}>
                                    <img src={student.photo} alt={student.name} className="student-photo" />
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
                                    Job-Ready Animator.
                                </span>
                            </h2>
                            <p className="text-muted mb-4">
                                Learning at the best animation institute in Coimbatore prepares you with essential skills for the listed in-demand job roles.
                            </p>
                            <ul className="list-unstyled job-roles-list">
                                <li className="mb-2">
                                    <BsChatHeartFill />
                                    Animator
                                </li>
                                <li className="mb-2">
                                    <BsChatHeartFill />

                                    Character Designer
                                </li>
                                <li className="mb-2">
                                    <BsChatHeartFill />

                                    Storyboard Artist
                                </li>
                                <li className="mb-2">
                                    <BsChatHeartFill />

                                    VFX Artist
                                </li>
                                <li className="mb-2">
                                    <BsChatHeartFill />

                                    Motion Graphics Designer
                                </li>
                                <li className="mb-2">
                                    <BsChatHeartFill />

                                    Game Designer
                                </li>
                                <li className="mb-2">
                                    <BsChatHeartFill />

                                    Graphic Designer
                                </li>
                                <li className="mb-2">
                                    <BsChatHeartFill />

                                    3D Modeler
                                </li>
                            </ul>
                        </Col>
                    </Row>
                </Container>
            </section>

            <AnimationCourseTools />

            <section className="tools-section py-5">
                <div className="tools-gradient"></div>

                <div className="container text-center content">
                    <h2 className="tools-heading mb-3">Tools Covered</h2>
                    <p className="tools-description mb-4">
                        Master industry-standard tools used by professional animators to create stunning character animations, motion graphics, and high-quality visual sequences.
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
                        <h2 className="faq-headding">FAQ - Animation Course in Saravanampatti</h2>
                        <Accordion defaultActiveKey="0">
                            <Accordion.Item eventKey="0">
                                <Accordion.Header>1. What is the duration of the animation course in Coimbatore?
                                </Accordion.Header>
                                <Accordion.Body>
                                    Our animation course at Monz Creative School in Coimbatore typically lasts between 3 months to 6 year, depending on the program level (basic to advanced). It includes practical training on 2D/3D animation, motion graphics, and visual storytelling.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="1">
                                <Accordion.Header>2. Do I need any prior skills to join the animation course?
                                </Accordion.Header>
                                <Accordion.Body>
                                    No prior skills are required! Our course is beginner-friendly and designed for students from any background. We teach you from the basics of sketching and storyboarding to advanced software like Adobe Animate, Maya, and Blender.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="3">
                                <Accordion.Header>3. What job roles can I get after completing the animation course?
                                </Accordion.Header>
                                <Accordion.Body>
                                    After completing the animation course, you can work as a 2D/3D Animator, Motion Graphics Artist, Character Designer, Storyboard Artist, or VFX Artist. Our placement support team also helps connect you with studios, production houses, and freelance opportunities.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="4">
                                <Accordion.Header>4. Is this animation course available online?
                                </Accordion.Header>
                                <Accordion.Body>
                                    Yes! We offer both offline classes at our Coimbatore center and live instructor-led online sessions. You can choose the learning mode that fits your schedule while still receiving the same expert guidance and project-based learning.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="5">
                                <Accordion.Header>5. What software will I learn during the animation training?
                                </Accordion.Header>
                                <Accordion.Body>
                                    You’ll be trained in industry-standard software like Adobe Animate, After Effects, Maya, Blender, and Toon Boom. These tools are essential for 2D/3D animation, visual effects, and character rigging used in film, TV, and gaming industries.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="6">
                                <Accordion.Header>6. Does the animation course offer placement support?
                                </Accordion.Header>
                                <Accordion.Body>
                                    Absolutely! At Monz Creative School, we offer dedicated placement assistance including resume building, interview prep, and internship opportunities. Many of our students have been successfully placed in animation studios, advertising agencies, and production companies.
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
export default AnimationCourseSaravanampatti;
