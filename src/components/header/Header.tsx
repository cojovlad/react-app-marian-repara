import React, {useEffect, useRef, useState} from "react";
import styles from "./Header.module.css";
import {Link} from "react-router-dom";

interface HeaderProps {
    pages: Array<{ title: string; id: string }>;
}

const Header: React.FC<HeaderProps> = ({pages}) => {
    const [open, setOpen] = useState(false);
    const [scrolling, setScrolling] = useState(false);

    // NEW: state for contact overlay
    const [showContact, setShowContact] = useState(false);
    const overlayRef = useRef<HTMLDivElement | null>(null);
    const closeBtnRef = useRef<HTMLButtonElement | null>(null);
    const lastActiveRef = useRef<HTMLElement | null>(null);

    const scrollTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

    const toggle = () => setOpen((v) => !v);
    const close = () => setOpen(false);

    // prevent background scroll when menu open or contact overlay open
    useEffect(() => {
        document.body.style.overflow = open || showContact ? "hidden" : "";
        return () => {
            document.body.style.overflow = "";
        };
    }, [open, showContact]);

    // close on ESC
    useEffect(() => {
        const onKey = (e: KeyboardEvent) => {
            if (e.key === "Escape") {
                if (showContact) setShowContact(false);
                else close();
            }
        };
        window.addEventListener("keydown", onKey);
        return () => window.removeEventListener("keydown", onKey);
    }, [showContact]);

    // focus trap for contact overlay
    useEffect(() => {
        if (showContact) {
            lastActiveRef.current = document.activeElement as HTMLElement | null;
            setTimeout(() => closeBtnRef.current?.focus(), 0);
        } else {
            lastActiveRef.current?.focus?.();
        }
    }, [showContact]);

    // detect scroll activity
    useEffect(() => {
        const onScroll = () => {
            setScrolling(true);
            if (scrollTimeout.current) clearTimeout(scrollTimeout.current);
            scrollTimeout.current = setTimeout(() => {
                setScrolling(false);
            }, 300);
        };
        window.addEventListener("scroll", onScroll, {passive: true});
        return () => {
            window.removeEventListener("scroll", onScroll);
            if (scrollTimeout.current) clearTimeout(scrollTimeout.current);
        };
    }, []);

    const scrollToSection = (id: string) => {
        if (id === "contact") {
            setShowContact(true);
            return;
        }
        const el = document.getElementById(id);
        if (el) {
            close();
            el.scrollIntoView({behavior: "smooth"});
        }
    };

    const handleClickOutside = (e: React.MouseEvent<HTMLDivElement>) => {
        if (e.target === overlayRef.current) setShowContact(false);
    };

    return (
        <header className={`${styles.header} ${scrolling ? styles.scrolling : ""}`}>
            <Link
                to="/"
                className={styles.logoLink}
                onClick={() => scrollToSection("home")}
            >
                <img
                    className={styles.logo}
                    src="assets/images/img.png"
                    alt="header-logo"
                />
            </Link>

            <nav className={styles.nav} aria-label="Main navigation">
                <div className={styles.desktopNav}>
                    {pages.map((page, index) => (
                        <button
                            key={index}
                            onClick={() => scrollToSection(page.id)}
                            className={styles.navLink}
                        >
                            {page.title}
                        </button>
                    ))}
                </div>

                <button
                    className={`${styles.hamburger} ${open ? "open" : ""}`}
                    aria-controls="mobile-menu"
                    aria-expanded={open}
                    onClick={toggle}
                    aria-label={open ? "Închide meniul" : "Deschide meniul"}
                >
                    <pre>
                        <span className={styles.bar}/>
                        <span className={styles.bar}/>
                        <span className={styles.bar}/>
                    </pre>
                </button>
            </nav>

            <div
                id="mobile-menu"
                className={`${styles.mobileMenu} ${open ? styles.open : ""}`}
                role="dialog"
                aria-modal="true"
                aria-hidden={!open}
            >
                <button className={styles.closeBtn} onClick={close} aria-label="Închide meniul">
                    ✕
                </button>

                <ul className={styles.mobileNavList}>
                    {pages.map((page, idx) => (
                        <li key={idx}>
                            <button
                                onClick={() => scrollToSection(page.id)}
                                className={styles.mobileNavLink}
                            >
                                {page.title}
                            </button>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Contact Overlay */}
            {showContact && (
                <div
                    ref={overlayRef}
                    className={styles.overlay}
                    onClick={handleClickOutside}
                >
                    <div
                        className={styles.overlayContent}
                        role="dialog"
                        aria-modal="true"
                        aria-labelledby="contact-title"
                    >
                        <button
                            ref={closeBtnRef}
                            className={styles.closeBtn}
                            onClick={() => setShowContact(false)}
                            aria-label="Închide contact"
                        >
                            ✕
                        </button>

                        <h2 id="contact-title">Contact</h2>

                        <div className={styles.contactInfo}>
                            <p><strong>Telefon:</strong> <a href="tel:+40712345678">+40 712 345 678</a></p>
                            <p><strong>Email:</strong> <a href="mailto:marian@example.com">marian@example.com</a></p>
                            <p><strong>Adresă:</strong> Strada Exemplu 123, București</p>
                            <p><strong>Program:</strong> Luni - Vineri, 09:00 - 18:00</p>
                        </div>
                    </div>
                </div>
            )}
        </header>
    );
};

export default Header;