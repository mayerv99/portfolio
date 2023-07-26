import { Wrapper, NameDiv, ButtonsList } from "./styled"

interface Props {
  toggleTheme: () => void
}

function Navbar({ toggleTheme }: Props) {
  const listItems = [
    {
      name: "<Início />",
      onClick: () => {
        console.log("home")
      },
    },
    {
      name: "<Habilidades />",
      onClick: () => {
        console.log("skills")
      },
    },
    {
      name: "<Projetos />",
      onClick: () => {
        console.log("projects")
      },
    },
    {
      name: "<Quem sou eu? />",
      onClick: () => {
        console.log("about me")
      },
    },
    {
      name: "+",
      onClick: () => {
        toggleTheme()
      },
    },
  ]

  const returnItems = () =>
    listItems.map((item, index) => (
      <li key={index} onClick={() => item.onClick()}>
        {item.name}
      </li>
    ))

  return (
    <Wrapper>
      <NameDiv>VA.dev</NameDiv>
      <ButtonsList>{returnItems()}</ButtonsList>
    </Wrapper>
  )
}

export default Navbar
