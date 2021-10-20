import { ThemeProvider } from 'styled-components'
import Footer from '../../components/Copyright'
import theme from '../../theme'
export default {
  title: 'Components/Footer',
  component: Footer,
  argTypes: {
    color: { controls: 'color' }
  }
}

const Template = args => (
  <ThemeProvider theme={theme}>
    <Footer style={{ backgroundColor: args.color }} />
  </ThemeProvider>
)

export const Default = Template.bind({})
Default.args = {
  color: '#fafafa'
}
