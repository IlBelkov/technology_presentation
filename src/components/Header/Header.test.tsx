import { Header } from './Header'
import { render, screen } from '@testing-library/react'
import { Provider } from 'react-redux'
import { store } from '../../store/store'

describe('when rendered', () => {
  it('should be a button to change the theme', () => {
    render(<Provider store={store}><Header /></Provider>)
    const buttonChangeTheme = screen.getByLabelText(/dark mode checkbox/)
    expect(buttonChangeTheme).toBeInTheDocument()
  })
})
