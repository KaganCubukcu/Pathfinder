import { Route, Routes } from 'react-router-dom';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import MainLayout from './layouts/MainLayout';
import Store from './pages/Store';
import ProductDetail from './pages/ProductDetail';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Cart from './pages/Cart';

export function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/store" element={<Store />} />
          <Route path="/product/:name" element={<ProductDetail />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/cart" element={<Cart />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
