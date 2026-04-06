import { useState } from 'react';

const base = import.meta.env.BASE_URL;

function Code() {
  const [expandedDemo, setExpandedDemo] = useState(false);
  const [expandedMaya, setExpandedMaya] = useState(false);

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

  const toggleMayaDemo = () => {
    setExpandedMaya(!expandedMaya);
    
    if (!expandedMaya) {
      //scroll into view when expanding
      setTimeout(() => {
        const mayaCard = document.querySelector('.maya-expanded-card');
        if (mayaCard) {
          const cardTop = mayaCard.getBoundingClientRect().top + window.scrollY;
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

          {/* AR Research Project */}
          <div className="details-container color-container">
            <div className="article-container">
              <a href={`${base}code_projects/ar_research.html`}>
                <video
                  className="project-video"
                  autoPlay
                  loop
                  muted
                  playsInline
                >
                  <source src={`${base}research/Screen Recording 2025-10-20 130337.mp4`} type="video/mp4" />
                </video>
              </a>
            </div>
            <h2 className="experience-sub-title">Real-Time AR Scene Alignment</h2>
            <p className="project-skills">Python, C#, FastAPI, PyTorch, OpenCV, NumPy, Unity, HoloLens 2</p>
            <div className="btn-container">
              <button
                className="btn btn-color-2 project-btn"
                onClick={() => window.location.href = `${base}code_projects/ar_research.html`}
              >
                View Project
              </button>
            </div>
          </div>

          {/* Maya Animation Offset Editor*/}
          <div className={`details-container color-container ${expandedMaya ? 'maya-expanded-card' : ''}`}>
            <div className="article-container">
              <video 
                className="project-video"
                autoPlay
                loop
                muted
                playsInline
                controls={expandedMaya}
                style={{ 
                  cursor: expandedMaya ? 'default' : 'pointer',
                  width: '100%'
                }}
                onClick={() => !expandedMaya && toggleMayaDemo()}
              >
                <source src={`${base}assets/coding/Twinning Plugin Compressed.mp4`} type="video/mp4" />
              </video>
            </div>
            <h2 className="experience-sub-title">Maya Animation Offset Editor Plug-in</h2>
            <p className="project-skills">Python, Maya API</p>
            
            <div className="btn-container">
              {/* 
              <button 
                className="btn btn-color-2 project-btn"
                onClick={toggleMayaDemo}
              >
                {expandedMaya ? 'Close Demo ✕' : 'View Demo'}
              </button>
              */}
              <button 
                className="btn btn-color-2 project-btn"
                onClick={() => window.location.href = 'https://github.com/yhomasti/Maya-Twinning-Offset-Tool'}
              >
                Github
              </button>
            </div>
          </div>

          {/* Lineart Generator with Video Demo */}
          <div className={`details-container color-container ${expandedDemo ? 'expanded-card' : ''}`}>
            <div className="article-container">
              <img 
                src={`${base}assets/coding/rosesLineart.png`}
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
                <source src={`${base}assets/coding/LineArtDemo.mp4`} type="video/mp4" />
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
              <img src={`${base}assets/raytraced_scene_final.png`} alt="Raytracer" className="project-img" />
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
              <img src={`${base}assets/PharmacySalesDemo.png`} alt="Pharmacy Sales" className="project-img" />
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
               {/* 
          
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
          */}
        </div>
      </div>
    </section>
  );
}

export default Code;