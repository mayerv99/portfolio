import Section from "../components/Section"
import { PresentationText } from "./styled"

type Props = {}

function Home({}: Props) {
  return (
    <Section>
      <PresentationText>
        <h3>
          Olá! Eu sou <strong>Victor Aragão</strong>
        </h3>
        <br />
        <h4>
          Um <strong>desenvolvedor</strong> apaixonado por criar soluções
          inovadoras e funcionais para a web.
        </h4>
        <br />
        <br />
        Em busca de um design minimalista e elegante, coloco a usabilidade em
        primeiro lugar, acreditando que uma interface bem projetada pode tornar
        a experiência do usuário memorável.
        <br />
        <br />
        Acredito que cada projeto seja uma oportunidade para criar algo único e
        impactante.
        <br />
        <br />
        Navegue pelo meu portfólio e conheça um pouco mais.
      </PresentationText>
    </Section>
  )
}

export default Home
