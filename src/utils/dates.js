import 'date-fns'
import Dfs from '@date-io/date-fns'

const dateFns = new Dfs()

const setHours = (date, hours = null) =>
  hours === null
    ? date
    : Array.isArray(hours)
    ? date.setHours(...hours)
    : typeof hours === 'number'
    ? date.setHours(hours, hours, hours, hours)
    : date

const toDate = (d, { hours } = {}) => {
  const date = d instanceof Date ? d : dateFns.date(d)
  return setHours(date, hours)
}

export const useDate = (d, { hours } = {}) => toDate(d, { hours })
