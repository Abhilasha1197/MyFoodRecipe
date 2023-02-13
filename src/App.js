import "./key";
import Axios from "axios";
import "./App.css";
import { useState } from "react";
import RecipeTile from "./RecipeTile";

function App() {
  const [query, setQuery] = useState("");
  const [recipes, setrecipes] = useState([]);
  const [healthLabel, sethealthLabel] = useState("vegan");

  const YOUR_APP_ID = "8c7c579f";
  const YOUR_APP_KEY = "57c16c0d68aff60c7c2f3e87b9592304";

  var url = `https://api.edamam.com/search?q=${query}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&health=${healthLabel}`;

  async function getRecipes() {
    var result = await Axios.get(url);
    setrecipes(result.data.hits);
    console.log(result.data);
  }

  const onSubmit = (e) => {
    e.preventDefault();
    getRecipes();
  };

  
  return (
    <div className="app">
      <h1>Find Your Recipe</h1>
      
      <form className="app_searchForm" onSubmit={onSubmit}>
        <input
          type="text"
          className="app_input"
          placeholder="Enter ingredient..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <input className="app_submit" type="submit" value="Search" />
        </form>
        
        <select className="app_healthLabels">
          <option value="Vegan" onChange={() => sethealthLabel("value")}>Vegan</option>
          <option value="vegetarian" onChange={() => sethealthLabel("vegetarian")}>
            vegetarian
          </option> 
          <option onChange={() => sethealthLabel("paleo")}>paleo</option>
          <option onChange ={() => sethealthLabel("dairy-free")}>
            dairy-free
          </option>
          <option onChange={() => sethealthLabel("gluton-free")}>
            gluton-free
          </option>
          <option onChange={() => sethealthLabel("wheat-free")}>
            wheat-free
          </option>
          <option value = "low-sugar">low-sugar</option>
          <option onChange={() => sethealthLabel("egg-free")}>egg-free</option>
          <option onChange={() => sethealthLabel("peanut-free")}>
            peanut-free
          </option>
          <option onChange={() => sethealthLabel("tree-nut-free")}>
            tree-nut-free
          </option>
          <option onChange={() => sethealthLabel("soy-free")}>soy-free</option>
          <option onChange={() => sethealthLabel("fish-free")}>fish-free</option>
          <option onChange={() => sethealthLabel("shellfish-free")}>
            shellfish-free
          </option>
        </select>
      
      <div className ="recipeResult">
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
