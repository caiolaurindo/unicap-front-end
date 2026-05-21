import "./AboutMe.css"

export default function AboutMe() {
    return (
        <>
            <section id="about">
                <h2 className="section-title reveal">ABOUT-ME</h2>

                <div className="about-grid">
                    <div className="about-text reveal">
                        <p>
                            Olá! Sou <strong>Caio Laurindo</strong>, estudante de Sistemas para Internet na{" "}
                            <strong>Universidade Católica de Pernambuco</strong> e desenvolvedor web com foco em front-end.
                        </p>

                        <p>
                            Minha jornada começou no curso de{" "}
                            <strong>Desenvolvimento Full Stack com IA</strong> na Infinity School, onde me apaixonei pela programação.
                            Desde então, enxergo o desenvolvimento web como forma de
                            <em> criar experiências</em> e gerar impacto real.
                        </p>

                        <p>
                            Atualmente atuo como <strong>monitor de programação</strong> na Infinity School,
                            e sou apaixonado por cinema — referências visuais que influenciam diretamente nos projetos que desenvolvo.
                            Acredito que <strong>tecnologia e arte caminham juntas.</strong>
                        </p>

                        <div className="code-block reveal reveal-delay-1">
                            <span className="kw">const</span>{" "}
                            <span className="fn">caioLaurindo</span> = {"{"}
                            <br />
                            &nbsp;&nbsp;role: <span className="str">"Desenvolvedor Web"</span>,
                            <br />
                            &nbsp;&nbsp;focus: <span className="str">"Front-end"</span>,
                            <br />
                            &nbsp;&nbsp;paixoes: [
                            <span className="str">"código"</span>,{" "}
                            <span className="str">"cinema"</span>,{" "}
                            <span className="str">"design"</span>],
                            <br />
                            &nbsp;&nbsp;status: <span className="str">"buscando estágio"</span>
                            <br />
                            {"}"}
                        </div>
                    </div>

                    <div className="about-photo reveal reveal-delay-2">
                        <div className="photo-frame">
                            <img
                                src="assets/ICON.png"
                                alt="Caio Laurindo"
                                className="photo-placeholder"
                            />

                            <span className="photo-label">
                                &lt; CAIO LAURINDO — DEV &gt;
                            </span>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}