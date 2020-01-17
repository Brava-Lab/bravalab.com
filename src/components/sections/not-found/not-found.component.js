import React from "react"

import Section from "../../section/section.component"
import Button from "../../button/button.component"

import styles from "./not-found.module.scss"

const NotFoundSection = (props) => (
  <Section
    title="404"
    subtitle="The page that you were looking for doesn't exist"
    className={ styles.root }
  >
    <Button text="Take me home" to="/" />
  </Section>
)

export default NotFoundSection
