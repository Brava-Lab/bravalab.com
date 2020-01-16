import { default as cx } from "classnames"
import React from "react"

import styles from "./contact-form.module.scss"
import Button from "../button/button.component"

const ContactForm = ({ withLinkedIn, className, ...rest }) => {
  return (
    <form className={ cx(styles.form, className)} action="https://getform.io/f/1195f84d-daeb-426f-be0f-0794eee51526" method="POST" encType="multipart/form-data">
        <div>
          <label className={styles.label} for="firstName">First Name</label>
          <input className={styles.input} name="firstName" type="text" />
        </div>
        <div>
          <label className={styles.label} for="lastName">Last Name</label>
          <input className={styles.input} name="lastName" type="text" />
        </div>
        <div>
          <label className={styles.label} for="email">Email</label>
          <input className={styles.input} name="email" type="email" />
        </div>

        <div>
          <label className={styles.label} for="enquiry">Enquiry</label>
          <textarea className={styles.textArea} name="enquiry" rows={6} maxLength={500} />
        </div>


        
      {withLinkedIn ? <div>
        <label className={styles.label} for="linkedIn">Linkedin Profile Link</label>
        <input className={styles.input} name="linkedIn" type="text" />
      </div> : null }

      {withLinkedIn ? <div>
        <label className={styles.fileLabel} for="cv">Upload CV</label>
        <input className={styles.fileInput} name="cv" type="file" />
      </div> : null }
      
      <Button className={ styles.button } type="submit" text="Send"/>
    </form>
  )
}

export default ContactForm
