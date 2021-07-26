import { TextField, TextFieldProps } from '@material-ui/core'
import { Controller, ControllerProps, FieldError } from 'react-hook-form'
import { verificationObj } from '../../utils/validation'

export type TextFieldElementProps = Omit<TextFieldProps,
  'name'> & {
  validation?: ControllerProps['rules']
  name: any,
  parseError?: (error: FieldError) => string
}

export const TextFieldElement = ({
                                   parseError,
                                   type,
                                   required,
                                   name,
                                   ...rest
                                 }: TextFieldElementProps): JSX.Element => {
  const validation = verificationObj(required, type)

    return (
      <>
        <Controller
          name={name}
          rules={validation}
          render={({ field: { value, onChange, onBlur }, fieldState: { invalid, error } }) =>
            <TextField
              {...rest}
              name={name}
              value={value || ''}
              onChange={onChange}
              onBlur={onBlur}
              type={type}
              error={invalid}
              helperText={error ? (typeof parseError === 'function' ? parseError(error) : error.message) : rest.helperText}
            />
          }
        />
      </>
    )
}
