import React from "react"

import Section from "../../section/section.component"

// import styles from "./services.module.scss"
import ContactForm from "../../contact-form/contact-form.component"

const ContactSection = (props) => (
  <Section
    title="Lets get in touch"
    subtitle="Please fill the information below:"
    { ...props }
  >
    <ContactForm withLinkedIn/>
  </Section>
)

export default ContactSection
