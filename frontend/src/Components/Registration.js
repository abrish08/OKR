import React, { useState, useRef } from 'react';
import axios from 'axios';
import './Registration.css'; // We'll create this CSS file

const Registration = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    profilePic: null,
    previewUrl: '',
  });

  const [message, setMessage] = useState({ text: '', type: '' });
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const fileInputRef = useRef(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData((prev) => ({
          ...prev,
          profilePic: file,
          previewUrl: reader.result,
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  const triggerFileSelect = () => {
    fileInputRef.current.click();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = new FormData();
    form.append('name', formData.name);
    form.append('email', formData.email);
    form.append('password', formData.password);
    if (formData.profilePic) {
      form.append('profilePic', formData.profilePic);
    }

    try {
      setLoading(true);
      setMessage({ text: '', type: '' });
      const response = await axios.post(
        'http://localhost:5000/api/register',
        form,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        }
      );

      setMessage({
        text: `🎉 Registration successful! Welcome ${response.data.user.name}`,
        type: 'success',
      });
      // Reset form on success
      setFormData({
        name: '',
        email: '',
        password: '',
        profilePic: null,
        previewUrl: '',
      });
    } catch (error) {
      setMessage({
        text: error.response?.data?.message || 'Error registering user',
        type: 'error',
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="registration-container">
      <div className="registration-card">
        <h1 className="registration-title">Create Your Account</h1>
        <p className="registration-subtitle">Join our community today</p>

        <form
          onSubmit={handleSubmit}
          encType="multipart/form-data"
          className="registration-form"
        >
          <div className="form-group">
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="form-input"
              placeholder=" "
            />
            <label htmlFor="name" className="form-label">
              Full Name
            </label>
          </div>

          <div className="form-group">
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="form-input"
              placeholder=" "
            />
            <label htmlFor="email" className="form-label">
              Email Address
            </label>
          </div>

          <div className="form-group">
            <input
              type={showPassword ? 'text' : 'password'}
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
              className="form-input"
              placeholder=" "
            />
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <button
              type="button"
              className="password-toggle"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? '👁️' : '👁️‍🗨️'}
            </button>
          </div>

          <div className="form-group file-upload-group">
            <input
              type="file"
              id="profilePic"
              name="profilePic"
              onChange={handleFileChange}
              ref={fileInputRef}
              className="file-input"
              accept="image/*"
            />
            <div className="file-upload-ui" onClick={triggerFileSelect}>
              {formData.previewUrl ? (
                <div className="image-preview">
                  <img src={formData.previewUrl} alt="Preview" />
                  <span className="change-text">Change photo</span>
                </div>
              ) : (
                <>
                  <div className="upload-icon">📤</div>
                  <p>Upload Profile Picture</p>
                  <p className="small-text">PNG, JPG up to 5MB</p>
                </>
              )}
            </div>
          </div>

          <button type="submit" className="submit-btn" disabled={loading}>
            {loading ? <span className="spinner"></span> : 'Create Account'}
          </button>
        </form>

        {message.text && (
          <div className={`message ${message.type}`}>{message.text}</div>
        )}

        <div className="login-link">
          Already have an account? <a href="/login">Sign in</a>
        </div>
      </div>
    </div>
  );
};

export default Registration;
