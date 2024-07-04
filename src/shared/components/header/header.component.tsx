import React from 'react'
import styles from "./header.module.css"
const Header = () => {
  return (
    <div className={styles.container}>
        <h1 className={styles.heading}>Passowrd Generator</h1>
        <p className={styles.subHeading}>create strong and secure password to keep your account safe online</p>
    </div>
  )
}

export default Header