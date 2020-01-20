import React from "react"

import Section from "../../section/section.component"

import styles from "./partner-benefits.module.scss"
import { PARTNER_BENEFITS_STEPS } from "./partner-benefits.constants"
import Card from "../../card/card.component"

const benefitsItems = PARTNER_BENEFITS_STEPS.map((step, ix) => <Card key={ ix } { ...step } /> )

const PartnerBenefitsSection = (props) => (
  <Section
    title="Our partner benefits"
    subtitle="We’ve built partnerships with startups based on commitment and excellency."
    { ...props }
  >
    <div className={ styles.container }>{ benefitsItems }</div>
  </Section>
)

export default PartnerBenefitsSection
