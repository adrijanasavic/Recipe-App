import './App.css';
import { useEffect, useState } from 'react'
import Recipe from './Recipe';

function App() {

  const APP_ID = 'enter your api id'
  const APP_KEY = 'enter your api key'

  const [recipes, setRecipes] = useState([])
  const [search, setSearch] = useState([])
  const [query, setQuery] = useState('chicken')

  useEffect(() => {
    getRecipes()
  }, [query])

  const getRecipes = async () => {
    const response = await fetch(
      `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
    )
    const data = await response.json()
    setRecipes(data.hits);
    console.log(data.hits);
  }

  const updateSearch = e => {
    setSearch(e.target.value)
  }

  const getSearch = e => {
    e.preventDefault()
    setQuery(search)
    setSearch('')
  }

  return (
    <div className="search-box">
      <form onSubmit={getSearch} className='search-form'>
        <input
          className='search-bar'
          type="text"
          value={search}
          onChange={updateSearch}
        />
        <button className='button-75 search-button' type='submit'>
          <span className="text">Search</span>
        </button>
      </form>
      <div className="recipes">
        {recipes.map(i => (
          <Recipe
            key={i.recipe.label}
            title={i.recipe.label}
            calories={i.recipe.calories}
            image={i.recipe.image}
            ingredients={i.recipe.ingredients}
            totalTime={i.recipe.totalTime}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
