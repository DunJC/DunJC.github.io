import React from 'react';
import NavBar from '../components/NavBar';
import bannerImage from '../resources/bannerImage_sml.png';
import AnnouncementBanner from '../components/AnnouncementBanner'; // Import the banner
import '../App.css';

const GeneralInformation = () => {
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
          General Information
        </h1>

        <p style={{ color: '#2F4F4F', fontSize: '20px', marginBottom: '30px' }}>
          Here you'll find important details about the wedding day to help you prepare and make the most of your experience.
        </p>

        {/* Schedule Section */}
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
            Wedding Day Schedule
          </h2>
          <ul
            style={{
              fontSize: '18px',
              color: '#2F4F4F',
              listStyleType: 'none',
              padding: '0',
              marginBottom: '15px',
            }}
          >
            <li style={{ marginBottom: '10px' }}>
              <strong>Ceremony:</strong> 12:00 PM at St Hildas Roman Catholic Church, Tottington, UK
            </li>
            <li style={{ marginBottom: '10px' }}>
              <strong>Reception:</strong> 3:00 PM at Astley Bank Hotel, Darwen, UK
            </li>
            <li>
              <strong>Evening Celebration:</strong> 6:00 PM with live music and dancing at Astley Bank Hotel, Darwen, UK
            </li>
          </ul>
          For more information, see <a href="#/schedule" style={{ color: '#FFD700' }}>Schedule</a>.
        </div>

        {/* Dress Code Section */}
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
            Dress Code
          </h2>
          <p style={{ fontSize: '18px', color: '#2F4F4F', marginBottom: '15px' }}>
          The dress code for the day is <strong>smart casual</strong>. Please feel free to wear whatever you feel comfortable in.</p>
        </div>

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
            Contact Information
          </h2>
          <p style={{ fontSize: '18px', color: '#2F4F4F', marginBottom: '15px' }}>
            If you have any questions or need assistance, please feel free to reach out to us at:
          </p>
          <p style={{ fontSize: '18px', color: '#2F4F4F' }}>
            <strong>Email:</strong> info@carajoewedding.com
            <br />
            <strong>Phone:</strong> +61 422 957 328
          </p>
        </div>
      </div>
    </div>
  );
};

export default GeneralInformation;
