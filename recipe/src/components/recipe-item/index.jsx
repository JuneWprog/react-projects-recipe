import React from "react";
import { useNavigate } from "react-router-dom";

export default function RecipeItem({ item }) {
  const navigate = useNavigate();
  function handleClick() {
    navigate(`/recipe/${item?.recipe_id}`);
  }
  return (
    <div
      className="flex flex-col w-80 overflow-hidden p-4 bg-white/75 gap-5 border-1 rounded-2xl border-black-100 border-r-8 cursor-pointer"
      onClick={handleClick}
    >
      <div className="h-40 flex justify-center overflow-hidden items-center rounded-xl">
        <img
          src={item?.image_url}
          alt="recipe item"
          className="block h-500 w-500 overflow-hidden"
        />
      </div>
      <div>
        <span className="text-sm text-cyan-700 font-medium">
          {item?.publisher}
        </span>
        <p className="font-bold text-lg truncate text-black">
          {item?.title}
        </p>
       
      </div>
    </div>
  );
}
