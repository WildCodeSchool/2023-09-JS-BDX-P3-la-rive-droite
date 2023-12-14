import { createContext, useContext } from "react";

const LogContext = createContext();

function LogContextProvider() {}

export default LogContextProvider;
export const useLogContext = () => useContext(LogContext);
