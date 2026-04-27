import { useState } from "react";
import { Modal } from "react-bootstrap";

const EnquiryModal = ({ show, handleClose, modalType }) => {
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    setLoading(true);

    const formData = new FormData(e.target);

    // 👉 extra tracking (optional)
    formData.append("Form Type", modalType);

    fetch(
      "https://script.google.com/macros/s/AKfycbzChgMHQ5CSjvCHHuxgAmLZk4WhRMQQe9Zo5Yj-GwXWX9GWtaUYb5YQ2WkvTHY0gd-VOg/exec",
      {
        method: "POST",
        body: formData,
      }
    )
      .then(() => {
        window.location = "/thank-you";
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  };

  return (
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Header closeButton></Modal.Header>

      <Modal.Body>
        <h4 className="popup-title">
          <span className="red_color">Wait! Before you go,</span>
        </h4>

        <h5 className="popup-title">Here is a 20% Discount.</h5>
        <p className="popup-subtitle">in your Course Fee</p>

        <form className="popup-form" onSubmit={handleSubmit}>
          <input type="text" name="Name" placeholder="Enter Your Full Name" required />

          <input type="email" name="Email" placeholder="Email Address" required />

          <input type="tel" name="Phone Number" placeholder="Mobile Number" required />

          <input type="text" name="Course" placeholder="Enter Your Desired Course" required />

          <select name="Branch" required>
            <option value="">Select Branch</option>
            <option value="Coimbatore - Gandhipuram">Coimbatore - Gandhipuram</option>
            <option value="Coimbatore - Malumichampatti">Coimbatore - Malumichampatti</option>
            <option value="Coimbatore - Saravanampatti">Coimbatore - Saravanampatti</option>
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
  );
};

export default EnquiryModal;