import React from "react"

import styles from "./contact-form.module.scss"

const ContactForm = ({ withLinkedIn }) => {
  return (
    <form className={ styles.form }>
      <div className={ styles.group }>
        <label className={styles.label} for="firstName">First Name</label>
        <input className={styles.input} id="firstName" type="text"/>
      </div>
      <div className={styles.group}>
        <label className={styles.label} for="lastName">Last Name</label>
        <input className={styles.input} id="lastName" type="text"/>
      </div>
      <div className={styles.group}>
        <label className={styles.label} for="email">Email</label>
        <input className={styles.input} id="email" type="email"/>
      </div>
      { withLinkedIn ? <div className={styles.group}>
        <label className={styles.label} for="linkedIn">LinkedIn Profile Link</label>
        <input className={styles.input} id="linkedIn" type="text"/>
      </div> : null }
      <button type="submit">Send</button>
    </form>
  )
}

export default ContactForm
