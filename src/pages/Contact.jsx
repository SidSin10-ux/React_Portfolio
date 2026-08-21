
import ContactForm from "../components/ContactForm";

function Contact() {
  return (
    <div className="page container">
      <h1>Contact</h1>

      <div className="contact-layout">
        <section className="card contact-details" aria-labelledby="contact-details-heading">
          <h2 id="contact-details-heading">Reach me directly</h2>
          <p>
            <strong>Email:</strong>{" "}
            <a href="mailto:ss24csb0a72@student.nitw.ac.in">ss24csb0a72@student.nitw.ac.in</a>
          </p>
          <p>
            <strong>Phone:</strong> +91 9076606330
          </p>
          <p>
            <strong>
              <a href="https://www.linkedin.com/in/siddharth-singh-472613380" target="_blank" rel="noopener noreferrer">
                LinkedIn Profile
              </a>
            </strong>
          </p>
          <p>
            <strong>
              <a href="https://github.com/SidSin10-ux" target="_blank" rel="noopener noreferrer">
                GitHub Profile
              </a>
            </strong>
          </p>
          <p>
            <strong>Location:</strong> India
          </p>
        </section>

        <section className="card" aria-labelledby="contact-form-heading">
          <h2 id="contact-form-heading">Send a message</h2>
          <ContactForm />
        </section>
      </div>
    </div>
  );
}

export default Contact;
