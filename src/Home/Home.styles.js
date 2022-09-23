export default {

  title: {
    color: '#444f60 !important',
    marginBottom: '1rem !important',
    fontSize: '3rem',
    fontWeight: '600',
    lineHeight: '1.125'
  },

  hero: {
    width: '100%',
    height: '100vh',

    backgroundColor: '#cccccc',
    backgroundPosition: 'right-top',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
  },

  heroArea: {
    position: 'absolute',
    top: '0',
    right: '0',
    bottom: '0',
    left: '0',
    padding: '1.25rem',
    display: 'flex',
    justifyContent: 'flex-end'
  },

  textRight: {
    textAlign: 'right!important',
  },

  textArea: {
    position: 'relative',
    maxWidth: '90%',
    flex: '0 0 90%',
    width: '90%',
    padding: '1rem',
  },

  '@media (min-width: 768px)': {
    textArea: {
      maxWidth: '41.66667%',
      flex: '0 0 41.66667%',
      paddingTop: '3rem',
      paddingRight: '3rem',
      paddingLeft: '15px'
    },

    bottomArea: {
      bottom: '3rem',
      right: '3rem',
    }
  }
}

