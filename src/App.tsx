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
    const pages = [{title: 'Home', path: '/'}];

    return (
        <div className="app">
            <main className="main-content">
                <Header pages={pages}/>
                {featuredSnippets.map((snippet: SnippetData, index: number) => (
                    <LandingHero key={index} {...snippet} />
                ))}
                <ServicesSnippet/>
                {whyChooseMarianSnippet.map((snippet: SnippetData, index: number) => (
                    <BenefitsHero key={index} {...snippet} />
                ))}
                <BenefitsSnippet/>
                <ServiceAreaHero/>
                <ServiceAreaSnippet/>
                <PricingHero/>
                <PricingSnippet/>
            </main>
            <Footer/>
        </div>
    );
};

export default App;