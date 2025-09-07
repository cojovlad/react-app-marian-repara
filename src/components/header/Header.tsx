import React from "react";
import {Link} from "react-router-dom";
import styles from "./Header.module.css";

interface HeaderProps {
    pages: Array<{ title: string; path: string }>;
}

const Header: React.FC<HeaderProps> = ({pages}) => {
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
                    <a key={index} href={page.path} className={styles.navLink}>
                        {page.title}
                    </a>
                ))}
            </nav>
        </header>
    );
};

export default Header;