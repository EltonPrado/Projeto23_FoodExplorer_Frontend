import { createContext, useContext, useState, useEffect } from 'react';

export const FavoriteContext = createContext({});

function FavoriteProvider({ children }) {
  const [favorites, setFavorites] = useState(JSON.parse(localStorage.getItem(`@foodExplorer: favorites`)) || []);

  function addFoodToFavorite(data) {
    setFavorites([...favorites, data])
  }

  function removeFoodFromFavorite(data) {
    setFavorites(favorites.filter((food) => food.id !== data.id))
  }

  useEffect(() => {
    localStorage.setItem(`@foodExplorer: favorites`, JSON.stringify(favorites));
  }, [favorites])

  return (
    <FavoriteContext.Provider value={{ 
      favorites,
      addFoodToFavorite,
      removeFoodFromFavorite
    }}>
      { children }
    </FavoriteContext.Provider>
  )
}

function useFavorite() {
  const context = useContext(FavoriteContext);
  return context;
}

export { FavoriteProvider, useFavorite };