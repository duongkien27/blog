import React from 'react'
import styles from "./menu.module.css"
import Link from 'next/link'
import Image from 'next/image'
const Menu = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.subtitle}>{"What's hot?"}</h2>
      <h1 className={styles.title}>Most Popular</h1>
      <div className={styles.items}>
        <Link href="/" className={styles.item}>
          <div className={styles.imageContainer}>
            <Image src="/p1.jpeg" alt="" fill className={styles.image}/>
          </div>
          <div className={styles.textContainer}>
            <span className={`${styles.category} ${styles.travel}`}>
              <b>Travel</b>
            </span>
            <h3 className={styles.postTitle}>
              This is a travel blog page
            </h3>
            <div className={styles.details}>
              <span className={styles.username}>Duong Kien</span>
              <span className={styles.date}> - 13.06.2024</span>
            </div>
          </div>
        </Link>
      </div>
    </div>
  )
}

export default Menu