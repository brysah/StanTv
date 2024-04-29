import styled from "styled-components";

export const Details = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 3rem;
  height: 25rem;
  margin-top: 3rem;
  img {
    height: 100%;
  }
`;

export const Container = styled.header`
  max-width: 100rem;
  width: 100%;
  margin: 0 auto;
`;

export const Description = styled.div`
  color: white;
  h3 {
    font-size: 2rem;
    margin-bottom: 0.8rem;
  }
  p {
    font-size: 1.8rem;
    margin-bottom: 2rem;
    max-width: 50rem;
    width: 100%;
  }
`;
