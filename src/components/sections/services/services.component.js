import React from "react"

import Section from "../../section/section.component"

import styles from "./services.module.scss"
import { WORK_STEPS } from "./services.constants"
import Card from "../../card/card.component"

const workItems = WORK_STEPS.map((step, ix) => {
  return <Card key={ix} {...step} />
})

const ServicesSection = (props) => (
  <Section
    title="We work with you, we work for you!"
    subtitle="Some text related to our services"
    { ...props }
  >
    <div className={styles.container}>{workItems}</div>
  </Section>
)

export default ServicesSection
