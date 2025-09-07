import React from "react";
import styles from "./Footer.module.css";

const Footer: React.FC = () => {
    return (
        <footer className={styles.footer}>
            <p>
                &copy; {new Date().getFullYear()}{" "}
                <a className={styles.newFolderLink} href="https://newfoldersolutions.com">New Folder Solutions</a>
                {" — "}All rights reserved.
            </p>
        </footer>
    );
};

export default Footer;