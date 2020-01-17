import React from "react"

import Section from "../../section/section.component"

import styles from "./we-are-ready.module.scss"
import { WORK_STEPS } from "./we-are-ready.constants"
import Card from "../../card/card.component"

const workItems = WORK_STEPS.map((step, ix) => <Card key={ ix } { ...step } /> )

const WeAreReadySection = (props) => (
  <Section
    title="We are Brava!"
    subtitle="Since 2018, Brava helps startups scale their development teams."
    { ...props }
  >
    <div className={ styles.container }>{ workItems }</div>
  </Section>
)

export default WeAreReadySection
