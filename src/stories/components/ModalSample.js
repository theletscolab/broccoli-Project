import React from 'react'
import PropTypes from 'prop-types'
import { ModalContext } from '../../contexts/modalContext'
import Button from '../../components/Button'
import { MainStyled, Title, SubTitle } from './styled'

const ModalSample = ({ title, subTitle, btnText }) => {
  let { handleModal } = React.useContext(ModalContext)
  return (
    <MainStyled>
      <Title>{title}</Title>
      <SubTitle>{subTitle}</SubTitle>
      <Button size={'large'} title={btnText} onClick={() => handleModal(<MainComponent />)} />
    </MainStyled>
  )
}

ModalSample.propTypes = {
  title: PropTypes.string,
  subTitle: PropTypes.string,
  btnText: PropTypes.string
}

ModalSample.defaultProps = {
  title: 'Page Title',
  subTitle: 'Page Subtitle',
  btnText: 'Click'
}

const MainComponent = () => {
  return <section>Modal Opened</section>
}

export default ModalSample
