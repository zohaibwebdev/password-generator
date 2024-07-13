import React from 'react'
import styles from "./headings.module.css"
const Headings = () => {
  return (
    <div className={styles.container}>
        <h1 className={styles.heading}>Passowrd Generator</h1>
        <p className={styles.subHeading}>Ensure online account safety by creating strong and secure passwords</p>
    </div>
  )
}

export default Headings