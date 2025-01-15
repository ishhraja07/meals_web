import Image from 'next/image';

// Import static icons
import mealIcon from '@/assets/icons/meal.png';
import communityIcon from '@/assets/icons/community.png';
import eventsIcon from '@/assets/icons/events.png';
import  { StaticImageData } from 'next/image';

// Import CSS module
import classes from './page.module.css';

// Define the structure of each perk for better type safety
interface Perk {
  icon: StaticImageData; // Type for Next.js imported images
  alt: string;           // Accessibility description
  description: string;   // Text to display for the perk
}

// Define the perks as a typed array
const perks: Perk[] = [
  {
    icon: mealIcon,
    alt: 'A delicious meal',
    description: 'Share & discover recipes',
  },
  {
    icon: communityIcon,
    alt: 'A crowd of people, cooking',
    description: 'Find new friends & like-minded people',
  },
  {
    icon: eventsIcon,
    alt: 'A crowd of people at a cooking event',
    description: 'Participate in exclusive events',
  },
];

export default function CommunityPage() {
  return (
    <>
      {/* Header Section */}
      <header className={classes.header}>
        <h1>
          One shared passion: <span className={classes.highlight}>Food</span>
        </h1>
        <p>Join our community and share your favorite recipes!</p>
      </header>

      {/* Main Content Section */}
      <main className={classes.main}>
        <h2>Community Perks</h2>

        {/* Perks List */}
        <ul className={classes.perks}>
          {perks.map((perk, index) => (
            <li key={index}>
              <Image src={perk.icon} alt={perk.alt} />
              <p>{perk.description}</p>
            </li>
          ))}
        </ul>
      </main>
    </>
  );
}
