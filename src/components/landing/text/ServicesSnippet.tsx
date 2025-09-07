import React, {useEffect, useRef, useState} from "react";
import styles from "./ServicesSnippet.module.css";

const ServicesSnippet: React.FC = () => {
    const [showOverlay, setShowOverlay] = useState(false);
    const overlayRef = useRef<HTMLDivElement | null>(null);
    const closeBtnRef = useRef<HTMLButtonElement | null>(null);
    const lastActiveElementRef = useRef<HTMLElement | null>(null);

    // esc close
    useEffect(() => {
        const handleEsc = (event: KeyboardEvent) => {
            if (event.key === "Escape") {
                setShowOverlay(false);
            }
        };
        window.addEventListener("keydown", handleEsc);
        return () => window.removeEventListener("keydown", handleEsc);
    }, []);

    // opening the overlay
    useEffect(() => {
        if (showOverlay) {
            lastActiveElementRef.current = document.activeElement as HTMLElement | null;
            // small timeout to ensure element is in DOM
            setTimeout(() => closeBtnRef.current?.focus(), 0);
            // prevent background scrolling
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
            lastActiveElementRef.current?.focus?.();
        }
    }, [showOverlay]);

    // outside close
    const handleClickOutside = (event: React.MouseEvent<HTMLDivElement>) => {
        if (event.target === overlayRef.current) {
            setShowOverlay(false);
        }
    };

    return (
        <section className={styles.servicesSnippet} aria-labelledby="services-heading">
            <div className={styles.servicesPreview}>
                <div className={styles.aboutIntro}>
                    <p>
                        Cauți un meșter priceput și de încredere în zona ta?
                        <br/>
                        <strong>Marian</strong> este alegerea potrivită pentru tine! Cu peste 50 de ani de experiență de
                        viață și o pasiune de-o viață pentru reparații și îmbunătățiri, Marian oferă servicii de
                        calitate
                        pentru locuințe și spații comerciale.
                    </p>
                </div>

                <div className={styles.aboutMission}>
                    <h2 id="services-heading">MISIUNEA MEA</h2>
                    <p>
                        Misiunea mea este să ofer servicii de calitate, realizate cu seriozitate și respect față de
                        client.
                        Îmi place să ascult nevoile fiecărei persoane, să găsesc soluții potrivite și să finalizez
                        lucrările
                        la timp și în limita bugetului stabilit.
                    </p>
                </div>

                <div className={styles.aboutServices}>
                    <h2>SERVICIILE MELE</h2>
                    <ul>
                        <li>Montaj și instalare (rafturi, dulapuri, suporturi TV, etc.)</li>
                        <li>Lucrări de tâmplărie și reparații din lemn</li>
                        <li>Reparații și întreținere pentru interior și exterior</li>
                        <li>Vopsit și zugrăvit</li>
                        <li>Instalare și înlocuire corpuri de iluminat</li>
                    </ul>

                    <p className={styles.moreText}>
                        Pentru o listă completă a serviciilor,{" "}
                        <button className={styles.servicesLink} onClick={() => setShowOverlay(true)}>
                            apasă aici
                        </button>
                        .
                    </p>
                </div>

                {/*<div className={styles.aboutCta}>*/}
                {/*    <h3>VEZI LUCRĂRILE MELE</h3>*/}
                {/*    <a href="/proiecte" className={styles.projectButton}>*/}
                {/*        Galerie Proiecte*/}
                {/*    </a>*/}
                {/*</div>*/}
            </div>

            {showOverlay && (
                <div
                    ref={overlayRef}
                    className={styles.overlay}
                    onClick={handleClickOutside}
                    role="presentation"
                >
                    <div
                        className={styles.overlayContent}
                        role="dialog"
                        aria-modal="true"
                        aria-labelledby="overlay-title"
                    >
                        <button
                            ref={closeBtnRef}
                            className={styles.closeBtn}
                            onClick={() => setShowOverlay(false)}
                            aria-label="Închide lista serviciilor"
                        >
                            ✕
                        </button>

                        <h2 id="overlay-title">Lista completă a serviciilor oferite</h2>

                        <div className={styles.servicesGrid}>
                            <ul>
                                <li>
                                    <strong>Montaj și instalare</strong>
                                    <ul>
                                        <li>Montaj rafturi, dulapuri și corpuri modulare</li>
                                        <li>Instalare suporturi TV și sisteme audio</li>
                                        <li>Montaj uși interioare și exterioare</li>
                                        <li>
                                            Instalare aparate electrocasnice (mașină de spălat, cuptor, hotă)
                                        </li>
                                        <li>Montaj feronerie: mânere, balamale, yale</li>
                                    </ul>
                                </li>

                                <li>
                                    <strong>Lucrări de tâmplărie și mobilier</strong>
                                    <ul>
                                        <li>Reparații mobilier deteriorat (sertare, picioare, îmbinări)</li>
                                        <li>Confecționare și ajustare piese din lemn</li>
                                        <li>Șlefuire și recondiționare suprafețe din lemn</li>
                                        <li>Montaj și reglaj uși/dulapuri</li>
                                    </ul>
                                </li>

                                <li>
                                    <strong>Reparații pereți și finisaje</strong>
                                    <ul>
                                        <li>Aplicare glet și reparații gips-carton</li>
                                        <li>Tencuieli și finisaje decorative</li>
                                        <li>Corectare crăpături și fisuri</li>
                                        <li>Montaj rigips și tavane false</li>
                                    </ul>
                                </li>

                                <li>
                                    <strong>Vopsit și renovări interioare</strong>
                                    <ul>
                                        <li>Zugrăveli clasice și decorative</li>
                                        <li>Lăcuire și vopsire suprafețe din lemn sau metal</li>
                                        <li>Tapetare și finisaje speciale</li>
                                        <li>Reîmprospătarea încăperilor cu vopsele ecologice</li>
                                    </ul>
                                </li>
                            </ul>

                            <ul>
                                <li>
                                    <strong>Întreținere exterioară</strong>
                                    <ul>
                                        <li>Reparare și întreținere garduri</li>
                                        <li>Întreținere curți, alei și terase</li>
                                        <li>Montaj pavaj și dale decorative</li>
                                        <li>Vopsire porți și elemente exterioare</li>
                                    </ul>
                                </li>

                                <li>
                                    <strong>Electricitate de bază</strong>
                                    <ul>
                                        <li>Instalare și înlocuire corpuri de iluminat</li>
                                        <li>Montaj / schimbare prize și întrerupătoare</li>
                                        <li>Testare circuite simple</li>
                                        <li>Instalare ventilatoare sau hote</li>
                                    </ul>
                                </li>

                                <li>
                                    <strong>Lucrări metalice &amp; sudură</strong>
                                    <ul>
                                        <li>Reparații grilaje, porți și balustrade</li>
                                        <li>Sudură ușoară pentru elemente rupte</li>
                                        <li>Întărire cadre și picioare metalice</li>
                                    </ul>
                                </li>

                                <li>
                                    <strong>Ferestre și uși</strong>
                                    <ul>
                                        <li>Reparații și reglaje ferestre PVC/lemn/aluminiu</li>
                                        <li>Schimbare mânere, broaște, balamale</li>
                                        <li>Montaj garnituri pentru izolare termică</li>
                                    </ul>
                                </li>

                                <li>
                                    <strong>Alte servicii la cerere</strong>
                                    <ul>
                                        <li>Reparații diverse în gospodărie</li>
                                        <li>Consultanță pentru amenajări și optimizare spațiu</li>
                                        <li>Întreținere periodică locuințe și birouri</li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
};

export default ServicesSnippet;