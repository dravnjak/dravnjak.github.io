import React from 'react'

import { createUseStyles } from 'react-jss'

import './About.styles.js'

import styles from './About.styles'

const useStyles = createUseStyles(styles, { name: 'About' }) 

const About = () => {
  const classes = useStyles()
  return (
    <div>
      <h2>Our Mission</h2>
      <p className="opacity75">
                Dedication to your success.
      </p>
      <h2>Our Process</h2>
      <p className="opacity75">
                Before creation, there&apos;s thinking.<br/>
                Our process is sharp and let us craft the best quality.
      </p>
    </div>
  )
}

export default About
