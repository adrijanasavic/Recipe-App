import './App.css';
import { useEffect, useState } from 'react'
import Recipe from './Recipe';

function App() {

  const APP_ID = 'enter your api id'
  const APP_KEY = 'enter your api key'

  const exampleReq = `https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`

  const [recipes, setRecipes] = useState([])

  useEffect(() => {
    getRecipes()
  }, [])

  const getRecipes = async () => {
    const response = await fetch(exampleReq)
    const data = await response.json()
    setRecipes(data.hits);
    console.log(data.hits);
  }

  return (
    <div className="App">

      <form className='search-form'>
        <input className='search-bar' type="text" />
        <button className='search-button' type='submit'>Click</button>
      </form>
      {recipes.map(i => (
        <Recipe title={i.recipe.label} calories={i.recipe.calories}
          image={i.recipe.image} />
      ))}
    </div>
  );
}

export default App;
