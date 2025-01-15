import { GetStaticPaths, GetStaticProps } from 'next';

// Define the type of props for the component
interface MealDetailsProps {
  meal: { name: string; description: string };
}

// React Component to display meal details
const MealDetails = ({ meal }: MealDetailsProps) => {
  if (!meal) {
    return <h1>Meal not found</h1>;
  }

  return (
    <div>
      <h1>{meal.name}</h1>
      <p>{meal.description}</p>
    </div>
  );
};

// getStaticPaths to define dynamic routes
export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [
      { params: { mealsslug: "meal1" } },
      { params: { mealsslug: "meal2" } },
    ],
    fallback: false, // No fallback; only these paths will be generated
  };
};

// getStaticProps to fetch data for a specific route
export const getStaticProps: GetStaticProps = async (context) => {
  const { mealsslug } = context.params!;

  // Mock data for meals
  const meals = {
    meal1: { name: "Meal 1", description: "Description for Meal 1" },
    meal2: { name: "Meal 2", description: "Description for Meal 2" },
  };

  const meal = meals[mealsslug as keyof typeof meals] || null;

  // Return 404 if the meal is not found
  if (!meal) {
    return { notFound: true };
  }

  // Pass meal data as props to the component
  return {
    props: { meal },
  };
};

export default MealDetails;
