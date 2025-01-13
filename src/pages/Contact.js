import React from 'react';
import NavBar from '../components/NavBar';
import bannerImage from '../resources/bannerImage_sml.png';
import AnnouncementBanner from '../components/AnnouncementBanner'; // Import the banner
import '../App.css';

const Contact = () => {
  return (
    <div style={{ background: '#ededed', minHeight: '100vh', color: '#2F4F4F' }}>
      <AnnouncementBanner />
      <NavBar />
      <div style={{ position: 'relative', width: '100%', height: '100%' }}>
        <img
          src={bannerImage}
          alt="Banner"
          style={{ width: '100%', height: 'auto', objectFit: 'cover' }}
        />
      </div>

      {/* Main Content Section */}
      <div
        style={{
          textAlign: 'center',
          marginTop: '30px',
          padding: '20px',
          maxWidth: '100%',
          marginLeft: 'auto',
          marginRight: 'auto',
        }}
      >
        <h1
          style={{
            fontFamily: `'Playfair Display', serif`,
            fontSize: '36px',
            margin: '10px 0',
            color: '#D4AF37', // Gold heading
          }}
        >
          Contact Us
        </h1>

        <p style={{ color: '#2F4F4F', fontSize: '20px', marginBottom: '30px' }}>
          We’re here to help! Please reach out to us with any questions, concerns, or special requests.
        </p>

        {/* Contact Information Section */}
        <div
          style={{
            maxWidth: '600px',
            margin: '0 auto 40px',
            padding: '20px',
            background: '#ffffff',
            borderRadius: '10px',
            boxShadow: '0 4px 15px rgba(0, 0, 0, 0.2)',
          }}
        >
          <h2
            style={{
              fontSize: '24px',
              fontFamily: `'Playfair Display', serif`,
              marginBottom: '15px',
              color: '#2F4F4F',
            }}
          >
            Get in Touch
          </h2>
          <p style={{ fontSize: '18px', color: '#2F4F4F', marginBottom: '15px' }}>
            <strong>Email:</strong> info@carajoewedding.com
          </p>
          <p style={{ fontSize: '18px', color: '#2F4F4F', marginBottom: '15px' }}>
            <strong>Phone:</strong> +61 422 957 328
          </p>

        </div>

        {/* Inquiry Form Section */}
        <div
          style={{
            maxWidth: '600px',
            margin: '0 auto 40px',
            padding: '20px',
            background: '#ffffff',
            borderRadius: '10px',
            boxShadow: '0 4px 15px rgba(0, 0, 0, 0.2)',
          }}
        >
          <h2
            style={{
              fontSize: '24px',
              fontFamily: `'Playfair Display', serif`,
              marginBottom: '15px',
              color: '#2F4F4F',
            }}
          >
            Send Us a Message
          </h2>
          <form>
            <div style={{ marginBottom: '15px' }}>
              <label style={{ fontSize: '18px', display: 'block', marginBottom: '5px' }}>
                Name:
              </label>
              <input
                type="text"
                placeholder="Your Name"
                style={{
                  width: '90%',
                  padding: '10px',
                  fontSize: '16px',
                  border: '1px solid #ccc',
                  borderRadius: '5px',
                }}
              />
            </div>
            <div style={{ marginBottom: '15px' }}>
              <label style={{ fontSize: '18px', display: 'block', marginBottom: '5px' }}>
                Email:
              </label>
              <input
                type="email"
                placeholder="youremail@email.com"
                style={{
                  width: '90%',
                  padding: '10px',
                  fontSize: '16px',
                  border: '1px solid #ccc',
                  borderRadius: '5px',
                }}
              />
            </div>
            <div style={{ marginBottom: '15px' }}>
              <label style={{ fontSize: '18px', display: 'block', marginBottom: '5px' }}>
                Message:
              </label>
              <textarea
                placeholder="Your Message"
                rows="5"
                style={{
                  width: '90%',
                  padding: '10px',
                  fontSize: '16px',
                  border: '1px solid #ccc',
                  borderRadius: '5px',
                }}
              ></textarea>
            </div>
            <button
              type="submit"
              style={{
                padding: '10px 20px',
                fontSize: '18px',
                color: '#ffffff',
                background: '#D4AF37', // Gold button
                border: 'none',
                borderRadius: '5px',
                cursor: 'pointer',
              }}
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
