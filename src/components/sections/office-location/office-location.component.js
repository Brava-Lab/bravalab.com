import React from "react"

import Section from "../../section/section.component"
import MapImage from '../../../images/map.png'

import styles from "./office-location.module.scss"

const OfficeLocationSection = (props) => (
  <Section
    { ...props }
  >
    <div className={ styles.container }>
      <div className={styles.map} style={{
        backgroundImage: `url(${MapImage})`
      }}>
      </div>
      <div className={ styles.body}>
        <ul>
          <li>Carrer Napoles, 12223</li>
          <li>New Building Of. 134</li>
          <li>08013 Barcelona, España</li>
          <li>+34 933 423 324</li>
        </ul>
      </div>
    </div>
  </Section>
)

export default OfficeLocationSection
