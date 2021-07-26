import { styles } from './login-styles'
import React, { FunctionComponent } from 'react';
import themes, { DefaultTheme } from '../../utils/theme/theme'
import { useAppSelector } from '../../utils/hooks'
import { appTheme } from '../../store/reducers/appSettings'

export const LoginContainer: FunctionComponent = ({children})  => {
  const colorMode = useAppSelector(appTheme)
  const primaryColor: DefaultTheme = themes[colorMode]
  const style = styles(primaryColor)

  return (
    <section className={style.section}>
      <div className={style.container}>
        {children}
      </div>
    </section>
  )
}
