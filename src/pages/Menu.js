import React from 'react';
import NavBar from '../components/NavBar';
import AnnouncementBanner from '../components/AnnouncementBanner';
import menuImage from '../resources/menuImage.png'; // Replace with actual file path
import canapesImage from '../resources/canapesImage.png'; // Replace with actual file path
import buffetImage from '../resources/buffetImage.png'; // Replace with actual file path
import '../App.css';

const Menu = () => {
  return (
    <div style={{ background: '#ededed', minHeight: '100vh', color: '#2F4F4F' }}>
      <AnnouncementBanner />
      <NavBar />
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
            color: '#5294D3', // Gold heading
          }}
        >
          Wedding Menu
        </h1>

        <p style={{ fontSize: '20px', marginBottom: '30px' }}>
          A delicious day ahead! Here's what’s on the menu for our celebration.
        </p>
        <h2
          style={{
            fontFamily: `'Playfair Display', serif`,
            fontSize: '28px',
            margin: '30px 0 10px',
            color: '#2F4F4F',
            fontWeight: '600',
          }}
        >
          Canapes
        </h2>

        <p
          style={{
            fontSize: '22px',
            fontStyle: 'italic',
            color: '#444',
            marginBottom: '25px',
          }}
        >
          Served on arrival to Astley Bank, Approx 13:45
        </p>
        <img
          src={canapesImage}
          alt="Wedding Menu"
          style={{
            width: '100%',
            maxWidth: '600px',
            height: 'auto',
            borderRadius: '10px',
            boxShadow: '0 4px 15px rgba(0, 0, 0, 0.2)',
          }}
        />
        <h2
          style={{
            fontFamily: `'Playfair Display', serif`,
            fontSize: '28px',
            margin: '30px 0 10px',
            color: '#2F4F4F',
            fontWeight: '600',
          }}
        >
          Wedding Breakfast Menu
        </h2>

        <p
          style={{
            fontSize: '22px',
            fontStyle: 'italic',
            color: '#444',
            marginBottom: '25px',
          }}
        >
          Served at 3:15 PM
        </p>
        <img
          src={menuImage}
          alt="Wedding Menu"
          style={{
            width: '100%',
            maxWidth: '600px',
            height: 'auto',
            borderRadius: '10px',
            boxShadow: '0 4px 15px rgba(0, 0, 0, 0.2)',
          }}
        />
                <h2
          style={{
            fontFamily: `'Playfair Display', serif`,
            fontSize: '28px',
            margin: '30px 0 10px',
            color: '#2F4F4F',
            fontWeight: '600',
          }}
        >
          Evening Buffet
        </h2>

        <p
          style={{
            fontSize: '22px',
            fontStyle: 'italic',
            color: '#444',
            marginBottom: '25px',
          }}
        >
          Served around 20:30
        </p>
        <img
          src={buffetImage}
          alt="Wedding Menu"
          style={{
            width: '100%',
            maxWidth: '600px',
            height: 'auto',
            borderRadius: '10px',
            boxShadow: '0 4px 15px rgba(0, 0, 0, 0.2)',
          }}
        />
      </div>
    </div>
  );
};

export default Menu;
