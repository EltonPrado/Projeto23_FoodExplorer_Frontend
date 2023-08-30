import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  margin-inline: auto;
`;

export const Content = styled.div`
  max-width: 136.8rem;
  flex: 1;
  
  @media (min-width: 768px) {
    padding-inline: 12.3rem;
    margin: 0 auto;
  }
`;

export const Banner = styled.div`
  height: 12rem;
  margin: 4.4rem 3.6rem 6.2rem;
  
  position: relative;
  border-radius: 0.8rem;
  background: linear-gradient(180deg, #091E26 0%, #00131C 100%);
  
  .bannerImg {
    width: 19.1rem;
    min-height: 14.9rem;
    
    left: -3rem;
    bottom: 0;
    position: absolute;
  }

  .bannerText {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    
    padding: 3.6rem 0 2.2rem 0;
    padding-inline-start: 15rem;
      
    > h1 {
      font-family: 'Poppins', sans-serif;
      font-weight: 500;
      font-size: clamp(1.4rem, 4vw, 4rem);
      margin-bottom: 0.3rem;
    }

    > p {
      font-family: 'Roboto', sans-serif;
      font-weight: normal;
      font-size: clamp(1.2rem, 3vw, 1.6rem);
      color: ${({ theme }) => theme.COLORS.LIGHT_300};
    }
  }

  @media (min-width: 768px) {
    height: 26.8rem;
    margin: 16.4rem auto 6.2rem;
    border-radius: 0.8rem;
    justify-content: end;

    display: flex;
    align-items: center;
    position: relative;

    .bannerImg {
      width: 65.6rem;
      height: 41.2rem;

      position: absolute;
      bottom: 0rem;
      left: -10rem;
    }

    .bannerText {
      padding-top: 0rem;
      padding-inline-end: 10rem;
    }
  }
`;