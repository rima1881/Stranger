import Card from "../card/Card";
import styles from './Container.module.css'

export default function Container(){
    return(
        <>
        <div className={styles.headerContainer}>
            <p className={styles.header}> Our <nav className={styles.headerInner}>&nbsp;Posters!!! </nav></p>
        </div>
        
        <div className={styles.container}>

            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
        </div>
        </>
    )

}