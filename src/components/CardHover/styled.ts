import styled, { keyframes } from "styled-components"
import { darken, lighten, shade } from "polished"
// Radix Primitives
import * as HoverCard from "@radix-ui/react-hover-card"
import * as Progress from "@radix-ui/react-progress"

const slideUpAndFade = keyframes`
  0% {
    opacity: 0;
    transform: translateY(2px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`

const slideRightAndFade = keyframes`
  0% {
    opacity: 0;
    transform: translateX(-2px);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
`

const slideDownAndFade = keyframes`
  0% {
    opacity: 0;
    transform: translateY(-2px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`

const slideLeftAndFade = keyframes`
  0% {
    opacity: 0;
    transform: translateX(2px);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
`

export const Content = styled(HoverCard.Content)`
  border-radius: 6px;
  padding: 20px;
  width: 300px;
  background-color: ${({ theme }) =>
    theme.title === "light"
      ? `${darken(0.03, theme.colors.background)}}`
      : `${lighten(0.1, theme.colors.background)}`};
  box-shadow: hsl(206 22% 7% / 35%) 0px 10px 38px -10px,
    hsl(206 22% 7% / 20%) 0px 10px 20px -15px;
  animation-duration: 400ms;
  animation-timing-function: cubic-bezier(0.16, 1, 0.3, 1);
  will-change: transform, opacity;
  color: ${({ theme }) => theme.colors.textSecondary};

  &[data-side="top"] {
    animation-name: ${slideUpAndFade};
  }

  &[data-side="right"] {
    animation-name: ${slideLeftAndFade};
  }

  &[data-side="bottom"] {
    animation-name: ${slideDownAndFade};
  }

  &[data-side="left"] {
    animation-name: ${slideRightAndFade};
  }
`

export const Arrow = styled(HoverCard.Arrow)`
  fill: ${({ theme }) =>
    theme.title === "light"
      ? `${darken(0.03, theme.colors.background)}}`
      : `${lighten(0.1, theme.colors.background)}`};
`

export const Wrapper = styled.div`
  cursor: pointer;
  animation: ${slideUpAndFade} 2s ease-in-out;

  img {
    height: 50px;
  }
`
export const Title = styled.h3`
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: 10px;
`

export const Root = styled(Progress.Root)`
  position: relative;
  overflow: hidden;
  background: ${({ theme }) => lighten(0.05, theme.colors.background)};
  border-radius: 10px;
  width: 100%;
  height: 25px;
  margin-top: 10px;
`

export const Indicator = styled(Progress.Indicator)`
  background-color: ${({ theme }) => theme.colors.accent};
  width: 100%;
  height: 100%;
  transition: transform 660ms cubic-bezier(0.65, 0, 0.35, 1);
  border-radius: 10px 10px 10px 10px;
`
