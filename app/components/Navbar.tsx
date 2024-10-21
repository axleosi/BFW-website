'use client'
import React, { useState } from 'react'
import styles from '../styles/Navbar.module.css'
import Link from 'next/link'

const Navbar = () => {
    const [open, setOpen]=useState(false)
    const [page, setPage]=useState('home')
    const handleOpen=()=>{
      setOpen(!open)
    }
  return (
    <div className={styles.container}>
        <button className={open?styles.burgerOpen:styles.burger} onClick={handleOpen}></button>
        <div className={styles.sCon}>
            <img src='/logo.jpg' alt='A logo of our brand' width={80} height={80}/>
            <ul className={`${styles.ul} ${open? styles.open:''}`}>
                <Link href='/' className={page==='home'?styles.link:''} onClick={()=>{setPage('home'); setOpen(false)}}>Home</Link>
                <Link href='/product' className={page==='product'?styles.link:''} onClick={()=>{setPage('product'); setOpen(false)}}>Products</Link>
                <Link href='/about' className={page==='about'?styles.link:''} onClick={()=>{setPage('about'); setOpen(false)}}>About</Link>
                <Link href='/contact' className={page==='contact'?styles.link:''} onClick={()=>{setPage('contact'); setOpen(false)}}>Contact</Link>
            </ul>
        </div>
        
    </div>
  )
}

export default Navbar