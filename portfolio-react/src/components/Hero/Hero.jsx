import "./Hero.css"
export default function Hero() {
    return (
        <>
            <section id="hero">
                <div className="hero-bg"></div>
                <div className="hero-grid"></div>

                <div className="hero-image-col">
                    <div className="hero-img-wrap">
                        <img src="/ICON.PNG" alt="" className=""/>
                    </div>
                </div>

                <div className="hero-content">
                    <h1 className="hero-h1">
                        <div >CAIO</div>
                        <div className="blue">LAURINDO</div>
                    </h1>
                    <div className="hero-role-line">
                        <span className="hero-role">DESENVOLVEDOR WEB</span>
                    </div>
                    <p className="hero-sub">
                        Um desenvolvedor que não escreve apenas linhas de código, mas <strong>constrói</strong> a sua verdadeira
                        <em>"casa na internet"</em>. Soluções 100% personalizadas, unindo domínio tecnológico com
                        <strong>histórias reais.</strong>
                    </p>
                    <div className="hero-cta">
                        <a href="#projects" className="btn-primary">VER PROJETOS</a>
                        <a href="#contact" className="btn-outline">CONTATO</a>
                    </div>

                    <div className="hero-stats">
                        <div className="stat-item">
                            <div className="stat-num">10+</div>
                            <div className="stat-label">PROJETOS</div>
                        </div>
                        <div className="stat-item">
                            <div className="stat-num">2+</div>
                            <div className="stat-label">ANOS CODANDO</div>
                        </div>
                    </div>
                </div>

                <div className="hero-scroll">
                    <span>SCROLL</span>
                    <div className="scroll-line"></div>
                </div>
            </section>


        </>
    )
}