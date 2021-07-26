import { createUseStyles } from 'react-jss'
import { DefaultTheme } from '../../utils/theme/theme'

export const styles = createUseStyles({
  section: {
    maxWidth: '100%',
    width: '100%',
    height: 'calc(100vh - 38px)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },

  container: {
    width: 320,
    height: 320,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    background: (theme: DefaultTheme) => theme.other.background,
  }
})
