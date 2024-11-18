import React from 'react';
import NavBar from '../components/NavBar.js';

import bannerImage from '../resources/bannerImage_sml.png';

import AnnouncementBanner from '../components/AnnouncementBanner.js'; // Import the banner
import '../App.css';

const Accommodation = () => {
  return (
    <div style={{ background: '#ededed', minHeight: '100vh', color: '#2F4F4F' }}>
   
      <AnnouncementBanner /> 
      <NavBar />
      <div className="App">
        <div style={{ position: 'relative', width: '100%', height: '100%' }}>
          <img
            src={bannerImage}
            alt="Banner"
            className="App-banner"
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        </div>
       <h1 style={{ color: '#d4af37', fontSize: '40px' }}>
        Accommodation
       </h1>
       <p style={{ color: 'black', fontSize: '20px' }}>
    <strong>Note:</strong> The week prior to our wedding, Oasis will be performing in the area, which could make hotel prices higher and availability limited. We recommend booking your stay as early as possible.
  </p>
       

       <div style={{  color: 'black', fontSize: '18px'  }}> 
  <h2>Astley Bank Hotel</h2>
  <p>
    Our wedding venue, Astley Bank Hotel, offers the most convenient and comfortable accommodation for our guests. We have arranged special rates for our wedding:
  </p>
  <ul>
    <li><strong>Executive Room for Two Adults:</strong> £119 per night, including breakfast</li>
    <li><strong>Standard Room for Two Adults:</strong> £99 per night, including breakfast</li>
  </ul>
  <p>
    Both options come with a discounted wedding rate but be sure to quote Cara Bertram and Joseph Dunleavy with date 25th July 2025. <br/><strong>+44 1254 777700</strong>
  </p>

  </div>





          </div>

    </div>
  );
};

export default Accommodation;
