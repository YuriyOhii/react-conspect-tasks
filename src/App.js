import { Routes, Route, Link } from "react-router-dom";
import { Layout, StyledNav, Menu } from "./Layout.styled";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Products } from "./pages/Products";
import { NotFoundPage } from "./pages/NotFoundPage";
import { ProductDetails } from "./pages/ProductDetails";
import { Mission } from "./components/Mission/Mission";
import { Team } from "./components/Team/Team";
import { Reviews } from "./components/Reviews/Reviews";
export const App = () => {
  return (
    <Layout>
      <header>
        <nav>
          <Link to={"/"}>
            <HiOutlineShoppingBag />
          </Link>
          <Menu>
            <li>
              <StyledNav to={"/"}>Home</StyledNav>
            </li>
            <li>
              <StyledNav to={"/about"}>About</StyledNav>
            </li>
            <li>
              <StyledNav to={"/products"}>Products</StyledNav>
            </li>
          </Menu>
        </nav>
      </header>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />}>
          <Route path="mission" element={<Mission />} />
          <Route path="team" element={<Team />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<ProductDetails />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Layout>
  );
};
