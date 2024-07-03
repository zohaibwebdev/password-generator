import React, {useState} from 'react'
import styles from "./range.module.css"
const Range = () => {
    const [value, setValue] = useState(8); // Initial value of the range slider

    const handleChange = (event:React.ChangeEvent<HTMLInputElement>) => {
        const newValue = Number(event.target.value);
        setValue(newValue);
    }
  
    return (
      <div className={styles.container}>
        <input
          type='range'
          min='8'
          max='50'
          value={value}
          onChange={handleChange}
          className={styles.range}
        />
        <div>Password Length: {value}</div>
      </div>
    )
}

export default Range