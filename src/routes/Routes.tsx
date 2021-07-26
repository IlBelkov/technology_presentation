import { Route } from 'react-router-dom'
import { LoginContainer } from '../components/Login/LoginContainer'
import { Login } from '../components/Login/Login'

export const Routes = () => {
  return (
    <>
      <Route
        exact
        path='/'
      >
        <LoginContainer>
          <Login />
        </LoginContainer>
      </Route>
    </>
  )
}
