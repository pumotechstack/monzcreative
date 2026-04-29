import { useState } from "react";
import { Button, Modal } from "react-bootstrap";

const EnquiryModal = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    setLoading(true);

    const formData = new FormData(e.target);

    fetch("https://script.google.com/macros/s/AKfycbzChgMHQ5CSjvCHHuxgAmLZk4WhRMQQe9Zo5Yj-GwXWX9GWtaUYb5YQ2WkvTHY0gd-VOg/exec", {
      method: "POST",
      body: formData
    })
      .then((res) => {
        window.location = "/thank-you";
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  };

  return (
    <>
      <Button className="course_card_btn" onClick={handleShow}>
        Enquire Now
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
        </Modal.Header>

        <Modal.Body>
          <h4 className="popup-title"><span className="red_color">Wait! Before you go,</span> </h4>
          <h5 className="popup-title">Here is a 30% Discount.</h5>

          <p className="popup-subtitle">in your Course Fee</p>

          <form className="popup-form" onSubmit={handleSubmit}>

            <input
              type="text"
              name="Name"
              placeholder="Enter Your Full Name"
              required
            />

            <input
              type="email"
              name="Email"
              placeholder="Email Address"
              required
            />

            <input
              type="tel"
              name="Phone Number"
              placeholder="Mobile Number"
              required
            />

            <input
              type="text"
              name="Course"
              placeholder="Enter Your Desired Course"
              required
            />

            <select name="Branch" required>
              <option value="">Select Branch</option>
              <option value="Coimbatore - Gandhipuram">Coimbatore - Gandhipuram</option>
              <option value="Coimbatore - Malumichampatti">Coimbatore - Malumichampatti</option>
              <option value="Coimbatore - Saravanampatti">Coimbatore - Saravanampatti</option>
              <option value="Coimbatore - Thudiyalur">Coimbatore - Thudiyalur</option>
              <option value="Tiruppur">Tiruppur</option>
              <option value="Chennai - Vadapalani">Chennai - Vadapalani</option>
              <option value="Chennai - Poonamallee">Chennai - Poonamallee</option>
              <option value="Chennai - Ambattur">Chennai - Ambattur</option>
              <option value="Chennai - Velachery">Chennai - Velachery</option>
              <option value="Chennai - Tambaram">Chennai - Tambaram</option>
              <option value="Chennai - Guduvancheri">Chennai - Guduvancheri</option>
              <option value="Bangalore - Marathahalli">Bangalore - Marathahalli</option>
              <option value="Bangalore - Bommasandra">Bangalore - Bommasandra</option>
              <option value="Hosur">Hosur</option>
            </select>

            <button className="popup-submit" type="submit" disabled={loading}>
              {loading ? (
                <>
                  <span className="spinner"></span> Submitting...
                </>
              ) : (
                "Submit"
              )}
            </button>

          </form>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default EnquiryModal;