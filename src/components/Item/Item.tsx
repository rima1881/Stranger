import style from "./Item.module.css"

export default function Item(props : { name:string , img : string , Description : string , download : string  , isOpen : boolean , platform : string }){
    return (
        <div className={style.cart}>
            <img src={props.img} />
            <h2>{props.name}</h2>
            <p>
                {props.Description}
            </p>
            <div><span>tags:</span> { props.isOpen && <button onClick={() =>alert("The Source Code for this game Can be found in my github")} className={style.open}>Open Source</button>} <button className={style.platform}>{props.platform}</button></div>
            <a className={style.download} href={props.download}>Download</a>
        </div>
    )
}