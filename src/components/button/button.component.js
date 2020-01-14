import { default as cx } from "classnames"
import { Link } from "gatsby"
import React from "react"

import styles from "./button.module.scss"

const Button = ({ 
  text,
  to,
  className,
  ...rest
}) => {
  const Root = to ? Link : 'button';

  return (
    <Root className={cx(styles.root, className)} to={to ? to : null} {...rest}>
      {text}
    </Root>
  )
}

export default Button
