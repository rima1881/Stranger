import styles from "./About.module.css"


export default function About(){

    return(
        <div className={styles.Container}>
            <span className={styles.header}>About stranger.quebec</span>
            <div className={styles.body}>
                Stranger.quebec is a non profitble organization with total of one employee.
            </div>
            <div>
                <p>
                    employees
                </p>
                <div>
                    <div>
                        <p>Founder</p>
                        <p>rima</p>
                        <p>In my language it is from right to left</p>
                    </div>
                    <div>
                        <p>Dev team lead</p>
                        <p>amd</p>
                        <p>
                            Honesly, I have no idea why. for years I tried to
                            figure out why I chose amd. I have no idea it just randomly
                            came to my mind. (it is not about this amd. I am not a fanboy)
                        </p>
                    </div>
                    <div>
                        <p>Cheif Investor</p>
                        <p>Amir</p>
                        <p>
                            I guess I am just wasting money
                        </p>
                    </div>
                    <p>
                        <p>
                            Graphical Designer
                        </p>
                        <p>GPT - 4</p>
                        <p>
                            for 20$ per month it have some value. Open AI has a good buisness plan.
                            I wish I could say the same for me
                        </p>
                    </p>
                </div>

            </div>
        </div>
    )

}