import React from 'react'
import styles from '../styles/AboutUs.module.css'

const AboutUs = () => {
  return (
    <div className={styles.container}>
        <div className={styles.con}>
        <div className={styles.sCon}>
            <img src='/aboutus.jpg' className={styles.main}/>
            <div className={styles.textCon}>
                <div className={styles.text}>
                    <h1>About Us</h1>
                    <p>Home of Premium Footwears ranging from the normal sandals, shoes, palms etc are available for students, office staffs, clergy Men/Women and all who see it fit to wear class and luxury with a touch of our unique signature which speaks volume on comfort, style, quality and fashion.</p>
                </div>
                <div className={styles.logoCon}>
                    <img src='logo.jpg' className={styles.logo}/>
                </div>
            </div>
        </div>
        </div>
    </div>
  )
}

export default AboutUs