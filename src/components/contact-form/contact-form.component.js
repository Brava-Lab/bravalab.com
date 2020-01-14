import { default as cx } from "classnames"
import React from "react"

import styles from "./contact-form.module.scss"
import Button from "../button/button.component"

const ContactForm = ({ withLinkedIn }) => {
  return (
    <form className={styles.form} action="https://getform.io/f/1195f84d-daeb-426f-be0f-0794eee51526" method="POST" encType="multipart/form-data">
        <label className={styles.label}>
          First Name
          <input className={styles.input} name="firstName" type="text" />
        </label>
        <label className={styles.label}>
          Last Name
          <input className={styles.input} name="lastName" type="text" />
        </label>
        <label className={styles.label}>
          Email
          <input className={styles.input} name="email" type="email" />
        </label>
        
      { withLinkedIn ? <label className={styles.label}>
          LinkedIn Profile Link
          <input className={styles.input} name="linkedIn" type="text" />
        </label> : null }

      { withLinkedIn ? <label className={ styles.fileLabel }>
          Upload CV
          <input className={ styles.fileInput } name="cv" type="file" />
        </label> : null }
      
      <Button className={ styles.button } type="submit" text="Send"/>
    </form>
  )
}

export default ContactForm
