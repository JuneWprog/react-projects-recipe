import React, {useContext} from 'react'
import RecipeItem from '../../components/recipe-item'
import {RecipeContext} from '../../context'

const Home = () => {
  const {recipeList} = useContext(RecipeContext)
 
  return (
    <div className="py-8 container mx-auto flex flex-wrap justify-center gap-10">
      
      
        {recipeList && recipeList.length > 0 ? (
          recipeList.map((item) => (
            <RecipeItem item={item} key={item.recipe_id} />
          ))
        ) : (
          <p>No recipe found. Please start search. </p>
        )}
      
      
    </div>
  )
}

export default Home
