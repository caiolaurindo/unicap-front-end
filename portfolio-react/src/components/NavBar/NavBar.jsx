import "./NavBar.css";
import Link from "next/link";

export default function NavBar() {
    return (
        <nav>
            <ul className="nav-links">
                <li>
                    <Link href="/#about">ABOUT ME</Link>
                </li>

                <li>
                    <Link href="/#skills">SKILLS</Link>
                </li>

                <li>
                    <Link href="/">
                        <img
                            src="/caio logo off white.png"
                            alt="Logo"
                            className="nav-logo"
                        />
                    </Link>
                </li>

                <li>
                    <Link href="/#projects">PROJETOS</Link>
                </li>

                <li>
                    <Link href="/#contact">CONTATO</Link>
                </li>
            </ul>
        </nav>
    );
}