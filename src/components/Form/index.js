import React from 'react'
import PropTypes from 'prop-types'
import { useForm } from 'react-hook-form'
import { postForm } from '../../features/api'
import Button from '../../components/Button'
import { FormStyled, FormTitle, ErrorMessage, InputStyled } from './styled'
import { formOptions } from './validation'

const Form = ({ formTitle, formBtnTxt, onSuccess }) => {
  const {
    register,
    formState: { errors, isSubmitting },
    handleSubmit
  } = useForm(formOptions)

  const onSubmit = async data => ((await postForm(data)) ? onSuccess() : null)

  return (
    <FormStyled onSubmit={handleSubmit(onSubmit)}>
      <FormTitle>{formTitle}</FormTitle>
      <InputStyled
        name="name"
        type="text"
        placeholder="Full name"
        {...register('name')}
        className={`form-control ${errors.name ? 'is-invalid' : ''}`}
      />
      <ErrorMessage> {errors.name?.message} </ErrorMessage>
      <InputStyled
        name="email"
        type="email"
        placeholder="Email"
        {...register('email')}
        className={`form-control ${errors.email ? 'is-invalid' : ''}`}
      />
      <ErrorMessage> {errors.email?.message} </ErrorMessage>
      <InputStyled
        name="confirmEmail"
        type="email"
        placeholder="Confirm email"
        {...register('confirmEmail')}
        className={`form-control ${errors.confirmEmail ? 'is-invalid' : ''}`}
      />
      <ErrorMessage> {errors.confirmEmail?.message} </ErrorMessage>
      {!isSubmitting ? (
        <Button type="submit" title={formBtnTxt} />
      ) : (
        <Button type="submit" disabled={isSubmitting} title={'Submitting'} />
      )}
    </FormStyled>
  )
}

Form.propTypes = {
  formTitle: PropTypes.string,
  formBtnTxt: PropTypes.string,
  onSuccess: PropTypes.func.isRequired
}

Form.defaultProps = {
  formTitle: 'Request an invite',
  formBtnTxt: 'Send'
}

export default Form
