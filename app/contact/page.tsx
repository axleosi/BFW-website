import React from 'react'
import styles from '../styles/Contact.module.css'
import Map from '../components/Map'
import Form from '../components/Form'

const Contact = () => {
  return (
    <div className={styles.container}>
      <div className={styles.map}>
        <Map/>
      </div>
      <div className={styles.form}>
        <Form/>
      </div>
    </div>
  )
}

export default Contact