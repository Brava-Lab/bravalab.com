import React from "react"

import Section from "../../section/section.component"

import styles from "./we-are.module.scss"
import { WORK_STEPS } from "./we-are.constants"
import Card from "../../card/card.component"

const workItems = WORK_STEPS.map((step, ix) => {
  return <Card key={ix} {...step} />
})

const WeAreSection = () => (
  <Section
    title="We are Brava!"
    subtitle="Since 2018, Brava helps startups scale their development teams."
  >
    <div className={styles.container}>{workItems}</div>
  </Section>
)

export default WeAreSection
