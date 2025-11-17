import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Router, Routes, Route } from "./lib/router/Router.tsx";
import { Home } from "./screens/Home";
import { ProductsPage } from "./screens/ProductsPage";
import { ProductDetailsPage } from "./screens/ProductDetailsPage";
import { ShoppingCartScreen } from "./screens/ShoppingCartScreen";

createRoot(document.getElementById("app") as HTMLElement).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/product/:id" element={<ProductDetailsPage />} />
        <Route path="/cart" element={<ShoppingCartScreen />} />
      </Routes>
    </Router>
  </StrictMode>,
);
