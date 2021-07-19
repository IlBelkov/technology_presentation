export interface DefaultTheme {
  background: string
  color: string
}

const dark: DefaultTheme = { background: '#000000', color: '#ffffff' }
const light: DefaultTheme = { background: '#ffffff', color: '#000000' }


export default { dark, light}
