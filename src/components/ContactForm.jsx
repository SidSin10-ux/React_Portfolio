// src/components/ContactForm.jsx
//
// A fully controlled form: every input's value comes from state
// (formData) and every keystroke updates that state through onChange.
// A second piece of state, "errors", tracks validation messages per field.

import { useState } from "react";

const initialFormData = { name: "", email: "", message: "" };

// Simple, readable email check - good enough for client-side validation.
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
  // Piece of state #1: the controlled input values.
  const [formData, setFormData] = useState(initialFormData);
  // Piece of state #2: validation error messages, keyed by field name.
  const [errors, setErrors] = useState({});
  // Piece of state #3: whether the form has been submitted successfully.
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    const nextFormData = { ...formData, [name]: value };
    setFormData(nextFormData);
    // Re-validate live so error messages clear as soon as the user fixes them.
    setErrors(validate(nextFormData));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const validationErrors = validate(formData);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      // No backend is required for this assignment - we just confirm success.
      setSubmitted(true);
      setFormData(initialFormData);
    }
  };

  // The submit button stays disabled until all three fields pass validation.
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

      {submitted && (
        <p className="form-success" role="status">
          Thanks for reaching out! Your message has been noted (no backend is connected in
          this assignment, so nothing is actually sent).
        </p>
      )}
    </form>
  );
}

export default ContactForm;
