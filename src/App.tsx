// App.tsx
import React from 'react';
import './App.css';
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import featuredSnippets from './assets/data/landingSnippet.json';
import whyChooseMarianSnippet from './assets/data/whyChooseMarianSnippet.json';
import LandingHero from "./components/landing/hero/LandingHero";
import ServicesSnippet from "./components/landing/text/ServicesSnippet";
import BenefitsHero from "./components/benefits/hero/BenefitsHero";
import BenefitsSnippet from "./components/benefits/text/BenefitsSnippet";
import ServiceAreaHero from "./components/area/hero/ServiceAreaHero";
import ServiceAreaSnippet from "./components/area/text/ServiceAreaSnippet";
import PricingSnippet from "./components/pricing/text/PricingSnippet";
import PricingHero from "./components/pricing/hero/PricingHero";

interface SnippetData {
    imageUrl: string;
    title: string;
    description: string;
    pageUrl: string;
}

const App: React.FC = () => {
    const pages = [
        { title: "Acasă", id: "home" },
        { title: "Beneficii", id: "benefits" },
        { title: "Acoperire", id: "services" },
        { title: "Preturi", id: "pricing" },
    ];

    return (
        <div className="app">
            <main className="main-content">
                <Header pages={pages} />

                {/* Home */}
                <section id="home">
                    {featuredSnippets.map((snippet: SnippetData, index: number) => (
                        <LandingHero key={index} {...snippet} />
                    ))}
                    <ServicesSnippet />
                </section>

                {/* Benefits */}
                <section id="benefits">
                    {whyChooseMarianSnippet.map((snippet: SnippetData, index: number) => (
                        <BenefitsHero key={index} {...snippet} />
                    ))}
                    <BenefitsSnippet />
                </section>

                {/* Services */}
                <section id="services">
                    <ServiceAreaHero />
                    <ServiceAreaSnippet />
                </section>

                {/* Pricing */}
                <section id="pricing">
                    <PricingHero />
                    <PricingSnippet />
                </section>
            </main>

            <Footer />
        </div>
    );
};

export default App;
