import { ListCard } from "./style";

function Product({ addCart, searchProducts }) {
  if (searchProducts.length > 0) {
    return (
      <ListCard>
        {searchProducts.map((item) => {
          return (
            <li key={item.id}>
              <div className="div-img">
                <img src={item.img} alt="" />
              </div>
              <div className="div-infos">
                <h3>{item.name}</h3>
                <h4>{item.category}</h4>
                <span>R$ {item.price.toFixed(2)}</span>
                <button
                  id={item.id}
                  onClick={(event) => addCart(event.target.id)}
                >
                  Adicionar
                </button>
              </div>
            </li>
          );
        })}
      </ListCard>
    );
  }
}

export default Product;
