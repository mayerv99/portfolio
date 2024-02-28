import { useIcons } from "@/hooks/useIcons";

import { MeteorCard } from "@/components/ui/meteor-card";

export function Skills() {
  const { reactIcon, nodeIcon, tsxIcon, htmlIcon, cssIcon, jsIcon } =
    useIcons();

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
    {
      id: 3,
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
    {
      id: 4,
      title: "HTML",
      skills: [
        "Semantic markup practices",
        "HTML5 APIs like Geolocation and Canvas",
        "Knowledge of SEO-friendly markup and microdata",
        "Integration of HTML with modern frontend frameworks like React and Angular",
      ],
      link: "google.com",
      icon: htmlIcon,
    },
    {
      id: 5,
      title: "CSS",
      skills: [
        "SASS/SCSS",
        "Implementation of complex and responsive designs",
        "Proficiency in layout building tools like Flexbox and CSS Grid",
        "Knowledge of CSS animation and transition techniques",
        "Optimization of CSS performance",
      ],
      link: "google.com",
      icon: cssIcon,
    },
    {
      id: 6,
      title: "JavaScript",
      skills: [
        "Solid experience in frontend and backend development using JavaScript",
        "Knowledge of design patterns and coding best practices",
        "Handling of asynchronous functions and promises",
        "Debugging and problem-solving skills",
      ],
      link: "google.com",
      icon: jsIcon,
    },
  ];
  return (
    <div className="flex flex-wrap max-w-7xl mt-36 mx-auto">
      {technologies.map((tech, index) => (
        <MeteorCard item={tech} key={index} />
      ))}
    </div>
  );
}
