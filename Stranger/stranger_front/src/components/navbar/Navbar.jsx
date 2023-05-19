import styles from './Navbar.module.css'
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars ,faXmark ,faHome ,faCalendarTimes , faDollarSign ,faCircleInfo ,faCircleUser } from '@fortawesome/free-solid-svg-icons'

export default function Navbar(props){

    const [ cliked , setClicked] = useState(false);
    const [ smallNav , setSmallNav] = useState(false);

    

    return(
        <nav className={styles.navbar}>
            <ul className={cliked && styles.active}>
                <li>
                    <a>
                        <FontAwesomeIcon icon={faHome} className={styles.navIcons}/>
                        Home
                    </a>
                </li>
                <li>
                    <a>
                    <FontAwesomeIcon icon={faCalendarTimes} className={styles.navIcons}/>
                        Coming soon
                    </a>
                </li>
                <li>
                    <a>
                    <FontAwesomeIcon icon={faDollarSign} className={styles.navIcons}/>
                        Donation
                    </a>
                </li>
                <li>
                    <a>
                    <FontAwesomeIcon icon={faCircleInfo} className={styles.navIcons}/>
                        About Us
                    </a>
                </li>
                <li>
                    <a className={styles.loginA}>
                    <FontAwesomeIcon icon={faCircleUser} className={styles.navIcons}/>
                        Login | Sign Up
                    </a>
                </li>
            </ul>
            
            <span className={styles.login}>
            <FontAwesomeIcon icon={faCircleUser} className={styles.navIcons}/>
                Login | Sign Up
                </span>

            <div className={styles.mobile} onClick={switchMod}>
                <FontAwesomeIcon icon={cliked ? faXmark : faBars} className={styles.menuIcon} />
            </div>
        </nav>
    )

    function switchMod(){
        setClicked(prevState => !prevState)
    }


}