import React, { FormHTMLAttributes, FunctionComponent } from 'react'
import { FormProvider, useForm, UseFormReturn } from 'react-hook-form'

export type FormContainerProps = {
  defaultValues?: any
  onSuccess?: (values: any) => void
  handleSubmit?: (values: any) => void
  formContext?: UseFormReturn<any>
  FormProps?: FormHTMLAttributes<HTMLFormElement>
}

export const FormContainer: FunctionComponent<FormContainerProps> = ({
                                                                    defaultValues = {},
                                                                       onSuccess = () => {
                                                                    },
                                                                    FormProps,
                                                                    children
                                                                  }) => {
  const methods = useForm<typeof defaultValues>({
    defaultValues
  })
  const { handleSubmit } = methods

  return (
    <FormProvider {...methods}>
      <form
        onSubmit={handleSubmit(onSuccess)}
        noValidate {...FormProps}>
        {children}
      </form>
    </FormProvider>
  )
}
