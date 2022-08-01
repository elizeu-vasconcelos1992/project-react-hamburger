import styled from "styled-components";

export const Aside = styled.aside`
  width: 22.813rem;

  h3 {
    width: inherit;
    height: 4.063rem;
    display: flex;
    align-items: center;
    padding: 1rem;
    color: white;
    background-color: #27ae60;
    border-radius: 5px 5px 0px 0px;
  }

  ul {
    width: inherit;
    height: 18rem;
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;
    overflow-y: auto;
    background-color: #f5f5f5;
  }

  ul::-webkit-scrollbar {
    width: 0.3rem;
  }

  ul::-webkit-scrollbar-track-piece {
    background-color: #f5f5f5;
  }

  ul::-webkit-scrollbar-thumb:vertical {
    background-color: #bac0c4;
  }

  .div-value {
    width: inherit;
    height: 7.625rem;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    border-top: 0.125rem solid #e0e0e0;
    background-color: #f5f5f5;

    p {
      width: 21.438rem;
      display: flex;
      justify-content: space-between;

      .total-value {
        font-weight: 600;
        font-size: 0.875rem;
        color: #333333;
      }

      .total-price {
        font-weight: 600;
        font-size: 0.875rem;
        color: #828282;
      }
    }

    button {
      width: 21.438rem;
      height: 3.75rem;
      font-weight: 600;
      font-size: 1rem;
      cursor: pointer;
      color: #828282;
      background: #e0e0e0;
      border: 0.125rem solid #e0e0e0;
      border-radius: 0.5rem;
      transition: 0.5s;
    }

    button:hover {
      color: white;
      background-color: #e60000;
    }
  }

  @media (max-width: 372px) {
    width: 90%;

    ul {
      width: 100%;
    }

    h3 {
      width: 100%;
      text-align: center;
    }

    .div-value {
      width: 100%;
      p {
        width: 90%;
      }

      button {
        width: 90%;
      }
    }
  }
`;

export const Card = styled.li`
  width: 21.438rem;
  height: 5rem;
  margin: 0.5rem 0 0.5rem 0;
  display: flex;
  justify-content: space-between;

  figure {
    width: 5rem;
    height: 5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 0.313rem;
    background-color: #e0e0e0;
  }

  img {
    width: 4.375rem;
    height: 4.375rem;
  }

  .div-card {
    width: 15.813rem;
    height: 4rem;
    display: flex;
    flex-direction: column;
    justify-content: space-around;

    p {
      display: flex;
      justify-content: space-between;

      .product-description {
        max-width: 15ch;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        font-weight: 700;
        font-size: 0.875rem;
        color: #333333;
      }

      .product-remove {
        font-weight: 500;
        font-size: 0.75rem;
        cursor: pointer;
        color: #bdbdbd;
        transition: 0.5s;
      }

      .product-remove:hover {
        color: #e60000;
      }
    }

    .product-category {
      font-weight: 400;
      font-size: 0.75rem;
      color: #828282;
    }
  }

  @media (max-width: 372px) {
    width: 95%;

    .div-card {
      margin-left: 0.5rem;
    }
  }
`;

export const EmptyCart = styled.li`
  width: inherit;
  height: inherit;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;

  p {
    display: flex;
    justify-content: center;
    font-weight: 700;
    font-size: 1.125rem;
    color: #333333;
    background-color: #f5f5f5;
  }

  svg {
    font-size: 5rem;
  }

  span {
    font-weight: 400;
    font-size: 0.875rem;
    color: #828282;
  }
`;
