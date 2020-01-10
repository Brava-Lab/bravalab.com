import { default as cx } from 'classnames';
import React from 'react';

import Container from './../container/container.component';
import styles from './section.module.scss';

const Section = ({
  title,
  subtitle,
  className,
  children,
  grey,
  gutterBottom,
  gutterTop,
  gutterBoth,
  ...rest
}) => {

  const rootClassnames = cx(styles.root, {
    [styles.gutterTop]: gutterTop || gutterBoth,
    [styles.gutterBottom]: gutterBottom || gutterBoth,
    [styles.grey]: grey === true,
  }, className)

  return (
    <section
      className={ rootClassnames }
      { ...rest }>
      <Container className={ styles.container } >
        { title ? <h2 className={ styles.title }>{ title }</h2> : null }
        { subtitle ? <h3 className={ styles.subtitle }>{ subtitle }</h3>: null }
        
        { children }
      </Container>
    </section>
  )
};

export default Section;