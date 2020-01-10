import { default as cx } from "classnames"
import React from "react"

import styles from "./card.module.scss"

const Card = ({ imageSrc, title, text, className, ...rest }) => {
  const titleClassnames = cx(
    styles.title,
    { [styles.gutterBottom]: text },
    className
  )

  return (
    <div className={styles.root}>
      <div className={styles.header}>
        {imageSrc ? <img className={styles.image} src={imageSrc} /> : null}
      </div>
      <div className={styles.body}>
        <h3 className={titleClassnames}>{title}</h3>
        {text ? <p className={styles.text}>{text}</p> : null}
      </div>
    </div>
  )
}

export default Card
