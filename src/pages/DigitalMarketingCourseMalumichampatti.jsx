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
import DigitakMarketingCourseTools from "../components/DigitalMarketingCourseTools";
import { BsChatHeartFill } from "react-icons/bs";
import { FaPhoneVolume, FaWhatsapp } from "react-icons/fa";

const DigitalMarketingCourseMalumichampatti = () => {
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
              “SEO • Social Media Marketing • Performance Marketing”
            </p>
            <h1>
              <span className="highlight">Digital marketing course </span> in
              Malumichampatti
            </h1>
            <p className="vfx-subtitle">
              No.1 digital marketing training institute in Malumichampatti with
              100% placement
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
                <span>Digital Marketing Course </span>in Malumichampatti
              </h2>
              <p className="why-text">
                Choosing to emerge with the Digital Marketing Course in
                Malumichampatti at Monz Creative School helps you to discover
                the secret behind a core business strategy for brands. It not
                just leads to achieving online visibility and presence, but also
                makes a business popular in every corner of the world. Learners
                here will explore digital marketing training online and offline
                due to support everyone’s flexibility. The expert-led curriculum
                incorporates an advanced digital marketing course and current
                industry trends, such as dominating AI technologies. Training on
                core topics such as content marketing, SEO, social media
                marketing, paid advertising strategies, etc., provides an
                in-depth understanding of performance-based strategies,
                analytics-driven decisions, real-time marketing scenarios, and
                many more. It is a cool path that leads students, working
                professionals, entrepreneurs, and career switchers to
                outstanding earning and growth opportunities. To avoid missing
                the opportunity to learn here, enroll at the best Digital
                Marketing Training Institute in Malumichampatti as soon as
                possible with your effective actions.
              </p>

              <h2 className="why-heading">Achieve Your Dream Job With: </h2>
              <p> • Expert-Led Course</p>
              <p>• Job-Ready Growth</p>
              <p>• Online & Offline Learning Modes</p>
              <p>• Experienced Trainers</p>
              <p>• Project-Based Training</p>
              <p>• Affordable Courses from Diverse Streams</p>
              <p>• Get An Authorised Certificate</p>
              <p>• Career Support Continues Even After Training Completion</p>

              <h2 className="why-heading">
                Specialisations In Digital Marketing:
              </h2>
              <p>
                <b>Search Engine Optimisation:</b>
              </p>
              <p>
                Regular practice of the seo course Coimbatore lets you notice a
                visible improvement in increasing the visibility and ranking of
                websites on Google.
              </p>

              <p>
                <b>Content Marketing:</b>
              </p>
              <p>
                Explains the process of making and publishing content with
                strategies to attract a specific audience.
              </p>

              <p>
                <b>Social Media Marketing:</b>
              </p>
              <p>
                {" "}
                Comprises building brand awareness, content creation, driving
                traffic or sales, etc. By taking social media marketing courses
                with certificates, you can demonstrate your hands-on experience
                on these invaluable topics easily.
              </p>

              <p>
                <b>Pay-Per-Click (PPC):</b>
              </p>
              <p>
                An advertising method also called a fast way of getting
                visibility and bringing targeted traffic via digital platforms.
              </p>

              <p>
                <b>Email Marketing:</b>
              </p>
              <p>
                Communicating via email with identified customers in order to
                turn leads into clients, keep clients, and offer products or
                services. It is focused on personalisation, automation, and
                monitoring effectiveness.
              </p>

              <p>
                <b>Digital Analytics:</b>
              </p>
              <p>
                Students will learn how to collect and examine data to find out
                how customers use the website and how well the campaigns
                perform.
              </p>

              <p>
                <b>Conversion Rate Optimisation:</b>
              </p>
              <p>
                Through several activities, it helps to enhance website or
                landing page features to convert more visitors into customers.
              </p>

              <p>
                <b>Affiliate Marketing:</b>
              </p>
              <p>
                This is a type of marketing where the affiliates get paid for
                the sales or leads that they generate. It is a method through
                which a brand can increase its reach.
              </p>

              <p>
                <b>Influencer Marketing:</b>
              </p>
              <p>
                Awareness on certain products or services will be created with
                online influencers who have managed a great level of followers
                and maintain a trustworthy online presence.
              </p>

              <p>
                <b>Marketing Automation:</b>
              </p>
              <p>
                It is a significant creation with the ability to handle
                marketing tasks like emails, customer segmentation, and lead
                nurturing shortly with minimal manual resources and
                personalisation.
              </p>

              <h2 className="why-heading"> Upcoming Batches: </h2>
              <p>
                Multiple variations of the digital marketing classes in
                Coimbatore, such as flexible batch schedules, support different
                learning needs. Weekday batches are ideal for students and job
                seekers preferring consistent daily learning. Weekend batches
                suit working professionals balancing jobs and skill development.
                Evening batches are available for learners preferring post-work
                study hours. Morning batches support early learners seeking
                productive daily routines. Flexible timing options ensure
                learning never interrupts professional or academic commitments.
                Batch sizes remain small and even facilitate personalised
                attention for each individual.
              </p>

              <h2 className="why-heading"> Different Modes of Training:</h2>
              <p>
                At the time you can’t attend physical classroom training due to
                major complexities, you will have access to an online digital
                marketing course in Malumichampatti that is offered with
                personal trainers. Those learners by digital marketing course
                online with certificate can expand career prospects and even
                approach entrepreneurship. Offline classes are available for
                students seeking direct trainer interaction and real-time
                project exposure. Practical training focuses on hands-on
                execution using industry-relevant tools and platforms. Live
                demonstrations maximising the usability and optimisation of
                real-time campaign setup. Each training mode emphasises applied
                learning rather than passive theory sessions. These training
                formats are featured to meet varied learning preferences and
                career goals.
              </p>

              <h2 className="why-heading"> Trainer Profile:</h2>
              <p>
                Highly experienced industry professionals will deliver a digital
                marketing course for beginners and working professionals based
                on their level of relevant industry knowledge. They regularly
                update content based on current market trends and bring
                practical insights rather than textbook-based teaching methods.
                Students receive mentorship, career guidance, and performance
                feedback. Mentors’ coaching simplifies complex concepts through
                real-life examples and emphasises skill mastery and confidence
                building. For any other digital marketing course details, visit
                Monz Creative School in Malumichampatti directly or contact us
                by phone immediately that leads to better clarity.
              </p>

              <h2 className="why-heading">
                
                The Best Digital Marketing Course in Malumichampatti -
                <span>Inspires Learning:</span>
              </h2>
              <p>
                As the best institute for digital marketing - Monz Creative
                School in Malumichampatti, the syllabus might encompasses latest
                industry requirements and hiring standards. From basic to
                master's level program follows a structured learning path that
                elaborates fundamentals, core concepts and advanced strategies.
                Regular assessments ensure consistent skill evaluation and
                improvement. Hands-on assignments strengthen practical
                understanding of marketing tools and offer the discovery of
                real-world business challenges. Interactive sessions increase
                discussion, problem-solving, and creative thinking ability
                consistently.
              </p>

              <h2 className="why-heading">Digital Marketing Certification:</h2>
              <p>
                You can stand out with the best digital marketing certification
                and enhanced professional credibility in competitive job
                markets. It is a solid asset that allows leading employers or
                hiring professionals will be able to validate your practical
                skills and conceptual understanding quickly. This is why
                employers value certified professionals with hands-on project
                exposure. It is proof of your commitment to this domain and
                strengthens LinkedIn profiles or resumes for better visibility
                among thousands of young talents. Certified candidates often
                receive priority during interviews, so join the famous Digital
                Marketing Institute in Coimbatore - Monz Creative School for
                acquiring invaluable knowledge. The certification supports
                career transitions into digital marketing roles. It also
                benefits entrepreneurs managing their own digital campaigns.
              </p>

              <h2 className="why-heading">
                Placement Training & Job Opportunities:{" "}
              </h2>
              <p>
                Dedicated expert support from the Digital Marketing Training
                Institute in Malumichampatti focuses on preparing students by
                equipping them with ample potential to crack any toughest
                interviews. By taking the digital marketing course with
                placement assistance here, you can deliver stellar performance
                through mock interviews and communication skills also improve
                profoundly over time. Students receive guidance on job portals
                and application strategies that maximise chances of attending
                top-tier firms’ interviews.
              </p>

              <h2 className="why-heading">
                Careers in Digital Marketing Course:{" "}
              </h2>
              <p>• SEO Specialist </p>
              <p>• Performance Marketing Manager </p>
              <p>• Social Media Marketing Manager</p>
              <p>• Digital Marketing Manager </p>
              <p>• Content Marketing Strategist </p>
              <p>• Marketing Automation Specialist </p>
              <p>• E-commerce Marketing Manager </p>
              <p>• Freelance Digital Marketer </p>

              <h2 className="why-heading"><span>Summary</span></h2>
              <p>
                Everyone needs to pursue the Digital Marketing Course in
                Malumichampatti to obtain career-focused, practical-oriented
                professional training. Students gain hands-on experience with
                real marketing tools and AI-powered marketing techniques.
                Certification and placement assistance strengthen employment
                prospects. Whether you seek job-oriented or entrepreneurial
                career paths, registering at this leading Digital Marketing
                Training Institute in Malumichampatti - Monz Creative School can
                lead you towards your goal.
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
              <span>Digital Marketing Course </span>in Malumichampatti with
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
                    alt="Digital Marketing Training"
                    className="img-fluid rounded-4 shadow-sm"
                  />
                </div>
                <div className="col-6">
                  <img
                    src="/images/animation/animation-2.jpeg"
                    alt="Online Digital Marketing Class"
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
                  Job-Ready Digital Marketer
                </span>
              </h2>

              <p className="text-muted mb-4">
                Our dedicated Digital Marketing training program in Coimbatore
                equips you with hands-on skills, real-time tools, and industry
                strategies to confidently step into today’s most in-demand
                digital roles. Kickstart your career as:
              </p>

              <ul className="list-unstyled job-roles-list">
                <li className="mb-2">
                  <BsChatHeartFill /> Digital Marketing Executive
                </li>
                <li className="mb-2">
                  <BsChatHeartFill /> SEO Specialist
                </li>
                <li className="mb-2">
                  <BsChatHeartFill /> Social Media Manager
                </li>
                <li className="mb-2">
                  <BsChatHeartFill /> Performance Marketing Executive
                </li>
                <li className="mb-2">
                  <BsChatHeartFill /> Google Ads Specialist
                </li>
                <li className="mb-2">
                  <BsChatHeartFill /> Content Marketing Strategist
                </li>
                <li className="mb-2">
                  <BsChatHeartFill /> Email Marketing Specialist
                </li>
                <li className="mb-2">
                  <BsChatHeartFill /> Brand & Campaign Manager
                </li>
                <li className="mb-2">
                  <BsChatHeartFill /> Marketing Automation Executive
                </li>
                <li className="mb-2">
                  <BsChatHeartFill /> Digital Marketing Analyst
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
            Master industry-leading Digital Marketing tools used by
            professionals worldwide. Learn SEO, paid advertising, analytics,
            content strategy, and automation tools to build real campaigns and
            become job-ready in the digital marketing industry.
          </p>

          <div className="row justify-content-center">
            <div className="col-6 col-sm-4 col-md-3 col-lg-2 mb-4">
              <div className="tool-card">
                <img src="/tools/google-ads.png" alt="Google Ads" />
                <p>Google Ads</p>
              </div>
            </div>

            <div className="col-6 col-sm-4 col-md-3 col-lg-2 mb-4">
              <div className="tool-card">
                <img src="/tools/ga4.png" alt="Google Analytics 4" />
                <p>Google Analytics 4</p>
              </div>
            </div>

            <div className="col-6 col-sm-4 col-md-3 col-lg-2 mb-4">
              <div className="tool-card">
                <img
                  src="/tools/search-console.png"
                  alt="Google Search Console"
                />
                <p>Search Console</p>
              </div>
            </div>

            <div className="col-6 col-sm-4 col-md-3 col-lg-2 mb-4">
              <div className="tool-card">
                <img src="/tools/meta-ads.png" alt="Meta Ads" />
                <p>Meta Ads</p>
              </div>
            </div>

            <div className="col-6 col-sm-4 col-md-3 col-lg-2 mb-4">
              <div className="tool-card">
                <img src="/tools/semrush.png" alt="SEMrush" />
                <p>SEMrush</p>
              </div>
            </div>
            <div className="col-6 col-sm-4 col-md-3 col-lg-2 mb-4">       
              <div className="tool-card">
                <img src="/tools/ahrefs.png" alt="Ahrefs" />
                <p>Ahrefs</p>
              </div>
            </div>

            <div className="col-6 col-sm-4 col-md-3 col-lg-2 mb-4">
              <div className="tool-card">
                <img src="/tools/canva.png" alt="Canva" />
                <p>Canva</p>
              </div>
            </div>

            <div className="col-6 col-sm-4 col-md-3 col-lg-2 mb-4">
              <div className="tool-card">
                <img src="/tools/mailchimp.png" alt="Mailchimp" />
                <p>Mailchimp</p>
              </div>
            </div>

            <div className="col-6 col-sm-4 col-md-3 col-lg-2 mb-4">
              <div className="tool-card">
                <img src="/tools/hootsuite.png" alt="Hootsuite" />
                <p>Hootsuite</p>
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
              FAQ - Digital marketing Course in Malumichampatti
            </h2>
            <Accordion defaultActiveKey="0">
              <Accordion.Item eventKey="0">
                <Accordion.Header>
                  1. How much should I pay for a Digital Marketing Course?
                </Accordion.Header>
                <Accordion.Body>
                  As the Digital Marketing Course in Malumichampatti fees
                  structure remains affordable, you are assured to secure a job
                  in the currently booming field. Thereby, join the Digital
                  Marketing course in Malumichampatti as soon as possible to
                  access the best education.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header>
                  2. How many days will the Digital Marketing Course consume?
                </Accordion.Header>
                <Accordion.Body>
                  Whether you choose a regular or weekend program decides the
                  duration of the best digital marketing training in Coimbatore,
                  so be clear with your choice. Learning at a reputed
                  institution allows you to finish it shortly with comprehensive
                  insight.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="3">
                <Accordion.Header>
                  3. Am I eligible for the Digital Marketing Course?
                </Accordion.Header>
                <Accordion.Body>
                  Categories like fresh graduates, students, entrepreneurs, and
                  business owners can take this course. Local people by simply
                  enabling digital marketing course near me get directions to
                  reach Monz Creative School in Malumichampatti instantly.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="4">
                <Accordion.Header>
                  4. What is the income of a digital marketing professional?
                  online?
                </Accordion.Header>
                <Accordion.Body>
                  Freshers or novice to the industry starting their career with
                  a good package. However, the right coaching from industry
                  experts is the foundation for everything, so start your
                  journey with the best seo training institute in Coimbatore
                  that leads to great earnings.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="5">
                <Accordion.Header>
                  5. Which specialisation in Digital Marketing has significant
                  pay?
                </Accordion.Header>
                <Accordion.Body>
                  Especially, areas like SEO, data analytics, marketing
                  automation, and PPC have amazing pay. Learn about them with
                  in-depth practice at the leading Digital Marketing Training
                  Institute in Malumichampatti and grow as a proficient in the
                  field.
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

export default DigitalMarketingCourseMalumichampatti;
