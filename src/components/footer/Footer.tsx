import React from "react";
import styles from "./Footer.module.css";

const Footer: React.FC = () => {
    return (
        <footer className={styles.footer}>
            <p>
                &copy; {new Date().getFullYear()}{" "}
                <a
                    className={styles.newFolderLink}
                    href="https://newfoldersolutions.com"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    New Folder Solutions
                </a>
                {" — "}All rights reserved.
            </p>

            <div className={styles.contact}>
                <p>
                    <a href="mailto:info@newfoldersolutions.com">
                        📧 info@newfoldersolutions.com
                    </a>
                    {" | "}
                    <a href="tel:+1234567890">
                        📞 +1 (234) 567-890
                    </a>
                </p>
            </div>
        </footer>
    );
};

export default Footer;
