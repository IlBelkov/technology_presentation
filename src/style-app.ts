import { createUseStyles } from 'react-jss'
import { DefaultTheme } from './utils/theme/theme'

export const styles = createUseStyles({
  container: {
    background: (theme: DefaultTheme) => theme.main.background,
    width: '100%',
    height: '100vh',
  }
})
