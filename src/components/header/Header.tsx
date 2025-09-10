// Header.tsx
import React from "react";
import styles from "./Header.module.css";
import {Link} from "react-router-dom";

interface HeaderProps {
    pages: Array<{ title: string; id: string }>;
}

const Header: React.FC<HeaderProps> = ({ pages }) => {
    const scrollToSection = (id: string) => {
        const el = document.getElementById(id);
        if (el) {
            el.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <header className={styles.header}>
            <Link to="/">
                <img
                    className={styles.logo}
                    src="assets/images/img.png"
                    alt="header-logo"
                />
            </Link>

            <nav className={styles.nav}>
                {pages.map((page, index) => (
                    <button
                        key={index}
                        onClick={() => scrollToSection(page.id)}
                        className={styles.navLink}
                    >
                        {page.title}
                    </button>
                ))}
            </nav>
        </header>
    );
};

export default Header;
