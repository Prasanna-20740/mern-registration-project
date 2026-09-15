import { useState } from "react";
import "./App.css";

function App() {
  const [status, setStatus] = useState("idle"); // idle, loading, success, error
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());

    try {
      const response = await fetch("http://localhost:5000/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (response.ok && result.success !== false) {
        setStatus("success");
      } else {
        setStatus("error");
        setErrorMessage(result.message || "Registration failed. Please try again.");
      }
    } catch (error) {
      setStatus("error");
      setErrorMessage("Network error. Please check backend connection.");
    }
  };

  return (
    <div className="app-shell">
      {/* Background Decorative Ambient Glows */}
      <div className="ambient-glow glow-1"></div>
      <div className="ambient-glow glow-2"></div>

      {/* Top Professional Navbar */}
      <header className="navbar">
        <div className="navbar-container">
          <div className="brand">
            <div className="brand-logo">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
              </svg>
            </div>
            <div className="brand-text">
              <span className="brand-name">EduPortal</span>
              <span className="brand-sub">Academic Cloud</span>
            </div>
          </div>

          <div className="nav-right">
            <span className="verified-chip">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              </svg>
              SSL 256-Bit Encrypted
            </span>
            <div className="status-badge">
              <span className="status-dot"></span> System Live
            </div>
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="main-content">
        <div className="content-container">
          {/* Left Column: Brand Hero & Trust Badges */}
          <div className="hero-side">
            <div className="hero-badge">
              <span className="badge-sparkle">✨</span> Institutional Enrollment Portal
            </div>
            <h1 className="hero-title">
              Empowering the next generation of <span className="gradient-text">leaders</span>.
            </h1>
            <p className="hero-subtitle">
              Seamlessly enroll students into the unified academic network. Fast, reliable, and verified directly with the institutional registry.
            </p>

            <div className="feature-list">
              <div className="feature-item">
                <div className="feature-icon">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </div>
                <div>
                  <h4>Instant Database Sync</h4>
                  <p>Real-time record registration into the MongoDB campus database.</p>
                </div>
              </div>

              <div className="feature-item">
                <div className="feature-icon">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                    <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                  </svg>
                </div>
                <div>
                  <h4>Secure Record Retention</h4>
                  <p>Strict privacy compliance safeguarding student personal identifiable information.</p>
                </div>
              </div>

              <div className="feature-item">
                <div className="feature-icon">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"></circle>
                    <polyline points="12 6 12 12 16 14"></polyline>
                  </svg>
                </div>
                <div>
                  <h4>Automated Roll Verification</h4>
                  <p>Smart class and roll index indexing for duplicate prevention.</p>
                </div>
              </div>
            </div>

            <div className="trust-stats">
              <div className="stat">
                <span className="stat-num">99.9%</span>
                <span className="stat-label">System Uptime</span>
              </div>
              <div className="stat-separator"></div>
              <div className="stat">
                <span className="stat-num">10k+</span>
                <span className="stat-label">Active Records</span>
              </div>
              <div className="stat-separator"></div>
              <div className="stat">
                <span className="stat-num">&lt; 150ms</span>
                <span className="stat-label">API Latency</span>
              </div>
            </div>
          </div>

          {/* Right Column: Registration Card */}
          <div className="form-side">
            {status === "success" ? (
              <div className="card success-card">
                <div className="success-icon-wrapper">
                  <svg className="checkmark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52">
                    <circle className="checkmark-circle" cx="26" cy="26" r="25" fill="none" />
                    <path className="checkmark-check" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8" />
                  </svg>
                </div>
                <h2>Registration Confirmed!</h2>
                <p className="success-desc">
                  The student profile has been created and synced with the university database.
                </p>
                <div className="success-actions">
                  <button
                    type="button"
                    className="submit-btn"
                    onClick={() => {
                      setStatus("idle");
                      setErrorMessage("");
                    }}
                  >
                    Enroll Another Student
                  </button>
                </div>
              </div>
            ) : (
              <div className="card form-card">
                <div className="form-header">
                  <div className="form-title-row">
                    <h2>Student Registration</h2>
                    <span className="form-step-badge">Live Form</span>
                  </div>
                  <p>Fill out the official academic record fields below.</p>
                </div>

                {status === "error" && (
                  <div className="error-alert" role="alert">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="alert-icon">
                      <circle cx="12" cy="12" r="10" />
                      <line x1="12" y1="8" x2="12" y2="12" />
                      <line x1="12" y1="16" x2="12.01" y2="16" />
                    </svg>
                    <span>{errorMessage}</span>
                  </div>
                )}

                <form onSubmit={handleSubmit}>
                  {/* Full Name */}
                  <div className="form-group">
                    <label htmlFor="name">
                      Full Legal Name <span className="required">*</span>
                    </label>
                    <div className="input-wrap">
                      <svg className="input-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                        <circle cx="12" cy="7" r="4" />
                      </svg>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        placeholder="e.g. Alexander Mitchell"
                        required
                        disabled={status === "loading"}
                      />
                    </div>
                  </div>

                  {/* Roll No + Class */}
                  <div className="form-group row">
                    <div className="col">
                      <label htmlFor="rollNo">
                        Roll Number <span className="required">*</span>
                      </label>
                      <div className="input-wrap">
                        <svg className="input-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <rect x="4" y="4" width="16" height="16" rx="2" />
                          <line x1="9" y1="9" x2="15" y2="9" />
                          <line x1="9" y1="13" x2="15" y2="13" />
                          <line x1="9" y1="17" x2="13" y2="17" />
                        </svg>
                        <input
                          type="text"
                          id="rollNo"
                          name="rollNo"
                          placeholder="e.g. 1042"
                          required
                          disabled={status === "loading"}
                        />
                      </div>
                    </div>
                    <div className="col">
                      <label htmlFor="class">
                        Class / Division <span className="required">*</span>
                      </label>
                      <div className="input-wrap">
                        <svg className="input-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
                          <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
                        </svg>
                        <input
                          type="text"
                          id="class"
                          name="class"
                          placeholder="e.g. Grade 10 - B"
                          required
                          disabled={status === "loading"}
                        />
                      </div>
                    </div>
                  </div>

                  {/* School Name */}
                  <div className="form-group">
                    <label htmlFor="schoolname">
                      Institution / School Name <span className="required">*</span>
                    </label>
                    <div className="input-wrap">
                      <svg className="input-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M3 21h18M5 21V7l8-4v18M13 21V3l6 3v15" />
                      </svg>
                      <input
                        type="text"
                        id="schoolname"
                        name="schoolname"
                        placeholder="e.g. St. Xavier International Academy"
                        required
                        disabled={status === "loading"}
                      />
                    </div>
                  </div>

                  {/* Phone + Email */}
                  <div className="form-group row">
                    <div className="col">
                      <label htmlFor="phone">
                        Contact Phone <span className="required">*</span>
                      </label>
                      <div className="input-wrap">
                        <svg className="input-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                        </svg>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          placeholder="+1 (555) 019-2834"
                          required
                          disabled={status === "loading"}
                        />
                      </div>
                    </div>
                    <div className="col">
                      <label htmlFor="email">
                        Official Email <span className="required">*</span>
                      </label>
                      <div className="input-wrap">
                        <svg className="input-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                          <polyline points="22,6 12,13 2,6" />
                        </svg>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          placeholder="student@academy.edu"
                          required
                          disabled={status === "loading"}
                        />
                      </div>
                    </div>
                  </div>

                  {/* Address */}
                  <div className="form-group">
                    <label htmlFor="address">
                      Permanent Address <span className="required">*</span>
                    </label>
                    <div className="input-wrap textarea-wrap">
                      <svg className="input-icon textarea-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                        <circle cx="12" cy="10" r="3" />
                      </svg>
                      <textarea
                        id="address"
                        name="address"
                        placeholder="Street address, residential block, city, postal code"
                        required
                        disabled={status === "loading"}
                        rows={3}
                      ></textarea>
                    </div>
                  </div>

                  <button type="submit" className="submit-btn" disabled={status === "loading"}>
                    {status === "loading" ? (
                      <span className="btn-spinner-content">
                        <span className="spinner"></span> Registering into Database...
                      </span>
                    ) : (
                      <span className="btn-text-content">
                        Register Student Record
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                          <line x1="5" y1="12" x2="19" y2="12"></line>
                          <polyline points="12 5 19 12 12 19"></polyline>
                        </svg>
                      </span>
                    )}
                  </button>
                </form>
              </div>
            )}
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <p>© 2026 EduPortal Technologies. Academic Enrollment Infrastructure.</p>
          <div className="footer-tags">
            <span>• Encrypted Data Transmission</span>
            <span>• MongoDB Multi-cluster</span>
            <span>• ISO/IEC 27001</span>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;