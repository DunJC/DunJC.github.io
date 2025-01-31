import React from 'react';
import NavBar from '../components/NavBar';
import image from '../resources/carajoeimage.jpg';
import bannerImage from '../resources/bannerImage.png';
import { AddToCalendarButton } from 'add-to-calendar-button-react';
import AnnouncementBanner from '../components/AnnouncementBanner.js'; // Import the banner

import '../App.css';

const Main = () => {

  return (
    
    <div style={{ background: '#ededed', minHeight: '100vh', color: '#2F4F4F' }}>
      <AnnouncementBanner /> 
      <NavBar />
      <div className="App">
        <div style={{ position: 'relative', width: '100%', height: '100%', paddingBottom:'5px' }}>
          <img
            src={bannerImage}
            alt="Banner"
            className="App-banner"
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        </div>
        
        
 


          
       {/*   <a href='https://forms.gle/4LLPz3LWeJpnRqkN7' target="_blank" rel="noopener noreferrer" 
          style={{
            padding: '8px 16px',
            textDecoration: 'none',
            backgroundColor: '#fff8e1', // Faint gold background
            color: 'black',
            border: '2px solid #d4af37', // Gold border
            fontSize: '20px',
            fontFamily: `'Playfair Display', serif`,
            borderRadius: '10px',
            cursor: 'pointer',
            boxShadow: '0 2px 8px rgba(0, 0, 0, 0.2)',
            transition: 'box-shadow 0.3s ease, transform 0.3s ease',
          }}
          >
          Share Your Intent
        </a>*/}


        {/* Main Content */}
        <div
  style={{
    textAlign: 'center',
    marginTop: '30px',
    color: '#2F4F4F',
    width: '100%', // Set width to 100% to adapt to screen size
    maxWidth: '500px', // Limit the max width on larger screens
    padding: '20px',
    border: '2px solid #D4AF37', // Gold border
    borderRadius: '10px',
    boxShadow: '0 4px 15px rgba(0, 0, 0, 0.2)',
    marginLeft: 'auto',
    marginRight: 'auto',
  }}
>
  {/* Date and Location */}
  <p
    style={{
      fontSize: '50px',
      fontFamily: `'Great Vibes', cursive`,
      margin: '0',
      color: '#D4AF37', // Gold color
    }}
  >
    July 25th, 2025
  </p>
  <p
    style={{
      fontSize: '30px',
      fontFamily: `'Great Vibes', cursive`,
      margin: '0',
      color: '#D4AF37', // Gold color
      fontWeight: 'bold',
    }}
  >
    Ceremony
  </p>
  <p
    style={{
      fontSize: '24px',
      fontFamily: `'Playfair Display', serif`,
      margin: '10px 0 20px',
      fontWeight: '500',
      color: 'black',
    }}
  >
    St Hilda's Roman Catholic Church, 35 Turton Rd, Tottington, Bury BL8 4AW <br /> United Kingdom
  </p>
  <p
    style={{
      fontSize: '30px',
      fontFamily: `'Great Vibes', cursive`,
      margin: '0',
      color: '#D4AF37', // Gold color
      fontWeight: 'bold',
    }}
  >
    Reception and Evening
  </p>
  <p
    style={{
      fontSize: '24px',
      fontFamily: `'Playfair Display', serif`,
      margin: '10px 0 20px',
      fontWeight: '500',
      color: 'black',
    }}
  >
    Astley Bank, Bolton Road, Darwen, BB3 2QB <br /> United Kingdom
  </p>

  {/* Calendar Button and Image */}
  <div
    style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      marginTop: '10px',
    }}
  >
    <AddToCalendarButton
      name="Cara and Joe Wedding"
      startDate="2025-07-25"
      options={['Apple', 'Google', 'Yahoo', 'iCal']}
      timeZone="Europe/London"
      location="Astley Bank Hotel, Wedding and Conference Venue, Bolton Rd, Darwen BB3 2QB, UK"
      description="Find out more at carajoewedding.com"
    />
  </div>
</div>

        <img
          src={image}
          alt="Wedding"
          style={{
            marginTop: '30px',
            maxWidth: '50%',
            height: 'auto',
            borderRadius: '15px',
            boxShadow: '0 10px 30px rgba(0, 0, 0, 0.2)',
          }}
        />
      </div>
    </div>
  );
};

export default Main;
