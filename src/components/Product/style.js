import styled from "styled-components";

export const ListCard = styled.ul`
  width: 70%;
  display: flex;
  flex-wrap: wrap;
  gap: 1.25rem;

  li {
    width: 18.75rem;
    height: 21.625rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 0.125rem solid #e0e0e0;
    border-radius: 0.313rem;
  }

  .div-img {
    width: inherit;
    height: 9.375rem;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #f5f5f5;

    img {
      width: 9rem;
      height: 9rem;
    }
  }

  .div-infos {
    width: 80%;
    height: 12.25rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 1rem;

    h3 {
      font-style: normal;
      font-weight: 700;
      font-size: 1.125rem;
      color: #333333;
    }

    h4 {
      font-style: normal;
      font-weight: 400;
      font-size: 0.75rem;
      color: #828282;
    }

    span {
      font-style: normal;
      font-weight: 600;
      font-size: 0.875rem;
      color: #27ae60;
    }

    button {
      width: 6.625rem;
      height: 2.5rem;
      font-weight: 600;
      font-size: 0.875rem;
      cursor: pointer;
      background-color: #93d7af;
      border: 0.125rem solid #93d7af;
      border-radius: 0.5rem;
      color: white;
      transition: 0.5s;
    }

    button:hover {
      background-color: #27ae60;
    }
  }

  @media (max-width: 768px) {
    width: 90%;
    flex-wrap: nowrap;
    overflow-x: auto;
  }
`;
