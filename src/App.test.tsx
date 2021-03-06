import React from 'react'
import { render, screen } from '@testing-library/react'
import { Provider } from 'react-redux'
import { store } from './store/store'
import { App } from './App'
import userEvent from '@testing-library/user-event'

describe('dark mode theme', () => {
  it('should change the theme', function () {
    render(<Provider store={store}><App /></Provider>)
    const changeTheme = screen.getByLabelText(/dark mode checkbox/)
    expect(screen.getByRole('main') ).toHaveStyle('background: #fff')
    userEvent.click(changeTheme)
    expect(screen.getByRole('main') ).toHaveStyle('background: #000')
  })

})
