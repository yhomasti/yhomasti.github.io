import { useRef } from 'react';


function Animation() {
  return (
    <section id="art">
      <p className="section__text__p1">Check out my...</p>
      <h1 className="title">Animation Portfolio</h1>

      {/* Demo Reel */}
        <div className="demo-reel-container">
        <div className="details-container color-container">
            <div className="article-container">
            <a href="/3d_animations/demo_reel.html">
                <video className="project-video" autoPlay loop muted playsInline>
                <source src="/assets/3D/DemoReelBleh.mp4" type="video/mp4" />
                </video>
            </a>
            </div>
            <h2 className="experience-sub-title">3D Animation Demo Reel</h2>
            <p className="project-skills">Maya 2025, Blender</p>
            <div className="btn-container">
            <button 
                className="btn btn-color-2 project-btn"
                onClick={() => window.location.href = '/3d_animations/demo_reel.html'}
            >
                View Project
            </button>
            </div>
        </div>
        </div>

      {/* Individual Projects */}
      <div className="experience-details-container">
        <div className="art-containers">
            
          <AnimationCard
            title="Fire That Thing!"
            skills="Maya 2025"
            videoSrc="/assets/3D/FireThatThing.mp4"
            link="/3d_animations/fireThatThing.html"  
            />

            <AnimationCard
            title="24 Hour Animation Contest 2025"
            skills="Blender"
            videoSrc="/assets/3D/049 - 301Boats - 24 HOURS Animation Contest for Students 2025 - 24HOURS Animation Contest for Students (1080p, h264, youtube).mp4"
            link="/3d_animations/24Hour2025.html"  
            />
            {/*
            <AnimationCard
            title="11 Second Club May"
            skills="Maya 2025"
            videoSrc="/assets/3D/11 Second Club May FINAL FULL QUALITY.mp4"
            link="/3d_animations/11secondmay.html"  // Changed from /11secondMay
            />

            */}

            <AnimationCard
            title='"An Early April Morning"'
            skills="Maya 2025, Substance Painter, Photoshop"
            videoSrc="/assets/3D/Thomas Yi - Animation 1 Final RERENDER.mp4"
            link="/3d_animations/anim1.html"  
            />
            
            {/*
            <AnimationCard
            title="11 Second Club - March"
            skills="Maya 2025"
            videoSrc="/assets/3D/11SecondClubMarchFINAL.mp4"
            link="/3d_animations/childhoodmisconception.html"  // Changed
            />
            */}

            {/*
            <AnimationCard
            title="AlcoholiCat"
            skills="Blender"
            videoSrc="/assets/3D/UnstableDrunkCatFilm.mp4"
            link="/3d_animations/unstablecat.html"  // Changed
            />
            */}

            <AnimationCard
            title='"Aerial Anarchy"'
            skills="Maya 2025, After Effects, Audition"
            videoSrc="/assets/3D/Talent Show COMPRESSED.mp4"
            link="/3d_animations/aerialanarchy.html"  // Changed
            />
        </div>
      </div>
    </section>
  );
  
}

//reusable animation card component with hover-to-play
function AnimationCard({ title, skills, videoSrc, link }) {
  const videoRef = useRef(null);

  const handleMouseEnter = () => {
    if (videoRef.current) {
      videoRef.current.play().catch(err => {
        console.log('play failed:', err);
      });
    }
  };

  const handleMouseLeave = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  return (
    <div 
      className="details-container color-container"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="article-container">
        <a href={link}>
          <video 
            ref={videoRef}
            className="project-video" 
            loop 
            muted 
            playsInline
            preload="metadata"
            autoPlay
          >
            <source src={videoSrc} type="video/mp4" />
          </video>
        </a>
      </div>
      <h2 className="experience-sub-title">{title}</h2>
      <p className="project-skills">{skills}</p>
      <div className="btn-container">
        <button 
          className="btn btn-color-2 project-btn"
          onClick={() => window.location.href = link}
        >
          View Project
        </button>
      </div>
    </div>
  );
}

export default Animation;