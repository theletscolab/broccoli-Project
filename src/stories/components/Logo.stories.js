import Logo from '../../components/Logo'
import theme from '../../theme'
import { ThemeProvider } from 'styled-components'

export default {
  title: 'Components/Logo',
  component: Logo,
  argTypes: {
    textColor: { controls: 'color' },
    logoText: { controls: 'text' },
    logoHref: { controls: 'text' }
  }
}

const Template = args => {
  theme.colors.grey800 = args.textColor
  return (
    <ThemeProvider theme={theme}>
      <Logo {...args} />
    </ThemeProvider>
  )
}

export const Default = Template.bind({})
Default.args = {
  textColor: '#424242',
  logoText: 'Broccoli & Co',
  logoHref: '/?path=/story/components-logo--default'
}
