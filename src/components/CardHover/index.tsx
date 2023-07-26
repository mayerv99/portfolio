import React, { useEffect, useState } from "react"

// Radix Primitives
import * as HoverCard from "@radix-ui/react-hover-card"

import { Wrapper, Content, Arrow, Title, Root, Indicator } from "./styled"

interface Props {
  skill: SkillType
}

type SkillType = {
  name: string
  image: string
  text: React.ReactNode
  points: number
}

function Card({ skill }: Props) {
  const { name, image, text, points } = skill

  const [progress] = useState(points)

  return (
    <Wrapper>
      <HoverCard.Root openDelay={350} closeDelay={100}>
        <HoverCard.Trigger>
          <img src={image} />
        </HoverCard.Trigger>
        <HoverCard.Portal>
          <Content sideOffset={10}>
            <Title>{name}</Title>
            {text}
            <Root value={progress}>
              <Indicator
                style={{ transform: `translateX(-${100 - progress}%)` }}
              />
            </Root>

            <Arrow className="HoverCardArrow" />
          </Content>
        </HoverCard.Portal>
      </HoverCard.Root>
    </Wrapper>
  )
}

export default Card
