import appSettingsReducer, { appSettings, changeTheme } from '../reducers/appSettings'
import { render } from '@testing-library/react'
import { Provider } from 'react-redux'
import { App } from '../../App'
import { store } from '../store'

describe('appSettings reducer testing', () => {
  const initialState: appSettings = {
    theme: 'light'
  }

  it('check initial state is equal to light', () => {
    render(<Provider store={store}><App /></Provider>)
    expect(appSettingsReducer(undefined, {type: 'unknown'})).toEqual({theme: 'light'})
  })

  it('check change theme value equal dark', () => {
    const actual = appSettingsReducer(initialState, changeTheme())
    expect(actual.theme).toEqual('dark')
  })

  it('check change theme value equal light', () => {
    appSettingsReducer(initialState, changeTheme())
    const actual = appSettingsReducer(initialState, changeTheme())
    expect(actual.theme).toEqual('light')
  })
})
