import React from 'react'
import styles from '../styles/Contact.module.css'
import dynamic from 'next/dynamic'
import Form from '../components/Form'

const Map = dynamic(() => import('../components/Map'), {
  ssr: false, // Disable server-side rendering for the Map component
})

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