import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import customFetch from './customFetch'

console.log(import.meta.env.VITE_API_KEY)
const VITE_API_KEY_value = import.meta.env.VITE_API_KEY

export const useFetchImages = (searchValue) => {
  const { data, isLoading, error, isError } = useQuery({
    queryKey: ['images', searchValue],
    queryFn: async () => {
      const client_id = `client_id=${VITE_API_KEY_value}`
      const query = `query=${searchValue}`
      const resp = await customFetch.get(`/search/photos?${client_id}&${query}`)
      return resp.data
    },
  })
  return { isLoading, data, isError }
}
