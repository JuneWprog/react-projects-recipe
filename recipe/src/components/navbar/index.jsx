import React from 'react'
import { NavLink } from 'react-router-dom'
import { useContext } from 'react'
import {RecipeContext} from '../../context/index'
import {FaSearch} from 'react-icons/fa'


const Navbar = () => {

  const {searchParam, setSearchParam, handleSubmit } = useContext(RecipeContext)
  return (
    <nav className="flex justify-around items-center py-8 container mx-auto flex-col lg:flex-row gap-5 lg:gap-0">
    <h2 className="text-2xl font-semibold">
      <NavLink to={"/"}>FoodRecipe</NavLink>
    </h2>
    <form onSubmit={handleSubmit} className ='relative w-fit'>
      <input
        type="text"
        name="search"
        value={searchParam}
        onChange={(event) => setSearchParam(event.target.value)}
        placeholder="Enter Items..."
        className="bg-white/75 p-3 px-8 rounded-full outline-none lg:w-96 shadow-lg shadow-red-100 focus:shadow-red-200 "
        autoFocus
      />
      <button onClick={handleSubmit} className="absolute top-1/2 right-3 -translate-y-1/2 bg-red-500 text-white p-2 rounded-full  hover:bg-red-600 transition z-10"><span><FaSearch/></span></button>
     
    </form>
    <ul className="flex gap-5">
      <li>
        <NavLink
          to={"/"}
          className="text-black text-3xl font-semibold hover:text-gray-600 duration-300"
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to={"/favorites"}
          className="text-black text-3xl font-semibold hover:text-gray-500 duration-300"
        >
          Favorites
        </NavLink>
      </li>
    </ul>
  </nav>
  )
}

export default Navbar
