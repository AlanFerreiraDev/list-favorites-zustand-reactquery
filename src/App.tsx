import { useCallback } from 'react'
import './App.css'
import Card from './components/Card'
import { useFetchRepos } from './queries/repo'
import { useFavoriteRepoStore } from './store/useFavoritesRepos'

function App() {
  const { data } = useFetchRepos('AlanFerreiraDev')

  const favoriteRepoIds = useFavoriteRepoStore((state) => state.favoriteRepoIds)
  const addToFavorites = useFavoriteRepoStore((state) => state.addToFavorites)
  const removeFromFavorites = useFavoriteRepoStore(
    (state) => state.removeFromFavorites
  )

  const handleAddToFavorites = useCallback(
    (repoId: number) => {
      addToFavorites(repoId)
    },
    [addToFavorites]
  )

  const handleRemoveFromFavorites = useCallback(
    (repoId: number) => {
      removeFromFavorites(repoId)
    },
    [removeFromFavorites]
  )

  console.log(data)
  return (
    <div className="App">
      {data?.map((repo) => (
        <Card
          key={repo.id}
          repo={repo}
          isFavorite={favoriteRepoIds.includes(repo.id)}
          addToFavorites={handleAddToFavorites}
          removeFromFavorites={handleRemoveFromFavorites}
        />
      ))}
    </div>
  )
}

export default App
