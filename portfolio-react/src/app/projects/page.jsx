import NavBar from "@/components/NavBar/NavBar";
import "./page.css";

const projects = [
  {
    id: 1,
    featured: true,
    image: "/assets/lotus.png",
    alt: "Projeto Lotus",
    title: "LOTUS — Plataforma para Endometriose",
    description:
      "Plataforma de apoio às mulheres com endometriose com foco em acessibilidade e experiência do usuário.",
    tags: ["REACT", "LOVABLE", "TYPESCRIPT", "UI/UX"],
    github: "https://github.com/laurindolucas/lotus",
    deploy: null,
  },
  {
    id: 2,
    image: "/assets/geradorQrcode.png",
    alt: "Gerador de QRCode",
    title: "GERADOR DE QRCODE",
    description: "Gerador de QR Code criado em Python usando Flask.",
    tags: ["PYTHON", "FLASK", "HTML & CSS"],
    github: "https://github.com/laurindolucas/gerador_qrcode",
    deploy: "https://gerador-qrcode-omega.vercel.app/",
  },
  {
    id: 3,
    image: "/assets/sistemaEstacionamento.png",
    alt: "Sistema de estacionamento",
    title: "SISTEMA DE ESTACIONAMENTO",
    description:
      "Sistema completo para gestão de entradas, saídas e controle de estacionamento.",
    tags: ["PYTHON", "STREAMLIT", "SUPABASE"],
    github:
      "https://github.com/laurindolucas/gerenciador-vagas-com-streamlit.git",
    deploy: null,
  },

 
];

function ProjectCard({
  image,
  alt,
  title,
  description,
  tags,
  github,
  deploy,
  featured,
}) {
  return (
    <article
      className={`project-card ${featured ? "project-featured" : ""}`}
    >
      <div className="project-media">
        <img src={image} alt={alt} className="project-img" />

        <div className="project-overlay">
          <div className="project-overlay-links">
            {deploy && (
              <a
                href={deploy}
                target="_blank"
                rel="noopener noreferrer"
                className="overlay-link"
              >
                VER DEPLOY
              </a>
            )}

            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="overlay-link"
            >
              GITHUB
            </a>
          </div>
        </div>
      </div>

      <div className="project-body">
        <div className="project-tags">
          {tags.map((tag) => (
            <span key={tag} className="project-tag">
              {tag}
            </span>
          ))}
        </div>

        <h2 className="project-title">{title}</h2>

        <p className="project-desc">{description}</p>
      </div>
    </article>
  );
}

export default function PageProjects() {
  return (
    <main id="projects-page">
        <NavBar/>
      <div className="projects-page-header">
        <span className="projects-mini-title">PORTFÓLIO</span>

        <h1 className="projects-page-title">
          TODOS OS
          <br />
          <span>PROJETOS</span>
        </h1>

        <p className="projects-page-subtitle">
          Alguns projetos que desenvolvi utilizando tecnologias modernas,
          focando em performance, design e experiência do usuário.
        </p>
      </div>

      <div className="projects-grid">
        {projects.map((project) => (
          <ProjectCard key={project.id} {...project} />
        ))}
      </div>
    </main>
  );
}