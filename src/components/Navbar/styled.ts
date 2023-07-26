import { styled } from "styled-components"
import { shade } from "polished"

export const Wrapper = styled.nav`
  z-index: 999;
  width: 100%;
  height: 4rem;
  position: fixed;
  top: 0;
  left: 0;
  background: ${({ theme }) => shade(0.01, theme.colors.background)};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 4rem;
  color: ${({ theme }) => theme.colors.text};
`

export const NameDiv = styled.h1`
  letter-spacing: 2px;
  font-size: 24px;
`

export const ButtonsList = styled.ul`
  display: flex;
  list-style: none;
  height: 100%;

  li {
    cursor: pointer;
    padding: 0 15px;
    height: 100%;
    line-height: 4rem;
    transition: 150ms ease-in-out;

    &:hover {
      background: ${({ theme }) => shade(0.05, theme.colors.background)};
    }
  }
`
