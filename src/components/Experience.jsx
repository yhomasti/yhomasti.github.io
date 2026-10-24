import '../styles/experience.css';

const base = import.meta.env.BASE_URL;

// Add new roles to the top of this list; the newest one shows first.
const experiences = [
  {
    id: 'skydance',
    title: 'Jr. Game Engineering Intern',
    company: 'Skydance Interactive',
    duration: 'Jun 2026 - Oct 2026',
    skills: 'C++, Unreal Engine, Perforce',
    logo: {
      src: `${base}assets/ParaSkyCorp25_BrandMark_Wordmark_logos_2025/Brand%20Mark%20Logo/Raster/ParaSkyCorp25_BrandMark_Logo_Navy_RGB.png`,
      alt: 'Paramount Skydance logo',
    },
    art: {
      src: `${base}assets/Behemoth%20BG%20Art.jpeg`,
      alt: 'Skydance’s Behemoth key art',
    },
    details: [
      'Worked in C++ and Unreal Engine across Gameplay, Story, and Animation teams',
    ],
  },
  {
    id: 'wbgames',
    title: 'Software Engineering Co-op',
    company: 'Warner Bros. Games',
    duration: 'Jan 2026 - May 2026',
    skills: 'Tools Programming, C#, Unity3D, Javascript, .NET, MS Office',
    logo: {
      src: `${base}assets/Warner-Brothers-Logo.png`,
      alt: 'Warner Bros. logo',
    },
    art: {
      src: `${base}assets/GOTD_Key_Art.png`,
      alt: 'Game of Thrones key art',
    },
    details: [
      'Worked as a Tools Programmer on the Developer Experience and Tooling team to support artists, designers, and engineers across the studio.',
      'Credited on Game of Thrones: Dragonfire',
      
    ],
  },
  {
    id: 'realitydesign',
    title: 'Augmented Reality Research Assistant Co-op',
    company: 'Reality Design Lab @ Northeastern University',
    duration: 'Aug 2025 - Dec 2025',
    skills: 'Python, FastAPI, C#, Unity, HoloLens 2',
    logo: {
      src: `${base}assets/RealityDesignLogo.png`, 
      alt: 'Northeastern University logo',
    },
    art: {
      //video: `${base}research/Screen%20Recording%202025-10-20%20130337.mp4`,
      src: `${base}assets/Northeastern-University-Logo.png`,
      alt: 'Real-time AR scene alignment demo',
    },
    details: [
      'Built a real-time FastAPI backend synchronizing pose data across 3 concurrent HoloLens clients in C#/Unity',
      
    ],
  },
];

function Experience() {
  return (
    <section id="experience">
      <p className="section__text__p1">Take a look at my...</p>
      <h1 className="title">Experience</h1>
      <ol className="exp-list">
        {experiences.map((exp) => (
          <ExperienceRow key={exp.id} {...exp} />
        ))}
      </ol>
    </section>
  );
}

function ExperienceRow({ title, company, duration, skills, logo, art, details }) {
  return (
    <li className="exp-row">
      <div className="exp-logo">
        <img src={logo.src} alt={logo.alt} />
      </div>

      <div className="exp-body">
        <div className="exp-heading">
          <h2 className="exp-title">{title}</h2>
          <span className="exp-dates">{duration}</span>
        </div>
        <p className="exp-company">{company}</p>
        <p className="exp-skills">{skills}</p>
        <ul className="exp-details">
          {details.map((line) => (
            <li key={line}>{line}</li>
          ))}
        </ul>
      </div>

      <img className="exp-art" src={art.src} alt={art.alt} />
    </li>
  );
}

export default Experience;