import styles from './Container.module.css'
import Header from "./header/Header";
import List from "./list/List";
import { useState , useEffect } from 'react';
import axios from 'axios';

export default function Container(props){

    const [listData, setListData] = useState([])

    useEffect(() => {
        /*
        fetch('http://localhost:8080/api/posters')
            .then(Response => Response.json())
            .then(data => setListData(data))

            console.log('Request was sent')*/

        axios({
            method: 'get',
            url:'/api/posters',
            baseURL : 'http://localhost:5000'
        }).then( Response => {
            setListData(Response.data)
        })
    },[])


    return(
        <>
            <Header />
                <div className={styles.headerContainer}>
                    <p className={styles.header}> Our <span className={styles.headerInner}>&nbsp;Posters!!! </span></p>
                </div>
                <hr  className={styles.line}/>

                <div className={styles.container}>
                    <List data={listData} />
                </div>
        </>
    )

}