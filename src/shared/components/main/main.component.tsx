import React from 'react'
import Header from '../header/header.component'
import DisplayAndCopy from '../display-and-copy/display-and-copy.component'
import Range from '../range/range.component'
import CheckBoxs from '../checkbox/checkbox.component'

import styles from './main.module.css'

const Main = () => {
  return (
    <div className={styles.container}>
        <Header />
        <DisplayAndCopy />
        <Range />
        <CheckBoxs />
    </div>
  )
}

export default Main