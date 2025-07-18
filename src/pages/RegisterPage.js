
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const styles = {
  page: {
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: 'var(--color-bg-alt)',
  },
  card: {
    width: 400,
    padding: 36,
    borderRadius: 'var(--radius)',
    boxShadow: 'var(--shadow)',
    background: 'var(--color-card)',
    border: '1px solid var(--color-border)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  title: {
    marginBottom: 24,
    fontWeight: 700,
    fontSize: 22,
    color: 'var(--color-text)',
    letterSpacing: 1,
    fontFamily: 'var(--font-main)',
  },
  formRow: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: 18,
    width: '100%',
  },
  label: {
    flex: '0 0 130px',
    marginRight: 10,
    fontWeight: 500,
    color: 'var(--color-text)',
    fontFamily: 'var(--font-main)',
    fontSize: 15,
    textAlign: 'right',
  },
  input: {
    flex: 1,
    padding: 12,
    borderRadius: 'var(--radius)',
    border: '1.5px solid var(--color-border)',
    fontSize: 16,
    outline: 'none',
    transition: 'border 0.2s, box-shadow 0.2s',
    boxSizing: 'border-box',
    background: 'var(--color-bg)',
    color: 'var(--color-text)',
  },
  button: {
    width: '100%',
    padding: '12px 0',
    borderRadius: 'var(--radius)',
    background: 'var(--color-primary)',
    color: 'var(--color-bg)',
    border: 'none',
    fontWeight: 600,
    fontSize: 17,
    cursor: 'pointer',
    marginTop: 8,
    marginBottom: 8,
    transition: 'background 0.2s, opacity 0.2s',
    boxShadow: 'var(--shadow)',
  },
  error: {
    color: '#e53935',
    background: '#fff6f6',
    borderRadius: 4,
    padding: '8px 0',
    marginBottom: 12,
    width: '100%',
    textAlign: 'center',
    fontWeight: 500,
    fontSize: 15,
  },
  link: {
    color: 'var(--color-primary)',
    textDecoration: 'none',
    fontWeight: 500,
    transition: 'color 0.18s',
    fontSize: 14,
    marginTop: 8,
  },
};

const RegisterPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !password || !confirmPassword) {
      setError('Please fill in all fields.');
      return;
    }
    if (password !== confirmPassword) {
      setError('Passwords do not match.');
      return;
    }
    setError('');
    setSubmitted(true);
  };

  return (
    <div style={styles.page}>
      <div style={styles.card}>
        <div style={styles.title}>Register</div>
        {error && <div style={styles.error}>{error}</div>}
        {submitted ? (
          <div style={{ ...styles.error, color: '#388e3c', background: '#e8f5e9' }}>
            Registration successful! (demo only)
          </div>
        ) : (
          <form onSubmit={handleSubmit} style={{ width: '100%' }} aria-label="Register form">
            <div style={styles.formRow}>
              <label htmlFor="email" style={styles.label}>Email:</label>
              <input
                id="email"
                type="email"
                value={email}
                required
                aria-required="true"
                aria-label="Email address"
                onChange={e => setEmail(e.target.value)}
                style={styles.input}
                autoComplete="username"
              />
            </div>
            <div style={styles.formRow}>
              <label htmlFor="password" style={styles.label}>Password:</label>
              <input
                id="password"
                type="password"
                value={password}
                required
                aria-required="true"
                aria-label="Password"
                onChange={e => setPassword(e.target.value)}
                style={styles.input}
                autoComplete="new-password"
              />
            </div>
            <div style={styles.formRow}>
              <label htmlFor="confirmPassword" style={styles.label}>Confirm Password:</label>
              <input
                id="confirmPassword"
                type="password"
                value={confirmPassword}
                required
                aria-required="true"
                aria-label="Confirm password"
                onChange={e => setConfirmPassword(e.target.value)}
                style={styles.input}
                autoComplete="new-password"
              />
            </div>
            <button type="submit" style={styles.button} aria-label="Register">
              Register
            </button>
          </form>
        )}
        <Link to="/login" style={styles.link}>Already have an account? Login</Link>
      </div>
    </div>
  );
};

export default RegisterPage;
