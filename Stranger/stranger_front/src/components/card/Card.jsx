 import styles from './Card.module.css'
 
 
 export default function Card(props){
    return(
        <div className={styles.container}>
            <div className={styles.img}>

            </div>
            
            <a className={styles.btn} href="#">
                <nav className={styles.btnText}>See more</nav>
            </a>

        </div>
        
    )
 }