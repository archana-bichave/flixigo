import React from "react";
import Button from "./Button";

const ButtonsList = ({ categories, selectedCategory, onSelectCategory }) => {
  return (
    <div className="flex overflow-x-auto pb-2">
      {categories.map((category) => (
        <Button
          key={category.id}
          name={category.label}
          isActive={selectedCategory === category.id}
          onClick={() => onSelectCategory(category.id)}
        />
      ))}
    </div>
  );
};

export default ButtonsList;
