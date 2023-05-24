

import styles from './Header.module.css'
import Typewriter from 'typewriter-effect';


export default function Header(){

    return(
        <div>
            <div className={styles.image} >
                <div className={styles.center}>
                <Typewriter
                    options={{
                        wrapperClassName : styles.writer,
                        loop : false,
                        strings : '<nav class="typewriter">Welcome to our little </nav><nav class="typewriter-inner"> Art Gallery</nav>',
                        autoStart : true,
                        cursor : null
                    }}
                >
                </Typewriter>
                </div>

            </div>
        </div>
    )
}