import { TextFieldElement } from '../FormControl/TextFieldElement'
import { FormContainer } from '../FormControl/FormContainer'

interface FormData {
  email: 'email',
  password: 'password',
  password_repeat: 'password_repeat'
}

export const Login = () => {
  const onSubmit = (data: FormData) => console.log(data)

  return (
    <FormContainer onSuccess={onSubmit}>
      <TextFieldElement
        name={'email'}
        label={'Email'}
        type={'email'}
        required
      /><br/>
      <TextFieldElement
        name={'password'}
        label={'Password'}
        type={'password'}
        required
      /><br/>
      <input type='submit' />
    </FormContainer>
  )
}

