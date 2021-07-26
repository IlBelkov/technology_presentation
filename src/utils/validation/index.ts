import { ControllerProps } from 'react-hook-form'

export const verificationObj = (required: boolean | undefined, type: string | undefined) => {
  const validation: ControllerProps['rules'] = {}
  if (required) {
    validation.required = 'This field is required'
  }

  if (type === 'email') {
    validation.pattern = {
      // eslint-disable-next-line no-useless-escape
      value: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      message: 'Please enter a valid email address'
    }
  }

  if (type === 'password') {
    validation.minLength = {
      value: 8,
      message: 'The password cannot be shorter than 8 characters'
    }
  }

  return validation
}

