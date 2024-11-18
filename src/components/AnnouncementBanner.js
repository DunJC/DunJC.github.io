import React, { useState, useEffect } from 'react';

const AnnouncementBanner = () => {
  const announcements = [
    'Welcome to Cara & Joe’s Wedding!',
    'Accommodation details available!',
    'RSVP by sharing your intent!',
    'Stay tuned for more updates!',
  ];

  const [currentAnnouncement, setCurrentAnnouncement] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentAnnouncement((prev) => (prev + 1) % announcements.length);
    }, 3000); // Change announcement every 3 seconds

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [announcements.length]);

  return (
    <div className="announcement-banner">
      {announcements[currentAnnouncement]}
    </div>
  );
};

export default AnnouncementBanner;
