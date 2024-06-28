import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import styles from "./menuposts.module.css"
export const MenuPosts = ({withImage}) => {
  return (
    <div className={styles.items}>
        <Link href="/" className={styles.item}>
        {withImage && (
          <div className={styles.imageContainer}>
            <Image src="/travel.png" alt="" fill className={styles.image}/>
          </div>
          )}
          <div className={styles.textContainer}>
            <span className={`${styles.category} ${styles.travel}`}>
              <b>Travel</b>
            </span>
            <h3 className={styles.postTitle}>
              This is a travel blog page
              This is a travel blog page
              This is a travel blog page
              This is a travel blog page
            </h3>
            <div className={styles.details}>
              <span className={styles.username}>Duong Kien</span>
              <span className={styles.date}> - 13.06.2024</span>
            </div>
          </div>
        </Link>

        <Link href="/" className={styles.item}>
        {withImage && (
          <div className={styles.imageContainer}>
            <Image src="/food.png" alt="" fill className={styles.image}/>
          </div>
          )}
          <div className={styles.textContainer}>
            <span className={`${styles.category} ${styles.food}`}>
              <b>Food</b>
            </span>
            <h3 className={styles.postTitle}>
              This is a food blog page
              This is a food blog page
              This is a food blog page
              This is a food blog page
            </h3>
            <div className={styles.details}>
              <span className={styles.username}>Duong Kien</span>
              <span className={styles.date}> - 13.06.2024</span>
            </div>
          </div>
        </Link>

        <Link href="/" className={styles.item}>
        {withImage && (
          <div className={styles.imageContainer}>
            <Image src="/coding.png" alt="" fill className={styles.image}/>
          </div>
          )}
          <div className={styles.textContainer}>
            <span className={`${styles.category} ${styles.coding}`}>
              <b>Coding</b>
            </span>
            <h3 className={styles.postTitle}>
              This is a coding blog page
              This is a coding blog page
              This is a coding blog page
              This is a coding blog page
            </h3>
            <div className={styles.details}>
              <span className={styles.username}>Duong Kien</span>
              <span className={styles.date}> - 13.06.2024</span>
            </div>
          </div>
        </Link>

        <Link href="/" className={styles.item}>
        {withImage && (
          <div className={styles.imageContainer}>
            <Image src="/fashion.png" alt="" fill className={styles.image}/>
          </div>
          )}
          <div className={styles.textContainer}>
            <span className={`${styles.category} ${styles.fashion}`}>
              <b>Fashion</b>
            </span>
            <h3 className={styles.postTitle}>
              This is a fashion blog page
              This is a fashion blog page
              This is a fashion blog page
              This is a fashion blog page
            </h3>
            <div className={styles.details}>
              <span className={styles.username}>Duong Kien</span>
              <span className={styles.date}> - 13.06.2024</span>
            </div>
          </div>
        </Link>
      </div>
  )
}

export default MenuPosts
