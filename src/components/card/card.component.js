import { default as cx } from "classnames"
import React from "react"
import { Link } from "gatsby";

import styles from "./card.module.scss"

const Card = ({ imageSrc, title, text, className, to, ...rest }) => {
  const titleClassnames = cx(
    styles.title,
    { [styles.gutterBottom]: text },
    className
  )

  const rootClassNames = cx(
    styles.root,
    { [styles.clickable]: to },
  );

  const Root = to ? Link : 'div';
  
  return (
    <Root className={ rootClassNames } to={ to }>
      <div className={ styles.header }>
        { imageSrc ? <img className={ styles.image } src={ imageSrc } alt={ title }/> : null }
      </div>
      <div className={ styles.body }>
        <h3 className={ titleClassnames }>{ title }</h3>
        { text ? <p className={ styles.text}>{ text }</p> : null }
      </div>
    </Root>
  )
}

export default Card
