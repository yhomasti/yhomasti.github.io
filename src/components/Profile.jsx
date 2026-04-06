import { useState } from 'react';

const base = import.meta.env.BASE_URL;

function Profile() {
  const [reelExpanded, setReelExpanded] = useState(false);

  const toggleReel = () => {
    setReelExpanded(!reelExpanded);
  };

  return (
    <section id="profile">
      <div className="profile-top-row">

        {/* Centered Intro Text */}
        <div className="profile-intro-centered">
          <p className="section__text__p1">Hello! I am...</p>
          <h1 className="title">Thomas Yi</h1>
          <p className="section__text__p2">3D Animator & Technical Artist</p>
          
          <div className="profile-actions">
            <button 
              className="btn btn-color-1" 
              onClick={() => window.location.href = '#contact'}
            >
              Contact
            </button>
            <div className="socials-row">
              <img 
                src={`${base}assets/linkedin.png`}
                alt="My LinkedIn profile"
                className="icon" 
                onClick={() => window.location.href = 'https://www.linkedin.com/in/yhomasti/'}
              />
              <img 
                src={`${base}assets/email.png`}
                alt="Email me!"
                className="icon" 
                onClick={() => window.location.href = 'mailto:thomasyi2005@gmail.com'}
              />
            </div>
          </div>
        </div>

        <div className="about-wb-container">
            <img 
              src={`${base}assets/Thats all folks-modified.png`}
              alt="Thomas Yi at Warner Bros" 
              className="about-wb-image"
            />
            <p className="about-current-position">Currently: Tools Programming Intern at Warner Bros. Games</p>
        </div>
      </div>

      {/* Two Cards - Animation + TD Reel */}
      <div className="profile-cards-row">
        {/* 3D Animation Card */}
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
              <source src={`${base}assets/3D/FireThatThing.mp4`} type="video/mp4" />
            </video>
          </div>

          <p className="card-cta">Click here to check out my animation portfolio →</p>
        </div>

        {/* TD Demo Reel Card */}
        <div className={`profile-nav-card tech-card ${reelExpanded ? 'reel-expanded' : ''}`}>
          <h3>Technical Direction Demo Reel</h3>
          <p className="card-subtitle">Pipeline Tools & Development</p>

          {!reelExpanded ? (
            <div className="card-video-container" onClick={toggleReel} style={{ cursor: 'pointer' }}>
              <img
                src="https://img.youtube.com/vi/VgLU79oU2dI/maxresdefault.jpg"
                alt="TD Demo Reel Thumbnail"
                className="youtube-thumbnail"
              />
              <div className="play-button-overlay">▶</div>
            </div>
          ) : (
            <div className="card-youtube-embed">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/VgLU79oU2dI?autoplay=1&mute=1&loop=1&playlist=VgLU79oU2dI"
                title="Technical Direction Demo Reel"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          )}

          <div className="reel-buttons">
            <button
              className="btn btn-color-2 project-btn"
              onClick={(e) => { e.stopPropagation(); toggleReel(); }}
            >
              {reelExpanded ? 'Close Reel ✕' : 'Watch Reel'}
            </button>
            <button
              className="btn btn-color-2 project-btn"
              onClick={(e) => { e.stopPropagation(); window.location.href = '#code'; }}
            >
              View Projects →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Profile;