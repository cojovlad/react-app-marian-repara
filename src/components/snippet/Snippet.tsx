// src/components/Snippet/Snippet.tsx
import React from 'react';
import './Snippet.css';

interface SnippetProps {
    imageUrl: string;
    title: string;
    description: string;
    details: string;
    pageUrl: string;
}

const Snippet: React.FC<SnippetProps> = ({
                                             imageUrl,
                                             title,
                                             description,
                                             details,
                                             pageUrl
                                         }) => {
    return (
        <div className="snippet">
            <img src={imageUrl} alt={title} className="snippet-image" />
            <h2 className="snippet-title">{title}</h2>
            <p className="snippet-description">{description}</p>
            <div className="snippet-details">
                <p>{details}</p>
            </div>
            <a href={pageUrl} className="snippet-button">
                Visit Page
            </a>
        </div>
    );
};

export default Snippet;