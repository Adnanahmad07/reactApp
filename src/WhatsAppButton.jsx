import React from 'react';

const WhatsAppButton = () => {
  const handleWhatsAppClick = () => {
    // Replace '1234567890' with the actual phone number you want to message
    const phoneNumber = '9356668159';

    // Replace 'Hello%20World' with the pre-written message, encoded
    const message = encodeURIComponent('Hello World');

    // Construct the WhatsApp URL
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${message}`;

    // Redirect the user to the WhatsApp URL
    window.location.href = whatsappURL;
  };

  return (
    <button onClick={handleWhatsAppClick}>
      Open WhatsApp
    </button>
  );
};

export default WhatsAppButton;
