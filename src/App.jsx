import "./App.css";
import Header from "./components/Header";
import Product from "./components/Product";
import Cart from "./components/Cart";
import Modal from "./components/Modal";
import { useEffect, useState } from "react";

function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [search, setSearch] = useState("");
  const [modal, setModal] = useState(false);

  useEffect(() => {
    fetch("https://hamburgueria-kenzie-json-serve.herokuapp.com/products")
      .then((res) => res.json())
      .then((res) => setProducts(res))
      .catch((err) => console.log(err));
  }, []);

  function addCart(id) {
    const newProductCart = products.find((item) => item.id === parseInt(id));
    const duplicateProduct = cart.includes(newProductCart);

    duplicateProduct ? setModal(true) : setCart([...cart, newProductCart]);
  }

  function removeProductCart(id) {
    const filteredProducts = cart.filter((item) => item.id !== parseInt(id));
    setCart(filteredProducts);
  }

  function removeAllProductsCart() {
    setCart([]);
  }

  const searchProducts = products.filter(
    (item) =>
      item.name.toLowerCase().includes(search.toLowerCase()) ||
      item.category.toLowerCase().includes(search.toLowerCase())
  );

  function openModal() {
    setTimeout(() => {
      setModal(false);
    }, 2500);

    return <Modal />;
  }

  return (
    <div className="App">
      {modal && openModal()}
      <header className="App-header">
        <Header products={products} search={search} setSearch={setSearch} />
      </header>
      <main className="App-main">
        <Product addCart={addCart} searchProducts={searchProducts} />
        <Cart
          cart={cart}
          removeProductCart={removeProductCart}
          removeAllProductsCart={removeAllProductsCart}
        />
      </main>
    </div>
  );
}

export default App;
