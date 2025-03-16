import React, {useContext} from 'react'
import { Link } from "react-router-dom";
import {RecipeContext} from "../../context";

import RecipeItem from "../../components/recipe-item";

const Favorite = () => {
  const { favoritesList } = useContext(RecipeContext);
  return (
    <div>
      <h1 className="text-center text-4xl">My Favorite</h1>
      <div className="container grid grid-cols-3 gap-4">
        {favoritesList && favoritesList.length > 0 ? (
          favoritesList.map((item) => (
              <RecipeItem key={item.recipe_id} item={item} />
          ))
        ) : (
          <p>No favorite items</p>
        )}
      </div>
      
    </div>
  )
}

export default Favorite
