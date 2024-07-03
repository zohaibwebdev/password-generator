import React from 'react'
import styles from './display.module.css'
const DisplayAndCopy = () => {
  return (
    <>
    <div className={styles.container}>
        <input type="text" className={styles.input} readOnly/>
        <button className={styles.button}>copy</button>
        <button className={styles.reButton}>🔃</button>
    </div>
    
    </>
  )
}

export default DisplayAndCopy