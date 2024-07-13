import React from 'react'
import Headings from '../headings/headings.component'
import DisplayAndCopy from '../display-and-copy/display-and-copy.component' 
import CheckBoxs from '../checkbox/checkbox.component' 
import styles from './password-generator.module.css'
import PasswordGenContainer from '@/context/password-context/password-context-container'

const PasswordGenerator = () => {
  return (
    <PasswordGenContainer>
    <div className={styles.container}>
        <Headings />
        <DisplayAndCopy />
        <CheckBoxs />
    </div>
    </PasswordGenContainer>
  )
}

export default PasswordGenerator