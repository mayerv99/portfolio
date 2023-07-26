import React from "react"
import { Wrapper } from "./styled"

type Props = {
  children: React.ReactNode
}

function Section({ children }: Props) {
  return <Wrapper>{children}</Wrapper>
}

export default Section
