import { default as cx } from "classnames"
import React from "react"

import MapImage from '../../images/map.png'

import styles from "./location.module.scss"

const Location = ({ className }) => {
  return (
    <div className={ cx(styles.container, className) }>
      <div className={ styles.map } style={ {
        backgroundImage: `url(${ MapImage })`
      } }>
      </div>
      <div className={ styles.location }>
        <h3>Brava lab</h3>
        <p>Carrer lorem ipsum, 1337</p>
        <p>Some Cool Building Of. 4554</p>
        <p>08013 Barcelona, España</p>
        <p>+34 933 423 324</p>
        <p>hello@bravalab.com</p>
      </div>
    </div>
  )
}

export default Location
