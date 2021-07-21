import React, { useState } from 'react'
import { useAppDispatch, useAppSelector } from '../../utils/hooks'
import { appTheme, changeTheme } from '../../store/reducers/appSettings'
import themes, { DefaultTheme } from '../../utils/theme/theme'
import { styles, useStyles } from './header-styles'
import { Switch } from '@material-ui/core'
import Brightness5Icon from '@material-ui/icons/Brightness5';
import Brightness4Icon from '@material-ui/icons/Brightness4';

export function Header () {
  const [isDarkMode, setDarkMode] = useState(false)
  const classes = useStyles();
  const colorMode = useAppSelector(appTheme)
  const dispatch = useAppDispatch();

  const primaryColor: DefaultTheme = themes[colorMode]
  const style = styles(primaryColor)

  const handleChange = () => {
    dispatch(changeTheme())
    setDarkMode(prevState => !prevState)
  }

  return(
    <header className={style.header}>
      <div className={style.container}>
        <Switch
          checked={isDarkMode}
          onChange={handleChange}
          color="primary"
          name="darkMode"
          checkedIcon={<Brightness4Icon />}
          icon={<Brightness5Icon />}
          inputProps={{ 'aria-label': 'dark mode checkbox' }}
          classes={{
            switchBase : classes.switchBase
          }}
        />
      </div>
    </header>
  )
}
