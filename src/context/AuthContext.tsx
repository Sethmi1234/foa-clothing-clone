"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";

const AUTH_STORAGE_KEY = "foa-auth-user";

type User = {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
};

type AuthContextValue = {
  user: User | null;
  isLoggedIn: boolean;
  isHydrated: boolean;
  login: (email: string, password: string) => Promise<boolean>;
  register: (firstName: string, lastName: string, email: string, password: string) => Promise<boolean>;
  logout: () => void;
  updateUser: (updates: Partial<User>) => void;
};

const AuthContext = createContext<AuthContextValue | null>(null);

function readStoredUser(): User | null {
  if (typeof window === "undefined") return null;
  try {
    const stored = window.localStorage.getItem(AUTH_STORAGE_KEY);
    if (!stored) return null;
    const parsed = JSON.parse(stored) as User;
    if (parsed && parsed.id && parsed.email) return parsed;
    return null;
  } catch {
    return null;
  }
}

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    setUser(readStoredUser());
    setIsHydrated(true);
  }, []);

  useEffect(() => {
    if (!isHydrated) return;
    if (user) {
      window.localStorage.setItem(AUTH_STORAGE_KEY, JSON.stringify(user));
    } else {
      window.localStorage.removeItem(AUTH_STORAGE_KEY);
    }
  }, [user, isHydrated]);

  const login = useCallback(async (email: string, _password: string): Promise<boolean> => {
    // Simulated login — in a real app this would call an API
    const mockUser: User = {
      id: "usr_" + Math.random().toString(36).substring(2, 10),
      email,
      firstName: "Customer",
      lastName: "",
    };
    setUser(mockUser);
    return true;
  }, []);

  const register = useCallback(
    async (firstName: string, lastName: string, email: string, _password: string): Promise<boolean> => {
      // Simulated registration — in a real app this would call an API
      const mockUser: User = {
        id: "usr_" + Math.random().toString(36).substring(2, 10),
        email,
        firstName,
        lastName,
      };
      setUser(mockUser);
      return true;
    },
    []
  );

  const logout = useCallback(() => {
    setUser(null);
  }, []);

  const updateUser = useCallback((updates: Partial<User>) => {
    setUser((current) => (current ? { ...current, ...updates } : current));
  }, []);

  const value = useMemo<AuthContextValue>(
    () => ({
      user,
      isLoggedIn: !!user,
      isHydrated,
      login,
      register,
      logout,
      updateUser,
    }),
    [user, isHydrated, login, register, logout, updateUser]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}