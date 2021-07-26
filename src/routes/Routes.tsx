import { Route } from 'react-router-dom'
import { Login } from '../components/Login/Login'

export const Routes = () => {
  return (
    <>
      <Route
        exact
        path='/'
        render={() => <Login />}
      />
    </>
  )
}
