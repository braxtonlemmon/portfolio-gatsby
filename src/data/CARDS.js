// Peel the Garlic *
// Visit Leuven *
// Become Thumb One
// Cool Cat CV *

const CARDS = [
  {
    id: 0,
    vid_small: "waldo_small",
    vid_large: "waldo_large",
    github: "https://github.com/braxtonlemmon/visit-leuven",
    live: "https://pumpkin-surprise-94026.herokuapp.com/",
    isLive: true,
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
      about: 'In November 2020, Gatsby hosted a Silly Site Challenge. Participants were asked to create a webiste that focused on silliness, accessibility, performance, and creativity. Become Thumb One is a site with a very random theme in which a user completes a variety of tasks to "become thumb one."',
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
    vid_large: "peelthegarlic_large",
    github: "https://github.com/braxtonlemmon/recipe-blog-client",
    live: "https://www.peelthegarlic.com",
    isLive: true,
    x: 0,
    y: 0,
    info: {
      title: "Peel the Garlic",
      about: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Amet justo donec enim diam vulputate ut pharetra sit amet. Elit ut aliquam purus sit amet luctus venenatis lectus. Id donec ultrices tincidunt arcu non sodales neque sodales. Venenatis a condimentum vitae sapien pellentesque habitant morbi. Fermentum posuere urna nec tincidunt praesent semper feugiat nibh. Ullamcorper velit sed ullamcorper morbi tincidunt ornare massa eget egestas. A condimentum vitae sapien pellentesque habitant morbi tristique senectus et. Consequat nisl vel pretium lectus quam id. Aliquet nibh praesent tristique magna sit amet purus gravida. Lacinia at quis risus sed. Urna id volutpat lacus laoreet non curabitur gravida arcu.",
      learned: [
        [
          "blah",
          "blah"
        ]
      ],
      technologies: ["Gatsby.js", "Node.js", "Create React App", "MongoDB"]
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
