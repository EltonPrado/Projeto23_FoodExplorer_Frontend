import styled from "styled-components";

export const Container = styled.div`
  width: 30.4rem;
  height: 46.2rem;
  border-radius: 0.8rem;
  background-color: ${({ theme }) => theme.COLORS.DARK_200};

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  flex: none;

  > .btnEditFood,
    .btnFavorite {
    display: flex;
    position: absolute;
    top: 1.6rem;
    right: 1.8rem;

    background: none;
    border: none;

    svg {
      fill: ${({ theme, isFavorite }) => isFavorite ? theme.COLORS.RED_200 : theme.COLORS.LIGHT_100};
    }
  }

  > .ImageFood {
    width: 17.6rem;
    height: 17.6rem;

    img {
      width: 100%;
    }
  }

  > .titleFood {
    h3 {
      display: flex;
      align-items: center;
      margin: 1.5rem 0;

      font-size: 2.4rem;
      font-weight: bold;

      color: ${({ theme }) => theme.COLORS.LIGHT_300};
    }
  }

  > p {
    text-align: center;
    font-size: 1.4rem;
    padding-inline: 4rem;

    color: ${({ theme }) => theme.COLORS.LIGHT_400};
  }

  > strong {
    font-family: 'Roboto', sans-serif;
    font-size: 3.2rem;
    font-weight: 400;
    margin-block: 1.5rem;

    color: ${({ theme }) => theme.COLORS.BLUE_200};
  }

  > .quantity {
    width: 20.8rem;
    
    display: flex;
    align-items: center;
    gap: 1.6rem;

    position: relative;
    z-index: 10;

    .buttons {
      display: flex;
      gap: 1.4rem;

      .btn {
        display: flex;
        align-items: center;

        background: none;
        border: none;
        color: ${({ theme }) => theme.COLORS.LIGHT_100};

        position: relative;
        z-index: 6;
      }

      span {
        font-size: 2rem;
        font-weight: bold;
        
        color: ${({ theme }) => theme.COLORS.LIGHT_300};
      }
    }

    @media (max-width: 768px) {
      display: flex;
      flex-direction: column;
    }
  }
`;