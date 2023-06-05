import { useQuery, QueryFunctionContext } from '@tanstack/react-query'
import { api } from '../../services/api'
import { RepoProps } from './types'

async function getRepos(context: QueryFunctionContext) {
  const [, userId] = context.queryKey
  const { data } = await api.get<RepoProps[]>(`/users/${userId}/repos`)

  return data
}

export function useFetchRepos(userId: string) {
  return useQuery(['repos', userId], getRepos)
}
