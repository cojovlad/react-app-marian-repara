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
                                                    pageUrl
                                                }) => {
    return (
        <div className={styles.landingSnippet}>
            <img src={imageUrl} alt={title} className={styles.landingImage}/>
            <h2 className={styles.landingTitle}>{title}</h2>
            <p className={styles.landingDescription}>{description}</p>
            <a href={pageUrl} className={styles.landingButton}>
                Fa o programare!
            </a>
        </div>
    );
};

export default LandingHero;
