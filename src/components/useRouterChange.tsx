import { useEffect } from "react";
import { useLocation } from "react-router-dom";

type CallbackFunction = (location: string, action: string) => void;

const useRouterChange = (callback: CallbackFunction) => {
  const location = useLocation();

  useEffect(() => {

    console.log("test mudou");

    callback(location.pathname, "PUSH");
  }, [callback, location]);
};

export default useRouterChange;
