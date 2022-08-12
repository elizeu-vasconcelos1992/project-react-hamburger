import styled from "styled-components";

export const Header = styled.header`
  width: inherit;
  background-color: #f5f5f5;
  display: flex;
  justify-content: center;
`;

export const Main = styled.main`
  width: 90%;
  display: flex;
  justify-content: space-between;

  @media (max-width: 768px) {
    width: 100%;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
  }
`;
