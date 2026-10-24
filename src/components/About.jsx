const base = import.meta.env.BASE_URL;

function About() {
  return (
    <section id="about">
      <p className="section__text__p1">Learn more...</p>
      <h1 className="title">About Me!</h1>
      
      {/* Intro Section with WB Image + Bio */}
      <div className="about-intro-section">
        <div className="about-wb-container">
          <img 
            src={`${base}assets/thomas-profile1-circle.png`}
            alt="Thomas Yi at Warner Bros" 
            className="about-wb-image"
          />
          {/* <p className="about-current-position">Currently: Software Engineer Intern at Warner Bros. Discovery</p> */}
        </div>

        <div className="about-bio">
          <p className="about-description">
            Hello! I'm Thomas! I'm a 3D animator and technical artist with a passion for 
            telling stories and bringing characters to life. I love finding creative ways 
            to express ideas through animation, and I believe everyone should express 
            their childish side every so often in their work.
          </p>
          <p className="about-description">
            I've gained industry experience in entertainment and developed a background in 
            programming and pipeline development, but I've always been fascinated in the 
            world of animation and the creative side of production. Previously, I've been involved in the 
            game industry with Skydance and Warner Bros. Games, and having 
            the chance to learn about entertainment while picking up character animation 
            mentorship from industry professionals has been invaluable for my growth, both as a programmer and an artist. 
            I'm always looking for a chance to learn, and hope to see myself continue to 
            grow with opportunities in the world of entertainment and animation, whether I can play a technical or creative role in the pipeline.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;