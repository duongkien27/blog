import React from 'react'
import styles from "./navbar.module.css"
import Image from 'next/image'
import Link from 'next/link'
import ThemeToggle from '../themeToggle/ThemeToggle'
import AuthLinks from '../authLinks/AuthLinks'
const Navbar = () => {
  return (
    <div className={styles.container}>
        <div className={styles.social}>
            <Link href="https://www.facebook.com/kien0207/" rel="noopener noreferrer" target="_blank"><Image src="/facebook.png" alt="facebook" width={24} height={24}/></Link>
            <Link href="https://www.instagram.com/duonggkienn/" rel="noopener noreferrer" target="_blank"><Image src="/instagram.png" alt="instagram" width={24} height={24}/></Link>
            <Link href="https://www.tiktok.com/@duonggkienn" rel="noopener noreferrer" target="_blank"><Image src="/tiktok.png" alt="tiktok" width={24} height={24}/></Link>
            <Link href="https://www.facebook.com/kien0207/" rel="noopener noreferrer" target="_blank"><Image src="/youtube.png" alt="youtube" width={24} height={24}/></Link>
        </div>
        <div className={styles.logo}>Meo's Family</div>
        <div className={styles.links}>
            <ThemeToggle/>
            <Link href="/" className={styles.link}>Homepage</Link>
            <Link href="/" className={styles.link}>Contact</Link>
            <Link href="/" className={styles.link}>About</Link>
            <AuthLinks/>
        </div>
    </div>
  )
}

export default Navbar