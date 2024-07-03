import React from 'react'
import styles from './display.module.css'
import { usePasswordContext } from '@/context/passwordContext/password-context'
const DisplayAndCopy = () => {
  const {password, passwordGen} = usePasswordContext()

  const handleReGen = ()=>{
    passwordGen()
  }
  return (
    <>
    <div className={styles.container}>
        <input type="text" className={styles.input} readOnly value={password}/>
        <button className={styles.button}>copy</button>
        <button className={styles.reButton} onClick={handleReGen}>🔃</button>
    </div>
    
    </>
  )
}

export default DisplayAndCopy