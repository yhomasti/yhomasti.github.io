function About() {
  return (
    <section id="about">
      <p className="section__text__p1">Learn more...</p>
      <h1 className="title">About Me!</h1>
      <div className="section-container">
        <div className="section__pic-container">
          <img src="/assets/thomas-profile1-circle.png" alt="Profile picture" className="about-pic" />
        </div>
        <div className="about-details-container">
          <div className="about-containers">
            <div className="details-container">
              {/* Small centered icon */}
              <img 
                src="/assets/sock-profile.png" 
                alt="Experience icon" 
                style={{ 
                  width: '50px', 
                  height: '50px', 
                  objectFit: 'contain',
                  margin: '0 auto rem auto',
                  display: 'block'
                }}
              />
              <h3>About Thomas:</h3>
              <p>I'm Thomas Yi, and I'm a student at Northeastern University pursuing a combined degree in Computer Science and Media Arts. I have a passion for telling stories and finding ways to express them, and I believe everyone should express their childish side every so often in their work. I am always looking for a chance to grow and learn more while pushing others and myself to be the best version of themselves that they can be.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;