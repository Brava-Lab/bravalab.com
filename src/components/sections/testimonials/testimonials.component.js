import React from "react"

import { TESTIMONIALS_STEPS } from "./testimonials.constants"
import Section from "./../../section/section.component"

import styles from "./testimonials.module.scss"

const testimonialsItems = TESTIMONIALS_STEPS.map((step, ix) => (
  <div key={ix} className={ styles.root }>
    <p className={ styles.quote }>"{ step.text }"</p>
    <div className={ styles.body }>
      <div className={ styles.avatar } style={ {
        backgroundImage: `url(${step.imageSrc })`
      } }></div>
      <p className={ styles.text }><strong>{ step.name }</strong></p>
      <p className={ styles.text }>{ `${ step.position }, ${ step.company }` }</p>
    </div>
  </div>
))

const TestimonialsSection = (props) => (
  <Section title="Testimonials" subtitle="What our clients say" { ...props }>
    <div className={ styles.container }>{ testimonialsItems }</div>
  </Section>
)

export default TestimonialsSection
