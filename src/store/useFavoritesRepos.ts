import { create } from 'zustand'
import { persist } from 'zustand/middleware'

type FavoriteRepoStoreProps = {
  favoriteRepoIds: number[]
  addToFavorites: (repoId: number) => void
  removeFromFavorites: (repoId: number) => void
}

export const useFavoriteRepoStore = create(
  persist<FavoriteRepoStoreProps>(
    (set) => ({
      favoriteRepoIds: [],
      addToFavorites: (repoId: number) => {
        set((state) => ({
          favoriteRepoIds: [...state.favoriteRepoIds, repoId],
        }))
      },
      removeFromFavorites: (repoId: number) => {
        set((state) => ({
          favoriteRepoIds: state.favoriteRepoIds.filter((id) => id !== repoId),
        }))
      },
    }),
    {
      name: 'favorite-repo-store',
    }
  )
)
