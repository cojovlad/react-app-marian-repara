import React from "react";
import styles from "./ServiceAreaHero.module.css";

interface Props {
    imageUrl?: string;
    title?: string;
    pageUrl?: string;
}

const ServiceAreaHero: React.FC<Props> = ({
                                                     imageUrl = "/assets/images/display1SEVEN.png",
                                                     title = "ARIA DE SERVICIU — SUCEAVA",
                                                 }) => {
    return (
        <section className={styles.heroSnippet} aria-labelledby="service-area-title">
            <img src={imageUrl} alt="Suceava" className={styles.heroImage}/>
            <div className={styles.heroOverlay}>
                <h2 id="service-area-title" className={styles.heroTitle}>{title}</h2>
                <p className={styles.heroSubtitle}>
                    Suntem mândri să oferim servicii profesionale de meșterie pentru municipiul <strong>Suceava</strong> și localitățile din jur. Intervenții rapide, montaj, reparații și mici renovări — totul executat cu atenție.
                </p>
            </div>
        </section>
    );
};

export default ServiceAreaHero;
