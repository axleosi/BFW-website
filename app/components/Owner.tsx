import React from 'react'
import styles from '../styles/Owner.module.css'

const Owner = () => {
  return (
    <div className={styles.container}>
        <div className={styles.sCon}>
            <div className={styles.ownerDetails}>
                <div className={styles.ownerHeader}>
                    <h1>THE CEO</h1>
                    <h1>Bamidele Durowoju</h1>
                </div>
                <div className={styles.ownerText}>
                    <p>Meet Bamidele, aka. Bamzy, a skilled cobbler and entrepreneur who has established a thriving shoe customization and repair business. His love for shoes started at a young age which led to his search for knowledge in his craft.</p>
                    <p>Bamzy's approach to business is unique. He believes that customer service is key to success and he goes above and beyond to provide personalized service to each of his customers.</p>
                    <p>Bamzy is also known for his innovation and creativity. He uses his knowledge of shoe design and materials to create unique and stylish shoe designs that his customers love. He has also incoprated technology into his business, allowing customers to customize their shoes online and have them delivered to their doorstep.</p>
                    <p>Based in Lagos, his business has grown leaps and bounds and he now has multiple locations across the city. His entrepreneurial spirit, commitment to quality and passion for shoes has made him a respected figure in the industry.</p>
                </div>
            </div>
            <div className={styles.owner}>
            </div>
        </div>
    </div>
  )
}

export default Owner