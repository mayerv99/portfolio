import { styled, keyframes } from "styled-components"

const fadeIn = keyframes`
    from {
        opacity: 0;
        transform: translateY(10px)
    }
    to {
        opacity: 1
    }
`

export const PresentationText = styled.div`
  text-align: center;
  color: ${({ theme }) => theme.colors.textSecondary};
  font-weight: 400;
  font-size: 16px;

  opacity: 0;
  animation: ${fadeIn} 1s ease-in-out forwards;

  > h3 {
    letter-spacing: 0.1rem;
    color: ${({ theme }) => theme.colors.text};
    font-weight: bold;
    font-size: 22px;
  }
  > h4 {
    font-weight: 400;
    margin-bottom: 50px;
    color: ${({ theme }) => theme.colors.text};
    font-size: 18px;
  }
`

export const SkillsWrapper = styled.div`
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  justify-content: space-around;
  gap: 2rem;
`
export const SkillsList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 5px;
  font-size: 14px;
`
