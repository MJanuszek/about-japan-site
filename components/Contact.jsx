import React, { useState } from "react";
import "../styles/contact.scss";
import Navigation from "./Navigation";
import Footer from "./Footer";

function Contact() {
  const [message, setMessage] = useState("");
  const [isSend, setIsSend] = useState(false);
  const [error, setError] = useState("");

  function handleSubmitMessage(e) {
    e.preventDefault();
    console.log("message", message);
  }

  return (
    <>
      <Navigation />
      <div className="contact-page">
        <form className="contact-form" onSubmit={handleSubmitMessage}>
          <input
            className="name-input"
            type="text"
            required
            placeholder="Name"
          />
          <textarea
            placeholder="Your message..."
            className="textarea"
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          ></textarea>
          <button className="form-btn" type="submit">
            Wyślij
          </button>
        </form>
      </div>
      <Footer />
    </>
  );
}

export default Contact;
