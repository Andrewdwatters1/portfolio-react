import React from 'react';
import About from './About';
import Skills from './Skills';
import Portfolio from './Portfolio';

function PrimaryContent() {
  return (
    <div class="primary-content-background">
      <About/>
      <Skills/>
      <Portfolio/>
    </div>
  )
}

export default PrimaryContent;