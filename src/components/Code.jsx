import { useState } from 'react';

function Code() {
  const [expandedDemo, setExpandedDemo] = useState(false);

  const toggleLineartDemo = () => {
    setExpandedDemo(!expandedDemo);
    
    if (!expandedDemo) {
      //scroll into view when expanding
      setTimeout(() => {
        const card = document.querySelector('.expanded-card');
        if (card) {
          const cardTop = card.getBoundingClientRect().top + window.scrollY;
          window.scrollTo({ 
            top: cardTop - 150, 
            behavior: 'smooth' 
          });
        }
      }, 100);
    }
  };

  return (
    <section id="code">
      <p className="section__text__p1">Check out my Recent...</p>
      <h1 className="title">Coding Projects</h1>
      
      <div className="experience-details-container">
        <div className="art-containers">
          {/* Lineart Generator with Video Demo */}
          <div className={`details-container color-container ${expandedDemo ? 'expanded-card' : ''}`}>
            <div className="article-container">
              <img 
                src="/assets/coding/rosesLineart.png"
                alt="Lineart Generator"
                className="project-img"
                onClick={toggleLineartDemo}
                style={{ 
                  cursor: 'pointer',
                  display: expandedDemo ? 'none' : 'block'
                }}
              />
              <video 
                className="project-video"
                controls
                style={{ display: expandedDemo ? 'block' : 'none' }}
                autoPlay={expandedDemo}
              >
                <source src="/assets/coding/LineArtDemo.mp4" type="video/mp4" />
              </video>
            </div>
            <h2 className="experience-sub-title">Krita Lineart Generator</h2>
            <p className="project-skills">Python, Krita API, PyQt5, OpenCV</p>
            
            <div className="btn-container">
              <button 
                className="btn btn-color-2 project-btn"
                onClick={toggleLineartDemo}
              >
                {expandedDemo ? 'Close Demo ✕' : 'View Demo'}
              </button>
            </div>
          </div>

          {/* Raytracer */}
          <div className="details-container color-container">
            <div className="article-container">
              <img src="/assets/raytraced_scene_final.png" alt="Raytracer" className="project-img" />
            </div>
            <h2 className="experience-sub-title">Raytracer</h2>
            <p className="project-skills">C++, OpenGL</p>
            <p className="project-meta">Worked on with: Meredith Scott</p>
            <div className="btn-container">
              <button 
                className="btn btn-color-2 project-btn"
                onClick={() => window.location.href = 'https://github.com/meredithscott131/Raytracer'}
              >
                Github
              </button>
            </div>
          </div>

          {/* Pharmacy Sales */}
          <div className="details-container color-container">
            <div className="article-container">
              <img src="/assets/PharmacySalesDemo.png" alt="Pharmacy Sales" className="project-img" />
            </div>
            <h2 className="experience-sub-title">Pharmacy Sales Database</h2>
            <p className="project-skills">R (DBI, ggplotlib, kableExtra), SQL, SQLite, MySQL</p>
            <div className="btn-container">
              <button 
                className="btn btn-color-2 project-btn"
                onClick={() => window.location.href = 'https://github.com/yhomasti/Pharmacy-Sales-Database'}
              >
                Github
              </button>
            </div>
          </div>

          {/* FAA Bird Strikes */}
          <div className="details-container color-container">
            <div className="article-container">
              <img src="/assets/FAABirdStrikeDemo.png" alt="Bird Strike" className="project-img" />
            </div>
            <h2 className="experience-sub-title">FAA Bird Strikes Data Analysis</h2>
            <p className="project-skills">R (DBI, sqldf), SQL, SQLite, MySQL</p>
            <div className="btn-container">
              <button 
                className="btn btn-color-2 project-btn"
                onClick={() => window.location.href = 'https://github.com/yhomasti/FAA-Bird-Strikes'}
              >
                Github
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Code;