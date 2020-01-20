import React from "react"

import Section from "../../section/section.component"

import styles from "./services.module.scss"
import { WORK_STEPS } from "./services.constants"
import Card from "../../card/card.component"

const workItems = WORK_STEPS.map((step, ix) => <Card key={ ix } { ...step } /> )

const ServicesSection = (props) => (
  <Section
    title="We work with you, we work for you!"
    subtitle="Since 2018, Brava helps startups scale their development teams."
    { ...props }
  >
    <div className={ styles.container }>{ workItems }</div>
  </Section>
)

export default ServicesSection
