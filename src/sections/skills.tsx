import { useIcons } from "@/hooks/useIcons";

import { MeteorCard } from "@/components/ui/meteor-card";

export function Skills() {
  const {
    reactIcon,
    nodeIcon,
    tsxIcon,
    htmlIcon,
    cssIcon,
    jsIcon,
    awsIcon,
    bigQueryIcon,
    dataLakeIcon,
    dockerIcon,
    postgresIcon,
  } = useIcons();

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
        "Código escalável e de alta qualidade",
        "Interfaces reativas e responsivas",
        "Redux, React Router e outras bibliotecas complementares",
        "Testes com Jest e Enzyme",
        "Documentação com StoryBook",
        "Conhecimento avançado de React Hooks e Context API",
      ],
      link: "google.com",
      icon: reactIcon,
      isFavorite: true,
    },
    {
      id: 2,
      title: "NodeJS",
      skills: [
        "Experiência em construção de APIs RESTful",
        "Autenticação e autorização usando JWT e OAuth",
        "Proficiência em bancos de dados relacionais e NoSQL",
        "Capacidade de otimizar o desempenho de aplicações",
      ],
      link: "google.com",
      icon: nodeIcon,
    },
    {
      id: 3,
      title: "TypeScript",
      isFavorite: true,
      skills: [
        "Tipagem e interfaces",
        "Conversão de projetos JavaScript para TypeScript",
        "Configuração e otimização de projetos TypeScript",
        "Escrita de código mais seguro e robusto através de tipos estáticos e análise de código",
      ],
      link: "google.com",
      icon: tsxIcon,
    },
    {
      id: 4,
      title: "HTML",
      skills: [
        "Práticas de marcação semântica",
        "APIs HTML5 como Geolocation e Canvas",
        "Conhecimento de marcação amigável para SEO e microdados",
        "Integração do HTML com frameworks frontend modernos como React e Angular",
      ],
      link: "google.com",
      icon: htmlIcon,
    },
    {
      id: 5,
      title: "CSS",
      skills: [
        "SASS/SCSS",
        "Implementação de designs complexos e responsivos",
        "Proficiência em ferramentas de layout como Flexbox e CSS Grid",
        "Conhecimento de técnicas de animação e transição CSS",
        "Otimização de performance CSS",
      ],
      link: "google.com",
      icon: cssIcon,
    },
    {
      id: 6,
      title: "JavaScript",
      skills: [
        "Experiência sólida em desenvolvimento frontend e backend usando JavaScript",
        "Conhecimento de padrões de design e melhores práticas de codificação",
        "Habilidades de depuração e resolução de problemas",
      ],
      link: "google.com",
      icon: jsIcon,
    },
    {
      id: 7,
      title: "BigQuery",
      isFavorite: true,
      skills: [
        "Data warehousing e análise de dados",
        "Otimização de consultas SQL",
        "Modelagem de dados e design de esquemas",
        "Integração com outros serviços GCP",
        "Ajuste de performance e otimização de custos",
      ],
      link: "google.com",
      icon: bigQueryIcon,
    },
    {
      id: 8,
      title: "Data Lake",
      skills: [
        "Arquitetura e implementação de data lake",
        "Processos ETL/ELT",
        "Governança e qualidade de dados",
        "Integração e transformação de dados",
        "Processamento e análise de big data",
      ],
      link: "google.com",
      icon: dataLakeIcon,
    },
    {
      id: 9,
      title: "AWS DevOps",
      skills: [
        "Implementação de pipelines CI/CD",
        "Infraestrutura como Código (IaC)",
        "Containerização com Docker e ECS",
        "Gerenciamento de infraestrutura em nuvem",
        "Melhores práticas de segurança em ambientes cloud",
      ],
      link: "google.com",
      icon: awsIcon,
    },
    {
      id: 12,
      title: "Docker",
      skills: [
        "Containerização de aplicações",
        "Criação de Dockerfiles",
        "Docker Compose",
        "Otimização de imagens",
        "Integração com CI/CD",
      ],
      link: "google.com",
      icon: dockerIcon,
      isFavorite: true,
    },
    {
      id: 13,
      title: "PostgreSQL",
      skills: [
        "Modelagem e design de banco de dados",
        "Otimização de consultas SQL",
        "Índices e particionamento",
        "Backup e recuperação de dados",
        "Replicação e alta disponibilidade",
        "Funções e procedimentos armazenados",
      ],
      link: "google.com",
      icon: postgresIcon,
      isFavorite: true,
    },
  ];
  return (
    <div className="flex flex-wrap gap-10 md:gap-0 max-w-7xl mt-36 mx-auto">
      {technologies.map((tech, index) => (
        <MeteorCard item={tech} key={index} />
      ))}
    </div>
  );
}
