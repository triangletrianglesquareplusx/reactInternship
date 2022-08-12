import { createContext, useState, useEffect } from "react";
import productService from "../../Services/productService";

export const Products = createContext();

export const ProductsContext = ({ children }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    productService.getAll().then((response) => {
      setProducts(response.data);
    });
  }, []);

  return (
    <ProductsContext.Provider
      value={{ products: products, dispatch: setProducts }}
    >
      {children}
    </ProductsContext.Provider>
  );
};
