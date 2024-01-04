import Item from "../Item/Item"
import style from "./Games.module.css"
import { Dispatch, SetStateAction, useState } from "react"


export default function Games(){

    type Game = { name : string ,
        Description : string , 
        img : string , 
        download : string ,
        platform : string,
        isOpen : boolean 
    }

    const [Games,setGames] = useState<Game[]>([
        {
            name : "PacCon",
            Description : "The very First Game That was make by me. The inspiration for this game was this stiker",
            img : "pacCon.png",
            download : "pacman.exe",
            platform : "Console",
            isOpen : true
        },
        {
            name : "Othello",
            Description : "A simple othello game. This game was created because I was forced",
            img : "othello.png",
            download : "othello.exe",
            platform : "Console",
            isOpen : true
        },
        {
            name : "Dog Simulator",
            Description : "You have a lovely Dog that is about to end the world. Can you Control him?",
            img : "dog_sim_1x1.png",
            download : "",
            platform : "mobile",
            isOpen : false
        },
        {
            name : "Running from past",
            Description : "You are a useless programmer stuck in the desert while your ancestor is chasing you for your failers",
            img : "running_from_past_1x1.png",
            download : "",
            platform : "mobile",
            isOpen : false
        }
    ]);

    /*
    {
            name : "Valheim Crow Mod",
            Description : "A simple mod with a quest line that gives the player the power to turn in a crow.",
            img : "valheim_crow_mod_1x1.png",
            download : "github.com/rima1881",
            platform : "Mod",
            isOpen : true
        }
    */

    return (
        <div className={style.body}>
            <h1 className={style.title}>Games</h1>
            <hr className={style.line} />

            <div className={style.container}>
            {Games.map(g => <Item name={g.name} img={g.img} Description={g.Description} platform={g.platform} download={g.download} isOpen={g.isOpen} />)}
            
            </div>
        </div>
    )
}