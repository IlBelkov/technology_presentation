import React from 'react'
import { styles } from './style-app'
import { useAppDispatch, useAppSelector } from './utils/hooks'
import { appTheme, changeTheme } from './store/reducers/appSettings'
import themes, { DefaultTheme } from './utils/theme/theme'

export function App() {
  const colorMode = useAppSelector(appTheme)
  const dispatch = useAppDispatch();

  const primaryColor: DefaultTheme = themes[colorMode]
  const style = styles(primaryColor)

  return (
    <div role='main' className={style.container} onClick={() => dispatch(changeTheme())}>
      {/*{Headers}*/}
      {/*{Form}*/}
      {/*{Table}*/}
    </div>
  )
}

