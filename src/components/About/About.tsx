import styles from "./About.module.css"


export default function About(){

    return(
        <div className={styles.Container}>
            <h2 className={styles.header}>About <span>Stranger</span></h2>
            <div className={styles.description}>
                Stranger<span>.quebec</span> is an indie game development group
            </div>
            <div className={styles.body}>
                    <div className={styles.cart}>
                        <h3>
                            Dev team lead 
                        </h3>
                        <a>Rima</a>
                        <img src="rima.png" className={styles.img} />

                        <p>
                            In my language it is from right to left 
                        </p>
                    </div>
                    <div className={styles.cart}>
                        <h3>
                            Graphical Designer
                        </h3>
                        <a>GPT - 4</a>
                        <img src="chat_gpt.png" className={styles.img} />

                        <p>
                            for 20$ per month it have some value. Open AI has a good buisness plan.
                            I wish I could say the same for me
                        </p>
                    </div>
            </div>
        </div>
    )

}