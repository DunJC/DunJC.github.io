import React, { useEffect } from 'react';

const ShareYourIntent = () => {
  useEffect(() => {
    // Redirect to the external form URL
    window.location.href = 'https://forms.gle/4LLPz3LWeJpnRqkN7';
  }, []);

  return (
    <div>
      <p>Redirecting...</p>
    </div>
  );
};

export default ShareYourIntent;