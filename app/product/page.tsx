import React from 'react'
import styles from '../styles/Product.module.css'
import Hero from '../components/Hero'

const Products = () => {
  return (
    <div className={styles.container}>
      <Hero/>
      <h1> OUR COLLECTION OF FOOTWEARS!!</h1>
      <div className={styles.images}>
        <img src='/shoe1.jpg' className={styles.image}/>
        <img src='/shoe2.jpg' className={styles.image}/>
        <img src='/shoe3.jpg' className={styles.image}/>
        <img src='/shoe4.jpg' className={styles.image}/>
        <img src='/shoe5.jpg' className={styles.image}/>
        <img src='/shoe6.jpg' className={styles.image}/>
        <img src='/shoe7.jpg' className={styles.image}/>
        <img src='/shoe8.jpg' className={styles.image}/>
        <img src='/shoe9.jpg' className={styles.image}/>
        <img src='/shoe10.jpg' className={styles.image}/>
        <img src='/shoe11.jpg' className={styles.image}/>
      </div>
    </div>
  )
}

export default Products