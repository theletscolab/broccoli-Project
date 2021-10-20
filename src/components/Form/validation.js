import { yupResolver } from '@hookform/resolvers/yup'
import * as Yup from 'yup'

// form validation rules
const validationSchema = Yup.object().shape({
  name: Yup.string()
    .required('Name is required')
    .matches(
      /(^[a-zA-Z]{3,}$|^[a-zA-Z]{3,}\s[a-zA-Z]{1,}$)/,
      'Full name need to be at least 3 characters'
    ),
  email: Yup.string().required('Email is required').email('Email is invalid'),
  confirmEmail: Yup.string()
    .oneOf([Yup.ref('email'), null], 'Email must match')
    .required('Confirm Email is required')
})
export const formOptions = { resolver: yupResolver(validationSchema) }
