import { createContext, useState, useContext, useEffect } from "react";

const AuthContext = createContext();
export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  //Load user 
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  //Save or remove 
  useEffect(() => {
    if (user) {
      localStorage.setItem("user", JSON.stringify(user));
    } else {
      localStorage.removeItem("user");
    }
  }, [user]);

  //Signup
  const signup = (username, email, password) => {
    const newUser = { username, email, password };
    localStorage.setItem("registeredUser", JSON.stringify(newUser));
    setUser({ username, email });
  };

  //Login 
  const login = (email, password) => {
    const registeredUser = JSON.parse(localStorage.getItem("registeredUser"));

    if (
      registeredUser &&
      registeredUser.email === email &&
      registeredUser.password === password
    ) {
      setUser({ username: registeredUser.username, email: registeredUser.email });
      return true;
    }

    return false; 
  };

  //Logout
  const logout = () => {
    setUser(null);
  };

  const value = {
    user,
    login,
    signup,
    logout,
    isAuthenticated: !!user,
  };

  return <AuthContext.Provider value={value}>
    {children}
  </AuthContext.Provider>;
};
