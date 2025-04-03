import { HoverContainer } from "@/components/ui/hover-effect";
import { SectionHeader } from "@/components/ui/section-header";

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
    tailwindIcon,
    bigQueryIcon,
    awsIcon,
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
      id: 6,
      year: 2024,
      experiences: [
        {
          id: 1,
          link: "",
          title: "Instituto Cerrados - Atual",
          subtitle: "Engenheiro Fullstack",
          description: `Como Engenheiro Fullstack no Instituto Cerrados, lidero o desenvolvimento de aplicativos e sistemas, supervisionando consultores e garantindo qualidade e performance.

Na área de DevOps, gerencio infraestrutura na AWS, automatizo processos e implemento pipelines de CI/CD, otimizando a eficiência operacional.

No frontend, desenvolvo com ReactJS, NextJS e TypeScript, focando em soluções escaláveis.

Também gerencio um data lake, processando grandes volumes de informações, realizando análises geoespaciais e integrando múltiplas fontes de dados para gerar insights estratégicos através de dashboards e visualizações interativas.`,
          technologies: [
            {
              id: 1,
              name: "PostgreSQL",
              designation: "database",
              image: postgresIcon,
            },
            { id: 2, name: "React", designation: "frontend", image: reactIcon },
            {
              id: 3,
              name: "BigQuery",
              designation: "database",
              image: bigQueryIcon,
            },
            {
              id: 4,
              name: "TypeScript",
              designation: "frontend",
              image: tsxIcon,
            },
            {
              id: 5,
              name: "TailwindCSS",
              designation: "styling",
              image: tailwindIcon,
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
          title: "SISCOD v2 - 2023",
          subtitle: "Engenheiro Fullstack",
          description: `Em 2023, desenvolvi uma extensão do projeto SISCOD,
          focando no registro de dados para inspeções de empresas. Esta iteração foi construída usando React para o frontend,
          Node.js para o backend e SQLite para o banco de dados.
          O projeto visava otimizar o processo de coleta e análise de dados, fornecendo uma interface mais eficiente e
          amigável para monitoramento e relatórios.`,
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
          title: "Projetos Freelance - Atual",
          subtitle: "Engenheiro Fullstack",
          description: `Desde 2023, tenho trabalhado como freelancer, assumindo projetos que variam desde landing pages simples até sistemas de grande escala. Esta fase da minha carreira me permitiu diversificar ainda mais minhas habilidades, trabalhando com uma variedade de tecnologias e clientes. Tenho aplicado minha expertise em desenvolvimento frontend e backend para entregar soluções personalizadas que atendem às necessidades específicas de cada projeto, garantindo resultados de alta qualidade, escaláveis e eficientes.`,
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
        {
          id: 2,
          link: "https://github.com/mayerv99/portfolio",
          title: "Este website",
          subtitle: "Desenvolvedor Frontend",
          description: `Este projeto não poderia ficar de fora. Foi desenvolvido usando ReactJS, TailwindCSS, AceTernityUI, ShadcnUI e Framer-motion.
          O foco foi criar uma aplicação moderna e visualmente atraente. Embora o projeto ainda não seja responsivo, estão em andamento esforços para melhorar sua adaptabilidade em diferentes dispositivos.
          Esta iniciativa tem sido uma valiosa experiência de aprendizado em aproveitar essas tecnologias para construir interfaces de usuário sofisticadas.`,

          technologies: [
            { id: 1, name: "React", designation: "frontend", image: reactIcon },
            {
              id: 2,
              name: "TailwindCSS",
              designation: "styling",
              image: tailwindIcon,
            },
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
          title: "Projeto SISCOD - 2022",
          subtitle: "Engenheiro Fullstack",
          description: `Foi uma solução de software robusta projetada para otimizar o monitoramento e gerenciamento do uso de água
          de rios para empresas privadas com contratos governamentais. Desenvolvido usando uma stack tecnológica de ponta
          compreendendo ReactJS para o frontend, Java para o backend, PostgreSQL para gerenciamento de banco de dados e Docker para containerização,
          este sistema foi adaptado para uso por equipes de monitoramento para registrar usuários e empresas de forma eficiente.`,
          technologies: [
            {
              id: 1,
              name: "PostgreSQL",
              designation: "database",
              image: postgresIcon,
            },
            { id: 2, name: "React", designation: "frontend", image: reactIcon },
            {
              id: 3,
              name: "BigQuery",
              designation: "database",
              image: bigQueryIcon,
            },
            { id: 4, name: "Docker", designation: "devops", image: dockerIcon },
          ],
        },
        {
          id: 2,
          link: "https://github.com/mayerv99/songcard",
          title: "Projeto SongCard - 2022",
          subtitle: "Engenheiro Fullstack",
          description: `Desenvolvi o projeto SongCard como minha tese de graduação.
          SongCard é um aplicativo móvel criado usando React Native e integrado com a API Musixmatch.
          Ele também possui autenticação via OAuth. O aplicativo foi projetado para ensinar idiomas através da música,
          aproveitando o apelo universal das canções para tornar o aprendizado mais envolvente e eficaz. Este projeto me permitiu explorar o potencial
          de aplicações móveis em tecnologia educacional e aprofundar meu entendimento da integração de serviços de terceiros e mecanismos de autenticação.`,
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
      id: 3,
      year: 2020,
      experiences: [
        {
          id: 1,
          link: "https://www.workalove.com",
          title: "Workalove EDTECH - 2023",
          subtitle: "Desenvolvedor Frontend",
          description: `Em 2020, ingressei na Workalove EDTECH como Desenvolvedor Frontend, focando em ReactJS. Este cargo aprimorou significativamente minhas habilidades de colaboração em equipe e interpessoais. Contribuí para vários projetos de tecnologia educacional, enfatizando a criação de interfaces de usuário envolventes e acessíveis. Minha jornada na Workalove EDTECH, que durou até 2023, foi fundamental para refinar minha expertise em desenvolvimento frontend e compreender as nuances do trabalho em um ambiente ágil.`,
          technologies: [
            {
              id: 1,
              name: "PostgreSQL",
              designation: "database",
              image: postgresIcon,
            },
            { id: 2, name: "React", designation: "frontend", image: reactIcon },
            {
              id: 3,
              name: "BigQuery",
              designation: "database",
              image: bigQueryIcon,
            },
          ],
        },
      ],
    },
    {
      id: 1,
      year: 2016,
      experiences: [
        {
          id: 1,
          link: "https://br.fiverr.com/",
          title: "Fiverr - Atual",
          subtitle: "Freelance fullstack",
          description: `Atuei por anos como desenvolvedor fullstack freelancer, trabalhando em uma ampla variedade de projetos, desde a criação de landing pages até o desenvolvimento de sistemas completos. Durante esse período, tive forte atuação tanto no frontend, criando interfaces dinâmicas e responsivas, quanto na manipulação de dados e no uso do BigQuery. Trabalhei na otimização de grandes bases de dados e também na criação de dashboards personalizados, alinhados às necessidades dos clientes. Essa experiência me permitiu aprimorar minhas habilidades em todas as etapas do desenvolvimento de software, enfrentando desafios diversos e entregando soluções eficientes para diferentes segmentos.`,
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
  ];

  return (
    <div id="portfolio">
      <SectionHeader>My portfolio</SectionHeader>
      <TracingBeam className="mb-56">
        {items.map((item, index) => (
          <div key={index}>
            <h2 className="text-2xl font-semibold my-8">{item.year}</h2>
            <div className={`flex flex-wrap justify-start`}>
              <HoverContainer items={item.experiences} />
            </div>
          </div>
        ))}
      </TracingBeam>
    </div>
  );
}
