import { formatDistanceStrict } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'

export const getFormattedDate = (
  value: string | Date | number,
  upperCase?: boolean,
) => {
  const formattedDate = formatDistanceStrict(new Date(value), new Date(), {
    addSuffix: true,
    locale: ptBR,
  })

  if (upperCase) {
    return formattedDate.charAt(0).toUpperCase() + formattedDate.slice(1)
  } else {
    return formattedDate
  }
}
