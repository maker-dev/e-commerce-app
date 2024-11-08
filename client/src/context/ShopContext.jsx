import { createContext } from "react";
import { products } from "../assets/assets";

const ShopContext = createContext(null);

// eslint-disable-next-line react/prop-types
const ShopContextProvider = ({ children }) => {
  const currency = "$";
  const delivery_fee = 10;

  const value = {
    products,
    currency,
    delivery_fee,
  };

  return <ShopContext.Provider value={value}>{children}</ShopContext.Provider>;
};

export { ShopContext };
export default ShopContextProvider;
