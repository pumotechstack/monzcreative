import React, { useState } from "react";
import "../App.css";
import { Row } from "react-bootstrap";
import { FaWhatsapp, FaPhoneAlt } from "react-icons/fa";

export default function BranchAccordion() {
  const branches = [
    {
      state: "Coimbatore",
      cities: [
        {
          name: "Gandhipuram",
          address:
            "401-A, GES Complex, Second Floor, 7th Street, Gandhipuram, Coimbatore - 641012",
          phone: "8925871588",
          whatsapp: "8925871588",
          countryCode: "91",
          mapLink:
            "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.2565020349157!2d76.96358120964221!3d11.01937178909927",
        },
        {
          name: "Saravanampatti",
          address:
            "Indian Bank Building, Sathy Road West, Saravanampatti, Coimbatore - 641035",
          phone: "8925871588",
          whatsapp: "8925871588",
          countryCode: "91",
          mapLink:
            "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3915.5561977985985!2d76.99925550964313!3d11.071862489049954",
        },
        {
          name: "Malumichampatti",
          address:
            "S.No.4P, Indhira Nagar, Malumichampatti, Coimbatore - 641050",
          phone: "9843337779",
          whatsapp: "9843337779",
          countryCode: "91",
          mapLink:
            "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3917.7904513199373!2d76.99610850964014!3d10.903523989208203",
        },
      ],
    },
    {
      state: "Chennai",
      cities: [
        {
          name: "Vadapalani",
          address:
            "#13, Doshi Garden (3rd Floor), No.174, Arcot Road, Vadapalani, Chennai - 600026",
          phone: "9080706050",
          whatsapp: "9080706050",
          countryCode: "91",
          mapLink:
            "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.3219",
        },
        {
          name: "Velachery",
          address:
            "No 14, 1st Floor, Vee Jay Tower, Velachery Bypass Rd, Chennai - 600042",
          phone: "8489591801",
          whatsapp: "8489591801",
          countryCode: "91",
          mapLink:
            "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.903198564255",
        },
        {
          name: "Tambaram",
          address:
            "#23, 2nd Floor, Rajaji Road, Near Girias, Tambaram West, Chennai - 600045",
          phone: "9940211129",
          whatsapp: "9940211129",
          countryCode: "91",
          mapLink:
            "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.685868082643",
        },
        {
          name: "Poonamallee",
          address:
            "222, First Floor, Poojaa Diamond Anandam, Poonamallee High Road, Chennai - 600056",
          phone: "8667542372",
          whatsapp: "8667542372",
          countryCode: "91",
          mapLink:
            "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.83858476291",
        },
        {
          name: "Ambattur",
          address:
            "235A, Tiny Sector, Industrial Estate South, Ambattur, Chennai - 600018",
          phone: "9003201270",
          whatsapp: "9003201270",
          countryCode: "91",
          mapLink:
            "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.0113487713015",
        },
      ],
    },
    {
      state: "Tiruppur",
      cities: [
        {
          name: "Tiruppur",
          address:
            "BMW Towers, Bungalow Stop, Opp RK Residency, Murungapalayam, Tiruppur - 641602",
          phone: "9363039367",
          whatsapp: "9363039367",
          countryCode: "91",
          mapLink:
            "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3914.9894829047134",
        },
      ],
    },
    {
      state: "Bangalore",
      cities: [
        {
          name: "Marathahalli",
          address:
            "SY No 88, Outer Ring Road, Opp More Megastore, Marathahalli, Bangalore - 560037",
          phone: "8904708555",
          whatsapp: "8904708555",
          countryCode: "91",
          mapLink:
            "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3243.1513530727443",
        },
        {
          name: "Bommasandra",
          address: "Bommasandra Industrial Area, Bangalore",
          phone: "8904708555",
          whatsapp: "8904708555",
          countryCode: "91",
          mapLink:
            "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3243.1513530727443",
        },
      ],
    },
    {
      state: "Hosur",
      cities: [
        {
          name: "Hosur",
          address:
            "KK Towers, 1st Floor, Commercial Street, Vaishnavi Nagar, Hosur - 635109",
          phone: "9361531823",
          whatsapp: "9361531823",
          countryCode: "91",
          mapLink:
            "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3243.1513530727443",
        },
      ],
    },
    {
      state: "Dubai",
      cities: [
        {
          name: "Dubai",
          address: "Al Karama, Zabeel Building, Dubai",
          phone: "557233850",
          whatsapp: "557233850",
          countryCode: "971",
          mapLink:
            "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3243.1513530727443",
        },
      ],
    },
  ];

  const [selectedState, setSelectedState] = useState(branches[0].state);
  const [selectedCity, setSelectedCity] = useState(
    branches[0].cities[0].name
  );

  const currentState = branches.find((b) => b.state === selectedState);

  return (
    <section className="overflow-hidden">
      <Row>
        <div className="branch-accordion">
          <h2 className="branches-accord-headding">
            Monz Creative School Branches
          </h2>
          <p className="branches-accord-p">Where You Can Find Us</p>

          {/* STATE TABS */}
          <div className="state-tabs">
            {branches.map((b) => (
              <button
                key={b.state}
                className={b.state === selectedState ? "active" : ""}
                onClick={() => {
                  setSelectedState(b.state);
                  setSelectedCity(b.cities[0].name);
                }}
              >
                {b.state}
              </button>
            ))}
          </div>

          {/* CITY TABS */}
          <div className="city-tabs">
            {currentState.cities.map((city) => (
              <button
                key={city.name}
                className={city.name === selectedCity ? "active" : ""}
                onClick={() => setSelectedCity(city.name)}
              >
                {city.name}
              </button>
            ))}
          </div>

          {/* BRANCH CARD */}
          <div className="branch-details">
            {currentState.cities.map(
              (city) =>
                city.name === selectedCity && (
                  <div key={city.name} className="branch-card">
                    <div className="branch-left">
                      <h3>{city.name}</h3>
                      <p className="branch-address">{city.address}</p>

                      <div className="branch-buttons">
                        <a
                          href={`https://wa.me/${city.countryCode}${city.whatsapp}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn-whatsapp"
                        >
                          <FaWhatsapp />
                          <span>
                            +{city.countryCode} {city.whatsapp}
                          </span>
                        </a>

                        <a
                          href={`tel:+${city.countryCode}${city.phone}`}
                          className="btn-call"
                        >
                          <FaPhoneAlt />
                          <span>
                            +{city.countryCode} {city.phone}
                          </span>
                        </a>
                      </div>
                    </div>

                    <div className="branch-right">
                      <iframe
                        src={city.mapLink}
                        width="100%"
                        height="300"
                        style={{ border: 0, borderRadius: "12px" }}
                        loading="lazy"
                        title="Google Map"
                      ></iframe>
                    </div>
                  </div>
                )
            )}
          </div>
        </div>
      </Row>
    </section>
  );
}
