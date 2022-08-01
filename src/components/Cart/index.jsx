import { BsCartPlus } from "react-icons/bs";
import { Aside } from "./style";
import { Card } from "./style";
import { EmptyCart } from "./style";

function Cart({ cart, removeProductCart, removeAllProductsCart }) {
  function someValueProducts() {
    const totalValue = cart.reduce((acc, cur) => {
      return acc + cur.price;
    }, 0);
    return (
      <div className="div-value">
        <p>
          <span className="total-value">Total</span>
          <span className="total-price">R$ {totalValue.toFixed(2)}</span>
        </p>
        <button onClick={() => removeAllProductsCart()}>Remover Todos</button>
      </div>
    );
  }

  function listProductsCard() {
    return cart.map((item) => {
      return (
        <Card key={item.id}>
          <figure>
            <img src={item.img} alt="produto" />
          </figure>
          <div className="div-card">
            <p>
              <span className="product-description">{item.name}</span>
              <span
                className="product-remove"
                id={item.id}
                onClick={(event) => removeProductCart(event.target.id)}
              >
                Remover
              </span>
            </p>
            <span className="product-category">{item.category}</span>
          </div>
        </Card>
      );
    });
  }

  if (cart.length > 0) {
    return (
      <Aside>
        <h3>Carrinho de Compras</h3>
        <ul>{listProductsCard()}</ul>
        {someValueProducts()}
      </Aside>
    );
  } else {
    return (
      <Aside>
        <h3>Carrinho de Compras</h3>
        <ul>
          <EmptyCart>
            <p>O carrinho está vazio</p>
            <BsCartPlus />
            <span>Adicione itens</span>
          </EmptyCart>
        </ul>
      </Aside>
    );
  }
}

export default Cart;
