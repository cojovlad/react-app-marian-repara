import React from 'react';
import './App.css';
import Header from "./components/header/Header";
import LandingSnippet from "./components/landingSnippet/LandingSnippet";
import Footer from "./components/footer/Footer";
import featuredSnippets from './assets/data/landingSnippet.json'; // import JSON directly

interface SnippetData {
    imageUrl: string;
    title: string;
    description: string;
    pageUrl: string;
}

const App: React.FC = () => {
    const pages = [{ title: 'Home', path: '/' }];

    return (
        <div className="app">
            <main className="main-content">
                <Header pages={pages} />
                {featuredSnippets.map((snippet: SnippetData, index: number) => (
                    <LandingSnippet key={index} {...snippet} />
                ))}
            </main>
            <Footer />
        </div>
    );
};

export default App;