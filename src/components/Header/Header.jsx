import React from 'react'

import { createUseStyles } from 'react-jss'

import classNames from 'classnames'

import './Header.styles.js'

import styles from './Header.styles'

const useStyles = createUseStyles(styles, { name: 'About' })

const Header = () => {

  const classes = useStyles()

  return (
    <div>
      <img className={classes.logo} src="logo.png" alt="white logo" />
      <img className={classes.logoFull} src="logo-full.png" alt="white logo" />
      <hr className={classNames(classes.line, classes.opacity75)} />
    </div>
  )
}

export default Header
