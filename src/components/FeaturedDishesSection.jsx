import React, { useEffect, useState } from "react";
import DishCard from "./DishCard";
import { getFeaturedFoods } from "../services/service/foodService";
import HorizontalScrollSection from "../utils/action";
import SkeletonSection from "./Skeleton/SkeletonSection";

const FeaturedDishesSection = () => {
  const [featuredDishes, setFeaturedDishes] = useState([]);
  const [page, setPage] = useState(0); // bắt đầu từ 0 (Spring Boot)
  const [loading, setLoading] = useState(true);
  const pageSize = 12;

  useEffect(() => {
    const fetchData = async () => {
      const data = await getFeaturedFoods(page, pageSize);
      setFeaturedDishes(data.content);
      setLoading(false);
    };
    fetchData();
  }, []);

  if (loading) return <SkeletonSection />;
  return (
    <HorizontalScrollSection
      items={featuredDishes}
      renderItem={(dish) => (
        <DishCard
          key={dish.id}
          id={dish.id}
          slug={dish.slug}
          foodName={dish.name}
          price={dish.price}
          imageUrl={dish.imageUrl}
          variants={dish.variants}
          isFeatured={dish.isFeatured}
        />
      )}
    />
  );
};

export default FeaturedDishesSection;
