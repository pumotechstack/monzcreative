import React from "react";
import "./CoursesPageStyle.css";
import StudentsWork from "../components/StudentsWork";
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Accordion from "react-bootstrap/Accordion";
import ItTrainingCourseTools from "../components/ItTrainingCourseTools";
import { BsChatHeartFill } from "react-icons/bs";
import { FaPhoneVolume, FaWhatsapp } from "react-icons/fa";

const ItTrainingCourseCoimbatore = () => {
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
            -vProgramming Fundamentals + Web Development + IT Essentialsc-
            </p>
            <h1>
              <span className="highlight">IT Training Institute </span>in coimbatore
            </h1>
            <p className="vfx-subtitle">
            No.1 IT Training Institute in coimbatore with 100% placement support
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
                {" "}
                <span> IT Training Institute </span> in Coimbatore{" "}
              </h2>
              <p className="why-text">
              Aspiring learners might do the IT Course in Coimbatore at Monz Creative School to get lifetime career support, including the chance of attending exclusive job interviews limitlessly. Here, you can learn Python or any other trending courses to kickstart or upgrade your career with competitive pay. Even getting an acknowledgement of a data science certification here leads to entering a booming industry. You may not be clear about which career path to choose. If so, approaching expert faculty from our IT Training Institute in Coimbatore helps you make the right decision. This learning platform is also well-known for accessing personal trainers, live job-oriented training, a strong professional network, certificate credibility, and many other benefits. You can learn about them with in-depth details in the following sections.
              </p>

              <h2 className="why-heading"> <span>Key Features:</span></h2>
              <p>• Book Your FREE Demo Class </p>
                    <p>• 50+ Courses</p>
                    <p>• 10+ Years of Services</p>
                    <p>• Job-Oriented Mentorship</p>
                    <p>• 500+ recruiters</p>
                    <p>• Hands-On Projects</p>
                    <p>• Live Practical Training</p>
                    <p>• Recognised Certification</p>
                    <p>• More Than 7500+ Students Trained Yearly</p>

                    <h2 className="why-heading"><span>Explore Trending IT Courses:</span> </h2>
                    <p>• Python</p>
                    <p>• Java</p>
                    <p>• Data Analytics Course</p>
                    <p>• Business Analytics Course</p>
                    <p>• Artificial Intelligence Course</p>
                    <p>• Generative AI Course</p>
                    <p>• DevOps </p>
                    <p>• Networking Course</p>
                    <p>• Cybersecurity</p>
                    <p>• Ethical Hacking</p>
                    <p>• Full Stack Developer Course</p>
                    <p>• Web Developer Course</p>
                    <p>• Android Development</p>
                    <p>• AWS Course</p>
                    <p>• Data Science Course</p>
                    <p>• .NET Developer Course</p>
                    <p>• Machine Learning Course</p>
                    <p>• Blockchain Technology Course</p>
                    <p>• Digital Marketing Course</p>
                    <p>• Software Testing Course</p>
                    <p>• UI/UX Design Engineering</p>

                    <h2 className="why-heading"> Why Choose an IT Course in Coimbatore at <span>Monz Creative School?</span> </h2>
                    <p><b>Expert Faculties </b></p>
                    <p>Training is given by skilled industry experts from the IT Training Institute in Coimbatore who
                        have knowledge of the real world. The faculties offer practical insights, mentorship, and the
                        clearest concept explanations. Their direction enables learners to gain a thorough understanding
                        of industry expectations. A specialist teacher's instruction guarantees that the students will
                        be able to get a job, not merely a certificate.</p>
                    <p><b>Curriculum</b></p>
                    <p>The curriculum is engineered to be in line with the current industry standards and technology
                        trends that are changing. It is a blend of a strong foundation and advanced, job-oriented
                        skills. Learners receive well-organised knowledge which equips them to be real professionals.
                        Practical relevance and career outcomes are given priority in every unit.</p>
                    <p><b>Real-World Projects</b></p>
                    <p>Students handle real projects that are based on actual industry situations. Such projects enable
                        the application of theoretical knowledge to practical situations. Learners will have a solid
                        portfolio, which will be a great help for their confidence and employability. Practical
                        experience equips students for the challenges of the workplace.</p>
                    <p><b>Placement Support</b></p>
                    <p>Committed placement assistance leads students all the way from the preparation of resumes to the
                        readiness for interviews. Besides, learners get career guidance and job-oriented training, which
                        match the industry's expectations. The aim is to help the students take their first steps in
                        suitable roles with confidence. The help is extended up to the point when appropriate
                        opportunities are attained.</p>
                    <p><b>Flexible Learning</b></p>
                    <p>Flexible learning options enable students and working professionals to continue their higher
                        education without having to change their life patterns. The learning sessions are structured in
                        a manner that allows students to grasp the subject matter effortlessly while at the same time
                        enjoying maximum convenience. Students opting for education can thus coordinate their studies,
                        job, and other personal engagements. This flexibility lets the students continue learning
                        without worrying about getting overstressed.</p>
                    <p><b>Campus Recruitment Drives</b></p>
                    <p>During regular campus recruitment events, students meet potential employers and recruiting
                        companies directly. Such events offer genuine interview opportunities right where the students
                        are being trained. Allow students to understand how companies conduct their hiring process. This
                        is a great way to make the transition from learning to getting a job smoother.</p>
                    <p><b>Affordable Course Price</b></p>
                    <p>The pricing of the courses is set so that they remain affordable while the quality of instruction
                        is not compromised. Students get the most out of their money through high-quality teaching by
                        experts, hands-on experience, and career guidance. Making the price reasonable allows students
                        from all walks of life to gain access to professional education. It is a wise step as the
                        benefits for one's career will be felt in the long run.</p>
                    <p><b>Online Learning For Anyone, Anywhere</b></p>
                    <p>It has become possible for students to get a top-notch education no matter where they are.
                        Through interactive sessions, hands-on training, and mentor support, students can learn very
                        effectively even from a distance. This is the right choice for those learners who want to study
                        at their own time and also from their own place. Training of a high standard is not restricted
                        by location anymore.</p>

                        <h2 className="why-heading"> You Can Find the Right Career: </h2>
                        <p><b>Python</b></p>
                    <p>Python is a simple and versatile programming language, and is one of the most popular languages
                        used in modern technology. It is a language in high demand for roles related to automation, web
                        backend, AI, machine learning, and data. Therefore, a Python training in Coimbatore can be your
                        swiftest route to tech jobs. A Python course in Coimbatore completed at a recognised institute
                        can lead to excellent job roles such as Python Developer, Data Engineer, etc in IT, startups,
                        fintech, e-commerce, and analytics industries. Anyone choosing Python for beginners will learn
                        coding, problem-solving, and build careers around data. The course helps you get hands-on coding
                        skills that pave the way for high-growth career paths with strong earning potential. Thereby,
                        joining the Python course with placement in Coimbatore can be a smart decision to stay ahead as
                        technologies like AI and data science continue to rule the job market.</p>
                    <p><b>Java</b></p>
                    <p>Java will remain a main source of power for large-scale applications and backend systems in the
                        future as well. Thus, undergoing a thorough Java training in Coimbatore makes you see the
                        language's stability, how globally it is in demand, and its strong presence in banking, telecom,
                        and cloud-based software development. Through this /Java course in Coimbatore, you will be able
                        to work as a Java Developer, Backend Engineer, Android Developer, or Full-Stack Developer.
                        Become proficient via the /Java Full Stack Developer Course in Coimbatore and be eligible for IT
                        services, finance, telecom, and product companies. Students, by joining the Best Java Training
                        Institute in Coimbatore, take the first step on their career ladder. Using Java alongside
                        frameworks such as Spring and one's own cloud skills is a sure way to make oneself more
                        attractive in the job market and thus be competitive. Out of all options, if you decide to start
                        with Java training with placement in Coimbatore at Monz Creative School, you will have an
                        excellent opportunity to be interviewed by the top-tier firms. </p>
                    <p><b>Data Analysis</b></p>
                    <p>Data analysis tops the list of most in-demand tech skills as companies depend more and more on
                        data-driven insights for strategic decision-making. Gaining knowledge in data analysis equips
                        you with the skills to clean, interpret, visualize, and effectively communicate data insights,
                        which is a core requirement of any industry today. Typical job titles include a Data Analyst, BI
                        Analyst, Reporting Analyst, and Operations Analyst, with a wide range of vacancies in IT,
                        marketing, finance, healthcare, e-commerce, and consulting as well. Analytical thinkers make the
                        best candidates for the Data Analyst Course in Coimbatore and lay a solid groundwork for moving
                        up to data science or analytics leadership positions. Expert analysts are progressively being
                        recognised as the ones who can help switch strategy and innovation in data-driven companies.</p>
                    <p><b>Data Science</b></p>
                    <p>Data science is one of the fastest-growing and most lucrative domains in the IT industry. Most
                        organisations are on the lookout for students with a completed and certified Data Science Course
                        in Coimbatore to lead predictive insights and intelligent automation initiatives. With the right
                        background, you can work as a Data Scientist, Machine Learning Engineer, AI Specialist, Data
                        Engineer, or Data Architect, and your salary can increase very quickly with your level of
                        expertise. Students opting for the Data Science Training in Coimbatore will learn components
                        such as analytical reasoning, coding, and finding solutions for real-world problems. A thorough
                        knowledge of the Data Scientist Course in Coimbatore will not only land you an entry-level
                        position but also give you ample opportunities for growth in strategic and leadership roles.</p>
                    <p><b>Dot Net (.NET)</b></p>
                    <p>.NET remains one of the most potent and widely used frameworks for developing web, desktop, and
                        cloud applications, especially in enterprise settings. When you undergo /dotnet training, the
                        experts guide you towards a steady demand in software engineering. Through dot net training
                        online with certification, you might set your sights on .NET Developer, Software Engineer,
                        Full-Stack .NET Developer, or Cloud App Developer positions, cutting across sectors like IT
                        services, finance, healthcare, and enterprise software. This dot net course is ideal for those
                        who wish to build a career in development and prepares you well for positions that require the
                        integration of cloud services and modern architectures. By possessing the knowledge and hands-on
                        experience from a dot net developer course, you'll be able to take advantage of ample employment
                        opportunities.</p>
                    <p>Still, many specialised courses can be accessed at the best IT Training Institute in Coimbatore -
                        Monz Creative School. Utilise them before turning its late, Enquire NOW!</p>

                        <h2 className="why-heading"> <span>Conclusion</span>
                        </h2>
                        <p>Whether you’re a fresher or experienced, taking the IT Course in Coimbatore at Monz Creative School leads to high-paying roles in the country. It has excellent mentors who have many years of experience, an advanced tech campus with integration of cutting-edge tools and technologies, and lifetime career support. Take quick action if you want to utilise these outstanding benefits by enquiring now. This can assist you in securing a seat at the reputed IT Training Institute in Coimbatore, with limited availability.</p>

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
              <span>IT Training Course </span>in Coimbatore with
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
              alt="IT Lab Training"
              className="img-fluid rounded-4 shadow-sm"
            />
          </div>
          <div className="col-6">
            <img
              src="/images/animation/animation-2.jpeg"
              alt="Online IT Training"
              className="img-fluid rounded-4 shadow-sm"
            />
          </div>
          <div className="col-12 mt-3"></div>
        </div>
      </Col>

      <Col lg={6} className="ps-md-5 mt-4 mt-md-0">
        <h2 className="fw-bold mb-3">
          Become a{" "}
          <span className="head-highlight">Job-Ready IT Professional</span>
        </h2>

        <p className="text-muted mb-4">
          Learning at a leading IT training institute prepares you with
          hands-on technical skills and real-world project experience for
          today’s most in-demand IT job roles.
        </p>

        <ul className="list-unstyled job-roles-list">
          <li className="mb-2">
            <BsChatHeartFill />
            Software Developer
          </li>
          <li className="mb-2">
            <BsChatHeartFill />
            Web Developer
          </li>
          <li className="mb-2">
            <BsChatHeartFill />
            Full Stack Developer
          </li>
          <li className="mb-2">
            <BsChatHeartFill />
            Frontend Developer
          </li>
          <li className="mb-2">
            <BsChatHeartFill />
            Backend Developer
          </li>
          <li className="mb-2">
            <BsChatHeartFill />
            IT Support Engineer
          </li>
          <li className="mb-2">
            <BsChatHeartFill />
            System Administrator
          </li>
          <li className="mb-2">
            <BsChatHeartFill />
            Junior Software Engineer
          </li>
        </ul>
      </Col>
    </Row>
  </Container>
</section>


      <ItTrainingCourseTools />

      <section className="tools-section py-5">
  <div className="tools-gradient"></div>

  <div className="container text-center content">
    <h2 className="tools-heading mb-3">Tools Covered</h2>
    <p className="tools-description mb-4">
      Master industry-standard IT tools and technologies used by software
      developers and IT professionals. Gain hands-on experience with coding,
      development frameworks, databases, version control systems, and cloud
      tools to become job-ready in the IT industry.
    </p>

    <div className="row justify-content-center">
      <div className="col-6 col-sm-4 col-md-3 col-lg-2 mb-4">
        <div className="tool-card">
          <img src="/tools/html.png" alt="HTML" />
          <p>HTML</p>
        </div>
      </div>

      <div className="col-6 col-sm-4 col-md-3 col-lg-2 mb-4">
        <div className="tool-card">
          <img src="/tools/css.png" alt="CSS" />
          <p>CSS</p>
        </div>
      </div>

      <div className="col-6 col-sm-4 col-md-3 col-lg-2 mb-4">
        <div className="tool-card">
          <img src="/tools/js.png" alt="JavaScript" />
          <p>JavaScript</p>
        </div>
      </div>

      <div className="col-6 col-sm-4 col-md-3 col-lg-2 mb-4">
        <div className="tool-card">
          <img src="/tools/react.png" alt="React" />
          <p>React</p>
        </div>
      </div>

      <div className="col-6 col-sm-4 col-md-3 col-lg-2 mb-4">
        <div className="tool-card">
          <img src="/tools/node.png" alt="Node.js" />
          <p>Node.js</p>
        </div>
      </div>

      <div className="col-6 col-sm-4 col-md-3 col-lg-2 mb-4">
        <div className="tool-card">
          <img src="/tools/git.png" alt="Git" />
          <p>Git & GitHub</p>
        </div>
      </div>

      <div className="col-6 col-sm-4 col-md-3 col-lg-2 mb-4">
        <div className="tool-card">
          <img src="/tools/mysql.png" alt="MySQL" />
          <p>MySQL</p>
        </div>
      </div>

      <div className="col-6 col-sm-4 col-md-3 col-lg-2 mb-4">
        <div className="tool-card">
          <img src="/tools/linux.png" alt="Linux" />
          <p>Linux</p>
        </div>
      </div>

      <div className="col-6 col-sm-4 col-md-3 col-lg-2 mb-4">
        <div className="tool-card">
          <img src="/tools/aws.png" alt="AWS" />
          <p>Cloud Basics (AWS)</p>
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
              FAQ -  IT Training Institute in Coimbatore
            </h2>
            <Accordion defaultActiveKey="0">
              <Accordion.Item eventKey="0">
                <Accordion.Header>
                1. Can I learn an IT Course in Coimbatore without a language barrier?
                 
                </Accordion.Header>
                <Accordion.Body>
                
                Yes! At the best IT Training Institute in Coimbatore - Monz Creative School, you can conveniently learn with clear explanations and step-by-step instructions in your local language - Tamil. For other state students, our staff will support them by teaching in English.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header>
                2. Can non-IT students learn courses easily?
                </Accordion.Header>
                <Accordion.Body>
                
                Certainly! Non-IT students and freshers will develop technical and coding proficiency by learning from the very basics. Our career advisor educates them by explaining technical concepts in simple words and examples, which helps them to keep up with advanced topics.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="3">
                <Accordion.Header>
                3. Which IT Courses worth studying today?
                </Accordion.Header>
                <Accordion.Body>
                
                Among the lists, Python is 1st, Java 2nd, Data Science 3rd, Data Analysis 4th, and Cloud Computing has a huge demand in the current job market. You can either start your career by learning Python programming or any other stream and embrace long-term career growth.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="4">
                <Accordion.Header>
                4. Which is a reputed IT training institute?
                </Accordion.Header>
                <Accordion.Body>
                
                Monz Creative School is the best IT training institute who provide coaching with industry experts for 15+ high-paying yet trending courses. Anyone can start their career fresh with premium services and essential support to build a dream lifestyle.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="5">
                <Accordion.Header>
                5. Can I take the IT course flexibly?
                </Accordion.Header>
                <Accordion.Body>
               
                Yes! By joining our leading IT Training Institute in Coimbatore, it is possible to learn at your flexible time without fail. By considering learners’ difficulties, we support them in every possible aspect. For instant course fee details, do WhatsApp message or enquire by clicking on icons in the right side corner of this page.
                </Accordion.Body>
              </Accordion.Item>
             
            </Accordion>
          </Row>
        </Container>
      </section>
    </>
  );
};
export default ItTrainingCourseCoimbatore;
