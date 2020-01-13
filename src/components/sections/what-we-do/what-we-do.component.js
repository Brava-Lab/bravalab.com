import React from "react"

import Section from "../../section/section.component"

// import styles from "./what-we-do.module.scss"

const WhatWeDoSection = (props) => (
  <Section
    title="What we do?"
    subtitle="We offer world class software development"
    { ...props }
  />
)

export default WhatWeDoSection
