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


      <h2 className={styles.subtitle}>Discover by topic</h2>
      <h1 className={styles.title}>Categories</h1>

      <div className={styles.categoryList}>
        <Link href="/blog?cat=style" className={`${styles.categoryItem} ${styles.style}`}>
          Style
        </Link>
        <Link href="/blog?cat=fashion" className={`${styles.categoryItem} ${styles.fashion}`}>
          Fashion
        </Link>
        <Link href="/blog?cat=food" className={`${styles.categoryItem} ${styles.food}`}>
          Food
        </Link>
        <Link href="/blog?cat=culture" className={`${styles.categoryItem} ${styles.culture}`}>
          Culture
        </Link>
        <Link href="/blog?cat=travel" className={`${styles.categoryItem} ${styles.travel}`}>
          Travel
        </Link>
        <Link href="/blog?cat=coding" className={`${styles.categoryItem} ${styles.coding}`}>
          Coding
        </Link>
      </div>

      <h2 className={styles.subtitle}>Chosen by DK</h2>
      <h1 className={styles.title}>Coders Pick</h1>
      <div className={styles.items}>
        <Link href="/" className={styles.item}>
          <div className={styles.imageContainer}>
            <Image src="/travel.png" alt="" fill className={styles.image}/>
          </div>
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
          <div className={styles.imageContainer}>
            <Image src="/food.png" alt="" fill className={styles.image}/>
          </div>
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
          <div className={styles.imageContainer}>
            <Image src="/coding.png" alt="" fill className={styles.image}/>
          </div>
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
          <div className={styles.imageContainer}>
            <Image src="/fashion.png" alt="" fill className={styles.image}/>
          </div>
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
    </div>
  )
}

export default Menu