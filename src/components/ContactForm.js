"use client";

import { useState } from "react";

export default function ContactForm() {
  // Image Request Form State
  const [requestDescription, setRequestDescription] = useState("");
  const [requestSubmitted, setRequestSubmitted] = useState(false);

  // Takedown Request Form State
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [comments, setComments] = useState("");
  const [takedownSubmitted, setTakedownSubmitted] = useState(false);

  const handleRequestSubmit = (e) => {
    e.preventDefault();
    if (!requestDescription) return;
    // Simulate image request submission
    setRequestSubmitted(true);
  };

  const handleTakedownSubmit = (e) => {
    e.preventDefault();
    if (!name || !email || !comments) return;
    // Simulate copyright takedown submission
    setTakedownSubmitted(true);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
      
      {/* 1. Request a Coloring Page Form */}
      <div>
        <h2 style={{ fontSize: '24px', marginBottom: '8px', color: 'var(--sage-text)', display: 'flex', alignItems: 'center', gap: '8px' }}>
          <span>🎨</span> Request a Coloring Page
        </h2>
        <p style={{ color: 'var(--text-secondary)', marginBottom: '24px', fontSize: '14px', lineHeight: '1.5' }}>
          Have a great idea for a coloring sheet? Describe the subject or theme you'd love to color (e.g., a magical library, animals playing musical instruments, chibi castles), and our royal artists will generate and add it to our archive!
        </p>

        {requestSubmitted ? (
          <div className="alert-success" style={{ backgroundColor: 'var(--sage-bg)', color: 'var(--sage-text)' }}>
            <span style={{ fontSize: '20px' }}>✅</span>
            <div>
              <strong style={{ fontSize: '16px', display: 'block' }}>Drawing Request Received!</strong>
              <p style={{ fontSize: '13px', marginTop: '4px', lineHeight: '1.4' }}>
                Your idea has been added to our scroll of request prompts. Keep an eye on our homepage or trending catalog to see your creation come to life!
              </p>
            </div>
          </div>
        ) : (
          <form onSubmit={handleRequestSubmit} className="contact-form">
            <div className="form-group">
              <label htmlFor="requestDescription" className="form-label">What coloring page would you like to see?</label>
              <textarea
                id="requestDescription"
                className="form-textarea"
                placeholder="Describe your coloring page idea in detail (e.g. a cute baby panda eating bamboo, a highly detailed gothic cathedral...)"
                value={requestDescription}
                onChange={(e) => setRequestDescription(e.target.value)}
                required
              />
            </div>

            <button type="submit" className="form-submit-btn">
              Submit Request
            </button>
          </form>
        )}
      </div>

      <div style={{ borderTop: "2px dashed var(--border-color)", padding: "10px 0" }} />

      {/* 2. Copyright Takedown Request Form */}
      <div>
        <h2 style={{ fontSize: '24px', marginBottom: '8px', color: 'var(--peach-text)', display: 'flex', alignItems: 'center', gap: '8px' }}>
          <span>⚠️</span> Takedown Request
        </h2>
        <p style={{ color: 'var(--text-secondary)', marginBottom: '24px', fontSize: '14px', lineHeight: '1.5' }}>
          We respect intellectual property rights. If you believe that any image featured on our platform violates your copyright or trademark, please fill out the form below detailing the specific coloring sheet name/URL. We will review and immediately take down any violating materials within 24–48 hours.
        </p>

        {takedownSubmitted ? (
          <div className="alert-success" style={{ backgroundColor: 'var(--peach-bg)', color: 'var(--peach-text)', borderColor: 'rgba(201, 110, 62, 0.2)' }}>
            <span style={{ fontSize: '20px' }}>✅</span>
            <div>
              <strong style={{ fontSize: '16px', display: 'block' }}>Takedown Request Queued</strong>
              <p style={{ fontSize: '13px', marginTop: '4px', lineHeight: '1.4' }}>
                Your request has been successfully queued. Our administration team will review your comments and take action within 24-48 hours.
              </p>
            </div>
          </div>
        ) : (
          <form onSubmit={handleTakedownSubmit} className="contact-form">
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

    </div>
  );
}
