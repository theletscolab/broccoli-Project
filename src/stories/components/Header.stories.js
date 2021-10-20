import { ThemeProvider } from 'styled-components'
import Header from '../../components/Header'
import theme from '../../theme'
export default {
  title: 'Components/Header',
  component: Header,
  argTypes: {
    backgroundColor: { controls: 'color' }
  }
}

const Template = args => (
  <ThemeProvider theme={theme}>
    <Header style={{ backgroundColor: args.backgroundColor }} />
  </ThemeProvider>
)

export const Default = Template.bind({})
Default.args = {
  backgroundColor: '#fafafa'
}
