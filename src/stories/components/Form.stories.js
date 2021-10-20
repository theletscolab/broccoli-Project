import Form from '../../components/Form'
import theme from '../../theme'
import { MainStyled } from '../../page/MainPage/styled'
import { ThemeProvider } from 'styled-components'
export default {
  title: 'Components/Form',
  component: Form,
  argTypes: {
    formTitle: { controls: 'text' },
    formBtnTxt: { controls: 'text' }
  }
}

const Template = args => (
  <ThemeProvider theme={theme}>
    <MainStyled>
      <Form {...args} />
    </MainStyled>
  </ThemeProvider>
)

export const Default = Template.bind({})
Default.args = {
  formTitle: 'Form',
  formBtnTxt: 'Submit',
  onSuccess: { onSuccess: () => {} }
}
