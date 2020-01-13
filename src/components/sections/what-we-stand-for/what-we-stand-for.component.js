import React from "react"

import Section from "../../section/section.component"
import MemberCard from "../../member-card/member-card.component"
import { VALUES } from "./what-we-stand-for.constants"

import styles from "./what-we-stand-for.module.scss"

const values = VALUES.map((value, ix) => {
  return (
    <MemberCard member={ value } key={ix}/>
  )
})

const WhatWeStandForSection = (props) => (
  <Section
    title="What we stand for?"
    subtitle="Some text about our core values"
    { ...props }
  >
    <div className={ styles.container }>
      { values }
    </div>
  </Section>
)

export default WhatWeStandForSection
