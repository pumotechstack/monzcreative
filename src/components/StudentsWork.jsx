
import { Container, Row } from "react-bootstrap";

import "bootstrap/dist/css/bootstrap.min.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "../homepage.css";

export default function HomePage() {


  const topLogos = [
    "/companies-logo/1.svg",
    "/companies-logo/2.svg",
    "/companies-logo/3.svg",
    "/companies-logo/4.svg",
    "/companies-logo/5.svg",
    "/companies-logo/6.svg",
    "/companies-logo/7.svg",
    "/companies-logo/8.svg",
    "/companies-logo/9.svg",
    "/companies-logo/10.svg"
  ];

  const bottomLogos = [
    "/companies-logo/21.svg",
    "/companies-logo/22.svg",
    "/companies-logo/11.svg",
    "/companies-logo/12.svg",
    "/companies-logo/13.svg",
    "/companies-logo/14.svg",
    "/companies-logo/15.svg",
    "/companies-logo/16.svg",
    "/companies-logo/17.svg",
    "/companies-logo/20.svg"

  ];

  return (
    <>


      <section className="students-work-parallax-section">
        <div className="students-work-bg"></div>

        <Container className="text-center">
          <Row className="students-work-marquee-row">
            <h2 className="students-work-heading">Where Our Students Work</h2>
          </Row>
        </Container>

        <Row className="students-work-marquee-row">
          <div className="students-work-marquee">
            <div className="students-work-marquee-group">
              {topLogos.map((src, index) => (
                <div className="students-work-logo-card" key={index}>
                  <img src={src} alt={`Company ${index + 1}`} />
                </div>      
              ))}
            </div>
            <div className="students-work-marquee-group" aria-hidden="true">
              {topLogos.map((src, index) => (
                <div className="students-work-logo-card" key={index + 20}>
                  <img src={src} alt={`Company ${index + 1}`} />
                </div>
              ))}
            </div>
          </div>
        </Row>



        <Row className="students-work-marquee-row reverse">
          <div className="students-work-marquee reverse">
            <div className="students-work-marquee-group reverse">
              {bottomLogos.map((src, index) => (
                <div className="students-work-logo-card" key={index + 40}>
                  <img src={src} alt={`Company ${index + 1}`} />
                </div>
              ))}
            </div>
            <div
              className="students-work-marquee-group reverse"
              aria-hidden="true"
            >
              {bottomLogos.map((src, index) => (
                <div className="students-work-logo-card" key={index + 60}>
                  <img src={src} alt={`Company ${index + 1}`} />
                </div>
              ))}
            </div>
          </div>
        </Row>
      </section>


    </>
  );
}
