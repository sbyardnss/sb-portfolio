import type { Experience, Takeaway } from "src/constants/types";

export const ExperienceList: Experience[] = [
  {
    employer: 'Chess.com',
    type: 'work',
    position: 'Frontend Intern',
    date: 'October 2023 - January 2024',
    // description: 'During my 3-month Frontend Engineering internship at Chess.com, I assisted in the development of MVC applications using VueJS with TypeScript. I seamlessly integrated PHP communication with the backend, managed Twig files for PHP compile, and implemented testing suites with Cypress. I actively collaborated with management and design teams, following a daily SCRUM workflow. Additionally, I contributed to Docker DevOps, utilized Jira for ticketing, and maintained source code/version control with Git/Github. My involvement extended to assisting in the migration from Vue 2 to Vue 3 for future enhancements.',
    description: 'Three-month internship assisting Frontend Engineering team in the development of new admin platforms and the upkeep of current code.',
    notes: [
      'Developed new frontend platform for admin asset management',
      'Integrated database communication with callbacks provided by the backend team',
      'Created Cypress testing suites for new applications',
      'Frontend focused',
      'MVC structure',
      'VueJS with TypeScript',
      'SCRUM workflow',
      'Jira ticketing with regular review',
      'Git version control',
    ],
    ext: {
      link: 'https://www.chess.com',
      image: 'https://images.chesscomfiles.com/uploads/v1/images_users/tiny_mce/NathanielGreen/php0hWd9E.png',
    },
  },
  {
    employer: 'NSS',
    type: 'education',
    position: 'Apprentice',
    date: 'January 2023 - June 2023',

    // description: "Engaged in a six-month software bootcamp at Nashville Software School, where I immersed myself in hands-on application of OOP fundamentals through group and individual projects. Proficient in creating single-page applications in JavaScript, particularly using the React framework. I ensured a collaborative and organized development environment through effective source code/version control with Git/Github. My role included solution design through white-boarding and wireframes. Leveraged Django for server-generated web applications, crafted RESTful APIs with Django REST framework, and conducted rigorous testing using Python's unit test framework. Efficiently utilized SQLite for retrieving and storing database information.",
    description: "Six-month full-time software development bootcamp resulting in full stack certification.",
    notes: [
      'Daily hands on application of OOP fundamentals through group and individual projects',
      'Created single page applications in JavaScript, regularly utilizing the React framework Source code/version control with Git/Github',
      'Solution Design: white-boarding and wire frames',
      "Leveraged Django for creating and editing server-generated web applications Created RESTful API's with Django REST framework",
      'Retrieved and stored database information with SQLite',
      "Practiced testing with Python's unit test framework",
    ],
    ext: {
      link: 'https://nashvillesoftwareschool.com/',
      image: 'https://pbs.twimg.com/media/Da_P725UwAEq649.png',
    },
  },
  {
    employer: '',
    type: 'work',
    position: 'Contract',
    date: '',
    description: "Engaged in contract work collaborating with and reporting directly to clients. With my clients' guidance in mind, I have developed responsive frontend and full stack applications with intuitive functionality to harbor the most positive user experiences possible.",
    notes: [
      'Carsello Art (full stack)',
      'CARE LLC (ongoing)',
    ],
    ext: {
      link: '',
      image: '',
    },
  },
]

//   <h2>Takeaways</h2>
//   - Part 1: planning - understanding goals - clear outline of functionality
//   as much as possible - design mockups - time management? - Part 2:
//   organization - consistent file structure - abstraction - inheritance -
//   Part 3: knowing worth - My value depends on the skills I bring to the
//   table - Understanding of length of time a project will take - Predicting
//   length of time to learn new tech or skills - Part 4: referencing
//   documentation for new technologies and processes - Learned paypal via
//   requests - Learned how to incorporate cloudinary - Learned how to
//   incorporate openAI - points of improvement
// </section>

export const Takeaways: Takeaway[] = [
  {
    title: 'Planning',
    detail: "The number one lesson I've learned as a software developer is the importance of detailed planning. Having a clear understanding of immediate and long-term goals is absolutely necessary to avoid blockers and develop dry code. This planning includes detailed mockups of target UI, clear outline of functionality, and prioritization of objectives.",
  },
  {
    title: 'Organization',
    detail: "The tenets of OOP exist for a reason. Clean, readable code requires abstraction of tasks and built inheritance where possible. Understanding common file structures is also very important for creating applications that can quickly be adjusted or updated in the future. "
  },
  {
    title: 'Knowing worth and ability',
    detail: "The first thing I think of when approaching a new project is the amount of time it will take me to get up and running. This depends on the kind of tech used, the scope of the project, and the level of clarity in planning and vision I've received from my client. It can be daunting to self-evaluate sometimes but understanding my worth and my skills as they pertain to any objective can save much anxiety and time.",
  },
  {
    title: 'Documentation',
    detail: "Docs reign supreme. Whenever I am faced with a problem I cannot seem to crack, I've learned to immediately reference any official documentation available. While some technologies have better documentation than others, the value of understanding functionality at the source cannot be overstated."
  }
]