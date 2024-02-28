import { HoverContainer } from "@/components/ui/hover-effect";

import { TracingBeam } from "@/components/ui/tracing-beam";
import { useIcons } from "@/hooks/useIcons";

export function Portfolio() {
  const {
    reactIcon,
    nodeIcon,
    tsxIcon,
    htmlIcon,
    cssIcon,
    jsIcon,
    javaIcon,
    postgresIcon,
    dockerIcon,
    sqliteIcon,
    oauthIcon,
    expoIcon,
  } = useIcons();

  const items: {
    id: number;
    year: number;
    experiences: {
      id: number;
      link: string;
      title: string;
      subtitle: string;
      description: string;
      technologies: {
        id: number;
        name: string;
        designation: string;
        image: string;
      }[];
      endDate?: string;
    }[];
  }[] = [
    {
      id: 1,
      year: 2016,
      experiences: [
        {
          id: 1,
          link: "https://br.fiverr.com/",
          title: "Fiverr - 2023",
          subtitle: "Freelance fullstack",
          description: `Began my freelancing journey on Fiverr, initially focusing on creating visually appealing and responsive websites using HTML and CSS. 
          As I gained more experience and confidence, I transitioned to more complex and dynamic projects, leveraging React for the frontend to build interactive user interfaces and Node.js 
          for the backend to develop scalable and efficient servers. This journey not only honed my technical skills but also enhanced my ability to understand client needs, manage projects, 
          and deliver solutions that drive user engagement and satisfaction.`,
          technologies: [
            { id: 1, name: "HTML", designation: "frontend", image: htmlIcon },
            { id: 2, name: "CSS", designation: "frontend", image: cssIcon },
            { id: 3, name: "React", designation: "frontend", image: reactIcon },
            { id: 4, name: "Node.js", designation: "backend", image: nodeIcon },
            {
              id: 5,
              name: "TypeScript",
              designation: "frontend",
              image: tsxIcon,
            },
            {
              id: 6,
              name: "JavaScript",
              designation: "frontend",
              image: jsIcon,
            },
          ],
        },
      ],
    },

    {
      id: 3,
      year: 2020,
      experiences: [
        {
          id: 1,
          link: "https://www.workalove.com",
          title: "Workalove EDTECH - 2023",
          subtitle: "Frontend Developer",
          description: `In 2020, I joined Workalove EDTECH as a Frontend Developer, focusing on ReactJS. This role significantly enhanced my team collaboration and interpersonal skills. I contributed to various educational technology projects, emphasizing creating engaging and accessible user interfaces. My journey at Workalove EDTECH, which lasted until 2023, was instrumental in refining my frontend development expertise and understanding the nuances of working within an agile team environment.`,
          technologies: [
            { id: 1, name: "React", designation: "frontend", image: reactIcon },
            {
              id: 2,
              name: "JavaScript",
              designation: "frontend",
              image: jsIcon,
            },
            { id: 3, name: "CSS", designation: "frontend", image: cssIcon },
          ],
        },
      ],
    },
    {
      id: 4,
      year: 2022,
      experiences: [
        {
          id: 1,
          link: "",
          title: "SISCOD Project - 2022",
          subtitle: "Fullstack Engineer",
          description: `Was a robust software solution designed to streamline the monitoring and management of water
          usage from rivers to private companies with government contracts. Developed using a cutting-edge tech stack
          comprising ReactJS for the frontend, Java for the backend, PostgreSQL for database management, and Docker for containerization,
          this system is tailored for use by monitoring teams to register users and enterprises efficiently.`,
          technologies: [
            { id: 1, name: "React", designation: "frontend", image: reactIcon },
            { id: 2, name: "Java", designation: "backend", image: javaIcon },
            {
              id: 3,
              name: "PostgreSQL",
              designation: "database",
              image: postgresIcon,
            },
            { id: 4, name: "Docker", designation: "devops", image: dockerIcon },
          ],
        },
        {
          id: 2,
          link: "https://github.com/mayerv99/songcard",
          title: "SongCard Project - 2022",
          subtitle: "Fullstack Engineer",
          description: `I developed the SongCard project as my graduation thesis. 
          SongCard is a mobile app created using React Native and integrated with the Musixmatch API. 
          It also features authentication via OAuth. The app is designed to teach languages through music,
           leveraging the universal appeal of songs to make learning more engaging and effective. This project allowed me to explore the potential
            of mobile applications in educational technology and deepen my understanding of integrating third-party services and authentication mechanisms.`,
          technologies: [
            {
              id: 1,
              name: "React Native",
              designation: "mobile",
              image: reactIcon,
            },
            {
              id: 2,
              name: "Expo",
              designation: "ecosystem ",
              image: expoIcon,
            },
            {
              id: 3,
              name: "OAuth",
              designation: "authentication",
              image: oauthIcon,
            },
          ],
        },
      ],
    },
    {
      id: 5,
      year: 2023,
      experiences: [
        {
          id: 1,
          link: "",
          title: "SISCOD Version 2 - 2023",
          subtitle: "Fullstack Engineer",
          description: `In 2023, I developed an extension of the SISCOD project, 
          focusing on data registration for company inspections. This iteration was built using React for the frontend, 
          Node.js for the backend, and SQLite for the database. 
          The project aimed at streamlining the data collection and analysis process, providing a more efficient and 
          user-friendly interface for monitoring and reporting.`,
          technologies: [
            { id: 1, name: "React", designation: "frontend", image: reactIcon },
            { id: 2, name: "Node.js", designation: "backend", image: nodeIcon },
            {
              id: 3,
              name: "SQLite",
              designation: "database",
              image: sqliteIcon,
            },
          ],
        },
        {
          id: 1,
          link: "",
          title: "Freelance Projects - Current",
          subtitle: "Fullstack Engineer",
          description: `Since 2023, I have been working as a freelancer, taking on projects ranging from simple landing pages to large-scale systems. This phase of my career has allowed me to further diversify my skill set, working with a variety of technologies and clients. I've been able to apply my expertise in frontend and backend development to deliver tailored solutions that meet the unique needs of each project, ensuring high-quality, scalable, and efficient outcomes.`,
          technologies: [
            { id: 1, name: "React", designation: "frontend", image: reactIcon },
            { id: 2, name: "Node.js", designation: "backend", image: nodeIcon },
            {
              id: 3,
              name: "TypeScript",
              designation: "frontend",
              image: tsxIcon,
            },
          ],
        },
      ],
    },
  ];

  return (
    <>
      <h1 className="bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-2xl font-medium tracking-larger text-transparent md:text-4xl mb-10">
        My portfolio
      </h1>
      <TracingBeam>
        {items.map((item, index) => (
          <div key={index}>
            <h2 className="text-2xl font-semibold my-8">{item.year}</h2>
            <div
              className={`flex flex-wrap${
                item.experiences.length > 1 ? "justify-around" : "justify-start"
              }`}
            >
              <HoverContainer items={item.experiences} />
            </div>
          </div>
        ))}
      </TracingBeam>
    </>
  );
}
