import { Meal } from '@/components/meals/meal-grid';

let db: any;

if (typeof window === 'undefined') {
  // Only import `better-sqlite3` and initialize the database on the server
  const sql = require('better-sqlite3');
  db = sql('meals.db');
}

export async function getMeals(): Promise<Meal[]> {
  if (!db) {
    throw new Error('Database connection is not available on the client side.');
  }

  // Simulating delay (for demonstration or testing purposes)
  await new Promise((resolve) => setTimeout(resolve, 2000));

  // Fetch meals from the database
  return db.prepare('SELECT * FROM meals').all() as Meal[];
}
