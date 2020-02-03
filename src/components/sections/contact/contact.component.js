import { default as cx } from "classnames"
import React from "react"

import Section from "../../section/section.component"

import styles from "./contact.module.scss"
import ContactForm from "../../contact-form/contact-form.component"
import Location from "../../location/location.component"

const ContactSection = ({ withLinkedIn, withMap, subtitle, ...rest }) => (
  <Section
    title="Lets get in touch"
    subtitle={ subtitle }
    { ...rest }
  >
    <div className={ cx(styles.container, { [styles.noGrid]: !withMap }) }>
      { withMap ? <Location className={ styles.location }/> : null }
      <ContactForm className={ styles.form } withLinkedIn={ withLinkedIn }/>
    </div>
  </Section>
)

export default ContactSection
