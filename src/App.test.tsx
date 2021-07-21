import React from 'react'
import { render, screen } from '@testing-library/react'
import { Provider } from 'react-redux'
import { store } from './store/store'
import { App } from './App'
import userEvent from '@testing-library/user-event'

test('renders learn react link', () => {
  render(<Provider store={store}><App /></Provider>)
  const button = screen.getByRole('main')
  expect(screen.getByRole('main')).toHaveStyle('background: #fff')
  userEvent.click(button)
  expect(screen.queryByRole('main')).toHaveStyle('background: #000')
})
