"use client";
import "./Contact.css"
const socialLinks = [
  {
    id: 1,
    icon: "in",
    label: "LinkedIn",
    url: "https://www.linkedin.com/in/caio-laurindo-4b676b31b/",
  },
  {
    id: 2,
    icon: "gh",
    label: "GitHub",
    url: "https://github.com/laurindolucas",
  },
  {
    id: 3,
    icon: "ig",
    label: "Instagram @laurindo.dev",
    url: "https://www.instagram.com/laurindo.dev/",
  },
  {
    id: 4,
    icon: "yt",
    label: "YouTube",
    url: "https://www.youtube.com/@caiolucass99",
  },
  {
    id: 5,
    icon: "tt",
    label: "TikTok @laurindodev",
    url: "https://www.tiktok.com/@laurindodev",
  },
];

function SocialLink({ icon, label, url }) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="social-link"
    >
      <span className="s-icon">{icon}</span>
      {label}
    </a>
  );
}

export default function Contact() {
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Mensagem enviada!");
  };

  return (
    <section id="contact">
      <h2 className="section-title reveal">
        ENTRE EM
        <br />
        <span className="outline">CONTATO</span>
      </h2>

      <div className="contact-layout">
        <div className="contact-info reveal">
          <h3>Vamos construir algo juntos?</h3>

          <p>
            Estou disponível para oportunidades. Se você tem uma ideia,
            eu tenho o código.
          </p>

          <div className="social-links">
            {socialLinks.map((social) => (
              <SocialLink
                key={social.id}
                icon={social.icon}
                label={social.label}
                url={social.url}
              />
            ))}
          </div>
        </div>

        <form
          className="contact-form reveal reveal-delay-1"
          onSubmit={handleSubmit}
        >
          <div className="form-row">
            <div className="form-field">
              <label htmlFor="name">NOME</label>

              <input
                id="name"
                type="text"
                placeholder="Seu nome"
                required
              />
            </div>

            <div className="form-field">
              <label htmlFor="email">EMAIL</label>

              <input
                id="email"
                type="email"
                placeholder="seu@email.com"
                required
              />
            </div>
          </div>

          <div className="form-field">
            <label htmlFor="message">MENSAGEM</label>

            <textarea
              id="message"
              placeholder="Olá, gostaria de..."
              required
            />
          </div>

          <button type="submit" className="form-submit">
            ENVIAR MENSAGEM
          </button>
        </form>
      </div>
    </section>
  );
}