import Link from 'next/link';
import Image from 'next/image';

import classes from './meal-item.module.css';

// Define props interface
interface MealItemProps {
  title: string; // Title of the meal
  slug: string;  // Slug for dynamic route
  image: string; // Path to the image
  summary: string; // Short description of the meal
  creator: string; // Name of the creator
}

const MealItem: React.FC<MealItemProps> = ({ title, slug, image, summary, creator }) => {
  return (
    <article className={classes.meal}>
      <header>
        <div className={classes.image}>
          {/* Next.js Image component */}
          <Image src={image} alt={title} fill />
        </div>
        <div className={classes.headerText}>
          <h2>{title}</h2>
          <p>by {creator}</p>
        </div>
      </header>
      <div className={classes.content}>
        <p className={classes.summary}>{summary}</p>
        <div className={classes.actions}>
          <Link href={`/meals/${slug}`}>View Details</Link>
        </div>
      </div>
    </article>
  );
};

export default MealItem;
//Study about fill 