import "./Projects.css"
import Link from "next/link";

const projects = [
    {
        id: 1,
        featured: true,
        image: "assets/lotus.png",
        alt: "Projeto Lotus",
        title: "LOTUS — Plataforma para Endometriose",
        description:
            "Plataforma de apoio às mulheres com endometriose. Projeto desenvolvido com foco em acessibilidade e experiência do usuário.",
        tags: ["REACT", "LOVABLE", "TYPESCRIPT", "UI/UX"],
        links: [
            {
                label: "GITHUB",
                url: "https://github.com/laurindolucas/lotus",
            },
        ],
        revealClass: "",
        mediaId: "project-destaque",
    },
    {
        id: 2,
        image: "assets/geradorQrcode.png",
        alt: "Gerador de QRCode",
        title: "GERADOR DE QRCODE",
        description: "Gerador de QR Code criado em Python usando Flask.",
        tags: ["Python", "Flask", "HTML & CSS"],
        links: [
            {
                label: "VER DEPLOY",
                url: "https://gerador-qrcode-omega.vercel.app/",
            },
            {
                label: "GITHUB",
                url: "https://github.com/laurindolucas/gerador_qrcode",
            },
        ],
        revealClass: "reveal-delay-1",
    },
    {
        id: 3,
        image: "assets/sistemaEstacionamento.png",
        alt: "Sistema de estacionamento",
        title: "SISTEMA DE ESTACIONAMENTO",
        description:
            "Sistema completo para gestão de entradas, saídas e controle de estacionamento.",
        tags: ["Python", "Streamlit", "Supabase"],
        links: [
            {
                label: "GITHUB",
                url: "https://github.com/laurindolucas/gerenciador-vagas-com-streamlit.git",
            },
        ],
        revealClass: "reveal-delay-2",
    },


];

function ProjectCard({
    featured,
    image,
    alt,
    title,
    description,
    tags,
    links,
    revealClass,
    mediaId,
}) {
    return (
        <article
            className={`project-card ${featured ? "project-featured" : ""} reveal ${revealClass}`}
        >
            <div className="project-media" id={mediaId}>
                <img src={image} alt={alt} className="project-img" />

                <div className="project-overlay">
                    <div className="project-overlay-links">
                        {links.map((link) => (
                            <a
                                key={link.url}
                                href={link.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="overlay-link"
                            >
                                {link.label}
                            </a>
                        ))}
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

                <h3 className="project-title">{title}</h3>

                <p className="project-desc">{description}</p>
            </div>
        </article>
    );
}

export default function Projects() {
    return (
        <section id="projects">
            <h2 className="section-title reveal">
                PROJETOS
                <br />
                <span className="outline">RECENTES</span>
            </h2>

            <div className="projects-grid">
                {projects.map((project) => (
                    <ProjectCard key={project.id} {...project} />
                ))}
            </div>

            <div style={{ textAlign: "center", marginTop: "48px" }}>
                <Link href="/projects" className="btn-outline">
                    VER TODOS
                </Link>
            </div>
        </section>
    );
}