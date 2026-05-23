"use client";

import { useState } from "react";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [comments, setComments] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email || !comments) return;

    // Simulate form submission
    setSubmitted(true);
  };

  return (
    <div style={{ borderTop: "2px dashed var(--border-color)", paddingTop: "32px", marginTop: "12px" }}>
      <h2 style={{ fontSize: '24px', marginBottom: '8px', color: 'var(--peach-text)' }}>⚠️ Takedown Request</h2>
      <p style={{ color: 'var(--text-secondary)', marginBottom: '24px', fontSize: '14px', lineHeight: '1.5' }}>
        We respect intellectual property rights. If you believe that any image featured on our platform violates your copyright or trademark, please fill out the form below detailing the specific coloring sheet name/URL. We will review and immediately take down any violating materials within 24–48 hours.
      </p>

      {submitted ? (
        <div className="alert-success">
          <span style={{ fontSize: '20px' }}>✅</span>
          <div>
            <strong style={{ fontSize: '16px', display: 'block' }}>Thank you for your message!</strong>
            <p style={{ fontSize: '13px', color: 'var(--sage-text)', marginTop: '4px', lineHeight: '1.4' }}>
              Your request has been successfully queued. Our administration team will review your comments and take action within 24-48 hours.
            </p>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="contact-form">
          <div className="form-group">
            <label htmlFor="name" className="form-label">Full Name</label>
            <input
              type="text"
              id="name"
              className="form-input"
              placeholder="Enter your full name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="email" className="form-label">Email Address</label>
            <input
              type="email"
              id="email"
              className="form-input"
              placeholder="Enter your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="comments" className="form-label">Comments / Details of the Violation</label>
            <textarea
              id="comments"
              className="form-textarea"
              placeholder="Please provide the exact name or URL of the coloring page, along with proof or details of copyright ownership so we can take immediate action."
              value={comments}
              onChange={(e) => setComments(e.target.value)}
              required
            />
          </div>

          <button type="submit" className="form-submit-btn">
            Submit Request
          </button>
        </form>
      )}
    </div>
  );
}
