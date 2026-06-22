import { createContext, useState } from "react";

export interface AuthContextType {
    token:string;
    setToken:React.Dispatch<React.SetStateAction<string>>;
}
export const AuthContext = createContext<AuthContextType>({} as AuthContextType);

export function AuthProvider({
  children,
}: {
  children: React.ReactNode;
}) {

  const [token, setToken] =
    useState("");

  return (
    <AuthContext.Provider
      value={{
        token,
        setToken,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}