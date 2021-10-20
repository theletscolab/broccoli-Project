import Copyright from '../../components/Copyright'
import { ThemeProvider } from 'styled-components'
import theme from '../../theme'
export default {
  title: 'Components/Copyright',
  component: Copyright,
  argTypes: {
    today: { controls: 'date' },
    fontSize: {
      options: ['1.2rem', '1.6rem', '2rem', '2.4rem', '3.2rem', '4.8rem', '6.4rem'],
      control: { type: 'radio' }
    }
  }
}

const Template = args => {
  theme.fontSizes[0] = args.fontSize
  return (
    <ThemeProvider theme={theme}>
      <Copyright />
    </ThemeProvider>
  )
}

export const Default = Template.bind({})
Default.args = {
  today: new Date().toString(),
  fontSize: '1.2rem'
}
