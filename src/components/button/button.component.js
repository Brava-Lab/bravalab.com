import { default as cx } from "classnames"
import { Link } from "gatsby"
import React from "react"

import styles from "./button.module.scss"

const Button = ({ text, to, className, ...rest }) => (
  <Link className={cx(styles.root, className)} to={to} {...rest}>
    {text}
  </Link>
)

export default Button
