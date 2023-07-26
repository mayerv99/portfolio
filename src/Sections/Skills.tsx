import Section from "../components/Section"
import { SkillsWrapper, SkillsList } from "./styled"

import ReactIcon from "../assets/react.svg"
import NodeIcon from "../assets/node.svg"
import NextIcon from "../assets/nextjs.svg"
import Card from "../components/CardHover"

type Props = {}

function Skills({}: Props) {
  const skills = [
    {
      name: "ReactJS",
      image: ReactIcon,
      text: (
        <SkillsList>
          <li>Componentização escalável</li>
          <li>Gestão de Estado (ContextAPI, Redux)</li>
          <li>Requisições assíncronas (API Rest)</li>
          <li>Roteamento (React Router)</li>
          <li>Estilização (Styled-Components)</li>
        </SkillsList>
      ),
      points: 75,
    },
    {
      name: "NextJS",
      image: NextIcon,
      text: (
        <SkillsList>
          <li>Server-Side Rendering (SSR)</li>
          <li>Static Site Generation (SSG)</li>
          <li>Dynamic Routes</li>
          <li>API Routes</li>
          <li>SEO (Search Engine Optimization)</li>
        </SkillsList>
      ),
      points: 50,
    },
    {
      name: "NodeJS",
      image: NodeIcon,
      text: (
        <SkillsList>
          <li>Criação de APIs RESTful</li>
          <li>Gestão de pacotes com NPM ou Yarn</li>
          <li>Utilização de Express para criação de servidores</li>
          <li>Manipulação de arquivos e diretórios</li>
          <li>Integração com bancos de dados (MongoDB, MySQL, etc.)</li>
          <li>Segurança e autenticação (JWT, Passport)</li>
          <li>PrismaORM (Mapeamento de Dados)</li>
        </SkillsList>
      ),
      points: 60,
    },
  ]

  const returnSkillsCard = () => skills.map((skill) => <Card skill={skill} />)

  return (
    <Section>
      <SkillsWrapper>{returnSkillsCard()}</SkillsWrapper>
    </Section>
  )
}

export default Skills
