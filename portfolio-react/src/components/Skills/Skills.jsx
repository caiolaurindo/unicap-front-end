import "./Skills.css";

const skillsData = [
  {
    id: 1,
    title: "FRONT-END",
    revealClass: "",
    skills: [
      "JavaScript",
      "HTML",
      "CSS",
      "React",
      "Tailwind",
      "Next.js",
    ],
  },
  {
    id: 2,
    title: "BACK-END",
    revealClass: "reveal-delay-1",
    skills: [
      "Python",
      "PHP",
      "Java",
      "MySQL",
      "PostgreSQL",
      "Flask",
    ],
  },
  {
    id: 3,
    title: "FERRAMENTAS",
    revealClass: "reveal-delay-2",
    skills: [
      "GitHub",
      "Figma",
      "Jira",
      "Vercel",
      "Supabase",
      "VS Code",
    ],
  },
];

function SkillCard({ title, skills, revealClass }) {
  return (
    <div className={`skill-card reveal ${revealClass}`}>
      <div className="skill-card-header">
        <span className="skill-line"></span>

        <h3>{title}</h3>
      </div>

      <div className="skills-tags">
        {skills.map((skill) => (
          <div key={skill} className="skill-tag">
            <span className="skill-glow"></span>

            {skill}
          </div>
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
          <SkillCard
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