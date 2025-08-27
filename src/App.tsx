import React from 'react';
import './App.css';
import Header from "./components/header/Header";
import Snippet from "./components/snippet/Snippet";
import Footer from "./components/footer/Footer";

const App: React.FC = () => {
    const pages = [
        {title: 'Home', path: '/'},
        {title: 'Services', path: '/services'},
        {title: 'Contact', path: '/contact'}
    ];

    const featuredSnippets = [
        {
            imageUrl: 'path/to/image1.jpg',
            title: 'Service 1',
            description: 'Description of service 1',
            details: 'Important details about this service',
            pageUrl: '/service1'
        },
        {
            imageUrl: 'path/to/image1.jpg',
            title: 'Service 1',
            description: 'Description of service 1',
            details: 'Important details about this service',
            pageUrl: '/service1'
        },
        {
            imageUrl: 'path/to/image1.jpg',
            title: 'Service 1',
            description: 'Description of service 1',
            details: 'Important details about this service',
            pageUrl: '/service1'
        },
        {
            imageUrl: 'path/to/image1.jpg',
            title: 'Service 1',
            description: 'Description of service 1',
            details: 'Important details about this service',
            pageUrl: '/service1'
        }
    ];

    return (
        <div className="app">
            <Header pages={pages}/>
            <main className="main-content">
                {featuredSnippets.map((snippet, index) => (
                    <Snippet key={index} {...snippet} />
                ))}
            </main>
            <Footer/>
        </div>
    );
};

export default App;