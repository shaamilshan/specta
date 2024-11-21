import React, { useState } from 'react';
import '../index.css';

// Importing icons directly from your assets folder
import instagramIcon from '../assets/instagram.png';
import whatsappIcon from '../assets/whatsapp.png';
import googleMapIcon from '../assets/maps.png';
import phoneIcon from '../assets/call.png';
import gmailIcon from '../assets/gmail.png';
import spectaBackground from '../assets/background.png'; // Specta background image
import closeIcon from '../assets/close.png'; // Close button icon

const contactButtons = [
  { icon: instagramIcon, label: 'Instagram', link: 'https://www.instagram.com/specta_travels' },
  { icon: whatsappIcon, label: 'Whatsapp', link: 'https://wa.me/+918139800856' },
  { icon: googleMapIcon, label: 'Google Map', link: 'https://goo.gl/maps/rxLPgFAGZLUL8dq98?g_st=iw' },
  { icon: phoneIcon, label: 'Call Now' },
  { icon: gmailIcon, label: 'Google Mail', link: 'mailto:@spectatoursandtravels@gmail.com' },
];

function TravelContactOverlay() {
  const [showModal, setShowModal] = useState(false);

  const handleCallClick = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div className="flex justify-center items-center w-full min-h-screen bg-[#1F6776]">
      {/* Background Wrapper */}
      <div className="relative w-[428px] h-[956px] bg-white rounded-md overflow-hidden">
        {/* Background Image */}
        <img
          src={spectaBackground}
          alt="Specta Tours & Travels Background"
          className="absolute inset-0 w-full h-full object-cover"
        />
        {/* Contact Buttons */}
        <div className="absolute inset-0 flex flex-col items-center justify-center space-y-6 px-4">
          {contactButtons.map((button, index) => (
            <div key={index} className="relative">
              {button.label === 'Call Now' ? (
                // Call Button triggering Modal
                <button
                  className="flex items-center gap-12 bg-white bg-opacity-50 rounded-full px-6 py-3 shadow-md transition-all duration-300 transform hover:scale-105 w-72"
                  onClick={handleCallClick}
                >
                  <img src={button.icon} alt={`${button.label} icon`} className="w-8 h-8 rounded-full" />
                  <span className="text-lg font-medium text-gray-800" style={{ fontFamily: 'Teachers', fontSize: '20px' }}>
                    {button.label}
                  </span>
                </button>
              ) : (
                // Regular Button
                <a
                  href={button.link}
                  className="flex items-center gap-12 bg-white bg-opacity-50 rounded-full px-6 py-3 shadow-md transition-all duration-300 transform hover:scale-105 w-72"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={button.icon} alt={`${button.label} icon`} className="w-8 h-8 rounded-full" />
                  <span className="text-lg font-medium text-gray-800" style={{ fontFamily: 'Teachers', fontSize: '20px' }}>
                    {button.label}
                  </span>
                </a>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Modal for Call Options */}
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="relative w-96 bg-white rounded-md shadow-lg p-6">
            {/* Close Button */}
            <button
              className="absolute top-2 right-2 bg-transparent hover:bg-gray-100 p-2 rounded-full"
              onClick={closeModal}
            >
              <img src={closeIcon} alt="Close" className="w-5 h-5" />
            </button>
            <h2 className="text-xl font-bold text-gray-800 mb-4" style={{ fontFamily: 'Teachers' }}>
              Choose a Number to Call
            </h2>
            <div className="flex flex-col space-y-4">
              <a
                href="tel:+918138804856"
                className="block px-6 py-3 text-gray-800 bg-gray-100 rounded-md hover:bg-gray-200 transition-all duration-300"
              >
                +91 8138804856
              </a>
              <a
                href="tel:+918139800856"
                className="block px-6 py-3 text-gray-800 bg-gray-100 rounded-md hover:bg-gray-200 transition-all duration-300"
              >
                +91 8139800856
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default TravelContactOverlay;
