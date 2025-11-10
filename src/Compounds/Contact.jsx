import React from 'react';
import './Contact.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Contact() {
  const [result, setResult] = React.useState("");
  const [useBackend, setUseBackend] = React.useState(false); // 👈 toggle here

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);
    formData.append("access_key", "958cb44d-780b-4ed7-bdc5-3a1fac6129e5");

    try {
      let response;
      if (useBackend) {
        // 👉 Send to your backend
        response = await fetch("http://localhost:5000/contact", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            name: formData.get("name"),
            email: formData.get("email"),
            message: formData.get("message"),
          }),
        });
      } else {
        // 👉 Send to Web3Forms
        response = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          body: formData,
        });
      }

      const data = await response.json();

      if (data.success) {
        setResult("");
        toast.success("Form Submitted Successfully");
        event.target.reset();
      } else {
        console.error("Error", data);
        toast.error(data.message || "Submission failed!");
        setResult(data.message);
      }
    } catch (error) {
      console.error("Network Error:", error);
      toast.error("Something went wrong. Please try again.");
      setResult("Failed to send message.");
    }
  };

  return (
    <div id="contact">
      <h1 className="Contact">Contact<span className="us"> Me</span></h1>
      <p className="quote">
        "Let’s build something amazing together! Feel free to reach out — whether it’s a question, a project, or just a hello."
      </p>

      {/* 👇 Toggle Switch */}
      <div style={{ marginBottom: "10px" }}>
        <label>
          <input
            type="checkbox"
            checked={useBackend}
            onChange={() => setUseBackend(!useBackend)}
          />
          Use My Backend Instead of Web3Forms
        </label>
      </div>

      <form className="contact-form" onSubmit={onSubmit}>
        <input type="text" name="name" placeholder="Your Name" required />
        <input type="email" name="email" placeholder="Your Email" required />
        <textarea name="message" rows="5" placeholder="Your Message" required></textarea>
        <button type="submit">{result ? result : "Send Message"}</button>
      </form>

      <ToastContainer />
    </div>
  );
}

export default Contact;
