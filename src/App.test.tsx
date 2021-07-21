import React from 'react'
import { render, screen } from '@testing-library/react'
import { Provider } from 'react-redux'
import { store } from './store/store'
import { App } from './App'
import userEvent from '@testing-library/user-event'

test('renders learn react link', () => {
  render(<Provider store={store}><App /></Provider>)
  const changeTheme = screen.getByLabelText(/dark mode checkbox/)
  expect(screen.getByRole('main') ).toHaveStyle('background: #fff')
  userEvent.click(changeTheme)
  expect(screen.getByRole('main') ).toHaveStyle('background: #000')
})
