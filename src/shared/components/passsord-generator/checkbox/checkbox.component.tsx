import React, {useState} from 'react'
import styles from "./checkbox.module.css"
import { usePasswordContext } from '@/context/password-context/password-context'
const CheckBoxs = () => {
    
    const[uppercase, setUppercase] = useState<boolean>(false)
    const[lowercase, setLowercase] = useState<boolean>(true)
    const[numbers, setNumbers] = useState<boolean>(true)
    const[specialChar, setSpecialChar] = useState<boolean>(false)
    const [value, setValue] = useState(8);

    const {setLength, setUpper, setLower, setNum, setSpecialCh} = usePasswordContext()

    const handleChange = (event:React.ChangeEvent<HTMLInputElement>) => {
        const newValue = Number(event.target.value);
        setValue(newValue);
        setLength(newValue)
    }

    const handleUppercase = (event: React.ChangeEvent<HTMLInputElement>)=>{
        const isChecked = event.target.checked
        setUppercase(isChecked);
        setUpper(isChecked);
    }

    const handleLowercase = (event: React.ChangeEvent<HTMLInputElement>)=>{
        const isChecked = event.target.checked
        setLowercase(isChecked)
        setLower(isChecked)
    }

    const handleNumbers = (event: React.ChangeEvent<HTMLInputElement>)=>{
        const isChecked = event.target.checked
        setNumbers(isChecked)
        setNum(isChecked)
    }

    const handleSpecialChar = (event: React.ChangeEvent<HTMLInputElement>)=>{
        const isChecked = event.target.checked
        setSpecialChar(isChecked)
        setSpecialCh(isChecked)
    }
    

  return (
    <div className={styles.container}>
        <div >
        <div className={styles.length}>Password Length:   {value}</div>
        <input
          type='range'
          min='8'
          max='50'
          value={value}
          onChange={handleChange}
          className={styles.range}
        />
      </div>
        <div className={styles.checkbox}>
            <label>UpperCase</label>
            <input type="checkbox" className={styles.check} checked={uppercase} onChange={handleUppercase} />
        </div>
        <div className={styles.checkbox}>
            <label>LowerCase</label>
            <input type="checkbox" className={styles.check} checked={lowercase} onChange={handleLowercase} />
        </div>
        <div className={styles.checkbox}>
            <label>Numbers</label>
            <input type="checkbox" className={styles.check} checked={numbers} onChange={handleNumbers} />
        </div>
        <div className={styles.checkbox}>
            <label>SpecialChar</label>
            <input type="checkbox" className={styles.check} checked={specialChar} onChange={handleSpecialChar} />
        </div>
    </div>
  )
}

export default CheckBoxs