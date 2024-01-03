import style from "./Item.module.css"

export default function Item(props){
    return (
        <div className={style.cart}>
            <img src={props.img} />
            <h2>{props.title}</h2>
            <p>
                It is a simple version of pacman and my first game. Due to console limitions I couldn't turn the bots on.
                this game was made because of <a>this sticker</a>
                {props.description}
            </p>
            <div>
                <button>Download</button>
                <a>Source Code</a>
            </div>
        </div>
    )
}