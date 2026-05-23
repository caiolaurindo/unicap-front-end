import "./Experience.css"
const experiences = [
  {
    id: 1,
    year: "2024 — 2025",
    organization: "Infinity School",
    role: "DESENVOLVIMENTO FULL STACK COM IA",
    description:
      "Comecei do zero e evoluí muito, aprendendo Python com Django e Flask, front-end com HTML, CSS e JavaScript, banco de dados e UI/UX. Esse curso foi o ponto de virada que me fez realmente me apaixonar por tecnologia e decidir seguir essa carreira.",
    revealClass: "",
  },
  {
    id: 2,
    year: "03/2025 — ATUAL",
    organization: "Unicap",
    role: "SISTEMAS PARA INTERNET — PARCERIA PORTO DIGITAL",
    description:
      "Ingresso na Universidade Católica de Pernambuco para me aprofundar ainda mais na área. O curso é realizado em parceria com o Porto Digital, proporcionando residência tecnológica com contato com empresas e desafios reais do mercado.",
    revealClass: "reveal-delay-1",
  },
  {
    id: 3,
    year: "12/2025 — 05/2026",
    organization: "Infinity School",
    role: "INSTRUTOR DE PROGRAMAÇÃO",
    description:
      "Atuei como instrutor de programação, com mais de 150 aulas ministradas em desenvolvimento Full-Stack com IA. Auxilio alunos no aprendizado de fundamentos técnicos, boas práticas de código e resolução de problemas reais do desenvolvimento.",
    revealClass: "reveal-delay-2",
  },
  {
    id: 4,
    year: "02/2026 — 05/2026",
    organization: "Porto Digital",
    role: "MONITOR LABORATÓRIO DO PORTO DIGITAL",
    description:
      "Atuei como monitor do Laboratório de Inovação do Porto Digital, apoiando atividades da Residência Tecnológica, eventos e o suporte técnico aos laboratórios. A monitoria contribui para a organização das ações do semestre e para o fortalecimento do ecossistema de inovação.",
    revealClass: "reveal-delay-2",
  },
];

function TimelineItem({
  year,
  organization,
  role,
  description,
  revealClass,
}) {
  return (
    <article className={`timeline-item reveal ${revealClass}`}>
      <span className="timeline-year">{year}</span>

      <h3 className="timeline-org">{organization}</h3>

      <h4 className="timeline-role">{role}</h4>

      <p className="timeline-desc">{description}</p>
    </article>
  );
}

export default function Experience() {
  return (
    <section id="experience">
      <h2 className="section-title reveal">
        MINHA
        <br />
        <span className="blue">JORNADA</span>
      </h2>

      <div className="timeline">
        {experiences.map((experience) => (
          <TimelineItem
            key={experience.id}
            year={experience.year}
            organization={experience.organization}
            role={experience.role}
            description={experience.description}
            revealClass={experience.revealClass}
          />
        ))}
      </div>
    </section>
  );
}