import { MeteorCard } from "@/components/ui/meteor-card";

import reactIcon from "@/assets/react-icon.svg";
import nodeIcon from "@/assets/nodejs-icon-logo.svg";
import tsxIcon from "@/assets/typescript-icon.svg";

export function AboutMe() {
  const technologies: {
    id: number;
    icon: string;
    title: string;
    skills: string[];
    link: string;
    isFavorite?: boolean;
  }[] = [
    {
      id: 1,
      title: "ReactJS | Native",
      skills: [
        "Scalable and high-quality code",
        "Reactive and responsive user interfaces",
        "Redux, React Router, and other complementary libraries",
        "Testing with Jest and Enzyme",
        "Documentation with StoryBook ",
        "Advanced knowledge of React Hooks and Context API",
      ],
      link: "google.com",
      icon: reactIcon,
      isFavorite: true,
    },
    {
      id: 2,
      title: "NodeJS",
      skills: [
        "Experience in building RESTful APIs",
        "Authentication and authorization using JWT and OAuth",
        "Proficiency in relational and NoSQL databases",
        "Capacity to optimize application performance",
      ],
      link: "google.com",
      icon: nodeIcon,
    },
    // {
    //   id: 3,
    //   title: "HTML",
    //   skills: [
    //     "Mastery of semantic markup practices",
    //     "Ability to create responsive and accessible layouts",
    //     "Experience with HTML5 APIs like Geolocation and Canvas",
    //     "Knowledge of SEO-friendly markup and microdata",
    //     "Integration of HTML with modern frontend frameworks like React and Angular",
    //   ],
    //   link: "google.com",
    //   icon: htmlIcon,
    // },
    // {
    //   id: 4,
    //   title: "CSS",
    //   skills: [
    //     "Efficient and reusable styles using CSS and preprocessors like SASS/SCSS",
    //     "Implementation of complex and responsive designs",
    //     "Understanding of CSS architectures like BEM and SMACSS",
    //     "Proficiency in layout building tools like Flexbox and CSS Grid",
    //     "Knowledge of CSS animation and transition techniques",
    //     "Optimization of CSS performance",
    //   ],
    //   link: "google.com",
    //   icon: cssIcon,
    // },
    // {
    //   id: 5,
    //   title: "JavaScript",
    //   skills: [
    //     "Solid experience in frontend and backend development using JavaScript",
    //     "Knowledge of design patterns and coding best practices",
    //     "Handling of asynchronous functions and promises",
    //     "Proficiency with ES6+ features like arrow functions and destructuring",
    //     "Debugging and problem-solving skills using browser developer tools",
    //     "DOM manipulation, events, and AJAX for interactivity",
    //   ],
    //   link: "google.com",
    //   icon: javascriptIcon,
    // },
    {
      id: 6,
      title: "TypeScript",
      skills: [
        "Typing and interfaces",
        "Converting JavaScript projects to TypeScript",
        "Configuration and optimization of TypeScript projects",
        "Writing safer and more robust code through static types and code analysis",
      ],
      link: "google.com",
      icon: tsxIcon,
    },
  ];

  return (
    <div className="text-center">
      <h1 className="text-4xl mb-8 font-bold">Hi, I’m Victor Aragão</h1>
      <p className="text-xl leading-8">
        I've been a <strong>freelancer for the past six years</strong>, working
        on various projects and with different companies.
        <br />
        <strong>Passionate about technology</strong>, I thrive on challenges and
        deliver top-notch solutions. <br />
      </p>

      <div className="flex flex-wrap max-w-7xl mt-10 mx-auto">
        {/* <HoverContainer items={technologies} /> */}
        {technologies.map((tech, index) => (
          <MeteorCard item={tech} key={index} />
        ))}
      </div>
    </div>
  );
}
