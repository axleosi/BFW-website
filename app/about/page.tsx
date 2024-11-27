import React from 'react'
import styles from '../styles/About.module.css'
import AboutUs from '../components/AboutUs'
import Owner from '../components/Owner'

const About = () => {
  return (
    <div className={styles.container}>
      <AboutUs/>
      <Owner/>
    </div>
  )
}

export default About