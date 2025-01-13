import React from 'react';
import NavBar from '../components/NavBar';
import bannerImage from '../resources/bannerImage_sml.png'; // Import the banner image
import '../App.css';

const Schedules = () => {
  const events = [
    {
      date: 'TBC (Before July 20th)',
      side: 'left',
      events: [
        {
          name: 'Our Arrival in the UK',
          time: 'TBC',
          location: 'UK',
          comment: 'We will arrive in the UK a few days before the wedding. Exact date to be confirmed.',
        },
      ],
    },
    {
      date: 'July 24th, 2025',
      side: 'right',
      events: [
        {
          name: 'Pre-Wedding Catchup',
          time: 'Evening',
          location: 'Bury',
          comment: 'An informal gathering to catch up with friends and family before the big day.',
        },
      ],
    },
    {
      date: 'July 25th, 2025',
      side: 'left',
      events: [
        {
          name: 'Church Ceremony',
          time: '12:00 PM',
          location: 'St Hildas Roman Catholic Church, Tottington, UK',
          comment: 'The ceremony to celebrate our union.',
        },
        {
          name: 'Reception',
          time: '3:00 PM',
          location: 'Astley Bank Hotel, Darwen, UK',
          comment: 'A joyful reception with food, drinks, and entertainment.',
        },
        {
          name: 'Evening Guests Arrive',
          time: '6:00 PM',
          location: 'Astley Bank Hotel, Darwen, UK',
          comment: 'Evening guests join the celebration.',
        },
      ],
    },
  ];

  return (
    <div style={{ background: '#ededed', minHeight: '100vh', color: '#2F4F4F' }}>
      <NavBar />
      <div style={{ position: 'relative', width: '100%', height: '100%' }}>
        <img
          src={bannerImage}
          alt="Banner"
          style={{ width: '100%', height: 'auto', objectFit: 'cover' }}
        />
      </div>

      {/* Timeline Section */}
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
          Schedule
        </h1>
        <div
          style={{
            position: 'relative',
            margin: '30px auto',
            padding: '0 20px',
          }}
        >
          {/* Golden Line */}
          <div
            style={{
              position: 'absolute',
              left: '50%',
              top: '0',
              bottom: '0',
              width: '4px',
              background: 'linear-gradient(to bottom, #D4AF37, #FFD700)',
              transform: 'translateX(-50%)',
              zIndex: 1,
            }}
          ></div>



{events.map((day, index) => (
  <div
    key={index}
    style={{
      display: 'flex',
      justifyContent: day.side === 'right' ? 'flex-end' : 'flex-start',
      marginBottom: '40px',
      position: 'relative',
      alignItems: 'center',
      margin: '30px 0',
      width: '100%',
    }}
  >
    {/* Connector Point */}
    <div
      style={{
        width: '20px',
        height: '20px',
        borderRadius: '50%',
        backgroundColor: '#D4AF37',
        position: 'absolute',
        left: '50%',
        transform: 'translate(-50%)',
        zIndex: 2,
        top: '5px',
      }}
    ></div>
    {/* Event Box */}
    <div
      style={{
        maxWidth: '45%',
        padding: '15px',
        background: '#ffffff',
        borderRadius: '10px',
        boxShadow: '0 4px 15px rgba(0, 0, 0, 0.2)',
        position: 'relative',
        marginLeft: day.side === 'right' ? 'calc(50% + 5px)' : 'auto',
        marginRight: day.side === 'right' ? 'auto' : 'calc(50% + 5px)',
        textAlign: day.side === 'right' ? 'left' : 'right',
      }}
    >
      <h2
        style={{
          fontSize: '20px',
          fontFamily: `'Playfair Display', serif`,
          margin: '0 0 10px',
          color: '#2F4F4F',
        }}
      >
        {day.date}
      </h2>
      {day.events.map((event, i) => (
        <div key={i} style={{ marginBottom: '15px' }}>
          <h3
            style={{
              fontSize: '18px',
              fontFamily: `'Playfair Display', serif`,
              margin: '5px 0',
              color: '#2F4F4F',
            }}
          >
            {event.name}
          </h3>
          <p style={{ margin: '5px 0', fontSize: '16px' }}>
            <strong>Time:</strong> {event.time}
          </p>
          <p style={{ margin: '5px 0', fontSize: '16px' }}>
            <strong>Location:</strong> {event.location}
          </p>
          <p style={{ margin: '5px 0', fontSize: '16px' }}>{event.comment}</p>
        </div>
      ))}
    </div>
  </div>
))}

        </div>
      </div>
    </div>


  );
};

export default Schedules;
