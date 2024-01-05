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
                            As an AI language model, I am a much better artist than Rima
                        </p>
                    </div>
                    <div className={styles.contact}>
                        <h2>Contact info</h2>
                        <p>Telegram: +1 (438) 282 3324</p>
                        <p>LinkedIn: <a href="https://www.linkedin.com/company/strangergroup">Stranger</a></p>
                        <p>Github: <a href="https://github.com/rima1881">Github</a></p>
                        <p>Email: rima@stranger<span>.quebec</span></p>
                        <span>Do not Contact me in any other way</span>
                    </div>
            </div>
        </div>
    )

}