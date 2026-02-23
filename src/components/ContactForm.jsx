import React, { useState } from "react";
import "../styles/ContactForm.css";

const ContactForm = () => {
  const [status, setStatus] = useState("");
  const [sent, setSent] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    const response = await fetch("https://formspree.io/f/xeelpqqg", {
      method: "POST",
      body: formData,
      headers: { Accept: "application/json" },
    });

    if (response.ok) {
      setSent(true);
      setStatus("Thanks you for the message! I’ll get back to you soon.");
    } else {
      setStatus("Oh no! Something went wrong!.");
    }
  };
  return (
    <div
      id="contactForm"
      className="md:mt-20 mt-10 md:ml-0 ml-12 text-stone-50 w-9/12"
    >
      <h1 className="section-title md:text-4xl text-3xl mb-5 border-b-2 border-stone-500">
        Get in touch with me!{" "}
      </h1>
      {!sent && (
        <form className="text-2xl" onSubmit={handleSubmit}>
          <div className="form-div">
            <label for="email">Email:</label>
            <br />
            <input
              className="form-area mt-1 rounded-md p-2 md:w-3/12"
              type="email"
              id="email"
              name="email"
              placeholder="Your Email"
              required
            />{" "}
            <br />
          </div>
          <div className="form-div">
            <label for="message">Message:</label>
            <br />
            <textarea
              className="form-area mt-1 rounded-md p-2 md:w-3/12 w-11/12 h-36"
              name="message"
              id="message"
              placeholder="Leave me a message! "
              required
            ></textarea>
          </div>
          <br />
          <button
            type="submit"
            className="form-btn border-2 border-stone-500 p-3 rounded-full md:w-3/12 w-10/12 mt-3"
          >
            Submit
          </button>
        </form>
      )}
      {status && <p className=" text-2xl">{status}</p>}
    </div>
  );
};

export default ContactForm;
