import React from 'react';
import NavBar from '../components/NavBar';
import image from '../resources/carajoeimage.jpg'; // Import your saved image
import backgroundImage from '../resources/marblebackground.png'; // Import your background image
import logo from '../resources/JCLogoMain.png'; // Import your logo
import '../App.css';
import { AddToCalendarButton } from 'add-to-calendar-button-react';

const SaveTheDate = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '50px 0',
      }}
    >
      <div
        style={{
          backgroundColor: '#FDFDFD',
          borderRadius: '20px',
          padding: '10px',
          maxWidth: '1000px',
          paddingLeft: '50px',
          paddingRight: '50px',
          width: '90%',
          textAlign: 'center',
          boxShadow: '0 15px 30px rgba(0, 0, 0, 0.1)',
        }}
      >        <img
      src={logo}
      alt="Wedding Logo"
      style={{
        maxWidth: '200px',
        height: 'auto',
      }}
    />
        <h1
          style={{
            fontSize: '100px',
            color: '#2F4F4F',
            fontFamily: `'Dancing Script', cursive`,
            margin: '0',
            padding: '0',
            textAlign: 'center',
          }}
        >
          Cara & Joseph
        </h1>
        <h2
          style={{
            fontSize: '40px',
            color: '#2F4F4F',
            fontFamily: `'Playfair Display', serif`,
            margin: '0px 0', 
            textAlign: 'center',
            fontWeight: '300',
          }}
        >
          are getting married
        </h2>
        {/* Add your logo here */}

        <h3
          style={{
            fontSize: '150px',
            color: '#444444',
            fontFamily: `'Dancing Script', cursive`,
            margin: '0px 0 1px',
            fontWeight: 'thinner',
          }}
        >
          Save the Date
        </h3>
        <div
  style={{
    backgroundColor: '#F8F8F8',
    borderRadius: '15px',
    padding: '5px 20px 15px 20px',
    maxWidth: '600px',
    boxShadow: '0 10px 20px rgba(0, 0, 0, 0.1)',
    marginBottom: '1px',
    margin: '0 auto', // Centers the div horizontally
    textAlign: 'center', // Centers the text inside
  }}
>
  <p
    style={{
      fontSize: '50px',
      fontFamily: "'Great Vibes', cursive",
      color: '#2F4F4F',
      margin: '0 0 1px',
    }}
  >
    July 25th, 2025
  </p>
  <p
    style={{
      fontSize: '24px',
      fontFamily: "'Playfair Display', serif",
      color: '#4A4A4A',
      margin: '0',
      fontWeight: '500',
    }}
  >
    Astley Bank, Bolton Road, Darwen, BB3 2QB <br /> United Kingdom
  </p>
  <div
  style={{
    display: 'flex',
    justifyContent: 'center', // Centers the AddToCalendarButton
    marginTop: '5px',
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
            marginTop: '20px',
            marginBottom: '30px',
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

export default SaveTheDate
