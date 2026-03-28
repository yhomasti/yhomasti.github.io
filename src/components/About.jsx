function About() {
  return (
    <section id="about">
      <p className="section__text__p1">Learn more...</p>
      <h1 className="title">About Me!</h1>
      
      {/* Intro Section with WB Image + Bio */}
      <div className="about-intro-section">
        <div className="about-wb-container">
          <img 
            src="/assets/Thats all folks-modified.png" 
            alt="Thomas Yi at Warner Bros" 
            className="about-wb-image"
          />
          <p className="about-current-position">Currently: Software Engineer Intern at Warner Bros. Discovery</p>
        </div>

        <div className="about-bio">
          <p className="about-description">
            Hello! I'm Thomas! I'm a 3D animator and technical artist with a passion for telling stories and bringing characters to life. I love finding creative ways to express ideas through animation, and I believe everyone should express
            their childish side every so often in their work. With a strong background in programming and pipeline development, I bridge the gap between art and technology. I am always looking for a chance to grow and learn more
            while pushing others and myself to be the best version of themselves that they can be.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;