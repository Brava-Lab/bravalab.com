import React from "react"

import Section from "../../section/section.component"
import Button from "../../button/button.component"

const ReadySection = (props) => (
  <Section
    title="We are ready"
    subtitle="Hire motivated developers who are driven to keep their skills sharp in the most widely adopted technologies today."
    { ...props }
  >
    <Button text="Hire Bravalab" to="/contact"/>
  </Section>
)

export default ReadySection
