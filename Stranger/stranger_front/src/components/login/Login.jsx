import styles from './Login.module.css'
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'


export default function Login(props){

    const [loginData,setLoginData] = useState(
        {
            email : '',
            password : ''
        }
    )


    function handleChange(event){
        const { name , value} = event.target
        setLoginData(prevState => {
            return {
                ...prevState,
                [name] : value
            }
        })

    }

    function handleSubmit(event){
        event.preventDefault()
        props.closeBtnhandle()
    }

    return(
        <div className={ props.on ? styles.on : styles.off}>
            <div className={styles.container}>
                <form className={styles.form}>
                    <nav><FontAwesomeIcon onClick={props.closeBtnhandle} className={styles.close} icon={faXmark} /></nav>
                    <label htmlFor="email">Email:</label>
                    <input onChange={handleChange} value={loginData.email} name='email' type='text'/>
                    <label htmlFor='passsword'>Password:</label>
                    <input onChange={handleChange} value={loginData.password} name='password' type='password'/>
                    <button onClick={handleSubmit}>
                        <p>Login</p>
                    </button>
                    <span><a>Forgot my Password</a> | <a>Sign Up</a></span>
                    
                </form>
            </div>
        </div>
    )
}