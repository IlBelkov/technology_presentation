import { createUseStyles } from 'react-jss'
import { DefaultTheme } from '../../utils/theme/theme'
import { makeStyles } from '@material-ui/core'

export const styles = createUseStyles({
  header: {
    background: (theme: DefaultTheme) => theme.other.background,
    maxWidth: '100%',
    width: '100%',
    height: '50',
  },

  container: {
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
    padding: '0 15px'
  }
})

export const useStyles = makeStyles({
  switchBase: {
    top: '-2px'
  }
});
