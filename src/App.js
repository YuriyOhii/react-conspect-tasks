import { Routes, Route } from "react-router-dom";
import { Layout } from "./Layout";
import { lazy } from 'react'
// import Home from "./pages/Home";
// import About from "./pages/About";
// import Products from "./pages/Products";
// import NotFoundPage from "./pages/NotFoundPage";
// import ProductDetails from "./pages/ProductDetails/ProductDetails";
// import Mission from "./components/Mission/Mission";
// import Team from "./components/Team/Team";
// import Reviews from "./components/Reviews/Reviews";
import AdminLayout from "./AdminLayout";
import Sales from "./pages/Sales";
import Customer from "./pages/Customer";

const Home = lazy(()=>import("./pages/Home"));
const About = lazy(()=>import("./pages/About"));
const Products = lazy(()=>import("./pages/Products"));
const NotFoundPage = lazy(()=>import("./pages/NotFoundPage"));
const ProductDetails = lazy(()=>import("./pages/ProductDetails/ProductDetails"));
const Mission = lazy(()=>import("./components/Team/Team"));
const Team = lazy(()=>import("./pages/Home"));
const Reviews = lazy(()=>import("./components/Reviews/Reviews"));


export const App = () => {
  return (
    <>
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
    </>
  );
};
