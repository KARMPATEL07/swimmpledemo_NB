import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../Styles/SessionForm.css";
import { ToastContainer, toast } from "react-toastify";

function AppointmentForm() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  const [swimmerName, setSwimmerName] = useState("");
  const [swimmerNumber, setSwimmerNumber] = useState("");
  const [swimmerGender, setSwimmerGender] = useState("default");
  const [appointmentTime, setAppointmentTime] = useState("");
  const [preferredMode, setPreferredMode] = useState("default");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formErrors, setFormErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate form inputs
    const errors = {};
    if (!swimmerName.trim()) {
      errors.swimmerName = "Swimmer name is required";
    } else if (swimmerName.trim().length < 8) {
      errors.swimmerName = "Swimmer name must be at least 8 characters";
    }

    if (!swimmerNumber.trim()) {
      errors.swimmerNumber = "Swimmer phone number is required";
    } else if (swimmerNumber.trim().length !== 10) {
      errors.swimmerNumber = "Swimmer phone number must be of 10 digits";
    }

    if (swimmerGender === "default") {
      errors.swimmerGender = "Please select swimmer gender";
    }
    if (!appointmentTime) {
      errors.appointmentTime = "Appointment time is required";
    } else {
      const selectedTime = new Date(appointmentTime).getTime();
      const currentTime = new Date().getTime();
      if (selectedTime <= currentTime) {
        errors.appointmentTime = "Please select a future appointment time";
      }
    }
    if (preferredMode === "default") {
      errors.preferredMode = "Please select preferred mode";
    }

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    // Reset form fields and errors after successful submission
    setSwimmerName("");
    setSwimmerNumber("");
    setSwimmerGender("default");
    setAppointmentTime("");
    setPreferredMode("default");
    setFormErrors({});

    toast.success("Appointment Scheduled !", {
      position: toast.POSITION.TOP_CENTER,
      onOpen: () => setIsSubmitted(true),
      onClose: () => setIsSubmitted(false),
    });
  };

  return (
    <div className="appointment-form-section">
      <h1 className="legal-siteTitle">
        <Link to="/"><img src="https://swimmpledemo.netlify.app/assets/logomain.png" alt="Swimmple" className="navbar-logo" />
        </Link>
      </h1>

      <div className="form-container">
        <h2 className="form-title">
          <span>Book Session Online</span>
        </h2>

        <form className="form-content" onSubmit={handleSubmit}>
          <label>
              Your Full Name:
            <input
              type="text"
              value={swimmerName}
              onChange={(e) => setSwimmerName(e.target.value)}
              required
            />
            {formErrors.swimmerName && <p className="error-message">{formErrors.swimmerName}</p>}
          </label>

          <br />
          <label>
            Phone Number:
            <input
              type="text"
              value={swimmerNumber}
              onChange={(e) => setSwimmerNumber(e.target.value)}
              required
            />
            {formErrors.swimmerNumber && <p className="error-message">{formErrors.swimmerNumber}</p>}
          </label>

          <br />
          <label>
             Gender:
            <select
              value={swimmerGender}
              onChange={(e) => setSwimmerGender(e.target.value)}
              required
            >
              <option value="default">Select</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="private">Rather not to say</option>
            </select>
            {formErrors.swimmerGender && <p className="error-message">{formErrors.swimmerGender}</p>}
          </label>

          <br />
          <label>
            Preferred Session Time:
            <input
              type="datetime-local"
              value={appointmentTime}
              onChange={(e) => setAppointmentTime(e.target.value)}
              required
            />
            {formErrors.appointmentTime && <p className="error-message">{formErrors.appointmentTime}</p>}
          </label>

          <br />
          {/* <label>
            Preferred Mode:
            <select
              value={preferredMode}
              onChange={(e) => setPreferredMode(e.target.value)}
              required
            >
              <option value="default">Select</option>
              <option value="video">Video Call</option>
            </select>
            {formErrors.preferredMode && <p className="error-message">{formErrors.preferredMode}</p>}
          </label> */}

          <br />
          <button type="submit" className="text-appointment-btn">
            Confirm Session
          </button>

          <p className="success-message" style={{display: isSubmitted ? "block" : "none"}}>Session details has been sent to the swimmers phone number via SMS.</p>
        </form>
      </div>

      <div className="legal-footer">
        <p>© 2013-2023 Swimmple. All rights reserved.</p>
      </div>

      <ToastContainer autoClose={5000} limit={1} closeButton={false} />
    </div>
  );
}

export default AppointmentForm;
