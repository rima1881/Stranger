import styles from './Navbar.module.css'

export default function Navbar(props){

    return(
        <div className={styles.navbar}>
            <nav className={styles.item}>
                    Home
                </nav>
            <nav className={styles.item}>Coming soon</nav>
            <nav className={styles.item}>Donation</nav>
            <nav className={styles.item}>About Us</nav>
            <nav className={styles.login}>Login | Sign Up</nav>
        </div>
    )
}