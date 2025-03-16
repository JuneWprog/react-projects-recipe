import React from 'react'
import { createContext } from 'react'
import {useState} from 'react'
import { useNavigate } from "react-router-dom"; 


export const RecipeContext = createContext(null)
//must export the context
function RecipeState ({children}) {
    const [searchParam, setSearchParam] = useState("pizza");
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState(null)
    const [favoritesList, setFavoritesList] = useState([])
    const [recipeList, setRecipeList] = useState([])
    const [recipeDetailsData, setRecipeDetailsData] = useState(null);
    const navigate = useNavigate();
    async function handleSubmit(event) {
        event.preventDefault();
        try {
          const res = await fetch(
            `https://forkify-api.herokuapp.com/api/search?q=${searchParam}`
          );
    
          const data = await res.json();
       
          if (data?.recipes) {
            setRecipeList(data?.recipes);
            setIsLoading(false);
            setSearchParam("");
            navigate('/')
           
          }
        } catch (e) {
          console.log(e);
          setIsLoading(false);
          setSearchParam("");
        }
      }
      function handleAddToFavorite(getCurrentItem){
        
        let cpyFavoritesList = [...favoritesList];
        const index = cpyFavoritesList.findIndex(item=> item.recipe_id === getCurrentItem.recipe_id)
    
        if(index === -1) {
          cpyFavoritesList.push(getCurrentItem)
        } else {
          cpyFavoritesList.splice(index)
        }
    
        setFavoritesList(cpyFavoritesList)
      }
    
     
    
    
  return (
    <RecipeContext.Provider
    value={{searchParam, setSearchParam, handleAddToFavorite, isLoading, handleSubmit, setIsLoading, error, setError, favoritesList, setFavoritesList, recipeList, setRecipeList, recipeDetailsData, setRecipeDetailsData }}
    >
      {children}
    </RecipeContext.Provider>
  )
}

export default RecipeState
