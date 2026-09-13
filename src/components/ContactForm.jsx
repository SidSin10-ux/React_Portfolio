import { useState } from "react";

const initialFormData = { name: "", email: "", message: "" };

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validate(formData) {
  const errors = {};

  if (!formData.name.trim()) {
    errors.name = "Name cannot be empty.";
  }

  if (!formData.email.trim()) {
    errors.email = "Email cannot be empty.";
  } else if (!EMAIL_PATTERN.test(formData.email.trim())) {
    errors.email = "Please enter a valid email address.";
  }

  if (!formData.message.trim()) {
    errors.message = "Message cannot be empty.";
  }

  return errors;
}

function ContactForm() {
  const [formData, setFormData] = useState(initialFormData);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    const nextFormData = { ...formData, [name]: value };
    setFormData(nextFormData);
    setErrors(validate(nextFormData));
  };
  const [serverError, setServerError] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setServerError(null);
    setSubmitted(false);

    const validationErrors = validate(formData);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      try {
        const response = await fetch("http://localhost:5000/api/contact", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: formData.name.trim(),
            email: formData.email.trim(),
            message: formData.message.trim(),
          }),
        });

        if (!response.ok) {
          const errData = await response.json();
          throw new Error(errData.error || "Failed to submit");
        }

        setSubmitted(true);
        setFormData(initialFormData);
      } catch (err) {
        setServerError(err.message);
      }
    }
  };

  const isValid =
    formData.name.trim() && formData.email.trim() && formData.message.trim() &&
    Object.keys(validate(formData)).length === 0;

  return (
    <form className="contact-form" onSubmit={handleSubmit} noValidate>
      <div className="form-group">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Your name"
          value={formData.name}
          onChange={handleChange}
          aria-invalid={Boolean(errors.name)}
          aria-describedby={errors.name ? "name-error" : undefined}
        />
        {errors.name && (
          <p className="form-error" id="name-error">
            {errors.name}
          </p>
        )}
      </div>

      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Your email"
          value={formData.email}
          onChange={handleChange}
          aria-invalid={Boolean(errors.email)}
          aria-describedby={errors.email ? "email-error" : undefined}
        />
        {errors.email && (
          <p className="form-error" id="email-error">
            {errors.email}
          </p>
        )}
      </div>

      <div className="form-group">
        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          name="message"
          rows="5"
          placeholder="Your message"
          value={formData.message}
          onChange={handleChange}
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? "message-error" : undefined}
        />
        {errors.message && (
          <p className="form-error" id="message-error">
            {errors.message}
          </p>
        )}
      </div>

      <button type="submit" className="btn btn-primary btn-submit" disabled={!isValid}>
        Send Message
      </button>
      {serverError && (
        <p className="form-error" role="alert" style={{ color: "red", marginTop: "1rem" }}>
          Server Error: {serverError}
        </p>
      )}

      {submitted && (
        <p className="form-success" role="status">
          Thanks for reaching out! Your message has been successfully submitted to the server.
        </p>
      )}
    </form>
  );
}

export default ContactForm;
