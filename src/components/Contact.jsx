import React from "react";

const Contact = () => (
  <section className="contact">
    <h3>Contact</h3>
    <form
      onSubmit={(e) => {
        e.preventDefault();
        alert("Thank you for reaching out!");
      }}
    >
      <div>
        <input type="text" placeholder="Your Name" required />
      </div>
      <div>
        <input type="email" placeholder="Your Email" required />
      </div>
      <div>
        <textarea placeholder="Your Message" required rows={4} />
      </div>
      <button type="submit">Send</button>
    </form>
  </section>
);

export default Contact;