import Axios from "axios";
import "./App.css";
import { useState } from "react";
import RecipeTile from "./RecipeTile";

function App() {
  const [query, setQuery] = useState("");
  const [recipes, setrecipes] = useState([]);
  

  const YOUR_APP_ID = "8c7c579f";
  const YOUR_APP_KEY = "57c16c0d68aff60c7c2f3e87b9592304";

  function inputChange(e) {
   setQuery(e.target.value);
}

  const submitBtn = (e) => {
    e.preventDefault();
    getRecipes(query);
  }

  async function getRecipes(data) {
    var url = `https://api.edamam.com/search?q=${query}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&health=alcohol-free`;

    var result = await Axios.get(url);
    setrecipes(result.data.hits);
  }

  function myRecipes(e) {
    getRecipes(e.target.value)
  }

  return (
    <div className="app">
      <h1>Find Your Recipe</h1>

      <form className="app_searchForm" onSubmit={submitBtn}>
        <input
          type="text"
          className="app_input"
          placeholder="Enter ingredient..."
          onInput={inputChange}
        />
        <input className="app_submit" type="submit" value="Search" />
      </form>

      <select className="app_healthLabels" onChange={myRecipes}>
        <option value="Vegan">Vegan</option>
        <option value="vegetarian">vegetarian</option>
        <option value='paleo'>paleo</option>
        <option value='dairy-free'>dairy-free</option>
        <option value='gluton-free'>gluton-free</option>
        <option value='wheat-free'>wheat-free</option>
        <option value='low-sugar'>low-sugar</option>
        <option value='egg-free'>egg-free</option>
        <option value='peanut-free'>peanut-free</option>
        <option value='tree-nut-free'>tree-nut-free</option>
        <option value='soy-free'>soy-free</option>
        <option value='fish-free'>fish-free</option>
        <option value='shellfish-free'>shellfish-free</option>
      </select>

      <div className="recipeResult">
        <div className="app__recipes">
          {recipes.map((recipe) => {
            return <RecipeTile recipe={recipe} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
