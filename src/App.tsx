import React from 'react'
import { styles } from './style-app'
import { useAppSelector } from './utils/hooks'
import { appTheme } from './store/reducers/appSettings'
import themes, { DefaultTheme } from './utils/theme/theme'
import { Header } from './components/Header/Header'

export function App() {
  const colorMode = useAppSelector(appTheme)

  const primaryColor: DefaultTheme = themes[colorMode]
  const style = styles(primaryColor)

  return (
    <div role='main' className={style.container}>
      <Header />
      {/*{Form}*/}
      {/*{Table}*/}
    </div>
  )
}

