// Dynamically add the link to the CDN for the styles

import React from 'react';
import NavBar from '../components/NavBar';
import image from '../resources/carajoeimage.jpg'; // Import your saved image
import backgroundImage from '../resources/marblebackground.png'; // Import your saved image
import '../App.css';
import { AddToCalendarButton } from 'add-to-calendar-button-react';

const link = document.createElement('link');
link.rel = 'stylesheet';
link.href = 'https://cdn.jsdelivr.net/npm/add-to-calendar-button/assets/css/atcb.min.css';
document.head.appendChild(link);


//import { Atcb } from 'add-to-calendar-button'; // Import the JavaScript part only


const Home = () => {

  return (
    <div
      style={{
        backgroundImage: `url(${backgroundImage})`, // Corrected syntax
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '100vh',
        padding: '50px 0',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <div
        style={{
          backgroundColor: 'white',
          borderRadius: '15px',
          boxShadow: '0 15px 25px rgba(0, 0, 0, 0.2)', // Shadow to create depth
          padding: '40px',
          maxWidth: '800px',
          width: '90%',
          textAlign: 'center',
          transform: 'translateY(-10px)', // Slight lift effect
        }}
      >
        <h1
          style={{
            fontSize: '120px',
            color: '#006A4E',
            fontWeight: 'lighter',
            marginBottom: '1px',
            textAlign: 'center',
            fontFamily: `'Dancing Script', cursive`,
            marginTop: '0',
          }}
        >
          Cara and Joseph
        </h1>

        <h2
  style={{
    fontSize: '50px',
    color: '#006A4E',
    textAlign: 'center',
    fontFamily: `'Amatic SC', cursive`, // A balanced, handwriting-like font
    marginTop: '0',
    marginBottom: '20px',
  }}
>
  are getting married
</h2>

        <h1
          style={{
            fontSize: '150px',
            fontWeight: 'lighter',
            fontFamily: `'Dancing Script', cursive`,
            color: 'black',
            margin: '0',
            padding: '0',
          }}
        >
          Save the Date
        </h1>


        <div
  style={{
    textAlign: 'center',
    width: '60%',
    margin: '5px auto 20px auto', // Centers the container horizontally
  

    backgroundColor: '#f0f8f5', // Soft background color
    padding: '30px', // Add padding for space inside the container
    borderRadius: '10px', // Rounded corners for a softer look
    boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)', // Subtle shadow for depth
  }}
>
  <p
    style={{
      fontSize: '60px',
      margin: '5px 0',
      paddingBottom: '10px',
      fontFamily: "'Patrick Hand', cursive",
      fontWeight: '300',
    }}
  >
    July 25th, 2025
  </p>

  <div style={{ fontSize: '20px', margin: '5px 0', lineHeight: '1.5' }}>
    <div
      style={{
        fontSize: '30px',
        margin: '5px 0',
        lineHeight: '1.5',
        fontWeight: 'bold',
      }}
    >
      Astley Bank
    </div>
    Bolton Road, Darwen, BB3 2QB<br />
    United Kingdom
  </div>

  <button
    
    style={{
      background: '#006A4E',
      color: 'white',
      border: 'none',
      padding: '10px 20px',
      fontSize: '16px',
      borderRadius: '5px',
      cursor: 'pointer',
      marginTop: '10px',
    }}
  >
            <AddToCalendarButton
  name="Cara and Joe Wedding"
  startDate="2025-07-25"
  options={['Apple','Google','Yahoo','iCal']}
  timeZone="Europe/London"
></AddToCalendarButton>
    
  </button>
</div>

        <img
          src={image}
          alt="Wedding"
          style={{
            marginTop: '20px',
            maxWidth: '50%',
            height: 'auto',
            borderRadius: '10px',
            boxShadow: '0 4px 15px rgba(0, 0, 0, 0.2)',
          }}
        />
      </div>
    </div>
  );
};

export default Home;
