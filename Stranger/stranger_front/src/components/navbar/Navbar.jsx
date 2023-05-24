import styles from './Navbar.module.css'
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars ,faXmark ,faHome ,faCalendarTimes , faDollarSign ,faCircleInfo ,faCircleUser } from '@fortawesome/free-solid-svg-icons'

export default function Navbar(props){

    const [ cliked , setClicked] = useState(false);



    return(
        <nav className={styles.navbar}>
            <ul className={cliked ? styles.active : ''}>
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
                        <span>
                            <FontAwesomeIcon icon={faCircleUser} className={styles.navIcons}/>
                            Login
                        </span> | 
                        <span>
                            Sign Up
                        </span>
                    </a>
                </li>
            </ul>

            <span className={styles.login} >
                <span onClick={props.loginBtnHandle}>
                    <FontAwesomeIcon icon={faCircleUser} className={styles.navIcons}/>
                    Login
                    &nbsp;
                </span>
                 |
                 <span onClick={props.signupBtnHandle}>
                    &nbsp; 
                    Sign Up
                 </span>
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