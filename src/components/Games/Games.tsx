import Item from "../Item/Item"
import style from "./Games.module.css"
import { useState } from "react"


export default function Games(){

    const [Games : {name : string}[]},setGames] = useState([]);

    setGames([
        {
            name : "Pacman",
            Description : "The very First Game That was make by me. The inspiration for this game was this stiker",
            img : "pacman.png",
            download : "pacman.exe",
            source : "github.com/rima1881/pacman"
        },
        {
            name : "Othello",
            Description : "A simple othello game. This game was created because I was forced",
            img : "othello.png",
            download : "othello.exe",
            source : "github.com/rima1881/othello"
        },
        {
            name : "Dog Simulator",
            Description : "You have a lovely Dog that is about to end the world. Can you Control him?"
            img : "dog_sim_1x1.png",
            download : "",
            source : ""
        },
        {
            name : "running from past",
            Description : "You are a useless programmer stuck in the desert while your ancestor is chasing you for your failers",
            img : "running_from_past_1x1.png",
            download : "",
            source : ""
        }
    ])

    return (
        <div className={style.body}>
            <h1 className={style.title}>Games</h1>
            <div className={style.container}>
                <Item />
                <Item />
                <Item />
                <Item />
            </div>
        </div>
    )
}