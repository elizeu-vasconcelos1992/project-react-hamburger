import HeaderContainer from "../../components/Header";
import Product from "../../components/Product";
import Cart from "../../components/Cart";
import Modal from "../../components/Modal";
import { Header, Main } from "./style";
import { useEffect, useState } from "react";
import api from "../../services";

function Showcase() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [search, setSearch] = useState("");
  const [modal, setModal] = useState(false);

  useEffect(() => {
    api
      .get("/products")
      .then((res) => {
        setProducts(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    const localCart = JSON.parse(localStorage.getItem("cartUser"));
    localCart && setCart(localCart);
  }, []);

  function addCart(id) {
    const newProductCart = products.find((item) => item.id === parseInt(id));
    const duplicateProduct = cart.includes(newProductCart);

    duplicateProduct ? setModal(true) : setCart([...cart, newProductCart]);
  }

  function removeProductCart(id) {
    const filteredProducts = cart.filter((item) => item.id !== parseInt(id));
    setCart(filteredProducts);
    cart.length < 1
      ? localStorage.setItem("cartUser", JSON.stringify(filteredProducts))
      : localStorage.clear();
  }

  function removeAllProductsCart() {
    setCart([]);
    localStorage.clear();
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
    <>
      {modal && openModal()}
      <Header>
        <HeaderContainer
          products={products}
          search={search}
          setSearch={setSearch}
        />
      </Header>
      <Main>
        <Product addCart={addCart} searchProducts={searchProducts} />
        <Cart
          cart={cart}
          removeProductCart={removeProductCart}
          removeAllProductsCart={removeAllProductsCart}
        />
      </Main>
    </>
  );
}

export default Showcase;
