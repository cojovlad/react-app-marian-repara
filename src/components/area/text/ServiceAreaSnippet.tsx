import React from "react";
import styles from "./ServiceAreaSnippet.module.css";

const ServiceAreaSnippet: React.FC = () => {
    return (
        <section className={styles.serviceAreaSnippet} aria-labelledby="area-title">
            <div className={styles.left}>
                <h2 id="area-title">ARIA DE SERVICIU</h2>

                <p className={styles.lead}>
                    Marian deservește municipiul <strong>Suceava</strong> și zonele apropiate: Fălticeni, Rădăuți,
                    Gura Humorului, Câmpulung Moldovenesc și alte localităţi din judeţ. Proiectele la marginea ariei
                    pot fi evaluate individual.
                </p>

                <h3>Descriere</h3>
                <p>
                    Echipa oferă intervenţii pentru locuinţe şi spaţii comerciale: montaj mobilier, reparaţii pereţi,
                    instalare corpuri de iluminat, tâmplărie, mici lucrări metalice și întreținere exterioară.
                </p>

                <h4>Ce includem</h4>
                <ul className={styles.list}>
                    <li>Montaj și instalare mobilier, rafturi, suport TV</li>
                    <li>Reparații pereți: glet, rigips, tencuieli și finisaje</li>
                    <li>Vopsitorii și retușuri</li>
                    <li>Instalare și înlocuire corpuri de iluminat și prize</li>
                    <li>Lucrări mici de sudură și reparații metalice</li>
                </ul>
            </div>

            <aside className={styles.right}>
                <h3>Zone principale</h3>
                <ul className={styles.list}>
                    <li>Municipiul Suceava (centru, Burdujeni, Obcini)</li>
                    <li>Fălticeni, Rădăuți, Gura Humorului</li>
                    <li>Câmpulung Moldovenesc și localităţi apropiate</li>
                </ul>

                <p className={styles.note}><em>*Proiectele de la marginea ariei pot fi acceptate în funcție de
                    complexitate.</em></p>

                <a className={styles.cta} href="#contact">Obține o ofertă</a>
            </aside>
        </section>
    );
};

export default ServiceAreaSnippet;
