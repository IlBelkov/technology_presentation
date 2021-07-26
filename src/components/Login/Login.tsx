import { useForm } from 'react-hook-form'
import { TextFieldElement } from '../FormControl/FormControl'

interface FormData {
  name: 'string'
}

export const Login = () => {
  const { control, handleSubmit } = useForm<FormData>()
  const onSubmit = handleSubmit(data => console.log(data))

  return (
    <form onSubmit={onSubmit}>
      <TextFieldElement name={'firstname'} label={'Hallo'} control={control} type={'email'} required/>
      <input type='submit'/>
    </form>
  )
}

