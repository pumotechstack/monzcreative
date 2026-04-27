import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row } from "react-bootstrap";

export default function ITTrainingCourseTools() {
  return (
    <section className="course-coverage-section py-5">
      <Container>
        <Row>
          <div className="text-center mb-4">
            <h2 className="fw-bold">
              <span className="head-highlight">Course Coverage</span> – IT Tools &
              Skills You’ll Master
            </h2>
            <p className="text-muted">
              Learn industry-relevant IT skills including programming,
              full-stack development, databases, cloud fundamentals, and modern
              development tools. Build strong technical foundations and become
              job-ready for today’s IT industry.
            </p>
          </div>

          {/* ---------- Course 1 ---------- */}
          <div className="course-coverage-card rounded-4 shadow-sm p-4">
            <div className="row align-items-center">
              <div className="col-md-6 text-center mb-4 mb-md-0">
                <img
                  src="/images/animation/certified-animation.webp"
                  alt="IT Certification Course"
                  className="img-fluid rounded-4 course-image"
                />
              </div>

              <div className="col-md-6">
                <h4 className="fw-bold mb-2">
                  CERTIFIED IT PROFESSIONAL (3 Months)
                </h4>
                <p className="fw-semibold text-secondary mb-3">
                  Learn essential IT tools and technologies used in real-world
                  software development and support roles.
                </p>

                <div className="d-flex flex-wrap gap-3 mb-4">
                  <div className="tool-box text-center">
                    <img src="/tools/html.png" alt="HTML" width="40" height="40" />
                    <p className="fw-semibold mt-2 mb-0">HTML</p>
                  </div>

                  <div className="tool-box text-center">
                    <img src="/tools/css.png" alt="CSS" width="40" height="40" />
                    <p className="fw-semibold mt-2 mb-0">CSS</p>
                  </div>

                  <div className="tool-box text-center">
                    <img
                      src="/tools/js.png"
                      alt="JavaScript"
                      width="40"
                      height="40"
                    />
                    <p className="fw-semibold mt-2 mb-0">JavaScript</p>
                  </div>

                  <div className="tool-box text-center">
                    <img
                      src="/tools/git.png"
                      alt="Git"
                      width="40"
                      height="40"
                    />
                    <p className="fw-semibold mt-2 mb-0">Git & GitHub</p>
                  </div>

                  <div className="tool-box text-center">
                    <img
                      src="/tools/vscode.png"
                      alt="VS Code"
                      width="40"
                      height="40"
                    />
                    <p className="fw-semibold mt-2 mb-0">VS Code</p>
                  </div>

                  <div className="tool-box text-center">
                    <img
                      src="/tools/mysql.png"
                      alt="MySQL"
                      width="40"
                      height="40"
                    />
                    <p className="fw-semibold mt-2 mb-0">MySQL</p>
                  </div>
                </div>

                <p className="text-secondary">
                  Ideal for beginners looking to start a career in IT. Learn
                  programming basics, web fundamentals, version control, and
                  database concepts to step into entry-level IT roles.
                </p>
              </div>
            </div>
          </div>

          {/* ---------- Course 2 ---------- */}
          <div className="course-coverage-card mt-5 rounded-4 shadow-sm p-4">
            <div className="row align-items-center">
              <div className="col-md-6 text-center mb-4 mb-md-0">
                <img
                  src="/images/animation/masters-animation.jpg"
                  alt="Advanced IT Course"
                  className="img-fluid rounded-4 course-image"
                />
              </div>

              <div className="col-md-6">
                <h4 className="fw-bold mb-2">
                  MASTER IN SOFTWARE & IT TECHNOLOGIES (6 Months)
                </h4>
                <p className="fw-semibold text-secondary mb-3">
                  Gain advanced skills in full-stack development, backend
                  technologies, cloud basics, and real-world project workflows.
                </p>

                <div className="d-flex flex-wrap gap-3 mb-4">
                  <div className="tool-box text-center">
                    <img
                      src="/tools/react.png"
                      alt="React"
                      width="40"
                      height="40"
                    />
                    <p className="fw-semibold mt-2 mb-0">React</p>
                  </div>

                  <div className="tool-box text-center">
                    <img
                      src="/tools/node.png"
                      alt="Node.js"
                      width="40"
                      height="40"
                    />
                    <p className="fw-semibold mt-2 mb-0">Node.js</p>
                  </div>

                  <div className="tool-box text-center">
                    <img
                      src="/tools/php.png"
                      alt="PHP"
                      width="40"
                      height="40"
                    />
                    <p className="fw-semibold mt-2 mb-0">PHP</p>
                  </div>

                  <div className="tool-box text-center">
                    <img
                      src="/tools/mysql.png"
                      alt="Database"
                      width="40"
                      height="40"
                    />
                    <p className="fw-semibold mt-2 mb-0">Database Management</p>
                  </div>

                  <div className="tool-box text-center">
                    <img
                      src="/tools/aws.png"
                      alt="AWS"
                      width="40"
                      height="40"
                    />
                    <p className="fw-semibold mt-2 mb-0">Cloud Basics</p>
                  </div>

                  <div className="tool-box text-center">
                    <img
                      src="/tools/linux.png"
                      alt="Linux"
                      width="40"
                      height="40"
                    />
                    <p className="fw-semibold mt-2 mb-0">Linux</p>
                  </div>

                  <div className="tool-box text-center">
                    <img
                      src="/tools/docker.png"
                      alt="Docker"
                      width="40"
                      height="40"
                    />
                    <p className="fw-semibold mt-2 mb-0">Docker</p>
                  </div>
                </div>

                <p className="text-secondary">
                  Designed for learners aiming for software developer, full-stack
                  developer, or IT engineer roles. Work on real-time projects,
                  deployment workflows, and industry-level coding practices.
                </p>
              </div>
            </div>
          </div>
        </Row>
      </Container>
    </section>
  );
}
