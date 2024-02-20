import { useContext } from "react";
import AqiContext from "../context/AqiContext";

const useAqiContext = () => {
  const context = useContext(AqiContext);
  if (!context) {
    throw new Error("useOrderContext must be used within an OrderProvider");
  }
  return context;
};

export default useAqiContext;
