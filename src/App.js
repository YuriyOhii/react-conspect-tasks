import { Routes, Route } from "react-router-dom";
import { Layout } from "./Layout";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Products } from "./pages/Products";
import { NotFoundPage } from "./pages/NotFoundPage";
import { ProductDetails } from "./pages/ProductDetails";
import { Mission } from "./components/Mission/Mission";
import { Team } from "./components/Team/Team";
import { Reviews } from "./components/Reviews/Reviews";
import AdminLayout from "./AdminLayout";
import Sales from "./pages/Sales";
import Customer from "./pages/Customer";
export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/about" element={<About />}>
          <Route path="mission" element={<Mission />} />
          <Route path="team" element={<Team />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<ProductDetails />} />
        <Route path="*" element={<NotFoundPage />} />
        <Route path="admin" element={<AdminLayout />}>
          <Route path="sales" element={<Sales />} />
          <Route path="customer" element={<Customer />} />
        </Route>
      </Route>
    </Routes>
  );
};
