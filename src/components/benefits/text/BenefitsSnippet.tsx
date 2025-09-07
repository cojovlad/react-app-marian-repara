import React from "react";
import styles from "./BenefitsSnippet.module.css";

const BenefitsSnippet: React.FC = () => {
    return (
        <section className={styles.benefitsSnippet} aria-labelledby="benefits-title">
            <div className={styles.left}>
                <h2 id="benefits-title">DE CE SĂ-L ALEGI PE MARIAN?</h2>

                <div className={styles.benefit}>
                    <h3>Profesional și punctual</h3>
                    <p>
                        Lucrări executate la standard înalt, cu atenție la detalii și finalizate la timp.
                    </p>
                </div>

                <div className={styles.benefit}>
                    <h3>Soluții practice</h3>
                    <p>
                        Marian oferă soluții eficiente și economice, bazate pe experiență reală.
                    </p>
                </div>

                <div className={styles.benefit}>
                    <h3>Garanție și respect</h3>
                    <p>
                        Lucrările sunt făcute corect; corectăm eventualele probleme apărute în perioada convenită.
                    </p>
                </div>

                <div className={styles.benefit}>
                    <h3>Comunicare clară</h3>
                    <p>
                        Estimări transparente și explicații pas cu pas pe durata proiectului.
                    </p>
                </div>
            </div>

            <aside className={styles.right}>
                <h3>Gata să începi?</h3>
                <p>
                    Trimite câteva fotografii și descrierea lucrării. Primești o ofertă gratuită, detaliată și fără
                    obligații.
                </p>
                <a className={styles.cta} href="#contact">
                    Cere o ofertă gratuită
                </a>
            </aside>
        </section>
    );
};

export default BenefitsSnippet;