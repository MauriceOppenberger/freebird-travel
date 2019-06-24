import React, { useState } from "react"
import { FaAngleDown } from "react-icons/fa"
import styles from "../../css/day.module.css"

const Day = ({ day, info }) => {
  const [showInfo, setInfo] = useState(false)
  const toggleInfo = () => {
    setInfo(showInfo => !showInfo)
  }

  return (
    <artivle className={styles.day}>
      <h4>
        {day}
        <button className={styles.btn} onClick={toggleInfo}>
          <FaAngleDown />
        </button>
      </h4>
      {/* <p className={showInfo ? `${styles.showInfo}` : `${styles.day}`}>
        {info}
      </p> */}
      <p className={showInfo && `${styles.showInfo}`}>{info}</p>
    </artivle>
  )
}

export default Day
