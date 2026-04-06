const base = import.meta.env.BASE_URL;

function Experience() {
  return (
    <section id="experience">
      <p className="section__text__p1">Take a look at my...</p>
      <h1 className="title">Experience</h1>
      <div className="experience-details-container">
        <div className="about-containers" style={{ display: 'flex', flexDirection: 'column', gap: '2rem', gridTemplateColumns: 'none' }}>
          
          {/* Warner Bros Games */}
          <div className="details-container color-container research-card">
            <h2 className="experience-sub-title">Software Engineering Co-op</h2>
            <p className="experience-company">Warner Bros. Discovery</p>
            <p className="project-skills">Game Development, Real-Time Systems</p>
            
            <div className="research-content">
              <div className="research-left">
                {/* Two images side by side */}
                <div className="article-container" style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                  
                  <img 
                    src={`${base}assets/Warner_Bros._Discovery_logo.png`}
                    alt="Warner Bros Discovery"
                    style={{ width: '50%', height: 'auto', objectFit: 'contain' }}
                  />
                  <img 
                    src={`${base}assets/WB_GoT_background.jpg`}
                    alt="Game of Thrones: Conquest"
                    className="project-img"
                    style={{ width: '50%', height: 'auto', objectFit: 'cover' }}
                  />
                </div>
              </div>
              <div className="research-right">
                <ul className="research-details">
                  <li>Spring 2026 Software Engineer Co-op working as part of the Developer Experience and Tooling team.</li>
                </ul>
              </div>
            </div>
            
            <div className="research-meta">
              <p><strong>Duration:</strong> January 2026 - May 2026</p>
              <p><strong>Company:</strong> Warner Bros. Discovery</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;