function Experience() {
  return (
    <section id="experience">
      <p className="section__text__p1">Take a look at my...</p>
      <h1 className="title">Experience</h1>
      <div className="experience-details-container">
        <div className="about-containers">
          
          {/* Warner Bros Games - NEW */}
          <div className="details-container color-container research-card">
            <h2 className="experience-sub-title">Software Engineering Co-op</h2>
            <p className="experience-company">Warner Bros. Games</p>
            <p className="project-skills">Game Development, Real-Time Systems</p>
            
            <div className="research-content">
              <div className="research-left">
                {/* Game of Thrones Conquest Background Image */}
                <div className="article-container" style={{ position: 'relative' }}>
                  <img 
                    src="/assets/WB_GoT_background.jpg" 
                    alt="Game of Thrones: Conquest"
                    className="project-img"
                    style={{ width: '100%', height: 'auto' }}
                  />
                  {/* WB Discovery Logo Overlay */}
                  <img 
                    src="/assets/Warner_Bros._Discovery_logo.png"
                    alt="Warner Bros Discovery"
                    style={{
                      position: 'absolute',
                      bottom: '10px',
                      right: '10px',
                      width: '120px',
                      height: 'auto',
                      opacity: '0.9'
                    }}
                  />
                </div>
              </div>
              <div className="research-right">
                <ul className="research-details">
                  <li>Spring 2026 Software Engineer Co-op working on Game of Thrones: Conquest</li>
                </ul>
              </div>
            </div>
            
            <div className="research-meta">
              <p><strong>Duration:</strong> January 2026 - June 2026</p>
              <p><strong>Company:</strong> Warner Bros. Games</p>
            </div>
          </div>

          {/* AR Research - Existing */}
          <div className="details-container color-container research-card">
            <h2 className="experience-sub-title">Augmented Reality Research Assistant Co-op</h2>
            <p className="experience-company">Real-Time AR Scene Alignment</p>
            <p className="project-skills">Python, C#, FastAPI, PyTorch, OpenCV, NumPy, Unity, Microsoft Hololens 2</p>
            
            <div className="research-content">
              <div className="research-left">
                <div className="article-container">
                  <video className="project-video" loop muted playsInline>
                    <source src="C:\Users\Lu\Desktop\Github\thomas-portfolio-react\public\research\Screen Recording 2025-10-20 130337.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
              </div>
              <div className="research-right">
                <ul className="research-details">
                  <li>Researching in Northeastern University's <a href="https://realitydesign.sites.northeastern.edu/" target="_blank" rel="noopener noreferrer" className="research-link">Reality Design Lab</a>, working on a project aimed to create real time AI-driven camera localization to enable shared spatial alignment across multiple devices without GPS.</li>
                  <li>Developing a real-time pose estimation server using FastAPI and <a href="https://vgg-t.github.io/" target="_blank" rel="noopener noreferrer" className="research-link">VGGT</a> (Visual Geometry Grounded Transformer) for multi-device localization.</li>
                  <li>Implementing cross-device spatial synchronization, establishing a shared coordinate system for collaborative AR scenes.</li>
                  <li>Designing debugging and visualization tools in Unity (pose HUDs, coordinate axes, origin spheres) for real-time alignment feedback.</li>
                </ul>
              </div>
            </div>
            
            <div className="research-meta">
              <p><strong>Duration:</strong> September 2025 - December 2025</p>
              <p><strong>Institution:</strong> Northeastern University</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;