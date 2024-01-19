import type { Project } from "src/constants/types";

export const ProjectLinks: Project[] = [
  {
    name: "Villager Chess",
    url: "https://villagerchess.netlify.app",
    pitch: "Chess club management platform",
    description:
      "An application designed to assist chess clubs by providing a public forum for each club as well as a platform for hosting, managing, and finalizing Swiss chess tournaments.",
    features: [
      'Chess club hosting with options to create new clubs or join existing clubs with optional password',
      'Public chat for general announcements and meetup coordination',
      'Private chat for direct messaging',
      'Chess board interface for correspondence games between players',
      'Tournament platform private to registered club members for managing Swiss tournaments both in person and digital via the built-in chess board interface',
      'USCF recognized tie breaks',
      'Unregistered player compatibility for in-person tournaments',
      'User profile displaying game history',
      'Data security ensured with Django permissions',
    ],
    notes: [
      'Desktop compatibility but currently only styled for mobile',
      'ReactJS frontend',
      'Python/Django backend',
      'Custom Django permissions',
    ],
    images: [
      '/assets/villager_chess/homepage.jpeg',
      '/assets/villager_chess/overboard.jpeg',
      '/assets/villager_chess/scoring.jpeg',
      '/assets/villager_chess/table.jpeg',
      '/assets/villager_chess/results.jpg',
      '/assets/villager_chess/messaging.jpeg',
    ],
    github: {
      frontEnd: 'https://github.com/sbyardnss/villager-client',
      backEnd: 'https://github.com/sbyardnss/villager-server',
    },
  },
  {
    name: "Carsello Art",
    url: "https://carselloart.netlify.app",
    pitch: "E-commerce application for Nashville based artist",
    description:
      "An application for artist Lizzie Carsello to showcase her services, advertise her upcoming shows, and sell her art via PayPal integration.",
    features: [
      'Event and artwork display',
      'Paypal integration for selling pieces',
      'User-facing inventory tracking to indicate availability',
      'Admin portal with custom Django permissions for updating schedule and adjusting inventory',
      'Order tracking based on Paypal response for admin purposes',
      'Responsive styling',
    ],
    notes: [
      'ReactJS frontend',
      'Python/Django backend',
      'Custom Django permissions',
    ],
    images: [],
    github: {
      frontEnd: 'https://github.com/sbyardnss/carsello-client',
      backEnd: 'https://github.com/sbyardnss/carsello-server',
    },
  },
  {
    name: "Mastermind",
    url: "https://sb-mastermind.netlify.app",
    pitch: "Based on the popular board game",
    description:
      "A mastermind clone made to better acquaint myself with Vue in preparation for working at Chess.com",
    features: [
      'All the fun of mastermind',
      'Responsive styling',
    ],
    notes: [
      'Vue3',
      'CSS modules',
    ],
    images: [],
    github: {
      frontEnd: 'https://github.com/sbyardnss/vue-codeBreaker',
      backEnd: '',
    },
  },
];
