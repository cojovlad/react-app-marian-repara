import React from "react";
import styles from "./BenefitsHero.module.css";

interface SnippetProps {
    imageUrl?: string;
    title?: string;
    description?: string;
    pageUrl?: string;
}

const BenefitsHero: React.FC<SnippetProps> = ({
                                                  imageUrl = "/assets/images/hero-workbench.jpg",
                                                  title = "DE CE SĂ-L ALEGI PE MARIAN?",
                                                  description = "Te poți baza pe Marian pentru servicii profesionale, amabile și de încredere în Suceava. Peste 30 de ani de pasiune pentru reparații și îmbunătățiri — lucrări executate cu atenție la detalii.",
                                              }) => {
    return (
        <section
            className={styles.heroSnippet}
            style={{backgroundImage: `url(${imageUrl})`}}
        >
            <div className={styles.heroOverlay}>
                <h2 className={styles.heroTitle}>{title}</h2>
                <p className={styles.heroDescription}>{description}</p>
            </div>
        </section>
    );
};

export default BenefitsHero;