import { useQuery } from '@tanstack/react-query'
import { findAllBurgers } from '../api/burgerService'

export const useAllBurgers = (enabled) => useQuery({
  queryKey: ['burgers'],
  queryFn: findAllBurgers,
  enabled: enabled
})
