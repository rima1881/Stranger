import styles from './Signup.module.css'
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'

export default function Signup(props){

    const [ formData , setFormData] = useState({
        'username' : '',
        'email' : '',
        'password' : '',
        'passwordConf' : '',
        'address1' : '',
        'address2' : '',
        'post' : ''
    })

    function handleSubmit(event){
        event.preventDefault()
    }

    return(
        <div className={props.on ? styles.on : styles.off}>
            <div className={styles.container}>
                <form className={styles.form}>
                    <nav><FontAwesomeIcon onClick={props.closeBtnhandle} className={styles.close} icon={faXmark} /></nav>
                    <label>Username :</label>
                    <input type='text' name='username' />
                    <label>Email :</label>
                    <input type='email' name='email' />
                    <label>Password :</label>
                    <input type='password' name='password' />
                    <label>Password Confirmation :</label>
                    <input type='password' name='passwordConf' />
                    <label>Address 1:</label>
                    <input type='text' name='address1' />
                    <label>Address 2:</label>
                    <input type='text' name='address2' />
                    <label>Postal code :</label>
                    <input type='text' name='post' />
                    <button onClick={handleSubmit}>
                        <p>Sign Up</p>
                    </button>
                </form>
            </div>
        </div>
    )
}