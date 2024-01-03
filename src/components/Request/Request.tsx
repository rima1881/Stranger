import style from "./Request.module.css"

export default function Request(){

    return(
        <div className={style.container}>
            <div className={style.request}>
                <h2>Requests</h2>
                <p>
                    For any request just contact me either by email or telegram  
                </p>
                <p>
                    If I don't respond back within one week your request did not catch my eyes
                </p>
            </div>
            <div className={style.contact}>
                <h2>Contact info</h2>
                <p>Telegram: +1 (438) 282 3324</p>
                <p>Email: rima@stranger<span>.quebec</span></p>
                <span>Do not Contact me in any other way for game request</span>
            </div>
        </div>
    )
}