import { useState, useEffect } from 'react';
import SpotifyPlayer from './SpotifyPlayer';

function Profile() {
  const [thoughtTextIndex, setThoughtTextIndex] = useState(0);
  
  const thoughtTexts = [
    "What am I listening to now?",
    "Wonder what Thomas likes to listen to?",
    "What's on Thomas's playlist?",
    "Curious about my music taste? Don't be disappointed!",
    "What song is stuck in my head?"
  ];

  //rotate thought bubble text
  useEffect(() => {
    const interval = setInterval(() => {
      setThoughtTextIndex(prev => (prev + 1) % thoughtTexts.length);
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="profile">
      <div className="section__text">
        <p className="section__text__p1">Hello! I am...</p>
        <h1 className="title">Thomas Yi</h1>
        <p className="section__text__p2">3D Animator and Programmer</p>
        
        <div className="btn-container">
          <button 
            className="btn btn-color-1" 
            onClick={() => window.location.href = '#contact'}
          >
            Contact
          </button>
        </div>

        <div id="socials-container">
          <img 
            src="/assets/linkedin.png" 
            alt="My LinkedIn profile"
            className="icon" 
            onClick={() => window.location.href = 'https://www.linkedin.com/in/yhomasti/'}
          />
        </div>

        <div id="socials-container2">
          <img 
            src="/assets/email.png" 
            alt="Email me!"
            className="icon" 
            onClick={() => window.location.href = 'mailto:thomasyi2005@gmail.com'}
          />
        </div>
      </div>

      <div className="section__pic-container spotify-enhanced">
        <img 
          src="/assets/sock-profile.png" 
          alt="Thomas Yi profile picture" 
          id="profile-pic" 
        />
        
        <div className="thought-bubble">
          <span className="thought-bubble-text">{thoughtTexts[thoughtTextIndex]}</span><br />
          <small style={{ opacity: 0.7, fontStyle: 'italic' }}>
            (Hover over me to find out!)
          </small>
        </div>

        <SpotifyPlayer />
      </div>
    </section>
  );
}

export default Profile;