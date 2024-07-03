import React, {useState} from 'react'
import styles from "./checkbox.module.css"
const CheckBoxs = () => {
    
    const[uppercase, setUppercase] = useState<boolean>(false)
    const[lowercase, setLowercase] = useState<boolean>(false)
    const[numbers, setNumbers] = useState<boolean>(false)
    const[specialChar, setSpecialChar] = useState<boolean>(false)

    const handleUppercase = (event: React.ChangeEvent<HTMLInputElement>)=>{
        setUppercase(event.target.checked)
    }

    const handleLowercase = (event: React.ChangeEvent<HTMLInputElement>)=>{
        setLowercase(event.target.checked)
    }

    const handleNumbers = (event: React.ChangeEvent<HTMLInputElement>)=>{
        setNumbers(event.target.checked)
    }

    const handleSpecialChar = (event: React.ChangeEvent<HTMLInputElement>)=>{
        setSpecialChar(event.target.checked)
    }
    

  return (
    <div>
        <div className={styles.checkbox}>
            <label>UpperCase</label>
            <input type="checkbox" checked={uppercase} onChange={handleUppercase} />
        </div>
        <div className={styles.checkbox}>
            <label>LowerCase</label>
            <input type="checkbox" checked={lowercase} onChange={handleLowercase} />
        </div>
        <div className={styles.checkbox}>
            <label>Numbers</label>
            <input type="checkbox" checked={numbers} onChange={handleNumbers} />
        </div>
        <div className={styles.checkbox}>
            <label>SpecialChar</label>
            <input type="checkbox" checked={specialChar} onChange={handleSpecialChar} />
        </div>
    </div>
  )
}

export default CheckBoxs