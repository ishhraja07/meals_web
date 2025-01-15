import MealItem from './meal-item';
import classes from './meal-grid.module.css';

// Define the type for a single meal
export interface Meal {
  id: string;        // Unique identifier for the meal
  title: string;     // Title of the meal
  slug: string;      // Slug for the dynamic route
  image: string;     // Image URL or path
  summary: string;   // Summary or description of the meal
  creator: string;   // Creator of the meal
}

// Define the props for the MealsGrid component
export interface MealsGridProps {
  meals: Meal[]; // An array of meals
}

export default function MealsGrid({ meals }: MealsGridProps) {
  return (
    <ul className={classes.meals}>
      {meals.map((meal) => (
        <li key={meal.id}>
          <MealItem {...meal} />
        </li>
      ))}
    </ul>
  );
}
