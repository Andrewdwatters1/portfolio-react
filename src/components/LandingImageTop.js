import React from 'react';
import image from '../images/background1.jpeg';

export default function LandingImageTop() {
  return (
    <div
      style={{
        backgroundImage: `url(${image}`,
        minHeight: '90vh',
        backgroundAttachment: 'fixed',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgrounsSize: 'cover',
      }}>
    </div>
  )
}