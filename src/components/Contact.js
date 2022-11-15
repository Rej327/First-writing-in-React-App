import emailjs from "emailjs-com";
import React from "react";

export default function ContactUs() {
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_40mptef",
        "template_54mqla4",
        e.target,
        "FSbjMbFNlJOLGuiuP"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  }

  return (
    <div>
      <div className="container">
        <form onSubmit={sendEmail}>
          <div className="section">
            <div className="box">
              <input
                type="text"
                className="form"
                placeholder="Name"
                name="name"
              />
            </div>
            <div className="box">
              <input
                type="email"
                className="form"
                placeholder="Email Address"
                name="email"
              />
            </div>
            <div className="box">
              <input
                type="text"
                className="form"
                placeholder="Subject"
                name="subject"
              />
            </div>
            <div className="box">
              <textarea
                className="form"
                id=""
                cols="30"
                rows="8"
                placeholder="Your message"
                name="message"
              ></textarea>
            </div>
            <div className="box">
              <input
                type="submit"
                className="button"
                value="Send Message"
              ></input>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
