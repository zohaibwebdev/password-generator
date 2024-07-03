import React from 'react'
import Header from '../header/header.component'
import DisplayAndCopy from '../display-and-copy/display-and-copy.component'
import CheckBoxs from '../checkbox/checkbox.component'

import styles from './main.module.css'
import { PasswordContextProvider } from '@/context/passwordContext/password-context'
import PasswordGenContainer from '@/context/passwordContext/password-container'

const Main = () => {
  return (
    <PasswordGenContainer>
    <div className={styles.container}>
        <Header />
        <DisplayAndCopy />
        <CheckBoxs />
    </div>
    </PasswordGenContainer>
  )
}

export default Main