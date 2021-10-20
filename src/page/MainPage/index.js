import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { ModalContext } from '../../contexts/modalContext'
import Form from '../../components/Form'
import Button from '../../components/Button'
import SuccessMessage from '../../components/Form/SuccessMessage'
import { MainStyled, Title, SubTitle } from './styled'

const MainPage = ({ title, subTitle, btnText }) => {
  let { handleModal } = React.useContext(ModalContext)
  return (
    <MainStyled>
      <Title>{title}</Title>
      <SubTitle>{subTitle}</SubTitle>
      <Button size={'large'} title={btnText} onClick={() => handleModal(<MainComponent />)} />
    </MainStyled>
  )
}

MainPage.propTypes = {
  title: PropTypes.string,
  subTitle: PropTypes.string,
  btnText: PropTypes.string
}

MainPage.defaultProps = {
  title: 'A better way\n to enjoy every day.',
  subTitle: 'Be the first to know when we launch.',
  btnText: 'Request an invite'
}

const MainComponent = () => {
  const [submitted, setSubmitted] = useState(false)
  const onSuccess = () => setSubmitted(true)

  return !submitted ? <Form onSuccess={onSuccess} /> : <SuccessMessage />
}

export default MainPage
