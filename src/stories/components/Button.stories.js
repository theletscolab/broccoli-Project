import Button from '../../components/Button'
import theme from '../../theme'
import { ThemeProvider } from 'styled-components'
export default {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    title: { controls: 'text' },
    size: {
      options: ['small', 'medium', 'large'],
      control: { type: 'radio' }
    },
    buttonColor: { controls: 'color' }
  }
}

const Template = args => (
  <ThemeProvider theme={theme}>
    <Button {...args} style={{ color: args.buttonColor }} />
  </ThemeProvider>
)

export const Default = Template.bind({})
Default.args = {
  title: 'Default Button',
  size: 'small',
  buttonColor: '#612fff'
}
