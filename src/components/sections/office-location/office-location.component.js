import React from "react"

import Section from "../../section/section.component"
import OfficeLocationImage from '../../../images/people-discussing.jpg'

import styles from "./office-location.module.scss"

const OfficeLocationSection = (props) => (
  <Section
    { ...props }
  >
    <div className={ styles.container }>
      <div className={ styles.map }>
        <img src={ OfficeLocationImage } alt="Office location map"/>
      </div>
      <div className={ styles.body}>
        <ul>
          <li></li>
        </ul>
      </div>
    </div>
  </Section>
)

export default OfficeLocationSection
