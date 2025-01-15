import Link from 'next/link';
import classes from './page.module.css';
import MealsGrid, { Meal } from '@/components/meals/meal-grid';
import { getMeals } from '@/lib_code_for_reaching_db/meals';

// Server-side data fetching
export async function getServerSideProps() {
  try {
    const meals: Meal[] = await getMeals(); // Fetch meals from the server
    return { props: { meals } }; // Pass meals as props
  } catch (error) {
    console.error('Error fetching meals:', error);
    return { props: { meals: [] } }; // Return empty array on error
  }
}

// Page component
export default function MealsPage({ meals }: { meals: Meal[] }) {
  return (
    <>
      <header className={classes.header}>
        <h1>
          Delicious meals, created <span className={classes.highlight}>by you</span>
        </h1>
        <p>Choose your favorite recipe and cook it yourself. It is easy and fun!</p>
        <p className={classes.cta}>
          <Link href="/meals/share">Share Your Favorite Recipe</Link>
        </p>
      </header>
      <main className={classes.main}>
        <MealsGrid meals={meals} />
      </main>
    </>
  );
}
