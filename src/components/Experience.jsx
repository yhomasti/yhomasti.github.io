import '../styles/experience.css';

const base = import.meta.env.BASE_URL;

// Add new roles to the top of this list; the newest one shows first.
const experiences = [
  {
    id: 'skydance',
    title: 'Jr. Game Engineering Intern',
    company: 'Skydance Interactive',
    duration: 'Jun 2026 - Oct 2026', // TODO: confirm dates
    skills: 'Game Engineering, Gameplay Systems', // TODO: swap in your actual stack (e.g. Unreal, C++)
    logo: {
      src: `${base}assets/ParaSkyCorp25_BrandMark_Wordmark_logos_2025/Brand%20Mark%20Logo/Raster/ParaSkyCorp25_BrandMark_Logo_Navy_RGB.png`,
      alt: 'Paramount Skydance logo',
    },
    art: {
      src: `${base}assets/Behemoth%20BG%20Art.jpeg`,
      alt: 'Skydance’s Behemoth key art',
    },
    details: [
      //replace with what you actually worked on
      'Worked in C++ and Unreal Engine across Gameplay, Story, and Animation teams',
    ],
  },
  {
    id: 'wbgames',
    title: 'Software Engineering Intern',
    company: 'Warner Bros. Games',
    duration: 'Jan 2026 - May 2026',
    skills: 'Tools Programming, Developer Experience',
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