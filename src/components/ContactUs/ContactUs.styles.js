export default {
  bottomArea: {
    position: 'absolute',
    bottom: '1rem',
    right: '1rem',

    '& h3, & p': {
      margin: '0'
    },
  },

  '@media (min-width: 768px)': {
    bottomArea: {
      bottom: '3rem',
      right: '3rem'
    }
  }
}
