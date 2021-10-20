import { string } from 'prop-types'
import { useDate } from '../../utils/dates'
import { StyledCopyright } from './styled'

const Copyright = ({ today: tDay, ...props }) => {
  const today = useDate(tDay)
  const year = today.getFullYear()
  return (
    <StyledCopyright {...props}>
      {'Copyright © '}
      Broccoli &amp; Co. All rights reserved.
      {year}.
    </StyledCopyright>
  )
}

Copyright.propTypes = {
  today: string // zulu-time string only used in testing.
}
Copyright.defaultProps = {
  today: undefined
}
export default Copyright
