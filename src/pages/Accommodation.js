import React from 'react';
import NavBar from '../components/NavBar';
import bannerImage from '../resources/bannerImage_sml.png';
import AnnouncementBanner from '../components/AnnouncementBanner'; // Import the banner
import '../App.css';

const Accommodation = () => {
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
          Accommodation
        </h1>

        <p style={{ color: '#2F4F4F', fontSize: '20px', marginBottom: '30px' }}>
          <strong>Note:</strong> The week prior to our wedding, Oasis will be performing in the area, which could make hotel prices higher and availability limited. We recommend booking your stay as early as possible.
        </p>

        {/* Astley Bank Section */}
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
            Astley Bank Hotel
          </h2>
          <p style={{ fontSize: '18px', color: '#2F4F4F', marginBottom: '15px' }}>
            Our wedding venue, Astley Bank Hotel, offers the most convenient and comfortable accommodation for our guests. We have arranged special rates for our wedding:
          </p>
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
              <strong>Executive Room for Two Adults:</strong> £119 per night, including breakfast
            </li>
            <li>
              <strong>Standard Room for Two Adults:</strong> £99 per night, including breakfast
            </li>
          </ul>
          <p style={{ fontSize: '18px', color: '#2F4F4F' }}>
            Both options come with a discounted wedding rate. Be sure to quote Cara Bertram and Joseph Dunleavy with the date <strong>25th July 2025</strong>.
            <br />
            <strong>+44 1254 777700</strong>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Accommodation;
