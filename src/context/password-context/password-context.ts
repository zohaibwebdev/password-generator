import { createContext, useContext } from "react";
import { IPasswordGen, defaultPasswordGen } from "./password-context-interfaces";

const PasswordContext = createContext<IPasswordGen>(defaultPasswordGen)

export const PasswordContextProvider = PasswordContext.Provider

export const usePasswordContext = ()=> useContext(PasswordContext)