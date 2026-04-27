import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row } from "react-bootstrap";

export default function JewelleryCadCourseTools() {
  return (
    <section className="course-coverage-section py-5">
      <Container>
        <Row>
          <div className="text-center mb-4">
            <h2 className="fw-bold">
              <span className="head-highlight">Course Coverage</span> – Jewellery
              CAD Design Tools & Skills
            </h2>
            <p className="text-muted">
              Master professional jewellery CAD design skills used in the gold,
              diamond, and luxury jewellery industry. Learn 3D modelling,
              rendering, stone setting, and production-ready design workflows.
            </p>
          </div>

          {/* ---------- Course 1 ---------- */}
          <div className="course-coverage-card rounded-4 shadow-sm p-4">
            <div className="row align-items-center">
              <div className="col-md-6 text-center mb-4 mb-md-0">
                <img
                  src="/images/jewellery/certified-jewellery-cad.webp"
                  alt="Jewellery CAD Certification Course"
                  className="img-fluid rounded-4 course-image"
                />
              </div>

              <div className="col-md-6">
                <h4 className="fw-bold mb-2">
                  CERTIFIED JEWELLERY CAD DESIGNER (3 Months)
                </h4>
                <p className="fw-semibold text-secondary mb-3">
                  Learn the fundamentals of jewellery CAD design, 3D modelling,
                  and basic rendering techniques.
                </p>

                <div className="d-flex flex-wrap gap-3 mb-4">
                  <div className="tool-box text-center">
                    <img src="/tools/rhino.png" alt="Rhino" width="40" height="40" />
                    <p className="fw-semibold mt-2 mb-0">Rhino</p>
                  </div>

                  <div className="tool-box text-center">
                    <img
                      src="/tools/matrix.png"
                      alt="Matrix"
                      width="40"
                      height="40"
                    />
                    <p className="fw-semibold mt-2 mb-0">Matrix</p>
                  </div>

                  <div className="tool-box text-center">
                    <img
                      src="/tools/zbrush.png"
                      alt="ZBrush"
                      width="40"
                      height="40"
                    />
                    <p className="fw-semibold mt-2 mb-0">ZBrush</p>
                  </div>

                  <div className="tool-box text-center">
                    <img
                      src="/tools/keyshot.png"
                      alt="KeyShot"
                      width="40"
                      height="40"
                    />
                    <p className="fw-semibold mt-2 mb-0">KeyShot</p>
                  </div>

                  <div className="tool-box text-center">
                    <img
                      src="/tools/photoshop.png"
                      alt="Photoshop"
                      width="40"
                      height="40"
                    />
                    <p className="fw-semibold mt-2 mb-0">Photoshop</p>
                  </div>
                </div>

                <p className="text-secondary">
                  Perfect for beginners entering the jewellery design field.
                  Learn ring, pendant, and earring modelling along with basic
                  stone settings and presentation renders.
                </p>
              </div>
            </div>
          </div>

          {/* ---------- Course 2 ---------- */}
          <div className="course-coverage-card mt-5 rounded-4 shadow-sm p-4">
            <div className="row align-items-center">
              <div className="col-md-6 text-center mb-4 mb-md-0">
                <img
                  src="/images/jewellery/masters-jewellery-cad.webp"
                  alt="Advanced Jewellery CAD Course"
                  className="img-fluid rounded-4 course-image"
                />
              </div>

              <div className="col-md-6">
                <h4 className="fw-bold mb-2">
                  MASTER IN JEWELLERY CAD & PRODUCT DESIGN (6 Months)
                </h4>
                <p className="fw-semibold text-secondary mb-3">
                  Advanced jewellery modelling, complex stone settings, high-end
                  rendering, and manufacturing-ready CAD designs.
                </p>

                <div className="d-flex flex-wrap gap-3 mb-4">
                  <div className="tool-box text-center">
                    <img
                      src="/tools/matrixgold.png"
                      alt="MatrixGold"
                      width="40"
                      height="40"
                    />
                    <p className="fw-semibold mt-2 mb-0">MatrixGold</p>
                  </div>

                  <div className="tool-box text-center">
                    <img
                      src="/tools/rhino.png"
                      alt="Rhino Advanced"
                      width="40"
                      height="40"
                    />
                    <p className="fw-semibold mt-2 mb-0">Advanced Rhino</p>
                  </div>

                  <div className="tool-box text-center">
                    <img
                      src="/tools/zbrush.png"
                      alt="ZBrush Advanced"
                      width="40"
                      height="40"
                    />
                    <p className="fw-semibold mt-2 mb-0">Advanced ZBrush</p>
                  </div>

                  <div className="tool-box text-center">
                    <img
                      src="/tools/keyshot.png"
                      alt="Rendering"
                      width="40"
                      height="40"
                    />
                    <p className="fw-semibold mt-2 mb-0">Photoreal Rendering</p>
                  </div>

                  <div className="tool-box text-center">
                    <img
                      src="/tools/printing.png"
                      alt="3D Printing"
                      width="40"
                      height="40"
                    />
                    <p className="fw-semibold mt-2 mb-0">3D Printing Prep</p>
                  </div>
                </div>

                <p className="text-secondary">
                  Designed for professional jewellery designers aiming for
                  high-end CAD roles. Work on real client-style projects,
                  production accuracy, export-ready files, and portfolio
                  development.
                </p>
              </div>
            </div>
          </div>
        </Row>
      </Container>
    </section>
  );
}
