export default {

  logoFull: {
    maxWidth: '7em',
  },

  logo: {
    display: 'none',
    maxWidth: '7em',
  },

  line: {
    borderTop: '1px solid #fff',
    marginTop: '2em',
    marginBottom: '2em',
  },

  opacity75: {
    opacity: '0.75',
  },

  '&@media(min - width: 768px)': {
    logoFull: {
      display: 'none',
    },

    logo: {
      display: 'initial'
    }
  },
}
