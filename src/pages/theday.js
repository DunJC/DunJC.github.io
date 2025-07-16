import React, { useState } from 'react';
import { Link } from 'react-scroll';
import NavBar from '../components/NavBar';
import AnnouncementBanner from '../components/AnnouncementBanner';
import canapesImg from '../resources/canapesImage.png';
import weddingBreakfastImg from '../resources/menuImage.png';
import eveningBuffetImg from '../resources/buffetImage.png';
import '../App.css';

const schedule = [
    { time: '12:00 – 13:00', event: 'Ceremony @ St Hildas' },
    { time: '13:45', event: 'Bride and Groom arrive at Astley Bank' },
    { time: '13:45', event: 'Drinks Reception & Canapés' },
    { time: '15:00', event: 'Guests Seated for Wedding Breakfast' },
    { time: '15:15', event: 'Bride & Groom Announced into Wedding Breakfast' },
    { time: '15:15', event: 'Wedding Breakfast' },
    { time: '17:15', event: 'Speeches' },
    { time: '18:00/18:15', event: '**Evening Starts**' },
    { time: '19:00', event: 'Cake Cutting and First Dance' },
    { time: '20:30', event: 'Evening Buffet' },
    { time: '00:00', event: 'Last Orders' },
];

const menuImageStyle = {
    width: '100%',
    maxWidth: '600px',
    height: 'auto',
    borderRadius: '10px',
    boxShadow: '0 4px 15px rgba(0, 0, 0, 0.2)',
    marginBottom: '30px',
};

const WeddingDayInfo = () => {
    const [guestName, setGuestName] = useState('');
    const [guestInfo, setGuestInfo] = useState(null);

    const mockGuestData = {
        'Alice Johnson': { meal: 'Chicken', table: 3 },
        'John Smith': { meal: 'Vegan', table: 5 },
        'Cara Williams': { meal: 'Beef', table: 1 },
    };

    const handleCheckInfo = () => {
        const info = mockGuestData[guestName.trim()];
        setGuestInfo(info || 'not found');
    };

    return (
        <div style={{ background: '#ededed', minHeight: '100vh', color: '#2F4F4F' }}>
       
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
                {/* Title */}
                <h1
                    style={{
                        fontFamily: `'Playfair Display', serif`,
                        fontSize: '36px',
                        margin: '10px 0',
                        color: '#5294D3', // Gold heading
                    }}
                >
                    The Wedding Day
                </h1>
                <p style={{ fontSize: '20px', marginBottom: '30px' }}>
                    Here’s an overview of our special day. Click items to jump to details below.
                </p>

                {/* Schedule */}
                <div
                    style={{
                        display: 'grid',
                        gridTemplateColumns: '1fr',
                        rowGap: '15px',
                        maxWidth: '500px',
                        margin: '0 auto 50px',
                    }}
                >
                    {schedule.map((item, index) => {
                        const isEveningStart = item.event.includes('**Evening Starts**');
                        let targetId = null;
                        if (item.event.includes('Canapés')) targetId = 'canapes';
                        else if (item.event.includes('Wedding Breakfast')) targetId = 'wedding-breakfast';
                        else if (item.event.includes('Evening Buffet')) targetId = 'evening-buffet';
                        else if (item.event.includes('Speeches')) targetId = 'speeches';

                        const cardStyle = {
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            backgroundColor: '#fff',
                            padding: '12px 16px',
                            borderRadius: '12px',
                            boxShadow: '0 4px 10px rgba(0,0,0,0.05)',
                            fontSize: '16px',
                            cursor: targetId ? 'pointer' : 'default',
                        };

                        const content = (
                            <>
                                <div style={{ fontWeight: '600', color: '#2F4F4F' }}>{item.time}</div>
                                <div
                                    style={{
                                        color: isEveningStart ? '#000' : '#444',
                                        fontWeight: isEveningStart ? '700' : '400',
                                        textAlign: 'right',
                                        flex: '1',
                                        marginLeft: '10px',
                                    }}
                                >
                                    {item.event.replace(/\*\*/g, '')}
                                </div>
                            </>
                        );

                        return targetId ? (
                            <Link
                                key={index}
                                to={targetId}
                                smooth={true}
                                duration={500}
                                offset={-50}
                                style={cardStyle}
                                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#f1f1f1')}
                                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#fff')}
                            >
                                {content}
                            </Link>
                        ) : (
                            <div key={index} style={cardStyle}>
                                {content}
                            </div>
                        );
                    })}
                </div>

                <section id="speeches" style={{ marginTop: '50px' }}>
                    <h2 style={{ fontSize: '28px', marginBottom: '15px', fontWeight: '600' }}>🎤 Speeches</h2>
                    <p style={{ fontSize: '20px', marginBottom: '20px', fontStyle: 'italic' }}>
                    A moment for laughter, love, and unforgettable words.
                    </p>
                    <ul style={{ listStyleType: 'disc', textAlign: 'left', maxWidth: '600px', margin: '0 auto', fontSize: '18px', lineHeight: '1.8' }}>
                        <li><strong>Father of the Bride:</strong> Ewan Bertram</li>
                        <li><strong>Groomsmen:</strong> Bernard Dunleavy and Nicholas Dunleavy</li>
                        <li><strong>Bridesmaids:</strong> Suzie Williamson and Eve Shao</li>
                        <li><strong>Groomsman:</strong> Jake Stott</li>
                    </ul>
                </section>



                {/* Food Sections */}
                <section id="canapes">
                    <h2 style={{ fontSize: '28px', marginBottom: '15px', fontWeight: '600' }}>🥂 Canapés</h2>
                    <p style={{ fontSize: '20px', marginBottom: '20px', fontStyle: 'italic' }}>
                        Served on arrival to Astley Bank, approx 13:45
                    </p>
                    <img src={canapesImg} alt="Canapés" style={menuImageStyle} />
                </section>

                <section id="wedding-breakfast" style={{ marginTop: '50px' }}>
                    <h2 style={{ fontSize: '28px', marginBottom: '15px', fontWeight: '600' }}>🍽️ Wedding Breakfast</h2>
                    <p style={{ fontSize: '20px', marginBottom: '20px', fontStyle: 'italic' }}>
                        Served at 3:15 PM
                    </p>
                    <img src={weddingBreakfastImg} alt="Wedding Breakfast" style={menuImageStyle} />
                </section>

                <section id="evening-buffet" style={{ marginTop: '50px' }}>
                    <h2 style={{ fontSize: '28px', marginBottom: '15px', fontWeight: '600' }}>🌙 Evening Buffet</h2>
                    <p style={{ fontSize: '20px', marginBottom: '20px', fontStyle: 'italic' }}>
                        Served around 20:30
                    </p>
                    <img src={eveningBuffetImg} alt="Evening Buffet" style={menuImageStyle} />
                </section>

                {/* Guest Lookup */}
                <div style={{ marginTop: '60px', textAlign: 'center' }}>
                    <h2 style={{ fontSize: '28px', marginBottom: '10px' }}>
                        Find Your Meal & Table (In Progress)
                    </h2>
                    <input
                        type="text"
                        placeholder="Enter your full name"
                        value={guestName}
                        onChange={(e) => setGuestName(e.target.value)}
                        style={{
                            padding: '10px',
                            fontSize: '18px',
                            borderRadius: '10px',
                            border: '1px solid #ccc',
                            width: '300px',
                            maxWidth: '90%',
                            marginRight: '10px',
                        }}
                    />
                    <button
                        onClick={handleCheckInfo}
                        style={{
                            padding: '10px 20px',
                            fontSize: '18px',
                            borderRadius: '10px',
                            backgroundColor: '#2F4F4F',
                            color: '#fff',
                            border: 'none',
                            cursor: 'pointer',
                        }}
                    >
                        Check
                    </button>

                    {guestInfo && (
                        <div style={{ marginTop: '20px', fontSize: '20px' }}>
                            {guestInfo === 'not found' ? (
                                <p style={{ color: 'red' }}>
                                    We couldn’t find your name — please double-check or ask us on the day.
                                </p>
                            ) : (
                                <div>
                                    <p>
                                        <strong>Meal Choice:</strong> {guestInfo.meal}
                                    </p>
                                    <p>
                                        <strong>Table Number:</strong> {guestInfo.table}
                                    </p>
                                </div>
                            )}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default WeddingDayInfo;
