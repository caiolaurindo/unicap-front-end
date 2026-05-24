"use client";

import { useEffect, useMemo, useState } from "react";
import NavBar from "@/components/NavBar/NavBar";
import "./page.css";

const projects = [
  {
    id: 1,
    image: "/toDo.png",
    alt: "Sistema de gerenciamento de tarefas",
    title: "SISTEMA DE GERENCIAMENTO DE TAREFAS",
    description:
      "Sistema de gerenciamento de tarefas desenvolvido com React e TypeScript, permitindo criar, editar e remover tarefas, além de acompanhar métricas de produtividade.",
    tags: ["HTML", "CSS", "TYPESCRIPT", "REACT", "TAILWIND"],
    github:
      "https://github.com/laurindolucas/React-trilha-porto-digital-rocketseat/tree/main/todo",
    deploy: null,
  },

  {
    id: 2,
    image: "/mgt.png",
    alt: "MGT Website",
    title: "MGT — WEBSITE CORPORATIVO",
    description:
      "Website corporativo moderno desenvolvido para uma empresa alemã com foco em experiência do usuário, identidade visual e responsividade.",
    tags: ["HTML", "CSS", "JAVASCRIPT"],
    github: "https://github.com/laurindolucas/MGT-WEBSITE",
    deploy: "https://mgt-azure.vercel.app/index.html",
  },

  {
    id: 3,
    image: "/criticodesofa.png",
    alt: "Crítico de Sofá",
    title: "CRÍTICO DE SOFÁ",
    description:
      "Plataforma full stack de reviews de filmes com sistema de login, dashboard, avaliações, comentários e gerenciamento completo de filmes.",
    tags: ["PHP", "MYSQL", "HTML", "CSS"],
    github: "https://github.com/laurindolucas/CriticoDeSofa",
    deploy: null,
  },

  {
    id: 4,
    image: "/LOTUS.jpg",
    alt: "Projeto Lotus",
    title: "LOTUS — PLATAFORMA PARA ENDOMETRIOSE",
    description:
      "Projeto desenvolvido na Residência Tecnológica do Porto Digital para apoiar mulheres com endometriose através de tecnologia e acessibilidade.",
    tags: ["REACT", "TYPESCRIPT", "SUPABASE", "LOVABLE"],
    github: "https://github.com/laurindolucas/lotus",
    deploy: null,
  },

  {
    id: 5,
    image: "/sulamittaLima.png",
    alt: "Landing Page Sulamitta Lima",
    title: "SULAMITTA LIMA — LANDING PAGE",
    description:
      "Landing page profissional criada para palestrante e professora com foco em autoridade, comunicação e presença digital.",
    tags: ["HTML", "CSS", "JAVASCRIPT"],
    github:
      "https://github.com/laurindolucas/Sulamita-Lima-Landing-Page",
    deploy: "https://sulamittalima.vercel.app/",
  },

  {
    id: 6,
    image: "/buscatempo.png",
    alt: "Busca Clima",
    title: "BUSCA CLIMA",
    description:
      "Aplicação que integra APIs de localização e clima para fornecer previsões meteorológicas, histórico de buscas e favoritos.",
    tags: ["JAVASCRIPT", "HTML", "CSS", "API"],
    github: "https://github.com/laurindolucas/BuscaTempo-",
    deploy: "https://busca-tempo-eight.vercel.app/",
  },

  {
    id: 7,
    image: "/gerenciadorEstacionamento.png",
    alt: "Sistema de estacionamento",
    title: "GERENCIADOR DE ESTACIONAMENTO",
    description:
      "Sistema desenvolvido em Python para gerenciamento de vagas, entradas e saídas de veículos utilizando Streamlit e Supabase.",
    tags: ["PYTHON", "STREAMLIT", "SUPABASE", "POSTGRESQL"],
    github:
      "https://github.com/laurindolucas/gerenciador-vagas-com-streamlit.git",
    deploy: null,
  },

  {
    id: 8,
    image: "/qrcode.png",
    alt: "Gerador de QRCode",
    title: "GERADOR DE QRCODE",
    description:
      "Sistema para geração rápida e segura de QR Codes utilizando Flask no backend.",
    tags: ["PYTHON", "FLASK", "HTML", "CSS"],
    github: "https://github.com/laurindolucas/gerador_qrcode",
    deploy: "https://gerador-qrcode-omega.vercel.app/",
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
}) {
  return (
    <article className="project-card">
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

function GithubRepoItem({ repo }) {
  return (
    <a
      href={repo.html_url}
      target="_blank"
      rel="noopener noreferrer"
      className="github-repo-item"
    >
      <div className="github-repo-top">
        <h3>{repo.name}</h3>

        <span className="github-language">
          {repo.language || "CODE"}
        </span>
      </div>

      <p>
        {repo.description || "Repositório público hospedado no GitHub."}
      </p>

      <div className="github-repo-bottom">
        <span>⭐ {repo.stargazers_count}</span>

        <span>
          {new Date(repo.updated_at).toLocaleDateString("pt-BR")}
        </span>
      </div>
    </a>
  );
}

export default function PageProjects() {
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    async function fetchRepos() {
      try {
        const response = await fetch(
          "https://api.github.com/users/caiolaurindo/repos"
        );

        const data = await response.json();

        const uniqueRepos = data.filter(
          (repo, index, self) =>
            index ===
            self.findIndex(
              (r) => r.name.toLowerCase() === repo.name.toLowerCase()
            )
        );

        const filteredRepos = uniqueRepos
          .filter((repo) => !repo.fork)
          .sort(
            (a, b) =>
              new Date(b.updated_at) -
              new Date(a.updated_at)
          )
          .slice(0, 5);

        setRepos(filteredRepos);
      } catch (error) {
        console.log(error);
      }
    }

    fetchRepos();
  }, []);

  const uniqueProjects = useMemo(() => {
    return projects.filter(
      (project, index, self) =>
        index ===
        self.findIndex(
          (p) =>
            p.title.toLowerCase() ===
            project.title.toLowerCase()
        )
    );
  }, []);

  return (
    <main id="projects-page">
      <NavBar />

      <div className="projects-page-header">
        <span className="projects-mini-title">
          PORTFÓLIO
        </span>

        <h1 className="projects-page-title">
          TODOS OS
          <br />
          <span>PROJETOS</span>
        </h1>

        <p className="projects-page-subtitle">
          Alguns projetos que desenvolvi utilizando
          tecnologias modernas, focando em performance,
          design e experiência do usuário.
        </p>
      </div>

      <div className="projects-grid">
        {uniqueProjects.map((project) => (
          <ProjectCard key={project.id} {...project} />
        ))}
      </div>

      <section className="github-section">
        <div className="github-header">
          <div>

            <h2 className="github-title">
              REPOSITÓRIOS DO GITHUB
            </h2>
          </div>

          <a
            href="https://github.com/caiolaurindo"
            target="_blank"
            rel="noopener noreferrer"
            className="github-profile-link"
          >
            VER PERFIL
          </a>
        </div>

        <div className="github-repo-list">
          {repos.map((repo) => (
            <GithubRepoItem
              key={repo.id}
              repo={repo}
            />
          ))}
        </div>
      </section>
    </main>
  );
}