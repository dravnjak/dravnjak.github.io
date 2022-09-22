import React from 'react'

import { createUseStyles } from 'react-jss'

import styles from './ContactUs.styles.js'

const useStyles = createUseStyles(styles, { name: 'ContactUs' })

const ContactUs = () => {
  const classes = useStyles()

  return(
    <div className={classes.bottomArea}>
      <h3>Contact us</h3>
      <p className={classes.opacity75}>
        <a href="mailto:damjan@24setup.com">office@24setup.com</a>
      </p>
    </div>
  )
}

export default ContactUs
