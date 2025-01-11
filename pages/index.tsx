import { FC } from "react"; // Importing React's Functional Component type
import Link from "next/link"; // Importing Next.js's Link component for navigation

// Define the Home component as a Functional Component (FC)
const Home: FC = () => {
  return (
    <main>
      {/* Heading with inline styles (typed using React.CSSProperties) */}
      <h1 style={{ color: 'white', textAlign: 'center' } as React.CSSProperties}>
        Time to get started!
      </h1>

      {/* Paragraphs containing Next.js Link components */}
      <p><Link href="/meals">Meals</Link></p>
      <p><Link href="/meals/share">Meals</Link></p>
      <p><Link href="/community">Meals</Link></p>
    </main>
  );
};

// Export the Home component as the default export
export default Home;
