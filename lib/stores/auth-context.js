import { createContext } from "react";

// Firebase
import { auth } from "@/lib/firebase";
import { useAuthState } from "react-firebase-hooks/auth";

export const authContext = createContext({
  user: null,
  loading: false,
  error: null,
});

export default function AuthContextProvider({ children }) {
  const [user, loading, error] = useAuthState(auth);

  const authValue = { user, loading, error };
  return (
    <authContext.Provider value={authValue}>{children}</authContext.Provider>
  );
}
