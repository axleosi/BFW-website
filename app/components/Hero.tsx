import React from 'react'
import styles from '../styles/Hero.module.css'

const Hero = () => {
  return (
    <div className={styles.container}>
        <div className={styles.sCon}>
            <div className={styles.text}>
                <h1>WELCOME TO <span>B.F.W</span></h1>
                <p>Home of the highest quality footwear that meets the unique needs and preference of our customers. We strive to provide exceptional customer service, using only the finest materials and traditional techniques to create shoe that are comfortable and stylish.</p>
            </div>
        </div>
    </div>
  )
}

export default Hero