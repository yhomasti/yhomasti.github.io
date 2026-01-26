import { useState, useEffect } from 'react';
// import SpotifyPlayer from './SpotifyPlayer';

function Profile() {
  return (
    <section id="profile">
      {/* Top Row - Intro Text + Profile Pic */}
      <div className="profile-top-row">
        {/* Left - Text */}
        <div className="profile-intro">
          <p className="section__text__p1">Hello! I am...</p>
          <h1 className="title">Thomas Yi</h1>
          <p className="section__text__p2">Technical Artist & Pipeline Developer</p>
          
          <div className="profile-actions">
            <button 
              className="btn btn-color-1" 
              onClick={() => window.location.href = '#contact'}
            >
              Contact
            </button>
            <div className="socials-row">
              <img 
                src="/assets/linkedin.png" 
                alt="My LinkedIn profile"
                className="icon" 
                onClick={() => window.location.href = 'https://www.linkedin.com/in/yhomasti/'}
              />
              <img 
                src="/assets/email.png" 
                alt="Email me!"
                className="icon" 
                onClick={() => window.location.href = 'mailto:thomasyi2005@gmail.com'}
              />
            </div>
          </div>
        </div>

        {/* Right - Profile Pic with Tagline Below */}
        <div className="profile-pic-section">

          {/* Tagline below image */}
          <p className="current-position">Currently: Software Engineer Intern at Warner Bros. Discovery</p>
          <div className="section__pic-container">
            <img 
              src="/assets/Thomas Linkedin Post WB.png" 
              alt="Thomas Yi profile picture" 
              id="profile-pic" 
            />
          </div>
          
          
        </div>
      </div>

      {/* Bottom Row - Two Cards Side by Side */}
      <div className="profile-cards-row">
        <div 
          className="profile-nav-card tech-card"
          onClick={() => window.location.href = '#code'}
        >
          <h3>Technical Direction</h3>
          <p className="card-subtitle">Pipeline Tools & Development</p>
          
          <div className="card-video-container">
            <video 
              className="card-preview-video"
              autoPlay
              loop
              muted
              playsInline
            >
              <source src="/assets/coding/Twinning Plugin Demo.mp4" type="video/mp4" />
            </video>
          </div>
          
          <p className="card-cta">Click here to check out my technical work →</p>
        </div>

        <div 
          className="profile-nav-card animation-card"
          onClick={() => window.location.href = '#art'}
        >
          <h3>3D Animation</h3>
          <p className="card-subtitle">Character Animation & Storytelling</p>
          
          <div className="card-video-container">
            <video 
              className="card-preview-video"
              autoPlay
              loop
              muted
              playsInline
            >
              <source src="/assets/3D/InitialTestRender_1.mp4" type="video/mp4" />
            </video>
          </div>
          
          <p className="card-cta">Click here to check out my animation portfolio →</p>
        </div>
      </div>
    </section>
  );
}

export default Profile;