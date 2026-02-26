import React, { useState, useMemo } from "react";
import ButtonsList from "./ButtonsList";
import VideoContainer from "./VideoContainer";
import { useSelector } from "react-redux";
import { homeCategories } from "../utils/homeCategories";

const MainContainer = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = useMemo(() => homeCategories, []);
  const selectedCategoryConfig = categories.find(
    (category) => category.id === selectedCategory,
  );

  return (
    <div className={`col-span-10 pt-20 p-6 ${isMenuOpen ? "sm:ml-56" : ""}`}>
      <ButtonsList
        categories={categories}
        selectedCategory={selectedCategory}
        onSelectCategory={setSelectedCategory}
      />
      <VideoContainer selectedCategory={selectedCategoryConfig} />
    </div>
  );
};

export default MainContainer;
