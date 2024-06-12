import React from 'react'
import styles from "./featured.module.css"
import Image from 'next/image'
const Featured = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        <b>This is Duong Kien!</b> Welcome to my blog!
      </h1>
      <div className={styles.post}>
        <div className={styles.imgContainer}>
          <Image src="/p1.jpeg" alt="" fill className={styles.image}></Image>
        </div>
        <div className={styles.textContainer}>
          <h1 className={styles.postTitle}>Post Title</h1>
          <p className={styles.postDesc}>
          This picture was taken in a room. 
          There 2 people in this picture. 
          On the right, a men with a short hair are lifting a sofa. 
          On the left, a women is holding a box with a potted plant on top of it.
          </p>
          <button className={styles.button}>Read More</button>
        </div>
      </div>
    </div>
  )
}

export default Featured