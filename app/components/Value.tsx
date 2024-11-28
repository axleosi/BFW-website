import React from 'react'
import styles from '../styles/Value.module.css'

const Value = () => {
  return (
    <div className={styles.container}>
        <div className={styles.card}>
            <h1>Mission Statement</h1>
            <p>Our mission is to craft high-quality footwear that meets the unique needs and preference of our customers. We strive to provide exceptional customer service using only the finest materials and traditional techniques to create shoes that are both comfortable and stylish.</p>
        </div>
        <div className={styles.card}>
            <h1>Vision Statement</h1>
            <p>Our vision is to be a leading provider of custom-made shoes that combine comfort, functionality and style. We aspire to create a brand that is synonymous with quality and craftmanship, providing customers with a unique and personalized experience. We aim to grow our business by expanding our product line and reaching new markets, while maintaining our commitment to excellence and customer satisfaction.</p>
        </div>
        <h1>CORE VALUES</h1>
        <div className={styles.card}>
            
            <h1>Quality Craftmanship</h1>
            <p>The foundation of any business is the quality of their products. Ensuring that all shoes and boots are crafted with exceptional attention to detail and using high quality materials is critiical to building a strong reputation in the market.</p>
        </div>
        <div className={styles.card}>
            <h1>Exceptional Customer Service</h1>
            <p>Providing outstanding customer service is crucial for any business but particularly for our business where customers may have unique needs and preferences. Building strong relationships with customers and offering personalized services can differentiate a cobbler business from larger, less-personal competitors.</p>
        </div>
        <div className={styles.card}>
            <h1>Innovation and Customization</h1>
            <p>In a market where mass-produced shoes dominate, offering unique, customized footwear can be a major selling point for our business. Incorporating new technologies or techniques to improve the customization process can also be a way to set a cobbler business apart from competitors.</p>
        </div>
        <div className={styles.card}>
            <h1>Sustainability</h1>
            <p>Customers are increasingly concerned about the environmental impact of the products they purchase, and a cobbler business can differentiate itself by priritizing sustainability in its production process. This can include using environmentally-friendly materials, reducing waste and promoting responsible production and consumption practices.</p>
        </div>
    </div>
  )
}

export default Value