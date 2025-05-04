import { useState } from "react";

import styles from "./Chef.module.css";

export default function Chef() {
  /*const ingredients = ["Chicken", "Oregano", "Tomatoes"];*/

  const [ingredients, setIngredients] = useState([]);

  const ingredientList = ingredients.map((ingredient) => {
    return <li key={ingredient}>{ingredient}</li>;
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const newIngredient = formData.get("ingredient");

    setIngredients((prevList) => [...prevList, newIngredient]);
  };

  return (
    <main>
      <form action="" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="e.g. oregano"
          aria-label="Add ingredient"
          name="ingredient"
        />
        <button type="submit">+ Add ingredient</button>
      </form>
      <ul>{ingredientList}</ul>
    </main>
  );
}
