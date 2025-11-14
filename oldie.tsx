import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ProductsPage } from "./screens/ProductsPage";

createRoot(document.getElementById("app") as HTMLElement).render(
  <StrictMode>
    <ProductsPage />
  </StrictMode>,
);
