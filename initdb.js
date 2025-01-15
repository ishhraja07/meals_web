const sql = require('better-sqlite3');
const db = sql('meals.db');

// Dummy data
const dummyMeals = [
  // Same dummyMeals array as before
  // Ensure all slugs are unique here
];

// Create the table if it doesn't exist
db.prepare(`
   CREATE TABLE IF NOT EXISTS meals (
       id INTEGER PRIMARY KEY AUTOINCREMENT,
       slug TEXT NOT NULL UNIQUE,
       title TEXT NOT NULL,
       image TEXT NOT NULL,
       summary TEXT NOT NULL,
       instructions TEXT NOT NULL,
       creator TEXT NOT NULL,
       creator_email TEXT NOT NULL
    )
`).run();

async function initData() {
  const checkStmt = db.prepare('SELECT COUNT(*) as count FROM meals WHERE slug = ?');
  const insertStmt = db.prepare(`
      INSERT INTO meals VALUES (
         null,
         @slug,
         @title,
         @image,
         @summary,
         @instructions,
         @creator,
         @creator_email
      )
   `);

  for (const meal of dummyMeals) {
    const { count } = checkStmt.get(meal.slug); // Check if the slug already exists
    if (count > 0) {
      console.log(`Skipping duplicate slug: ${meal.slug}`);
      continue; // Skip this entry
    }

    try {
      insertStmt.run(meal); // Insert the meal if it doesn't exist
    } catch (err) {
      console.error(`Error inserting meal: ${meal.slug}`, err);
    }
  }

  console.log('Database initialized successfully!');
}

initData();
