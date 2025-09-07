import React from "react";
import styles from "./PricingSnippet.module.css";

const PricingSnippet: React.FC = () => {
    return (
        <section className={styles.pricingSnippet} aria-labelledby="pricing-section">
            <div className={styles.left}>
                <h2 id="pricing-section">PREȚURI &amp; PROCES</h2>

                <p className={styles.lead}>
                    Transparent și fără surprize — aşa lucrează Marian. Mai jos găsești structura generală a prețurilor,
                    explicații despre costuri fixe și pașii procesului, prezentate clar pentru a te ajuta să iei o
                    decizie.
                </p>

                <h3>Structura prețurilor</h3>
                <p>
                    Fiecare proiect primește un deviz detaliat. Iată elementele pe care le luăm în calcul:
                </p>
                <ul className={styles.list}>
                    <li><strong>Tarif minim proiect:</strong> 250 RON (acoperă costuri fixe și lucrări mici)</li>
                    <li><strong>Costuri fixe:</strong> deplasare, pregătire, curățenie, achiziţii mici (incluse în
                        tariful minim)
                    </li>
                    <li><strong>Taxă vizită la domiciliu (dacă e necesară):</strong> 350 RON — de regulă dedusă din
                        deviz
                    </li>
                    <li><strong>Tarif orar (aplicabil la anumite proiecte):</strong> 60–120 RON / oră</li>
                </ul>

                <h3>Cum stabilim prețul</h3>
                <p>
                    Pentru lucrări mici oferim preţ fix pe sarcină; pentru proiecte medii facem deviz detaliat. În deviz
                    itemizăm materialele și manopera, astfel încât nu apar costuri ascunse.
                </p>

                <h3>Pașii procesului</h3>
                <ol className={styles.process}>
                    <li><strong>Contact:</strong> descrii lucrarea și trimiți fotografii.</li>
                    <li><strong>Evaluare:</strong> analizăm informațiile, te întrebăm detalii dacă e nevoie.</li>
                    <li><strong>Ofertă:</strong> primești un deviz detaliat, fără obligații.</li>
                    <li><strong>Programare:</strong> stabilim data convenabilă pentru execuție.</li>
                    <li><strong>Execuție & verificare:</strong> lucrările sunt finalizate și verificate împreună cu
                        tine.
                    </li>
                    <li><strong>Plată:</strong> transfer bancar, card sau numerar, conform înțelegerii.</li>
                </ol>
            </div>

            <aside className={styles.right}>
                <h3>Rezumat rapid</h3>

                <ul className={styles.summary}>
                    <li><strong>Tarif minim proiect:</strong> <span>250 RON</span></li>
                    <li><strong>Taxă vizită:</strong> <span>350 RON (dedusă din deviz)</span></li>
                    <li><strong>Tarif orar (dacă e cazul):</strong> <span>60–120 RON / oră</span></li>
                </ul>

                <p className={styles.note}>
                    <em>*Tarife orientative. Pentru un preț exact trimite detalii și fotografii — primești o estimare
                        gratuită.</em>
                </p>

                <a className={styles.cta} href="#contact">Solicită un deviz gratuit</a>
            </aside>
        </section>
    );
};

export default PricingSnippet;