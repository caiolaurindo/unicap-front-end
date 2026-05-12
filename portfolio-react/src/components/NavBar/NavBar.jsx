import "./NavBar.css"

export default function NavBar() {
    return(
    <>
        <nav>
            <ul className="nav-links">
                <li><a href="#about">ABOUT</a></li>
                <li><a href="#skills">SKILLS</a></li>
                <li> <img src="/caio logo off white.png" alt="" className="nav-logo"/></li>
                <li><a href="#projects">PROJETOS</a></li>
                <li><a href="#contact">CONTATO</a></li>
            </ul>
        </nav>
    </>
    )
}