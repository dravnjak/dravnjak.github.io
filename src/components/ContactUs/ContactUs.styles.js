export default {
  bottomArea: {
    position: 'absolute',
    bottom: '1rem',
    right: '1rem',

    '& h3, & p': {
      margin: '0'
    },
  },
  opacity75: {
    opacity: '0.75',
  },

  '@media (min-width: 768px)': {
    bottomArea: {
      bottom: '3rem',
      right: '3rem'
    }
  }
}
