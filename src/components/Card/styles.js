import styled from "styled-components";

export const Container = styled.div`
  width: 30rem;
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
      margin: 1.5rem 0;
      font-size: 2.4rem;
      font-weight: bold;

      color: ${({ theme }) => theme.COLORS.LIGHT_100};

      display: flex;
      align-items: center;
    }
  }

  > p {
    text-align: center;
    font-size: 1.2rem;
    padding-inline: 4rem;
    color: ${({ theme }) => theme.COLORS.LIGHT_400};
  }

  > strong {
    font-size: 3.2rem;
    color: ${({ theme }) => theme.COLORS.BLUE_200};
    margin-block: 1.5rem;
  }

  > .quantity {
    display: flex;
    align-items: center;
    gap: 1.6rem;
    width: 20.8rem;

    position: relative;
    z-index: 10;

    span {
      font-size: 2rem;
      font-weight: bold;
    }
    
    .btn {
      background: none;
      border: none;
      color: ${({ theme }) => theme.COLORS.LIGHT_100};

      display: flex;
      align-items: center;

      position: relative;

      z-index: 6;
    }
  }
`