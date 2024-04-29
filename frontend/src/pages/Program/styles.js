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

export const SkeletonImg = styled.div`
  width: 30%;
  height: 100%;
  background-color: gray;
`;

export const SkeletonDescription = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

export const SkeletonBarMedium = styled.div`
  width: 40%;
  height: 3rem; 
  background-color: gray;
`;

export const SkeletonBarLarge = styled.div`
  width: 70%;
  height: 3rem; 
  background-color: gray;
`;

export const SkeletonLarge = styled.div`
  width: 100%;
  height: 5rem; 
  background-color: gray;
`;

export const Container = styled.div`
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
