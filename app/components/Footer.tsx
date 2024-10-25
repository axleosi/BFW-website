import Link from 'next/link'
import React from 'react'
import styles from '../styles/Footer.module.css'
import {FaInstagram, FaFacebook} from 'react-icons/fa'

const Footer = () => {
  return (
    <div className={styles.con}>
        <div className={styles.imageMCon}>
            <img src='/logo.jpg' className={styles.logo}/>
            <div className={styles.links}>
              <div className={styles.indLink}>
                <Link href='/' className={styles.link}>HOME</Link>
                <Link href='/product' className={styles.link}>PRODUCT</Link>
                <Link href='/about' className={styles.link}>ABOUT</Link>
                <Link href='/contant' className={styles.link}>CONTACT</Link>
              </div>
              <div className={styles.whatsapp}>
                <p>Whatsapp:</p>
                <div>
                  <p>0905 693 0828</p>
                  <p>0903 772 8725</p>
                </div>
              </div>
              <p>Gmail: Bamzy96@gmail.com</p>
            </div>
            <div className={styles.imageCon}>
              <Link href='https://www.instagram.com/bamzy_footwearbfw/?igsh=YWYyb2MwbmZmYjhz'><FaInstagram className={styles.image}/></Link>
              <Link href='https://www.facebook.com/people/Bfw-footwear/100057880140406/'><FaFacebook className={styles.image}/></Link>
            </div>
        </div>
        <p>2024. All Rights Reserved</p>
    </div>
  )
}

export default Footer