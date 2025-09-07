import React from "react";
import styles from "./PricingHero.module.css";

interface Props {
    imageUrl?: string;
    title?: string;
    pageUrl?: string;
}

const PricingHero: React.FC<Props> = ({
                                                 imageUrl = "/assets/images/display1SIX.JPG",
                                                 title = "PREȚURI & PROCESE",
                                             }) => {
    return (
        <section className={styles.heroSnippet} aria-labelledby="pricing-title">
            <img src={imageUrl} alt="Prețuri și proces" className={styles.heroImage}/>
            <div className={styles.heroOverlay}>
                <h2 id="pricing-title" className={styles.heroTitle}>{title}</h2>
                <p className={styles.heroSubtitle}>
                    La Marian primești devize clare, costuri fixe justificate și o procedură simplă: evaluare, ofertă,
                    programare și execuţie.
                </p>
            </div>
        </section>
    );
};

export default PricingHero;
