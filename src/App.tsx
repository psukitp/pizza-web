import { Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Stock from "./components/stock/Stock";
import Main from "./components/cards/Main";
import Cart from "./components/cart/Cart";



function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index path="/" element={<Stock />} />
          <Route path="stock" element={<Stock />} />
          <Route path="pizza" element={<Main type='pizza' />} />
          <Route path="drink" element={<Main type='drink' />} />
          <Route path="deserts" element={<div>Десерты</div>} />
          <Route path="sauces" element={<div>Соусы</div>} />
          <Route path="cart" element={<Cart />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
