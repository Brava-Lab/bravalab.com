import React from "react"

import styles from "./member-card.module.scss"

const MemberCard = ({ member: { imageSrc, name, position }, className, ...rest }, ix) => {
  return (
    <div className={styles.root} key={ix}>
      <div className={styles.header}>
        {imageSrc ? <img className={styles.image} src={imageSrc} alt={name}/> : null}
      </div>
      <div className={styles.body}>
        <h3 className={styles.title}>{name}</h3>
        {position ? <p className={styles.text}>{position}</p> : null}
      </div>
    </div>
  )
}

export default MemberCard
