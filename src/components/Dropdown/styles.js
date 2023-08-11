import styled from "styled-components";

export const Container = styled.div`
  width: 100%;

  .selectMenu {
    display: flex;
    flex-direction: column;
    gap: 0.8rem;

    @media (max-width: 768px) {
      .selectMenu {
        position: absolute;
        user-select: none;
      }
    }
    
    > span {
      color: ${({ theme }) => theme.COLORS.LIGHT_400};
    }

    .dropdown-btn {
      width: 100%;
      height: 4.8rem;

      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 1.6rem;
      gap: 1.4rem;

      border: none;
      border-radius: 0.8rem;
      background-color: ${({ theme}) => theme.COLORS.DARK_900};

      cursor: pointer;
    }

    > .dropdown-content {
      padding: 1.6rem;
      border-radius: 0.5rem;
      background-color: ${({ theme}) => theme.COLORS.DARK_900};
      

      > .dropdown-item {
        position: relative;
        display: flex;
        height: 4.8rem;
        padding: 0 1.6rem;
        align-items: center;
        border-radius: 0.5rem;
        
        cursor: pointer;
        transition: all .2s;

        &:hover {
          background-color: ${({ theme }) => theme.COLORS.DARK_800};
        }
      }
    }
  }
`;