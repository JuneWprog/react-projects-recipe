import React from "react";
import { useContext } from "react";
import {RecipeContext} from "../../context";
import useFetch from "../../util/useFetch";
import { useParams } from "react-router-dom";

const Detail = () => {
 
  const {
    recipeDetailsData,
    setRecipeDetailsData,
    favoritesList,
    handleAddToFavorite,
  } = useContext(RecipeContext);
  const { id } = useParams();

  const { data, isLoading, error } = useFetch(
    `https://forkify-api.herokuapp.com/api/get?rId=${id}`
  );
  // console.log(data, "data");
  // console.log(isLoading, "isLoading");
  // console.log(error, "error");
  if (data && data.recipe) {
    setRecipeDetailsData(data.recipe);
  }
  

  return (
    <div className="container flex flex-col items-center justify-center">
      {isLoading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {recipeDetailsData && (
        <div className="flex flex-col items-center justify-center">
          <h2 className="text-lg font-bold text-black"
          >{recipeDetailsData.title}</h2>
          <img className='rounded-lg'
            src={recipeDetailsData.image_url}
            alt={recipeDetailsData.title}
          />
          <p>{recipeDetailsData.publisher}</p>
          {recipeDetailsData.ingredients &&
          recipeDetailsData.ingredients.length ? (
            <div>
            <h3>Ingredients:</h3>
            <ul>
              {recipeDetailsData.ingredients.map((ingredient, index) => (
                <li key={index}>{ingredient}</li>
              ))}

            </ul>
            </div>
            
          ) : null}
          

          {favoritesList && favoritesList.length > 0 &&favoritesList.find((item) => item.recipe_id === recipeDetailsData.recipe_id) ? (
            <button
              onClick={() => handleAddToFavorite(recipeDetailsData)}
              className="bg-red-500 text-white px-4 py-2 rounded"
            >
              Remove from Favorite
            </button>
          ) : (
            <button
              onClick={() => handleAddToFavorite(recipeDetailsData)}
              className="bg-green-500 text-white px-4 py-2 rounded my-4"
            >
              Add to Favorite
            </button>)}

        </div>
      )}
    </div>
  );
};

export default Detail;
