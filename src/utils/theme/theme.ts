export interface DefaultTheme {
  main: {
    background: string
    color: string
  },
  other: {
    background: string
    color: string
  }
}

const dark: DefaultTheme = {
  main: {
    background: '#000000', color: '#ffffff'
  },
  other: {
    background: '#2b2b2b', color: '#ffffff'
  },
}
const light: DefaultTheme = {
  main: {
    background: '#ffffff', color: '#000000'
  },
  other: {
    background: '#c1c1c1', color: '#000000'
  },
}


export default { dark, light }
