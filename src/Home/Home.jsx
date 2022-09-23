import React from 'react'

import { createUseStyles } from 'react-jss'

import classNames from 'classnames'

import Header from '../components/Header'

import ContactUs from '../components/ContactUs'

import About from '../components/About'

import styles from './Home.styles.js'

const useStyles = createUseStyles(styles, { name: 'Home' })

function Home() {

  const classes = useStyles()
  return (
    <div>
      <div className={classes.hero} style={{ backgroundImage: 'url("hero.png")' }}>
        <div className={classes.heroArea}>
          <div className={classNames(classes.textRight, classes.textArea)}>
            <Header />
            <About />
            <ContactUs />
          </div>
        </div>
      </div>
    </div>
  )
}
export default Home
