import { default as cx } from "classnames"
import React from "react"

import styles from "./contact-form.module.scss"
import Button from "../button/button.component"

const ContactForm = ({ withLinkedIn, className, ...rest }) => {
  return (
    <form className={ cx(styles.form, className) } action="https://getform.io/f/1195f84d-daeb-426f-be0f-0794eee51526" method="POST" encType="multipart/form-data">
      <div>
        <label className={ styles.label } htmlFor="firstName">First Name</label>
        <input className={ styles.input } id="firstName" name="firstName" type="text" />
      </div>
      <div>
        <label className={ styles.label } htmlFor="lastName">Last Name</label>
        <input className={ styles.input } id="lastName" name="lastName" type="text" />
      </div>
      <div>
        <label className={ styles.label } htmlFor="email">Email</label>
        <input className={ styles.input } id="email" name="email" type="email" />
      </div>

      <div>
        <label className={ styles.label } htmlFor="enquiry">Enquiry</label>
        <textarea className={ styles.textArea } id="enquiry" name="enquiry" rows={6} maxLength={500} />
      </div>

      {withLinkedIn ? <div>
        <label className={ styles.label } htmlFor="linkedIn">Linkedin Profile Link</label>
        <input className={ styles.input } id="linkedIn" name="linkedIn" type="text" />
      </div> : null }

      {withLinkedIn ? <div>
        <label className={ styles.fileLabel } htmlFor="cv">Upload CV</label>
        <input className={ styles.fileInput } id="cv" name="cv" type="file" />
      </div> : null }
      
      <Button className={ styles.button } type="submit" text="Send"/>
    </form>
  )
}

export default ContactForm
