"use client";

import { useEffect, useMemo, useState } from "react";
import NavBar from "@/components/NavBar/NavBar";
import "./page.css";

const projects = [
  {
    id: 1,
    image: "/LOTUS.jpg",
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
    image: "/qrcode.png",
    alt: "Gerador de QRCode",
    title: "GERADOR DE QRCODE",
    description: "Gerador de QR Code criado em Python usando Flask.",
    tags: ["PYTHON", "FLASK", "HTML & CSS"],
    github: "https://github.com/laurindolucas/gerador_qrcode",
    deploy: "https://gerador-qrcode-omega.vercel.app/",
  },
  {
    id: 3,
    image: "/gerenciadorEstacionamento.png",
    alt: "Sistema de estacionamento",
    title: "SISTEMA DE ESTACIONAMENTO",
    description:
      "Sistema completo para gestão de entradas, saídas e controle de estacionamento.",
    tags: ["PYTHON", "STREAMLIT", "SUPABASE"],
    github:
      "https://github.com/laurindolucas/gerenciador-vagas-com-streamlit.git",
    deploy: null,
  },
  {
    id: 4,
    image: "/gerenciadorEstacionamento.png",
    alt: "Sistema de estacionamento",
    title: "SISTEMA DE ESTACIONAMENTO",
    description:
      "Sistema completo para gestão de entradas, saídas e controle de estacionamento.",
    tags: ["PYTHON", "STREAMLIT", "SUPABASE"],
    github:
      "https://github.com/laurindolucas/gerenciador-vagas-com-streamlit.git",
    deploy: null,
  },
  {
    id: 5,
    image: "/gerenciadorEstacionamento.png",
    alt: "Sistema de estacionamento",
    title: "SISTEMA DE ESTACIONAMENTO",
    description:
      "Sistema completo para gestão de entradas, saídas e controle de estacionamento.",
    tags: ["PYTHON", "STREAMLIT", "SUPABASE"],
    github:
      "https://github.com/laurindolucas/gerenciador-vagas-com-streamlit.git",
    deploy: null,
  },
  {
    id: 6,
    image: "/gerenciadorEstacionamento.png",
    alt: "Sistema de estacionamento",
    title: "SISTEM DE ESTACIONAMENTO",
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