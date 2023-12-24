import styles from "./Navbar.module.css"


export default function Navbar(){

    return(
        <div className={styles.container}>
            <ul className={styles.mainNav}>
                <li>
                    Home
                </li>
                <li>
                    Games
                </li>
                <li>
                    Contact me
                </li>
                <li>
                    Colabrate
                </li>
                <li>
                    Donation
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