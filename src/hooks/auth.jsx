import { createContext, useContext, useState, useEffect } from "react";

import { api } from '../services/api';

export const AuthContext = createContext({});

function AuthProvider({ children }) {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(false)

  async function signIn({ email, password }) {
    try {
      setLoading(true);
      const response = await api.post("/sessions", {email, password});
      const { user, token } = response.data;

      localStorage.setItem("@foodExplorer:user", JSON.stringify(user));
      localStorage.setItem("@foodExplorer:token", token);

      api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
      setData({ user, token })
      setLoading(false);

    } catch (error) {
      if (error.response) {
        alert(error.response.data.message);
      } else {
        alert("Não foi possível entrar.")
      }
      setLoading(false);
    }
  }

  function signOut() {
    localStorage.removeItem("@foodExplorer:user");
    localStorage.removeItem("@foodExplorer:token");

    setData({});
  }

  async function updateProfile({ user }) {
    try {
      await api.put("/users", user);
      localStorage.setItem("@foodExplorer:user", JSON.stringify(user));

      setData({ user, token: data.token });
      alert("Perfil atualizado com sucesso!");

    } catch (error) {
      if (error.response) {
        alert(error.response.data.message);
      } else {
        alert("Não foi possível atualizar o perfil.")
      }
    }
  }

  useEffect(() => {
    const user = localStorage.getItem("@foodExplorer:user");
    const token = localStorage.getItem("@foodExplorer:token");

    if (user && token) {
      api.defaults.headers.common['Authorization'] = `Bearer ${token}`;

      setData({
        user: JSON.parse(user),
        token
      });
    }
  }, [])

  return(
    <AuthContext.Provider value={{
      signIn,
      signOut,
      loading,
      setLoading,
      user: data.user,
      updateProfile
    }}>
      { children }
    </AuthContext.Provider>
  )
}

function useAuth() {
  const context = useContext(AuthContext);
  return context;
}

export { AuthProvider, useAuth };
