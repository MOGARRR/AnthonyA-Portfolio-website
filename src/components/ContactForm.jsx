import React, { useState } from "react";
import "../styles/ContactForm.css";

const ContactForm = () => {
  return (
    <div id="contactForm" className="md:mt-20 mt-10 md:ml-0 ml-12 text-stone-50 w-9/12">
      <h1 className="md:text-4xl text-3xl mb-5 border-b-2 border-stone-500">
        Get in touch with me!{" "}
      </h1>

      <form
        className="text-2xl"
        action="https://submit-form.com/wuftZxvEz"
        method="POST"
        target="_blank"
      >
        <div className="form-div">
          <input type="hidden" name="_append" value="false" />
          <label for="name">Full name:</label>
          <br />
          <input
            className="form-area mt-1 rounded-md p-2 md:w-3/12 "
            type="text"
            id="name"
            name="name"
            placeholder="Your Name"
            required
          />
        </div>
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
    </div>
  );
};

export default ContactForm;
