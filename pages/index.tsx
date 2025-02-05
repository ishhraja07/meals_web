import { FC } from "react"; // Importing React's Functional Component type
import Link from "next/link"; // Importing Next.js's Link component for navigation
import classes from './page.module.css';
import ImageSlideshow from "@/components/main-components/images/image-slideshow";
// Define the Home component as a Functional Component (FC)
const Home: FC = () => {
  return (
    <>
    <header className={classes.header}>
      <div className={classes.slideshow}>
        <ImageSlideshow></ImageSlideshow>
      </div>
      <div>
          <div className={classes.hero}>
            <h1>NextLevel Food for NextLevel Foodies</h1>
            <p>Taste &share food from all over the world</p>
          </div>
          <div className={classes.cta}> 
            <Link href="/community">Join the Community</Link>
            <Link href="/meals">Explore Meals</Link>
          </div>
       </div>
    </header>
    <main>
    <section className={classes.section}>
          <h2>How it works</h2>
          <p>
            NextLevel Food is a platform for foodies to share their favorite
            recipes with the world. It&apos;s a place to discover new dishes, and to
            connect with other food lovers.
          </p>
          <p>
            NextLevel Food is a place to discover new dishes, and to connect
            with other food lovers.
          </p>
        </section>

        <section className={classes.section}>
          <h2>Why NextLevel Food?</h2>
          <p>
            NextLevel Food is a platform for foodies to share their favorite
            recipes with the world. It&apos;s a place to discover new dishes, and to
            connect with other food lovers.
          </p>
          <p>
            NextLevel Food is a place to discover new dishes, and to connect
            with other food lovers.
          </p>
        </section>
    </main>
    </>
  );
};

// Export the Home component as the default export
export default Home;
