import React from "react"

import { CLIENTS_STEPS } from "./clients.constants"
import Section from "./../../section/section.component"

import styles from "./clients.module.scss"


const clientLogos = CLIENTS_STEPS.map((step, ix) => {
  return (
    <div className={ styles.image }>
      <img src={ step.imageSrc } alt={ step.name }/>
    </div>
  )
})

const ClientsSection = (props) => (
  <Section
    title="Clients"
    subtitle="Some of the amazing partners we've worked with"
    { ...props}
  >
    <div className={styles.container}>{ clientLogos }</div>
  </Section>
)

export default ClientsSection
