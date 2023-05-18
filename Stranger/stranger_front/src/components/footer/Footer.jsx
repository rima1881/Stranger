import styles from './Footer.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub , faDiscord  , faLinkedin} from '@fortawesome/free-brands-svg-icons'



export default function Footer(){
    return(
        <div className={styles.footer}>
            <p className={styles.middlePart}>
                Copyright © 2023 Stranger Group
            </p>
            <div className={styles.icons}>
                <FontAwesomeIcon icon={faGithub} size='2x' color='#B2BECD' />
                <FontAwesomeIcon icon={faDiscord} size='2x' color='#B2BECD' />
                <FontAwesomeIcon icon={faLinkedin} size='2x' color='#B2BECD' />
            </div>
        </div>
    )
}