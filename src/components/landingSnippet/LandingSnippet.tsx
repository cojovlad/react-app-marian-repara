import React from 'react';
import './LandingSnippet.css';

interface SnippetProps {
    imageUrl: string;
    title: string;
    description: string;
    pageUrl: string;
}

const LandingSnippet: React.FC<SnippetProps> = ({
                                             imageUrl,
                                             title,
                                             description,
                                             pageUrl
                                         }) => {
    return (
        <div className="snippet">
            <img src={imageUrl} alt={title} className="snippet-image" />
            <h2 className="snippet-title">{title}</h2>
            <p className="snippet-description">{description}</p>
            <a href={pageUrl} className="snippet-button">
                Fa o programare!
            </a>
        </div>
    );
};

export default LandingSnippet;