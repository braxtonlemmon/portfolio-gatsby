// Peel the Garlic *
// Visit Leuven *
// Become Thumb One
// Cool Cat CV *

const CARDS = [
  {
    id: 0,
    vid_small: "waldo_small",
    vid_large: "waldo_large",
    github: "https://github.com/braxtonlemmon/waldo-react-rails",
    live: "https://pumpkin-surprise-94026.herokuapp.com/",
    isLive: true,
    last: true,
    x: 0,
    y: 0,
    info: {
      title: "Find Waldo",
      about: "On the Find Waldo website, the user must scroll and click to find Waldo and four other characters. Each session is timed, and the user's time is recorded and displayed on the Top Scores modal if the time ranks among the fastest. Ruby on Rails is used as the backend and utilizes a PostgreSQL database to store the character coordinates and top scores. React is used for the frontend and fetches the stored coordinates and scores upon page load.",
      learned: [
        [
          "Full Stack Development",
          "The frontend component is built with the Create React App framework, and the backend component is built with Ruby on Rails. The backend Rails app uses PostgreSQL as the database, which was necessary to use in order to deploy to Heroku. This project was an excellent exercise in connecting the frontend and backend portions of website into a cohesive final product."
        ],
        [
          "Deployment",
          "Find Waldo is deployed to Heroku. I had to perform some major debugging before succesfully deploying the website. Initially I built the Rails app using SQLite as the database, only to learn I needed to use PostgreSQL for Heroku. After making the shift, I eventually discovered through reading technical docs that I had named a few variables with PostgreSQL reserved keywords. After making the needed changes, I was able to successfully deploy the site to Heroku. "
        ]
        
      ],
      technologies: ["Ruby on Rails", "React", "PostgreSQL", "Heroku"],
    },
  },
  {
    id: 1,
    vid_small: "exploreleuven_small",
    vid_large: "exploreleuven_large",
    github: "https://github.com/braxtonlemmon/visit-leuven",
    live: "https://braxtonlemmon.github.io/visit-leuven/",
    isLive: true,
    x: 0,
    y: 0,
    info: {
      title: "Explore Leuven",
      about: "Explore Leuven is a sample tourism webpage for a town in Belgium. The page consists of a a fixed header, a hero section, a reviews slider, two sections promoting a variety of attractions, and a footer. This was an exercise in composing a webpage with many of the standard sections and components found on modern websites.",
      learned: [
        [
          "Intersection Observer API",
          "The hero text fades in each time the hero section is in view. To accomplish this I learned how to use the Intersection Observer API. This primarily involved reading the MDN Web Docs and studying the accompanying examples."
        ],
        [
          "CSS-in-JS",
          "Before this project I had briefly experimented with CSS-in-JS. I decided to primarily build and style Explore Leuven using Styled Components. This involved a mental shift away from traditional style sheets, and a focus on creating a strong connection between styling and components. "
        ]
        
      ],
      technologies: ["HTML", "CSS", "React"],
    },
  },
  {
    id: 2,
    vid_small: "coolcat_small",
    vid_large: "coolcat_large",
    github: "https://github.com/braxtonlemmon/cv-project-react",
    live: "https://braxtonlemmon.github.io/cv-project-react/",
    isLive: true,
    x: 0,
    y: 0,
    info: {
      title: "Cool-Cat-CV",
      about: "Cool-Cat-CV is a website that allows a user to enter personal, education, and experience information into a form that then generates and displays a printable CV.",
      learned: [
        [
          'React Hook Form',
          'Up until this project I had built forms from scratch. I decided to learn to use React Hook Form because of the functionality it offers. On the website, a user can add and delete Education and Experience instances; I soon realized that React Hook Form is an excellent tool to cleanly make this happen.'
        ],
        [
          'State',
          'In the application, a user can seamlessly transition back and forth from view mode and edit mode. The website utilizeds the React state hook to persist the form data.'
        ]
      ],
      technologies: ["HTML", "CSS", "JavaScript", "React"]
    }
  },
  {
    id: 3,
    vid_small: "becomethumbone_small",
    vid_large: "becomethumbone_large",
    github: "https://github.com/braxtonlemmon/become-thumb-one",
    live: "https://become-thumb-one.netlify.app/",
    isLive: true,
    x: 0,
    y: 0,
    info: {
      title: "Become Thumb One",
      about: 'In November 2020, Gatsby hosted a Silly Site Challenge. Participants were asked to create a website that focused on silliness, accessibility, performance, and creativity. Become Thumb One is a site with a very random theme in which a user completes a variety of tasks to "become thumb one."',
      learned: [
        [
          'Web accessibility',
          'Using the A11Y Project and the WAVE Evaluation Tool as resources, I made the website navigable using solely a keyboard, and included appropriate labels and semantic HTML elements for screen readers.'
        ],
        [
          'React Context API',
          'In this project I needed to read and update application state from different pages. I used this as an opportunity to learn the basics of a state management system and chose to use React Context.'
        ],
        [
          'Modals',
          'Most pages on this site feature modals. In an effort to make the site accessible, I read about the importance of trapping the focus within a modal for keyboard users. I decided to learn and use react-modal for this project.'
        ],
        [
          'Performance',
          'Using the Lighthouse audit tool found in Chrome DevTools, I practiced analyzing website performance and fixing the detected errors and issues.'
        ]
      ],
      technologies: ["HTML", "CSS", "Gatsby.js", "Netlify"]
    }
  },
  {
    id: 4,
    vid_small: "peelthegarlic_small",
    vid_large: "peelthegarlic_long",
    github: "",
    more_github: [
      ["CLIENT GITHUB", "https://github.com/braxtonlemmon/recipe-blog-client"],
      ["ADMIN GITHUB", "https://github.com/braxtonlemmon/recipe-blog-admin"], 
      ["API GITHUB", "https://github.com/braxtonlemmon/recipe-blog-api"]
      ],
    live: "https://www.peelthegarlic.com",
    isLive: true,
    x: 0,
    y: 0,
    info: {
      title: "Peel the Garlic",
      about: "Peel the Garlic is a recipe website that I maintain and update with a new recipe every Tuesday. A newsletter is sent weekly using SendGrid as the mailing service. The project consists of a public front-end site built with Gatsby, a private front-end administrative site built with Create React App, and a back-end API built using Node.js. The recipe data is stored in a MongoDB database and is managed using Mongoose. The backend API is deployed using Serverless and AWS Lambda. After completing The Odin Project Full Stack curriculum in early 2020, I decided to begin a project that would utilize my development skills and align with my personal interests. I decided to create a recipe website, as I am constantly frustrated with the functionality of many modern recipe blogs. I built Peel the Garlic with the user experience in mind, taking typical features of recipe sites that are often confusing to use and building friendlier and more practical versions of those features.",
      learned: [
        [
          "Serverless functions",
          "This project introduced me to serverless functions. I learned to use the Serverless CLI to deploy my back-end service as function through AWS Lambda. My knowledge on the subject is introductory, but I am now familiar with the core concepts of serverless functions."
        ],
        [
          "Fetch API",
          "Both the admin and public client sites are dependent on data from the MongoDB database. I utilize the Fetch API to pull in the needed data. Frequently I ran into errors involving Cross-Origin Resource Sharing (CORS), so I read several technical documents and sought help on Stack Overflow and The Odin Project Discord to resolve the errors. "
        ],
        [
          "Authentication",
          "To keep my administrative portal private, I used Passport in the Node.js backend to implement authentication. To prepare, I read through the Passport documentation and followed several coding tutorials. Ultimately I went with the JSON Web Token strategy and used the Fetch API in the admin React app to search for the token."
        ],
        [
          "Model View Contoller (MVC) architecture",
          "When I began learning Ruby on Rails in 2019, I was introduced to the model-view-controller design pattern. I practiced building several projects in Rails using an MVC architecture. For the Peel the Garlic Node.js backend I decided to structure my files using a similar MVC pattern."
        ],
        [
          "Nodemailer",
          "While it would have been much easier to use a service like Netlify's form handling for Peel the Garlic's contact page, I decided to build and handle my own contact form using the Nodemailer module. This involved setting up a hosted Namecheap email address, and creating a mailer in my API to send the user form data in an email to my associated email inbox."
        ],
        [
          "Web design",
          "In making a website to host and showcase my personal recipes, I put a lot of effort into the visual components and user interaction on the website. I briefly studied color theory, the importance of a typographic scale, and used a very helpful guide put out by Smashing Magazine titled 'Smart Interface Design Patterns'. Through the use of the Intersection Observer API, keyframe animation, and page transitions, I was able to construct a front-end product that is both pleasing to look at and interact with."
        ]
      ],
      technologies: ["Gatsby.js", "Node.js", "Create React App", "MongoDB", "Serverless", "AWS Lambda", "SendGrid"]
    }
  },

  // {
  //   id: 0,
  //   vid_small: "battleship",
  //   vid_large: "battleship",
  //   github: "https://github.com/braxtonlemmon/battleship-react",
  //   live: "https://braxtonlemmon.github.io/battleship-react/",
  //   isLive: true,
  //   x: "-45px",
  //   y: 0,
  //   info: {
  //     title: "Battleship",
  //     about: "Browser battleship game.",
  //     learned: "What I learned",
  //     technologies: ["React", "Jest", "HTML", "CSS"],
  //   },
  // },
  // {
  //   id: 1,
  //   vid_small: "library",
  //   vid_large: "battleship",
  //   github: "https://github.com/braxtonlemmon/book-library-react",
  //   live: "https://braxtonlemmon.github.io/book-library-react/",
  //   isLive: true,
  //   x: "-10px",
  //   y: 0,
  //   info: {
  //     title: "Book Library",
  //     about: "Digital book library",
  //     learned: "What I learned",
  //     technologies: ["React", "HTML", "CSS"],
  //   },
  // },
  // {
  //   id: 2,
  //   vid_small: "chess",
  //   vid_large: "battleship",
  //   github: "https://github.com/braxtonlemmon/chess",
  //   live: "",
  //   isLive: false,
  //   x: 0,
  //   y: 0,
  //   info: {
  //     title: "Chess",
  //     about: "Command line chess game",
  //     learned: "What I learned",
  //     technologies: ["Ruby", "RSpec"],
  //   },
  // },
  // {
  //   id: 3,
  //   vid_small: "pomodoro",
  //   vid_large: "battleship",
  //   github: "https://github.com/braxtonlemmon/pomodoro",
  //   live: "https://braxtonlemmon.github.io/pomodoro/",
  //   isLive: true,
  //   x: "-15px",
  //   y: 0,
  //   info: {
  //     title: "Pomodoro Timer",
  //     about: "Productivity tool to manage workflow",
  //     learned: "What I learned",
  //     technologies: ["HTML", "CSS", "JavaScript"],
  //   },
  // },
  // {
  //   id: 4,
  //   vid_small: "weather",
  //   vid_large: "battleship",
  //   github: "https://github.com/braxtonlemmon/weather-app",
  //   live: "https://braxtonlemmon.github.io/weather-app/",
  //   isLive: true,
  //   x: "-10px",
  //   y: 0,
  //   info: {
  //     title: "Weather Finder",
  //     about: "Uses OpenWeather API to obtain live weather data",
  //     learned: "What I learned",
  //     technologies: ["HTML", "CSS", "JavaScript", "React", "API"],
  //   },
  // },
  // {
  //   id: 5,
  //   vid_small: "odinbook",
  //   vid_large: "battleship",
  //   github: "https://github.com/braxtonlemmon/the-campfire",
  //   live: "https://murmuring-wave-95625.herokuapp.com/",
  //   isLive: true,
  //   x: 0,
  //   y: 0,
  //   info: {
  //     title: "The Campfire",
  //     about: "Social networking site",
  //     learned: "What I learned",
  //     technologies: ["Ruby on Rails", "HTML", "CSS"],
  //   },
  // },
  // {
  //   id: 7,
  //   vid_small: "pitchfork",
  //   vid_large: "battleship",
  //   github: "https://github.com/braxtonlemmon/cv-project-react",
  //   live: "https://braxtonlemmon.github.io/cv-project-react/",
  //   isLive: true,
  //   x: 0,
  //   y: 0,
  //   info: {
  //     title: "CV Generator",
  //     about: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Amet justo donec enim diam vulputate ut pharetra sit amet. Elit ut aliquam purus sit amet luctus venenatis lectus. Id donec ultrices tincidunt arcu non sodales neque sodales. Venenatis a condimentum vitae sapien pellentesque habitant morbi. Fermentum posuere urna nec tincidunt praesent semper feugiat nibh. Ullamcorper velit sed ullamcorper morbi tincidunt ornare massa eget egestas. A condimentum vitae sapien pellentesque habitant morbi tristique senectus et. Consequat nisl vel pretium lectus quam id. Aliquet nibh praesent tristique magna sit amet purus gravida. Lacinia at quis risus sed. Urna id volutpat lacus laoreet non curabitur gravida arcu.",
  //     learned: "Viverra maecenas accumsan lacus vel facilisis volutpat est velit. Maecenas volutpat blandit aliquam etiam erat velit scelerisque in dictum. Scelerisque viverra mauris in aliquam sem. Ac tortor vitae purus faucibus ornare suspendisse sed. Aenean vel elit scelerisque mauris pellentesque pulvinar. Eros in cursus turpis massa tincidunt dui ut ornare. In ante metus dictum at. Tellus rutrum tellus pellentesque eu tincidunt tortor aliquam nulla facilisi. ",
  //     technologies: ["React, JavaScript, HTML, CSS"]
  //   }
  // },

]

export default CARDS;
