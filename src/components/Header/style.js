import styled from "styled-components";

export const Container = styled.div`
  width: 90%;
  height: 5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  label {
    width: 22.813rem;
    height: 3.75rem;
    display: flex;
    align-items: center;
    justify-content: end;
  }

  input {
    width: 22.813rem;
    height: inherit;
    border: 0.125rem solid #e0e0e0;
    border-radius: 0.5rem;
    padding: 0.75rem;
  }

  input::placeholder {
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 1rem;
  }

  button {
    width: 6.688rem;
    height: 2.5rem;
    background: #27ae60;
    border: 2px solid #27ae60;
    border-radius: 0.5rem;
    font-family: "Inter";
    font-style: normal;
    font-weight: 500;
    font-size: 0.875rem;
    position: absolute;
    margin-right: 0.75rem;
    padding: 0;
    color: white;
    cursor: pointer;
  }

  @media (max-width: 650px) {
    flex-direction: column;
    height: 8rem;
    justify-content: center;
    gap: 0.75rem;
  }

  @media (max-width: 369px) {
    label {
      width: 18rem;
    }
    input {
      width: 18rem;
    }
  }
`;
