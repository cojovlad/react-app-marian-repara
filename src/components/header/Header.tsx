import React from 'react';
import './Header.css';

interface HeaderProps {
    pages: Array<{ title: string; path: string }>;
}

const Header: React.FC<HeaderProps> = ({ pages }) => {
    return (
        <header className="header">
            <div className="logo">Your Logo</div>
            <nav className="nav">
                {pages.map((page, index) => (
                    <a key={index} href={page.path} className="nav-link">
                        {page.title}
                    </a>
                ))}
            </nav>
        </header>
    );
};

export default Header;