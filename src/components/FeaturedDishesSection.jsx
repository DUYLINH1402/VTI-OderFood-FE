import React, { useEffect, useState } from "react";
import DishCard from "./DishCard";
import { getFeaturedFoods } from "../services/service/foodService";

const FeaturedDishesSection = () => {
  const [featuredDishes, setFeaturedDishes] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getFeaturedFoods(page, size);
      setFeaturedDishes(data.content);
    };
    fetchData();
  }, []);
  return (
    <div className="dish-card-wrap">
      {featuredDishes.map((featuredDishes) => (
        <DishCard
          key={featuredDishes.id}
          name={featuredDishes.name}
          price={featuredDishes.price}
          imageUrl={featuredDishes.imageUrl}
          isFeatured={featuredDishes.isFeatured}
        />
      ))}
    </div>
  );
};

export default FeaturedDishesSection;
