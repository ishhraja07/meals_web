import { useRouter } from "next/router";
import { FC } from "react";

const MealDetails: FC = () => {
  // Extract the dynamic route parameter using useRouter
  const router = useRouter();
  const { mealId } = router.query; // Accessing the "mealId" dynamic segment

  return <h1>Hi Meals Page Ishan</h1>;
};

export default MealDetails;
