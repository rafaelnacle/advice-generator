import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 80%;
  height: 100vh;
  justify-content: center;
  align-items: center;
  max-width: 800px;
  margin: 0 auto;

  @media only screen and (max-width: 600px) {
    width: 90%;
  }
`;

export const Card = styled.div`
  width: 100%;
  height: 500px;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  
  border-radius: 20px;

  background: ${({ theme }) => theme.colors.neutral.darkGrayish};

  text-align: center;

  p {
    color: ${({ theme }) => theme.colors.primary.neonGreen};
    text-transform: uppercase;
    letter-spacing: 5px;
  }

  h1 {
    margin: 20px;
    color: ${({ theme }) => theme.colors.primary.lightCyan};
    font-size: 2.8rem;
  }


  .divider {
    margin-bottom: 20px;
    width: 70%;
    align-self: center;
  }

  @media only screen and (max-width: 600px) {
    h1 {
      margin: 20px;
      color: ${({ theme }) => theme.colors.primary.lightCyan};
      font-size: 1.8rem;
    }
    height: 500px;
    .divider {
      width: 90%;
      margin-bottom: 20px;
    }
  }
`

export const ButtonDice = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${({ theme }) => theme.colors.primary.neonGreen};
  border: none;
  padding: 15px;
  width: 70px;
  height: 70px;
  border-radius: 100%;

  // Align button to the center of the card
  position: absolute;
  bottom: -30px;
  left:0;
  right:0;
  margin-left:auto;
  margin-right:auto;

  cursor: pointer;

  &:hover {
    box-shadow: 0px 0px 20px 1px ${({ theme }) => theme.colors.primary.neonGreen};
  }

  img {
    width: 70%;
  }
`