import React from 'react'
import styles from "./singlePage.module.css"
import Image from 'next/image'

const SinglePage = () => {
  return (
    <div className={styles.container}>
        <div className={styles.infoContainer}>
            <div className={styles.textContainer}></div>
                <h1>Single Blog Page</h1>
                <div className={styles.user}>
                    <div className={styles.userImageContainer}>
                        <Image src="" alt="" fill className={styles.iamge} />
                    </div>
                    <div className={styles.userTextContainer}>
                        <span className={styles.username}>Duong Kien</span>
                        <span className={styles.date}>01.01.2024</span>
                    </div>
                </div>
            <div className={styles.imageContainer}>
                <Image src="" alt="" fill className={styles.iamge} />
                <Image src="" alt="" fill className={styles.iamge} />
            </div>
        </div>
    </div>
  )
}

export default SinglePage