import React, { useState } from 'react';
import './LeadForm.css';

const initialState = {
  name: '',
  email: '',
  company: '',
  message: '',
};

const LeadForm = () => {
  const [formData, setFormData] = useState(initialState);
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [agreedToTerms, setAgreedToTerms] = useState(false);

  const validate = (field, value) => {
    switch (field) {
      case 'name':
        if (!value.trim()) return 'Name is required';
        break;
      case 'email':
        if (!value) return 'Email is required';
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
          return 'Invalid email address';
        }
        break;
      default:
        return '';
    }
    return '';
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    if (!touched[name]) {
      setTouched((prev) => ({ ...prev, [name]: true }));
    }
    const errMsg = validate(name, value);
    setErrors((prev) => ({ ...prev, [name]: errMsg }));
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === 'checkbox') {
      if (name === 'agreeTerms') {
        setAgreedToTerms(checked);
      }
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }

    if (touched[name] || errors[name]) {
      const errMsg = validate(name, value);
      setErrors((prev) => ({ ...prev, [name]: errMsg }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitSuccess(false);
    setErrors({});

    const currentErrors = {};
    Object.keys(formData).forEach((field) => {
      const errMsg = validate(field, formData[field]);
      if (errMsg) currentErrors[field] = errMsg;
    });

    const allTouched = Object.keys(formData).reduce((acc, key) => {
      acc[key] = true;
      return acc;
    }, {});
    setTouched(allTouched);

    if (Object.keys(currentErrors).length === 0) {
      setIsSubmitting(true);
      setErrors({});

      try {
        const response = await fetch('http://localhost:5000/submit-lead', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ ...formData, agreedToTerms }),
        });

        const result = await response.json();
        setIsSubmitting(false);

        if (response.ok) {
          console.log('Form Data Submitted to Backend:', result.data_sent || result.message);
          setSubmitSuccess(true);
          setFormData(initialState);
          setAgreedToTerms(false);
          setTouched({});
          setTimeout(() => setSubmitSuccess(false), 4000);
        } else {
          console.error('Backend Error:', result.error || result.errors);
          if (result.errors) {
            setErrors(result.errors);
          } else {
            setErrors({ _general: result.error || "Submission failed. Please try again." });
          }
        }
      } catch (error) {
        console.error('Network or other error:', error);
        setIsSubmitting(false);
        setErrors({ _general: "Could not connect to the server. Please check your connection and try again." });
      }
    } else {
      setErrors(currentErrors);
      console.log("Client-side validation errors:", currentErrors);
    }
  };

  return (
    <form className="modern-lead-form" onSubmit={handleSubmit} autoComplete="off">
      <h2 className="modern-title">🚀 Get Started</h2>

      {errors._general && (
        <div
          className="form-field-error"
          style={{
            backgroundColor: '#f8d7da', color: '#721c24',
            padding: '0.75rem 1.25rem', marginBottom: '1rem',
            border: '1px solid #f5c6cb', borderRadius: '0.25rem',
            textAlign: 'center',
          }}
        >
          {errors._general}
        </div>
      )}

      {submitSuccess && (
        <div className="modern-success">Thank you! We'll contact you soon.</div>
      )}

      <div className="form-field-group">
        <label htmlFor="name" className="form-field-label">Name *</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          onBlur={handleBlur}
          className={`form-field-input ${touched.name && errors.name ? 'is-invalid' : ''}`}
          placeholder="Enter your name"
          aria-invalid={!!errors.name}
          aria-describedby={errors.name ? "nameError" : undefined}
        />
        {touched.name && errors.name && <span id="nameError" className="form-field-error">{errors.name}</span>}
      </div>

      <div className="form-field-group">
        <label htmlFor="email" className="form-field-label">Email Address *</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          onBlur={handleBlur}
          className={`form-field-input ${touched.email && errors.email ? 'is-invalid' : ''}`}
          placeholder="Enter email"
          aria-invalid={!!errors.email}
          aria-describedby={errors.email ? "emailError" : "emailHelp"}
        />
        {touched.email && errors.email && <span id="emailError" className="form-field-error">{errors.email}</span>}
        {!errors.email && <small id="emailHelp" className="form-field-helper">We'll never share your email with anyone else.</small>}
      </div>

      <div className="form-field-group">
        <label htmlFor="company" className="form-field-label">Company</label>
        <input
          type="text"
          id="company"
          name="company"
          value={formData.company}
          onChange={handleChange}
          onBlur={handleBlur}
          className={`form-field-input ${touched.company && errors.company ? 'is-invalid' : ''}`}
          placeholder="Your company (optional)"
        />
      </div>

      <div className="form-field-group">
        <label htmlFor="message" className="form-field-label">Message</label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          onBlur={handleBlur}
          className={`form-field-input ${touched.message && errors.message ? 'is-invalid' : ''}`}
          rows={3}
          placeholder="Your message (optional)"
        />
      </div>

      <div className="form-field-group form-check-group">
        <input
          type="checkbox"
          id="agreeTerms"
          name="agreeTerms"
          checked={agreedToTerms}
          onChange={handleChange}
          className="form-check-input"
        />
        <label htmlFor="agreeTerms" className="form-check-label">
          I agree to the <a href="/terms-example" target="_blank" rel="noopener noreferrer">terms and conditions</a>
        </label>
      </div>

      <button type="submit" className="form-submit-btn" disabled={isSubmitting}>
        {isSubmitting ? 'Submitting...' : 'Submit'}
      </button>
    </form>
  );
};

export default LeadForm;
