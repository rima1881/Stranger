import styles from "./Navbar.module.css"


export default function Navbar(){

    return(
        <div className={styles.container}>
            <div className={styles.logo}>
            </div>
            <ul className={styles.mainNav}>
                <li>
                    Home
                </li>
                <li>
                    Games
                </li>
                <li>
                    About
                </li>
                <li>
                    Donation
                </li>
                <li>
                    Request
                </li>
            </ul>

            <ul className={styles.secNav}>
                <li>
                    Github
                </li>
                <li>
                    LinkedIn
                </li>
            </ul>
        </div>
    )

}