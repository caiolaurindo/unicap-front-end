import "./Skills.css"
const skillsData = [
  {
    id: 1,
    title: "FRONT-END",
    revealClass: "",
    skills: [
      { name: "JavaScript", level: 0.85 },
      { name: "HTML", level: 0.95 },
      { name: "CSS", level: 0.9 },
      { name: "React", level: 0.7 },
      { name: "Tailwind", level: 0.8 },
    ],
  },
  {
    id: 2,
    title: "BACK-END",
    revealClass: "reveal-delay-1",
    skills: [
      { name: "Python", level: 0.8 },
      { name: "PHP", level: 0.65 },
      { name: "Java", level: 0.6 },
      { name: "MySQL", level: 0.75 },
      { name: "PostgreSQL", level: 0.7 },
    ],
  },
  {
    id: 3,
    title: "FERRAMENTAS",
    revealClass: "reveal-delay-2",
    skills: [
      { name: "GitHub", level: 0.9 },
      { name: "Figma", level: 0.8 },
      { name: "Jira", level: 0.7 },
      { name: "Vercel", level: 0.85 },
    ],
  },
];

function SkillItem({ name, level }) {
  return (
    <div className="skill-item">
      <div className="skill-dot" />

      <span className="skill-name">{name}</span>

      <div className="skill-bar">
        <div
          className="skill-fill"
          style={{ "--w": level }}
        />
      </div>
    </div>
  );
}

function SkillGroup({ title, skills, revealClass }) {
  return (
    <div className={`skill-group reveal ${revealClass}`}>
      <h3>{title}</h3>

      <div className="skill-list">
        {skills.map((skill) => (
          <SkillItem
            key={skill.name}
            name={skill.name}
            level={skill.level}
          />
        ))}
      </div>
    </div>
  );
}

export default function Skills() {
  return (
    <section id="skills">
      <h2 className="section-title reveal">
        MINHAS
        <br />
        <span className="blue">SKILLS</span>
      </h2>

      <div className="skills-layout">
        {skillsData.map((group) => (
          <SkillGroup
            key={group.id}
            title={group.title}
            skills={group.skills}
            revealClass={group.revealClass}
          />
        ))}
      </div>
    </section>
  );
}