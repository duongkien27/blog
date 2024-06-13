import styles from "./card.module.css"
import Image from 'next/image'
import Link from "next/link"
import React from 'react'
const Card = () => {
    return (
        <div className={styles.container}>
            <div className={styles.imgContainer}>
                <Image src="/p1.jpeg" alt="" fill className={styles.image}/>
          </div>
          <div className={styles.textContainer}>
            <div className={styles.detail}>
                <span className={styles.date}>13.06.2024 - </span>
                <span className={styles.category}>CODING</span> 
            </div>
            <Link href="/"><h1>Post Title</h1></Link>
            <p className={styles.desc}>Description</p>
            <Link href="/" className={styles.link}>Read More</Link>
          </div>
        </div>
    )
}

export default Card