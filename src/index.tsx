import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// import { Home } from "./screens/Home";
// import { ProductsPage } from "./screens/ProductsPage";
import { ProductDetailsPage } from "./screens/ProductDetailsPage";


createRoot(document.getElementById("app") as HTMLElement).render(
  <StrictMode>
    {/* <Home /> */}
    <ProductDetailsPage/>
  </StrictMode>,
);
