import React from 'react';
import './Footer.css';

const Footer: React.FC = () => {
    return (
        <footer className="footer">
            <p>&copy; {new Date().getFullYear()}
                <a className="newFolderLink" href="https://newfoldersolutions.com"> New Folder Solutions </a>
                All rights reserved.</p>
        </footer>
    );
};

export default Footer;