import styles from "./Navbar.module.css"

export default function Navbar(){


    const navClick = () => {
        alert("how hard is it to scroll yourself???");
        console.log("I got fed up with web design. just let me make my games!!!");
    };

    return(
        <div className={styles.container}>

            <div className={styles.logo}>
            </div>

            <div className={styles.navContent}>

                <ul className={styles.mainNav}>
                    <li onClick={navClick}>
                        Home
                    </li>
                    <li onClick={navClick}>
                        Games
                    </li>
                    <li onClick={navClick}>
                        About
                    </li>
                    <li onClick={navClick}>
                        Request
                    </li>
                </ul>

                <ul className={styles.secNav}>
                    <li>
                        <a href="https://github.com/rima1881">
                            Github
                        </a>
                    </li>
                    <li>
                        <a href="https://www.linkedin.com/company/strangergroup">
                            LinkedIn
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    )

}