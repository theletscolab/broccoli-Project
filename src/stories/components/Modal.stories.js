import { ThemeProvider } from 'styled-components'
import { ModalProvider } from '../../contexts/modalContext'
import Modal from '../../components/Modal'
import ModalSample from './ModalSample'
import theme from '../../theme'

export default {
  title: 'Components/Modal',
  component: Modal,
  argTypes: {
    title: { controls: 'text' },
    subTitle: { controls: 'text' },
    btnText: { controls: 'text' }
  }
}

const Template = args => (
  <ThemeProvider theme={theme}>
    <ModalProvider>
      <Modal />
      <ModalSample {...args} />
    </ModalProvider>
  </ThemeProvider>
)

export const Default = Template.bind({})
Default.args = {
  title: 'Page Title',
  subTitle: 'Page Subtitle',
  btnText: 'Click'
}
