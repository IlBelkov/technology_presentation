import { TextFieldElement } from '../FormControl/FormControl'
import { FormContainer } from '../FormControl/FormContainer'

interface FormData {
  email: 'email'
}

export const Login = () => {
  const onSubmit = (data: FormData) => console.log(data)

  return (
    <FormContainer onSuccess={onSubmit}>
      <TextFieldElement
        name={'email'}
        label={'Hallo'}
        type={'email'}
        required
      />
      <input type='submit' />
    </FormContainer>
  )
}

