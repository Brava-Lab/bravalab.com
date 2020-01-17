import { default as cx } from "classnames"
import React from "react"

import { BREAKPOINTS } from "./../../theme/theme.constants"

import styles from "./container.module.scss"

const Container = ({
  children,
  tag: Root = "div",
  className,
  size = "xl",
  ...rest
}) => (
  <Root
    className={ cx(styles.root, className) }
    style={ { maxWidth: `${ BREAKPOINTS[size] }px` } }
    { ...rest }
  >
    { children }
  </Root>
)

export default Container
