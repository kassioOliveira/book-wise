import { formatDistanceStrict } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'

export const getFormattedDate = (value: string | Date | number) => {
  return formatDistanceStrict(new Date(value), new Date(), {
    addSuffix: true,
    locale: ptBR,
  })
}
