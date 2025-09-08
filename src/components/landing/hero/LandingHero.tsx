import React from "react";
import styles from "./LandingHero.module.css";

interface SnippetProps {
    imageUrl: string;
    title: string;
    description: string;
    pageUrl: string;
}

const LandingHero: React.FC<SnippetProps> = ({
                                                 imageUrl,
                                                 title,
                                                 description,
                                                 pageUrl,
                                             }) => {
    return (
        <section
            className={styles.landingSnippet}
            style={{backgroundImage: `url(${imageUrl})`}}
        >
            <div className={styles.landingOverlay}>
                <h2 className={styles.landingTitle}>{title}</h2>
                <p className={styles.landingDescription}>{description}</p>
                <a href={pageUrl} className={styles.landingButton}>
                    Fa o programare!
                </a>
            </div>
        </section>
    );
};

export default LandingHero;
