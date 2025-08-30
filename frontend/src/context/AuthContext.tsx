import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

interface User {
  id: string;
  name: string;
  email: string;
}

interface AuthContextType {
  user: User | null;
  loading: boolean;
  error: string | null;
  login: (email: string, password: string) => Promise<void>;
  register: (name: string, email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
  refreshUser: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error('useAuth must be used within AuthProvider');
  return context;
};

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  // Fetch user on mount
  useEffect(() => {
    refreshUser();
  }, []);

  const refreshUser = async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch('/auth/me', { credentials: 'include' });
      if (res.ok) {
        const data = await res.json();
        setUser(data.user);
      } else {
        setUser(null);
      }
    } catch (err) {
      setUser(null);
      setError('Failed to fetch user');
      toast.error('Failed to fetch user');
    } finally {
      setLoading(false);
    }
  };

  const login = async (email: string, password: string) => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch('/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        body: JSON.stringify({ email, password }),
      });
      if (res.ok) {
        await refreshUser();
        toast.success('Login successful!');
      } else {
        const data = await res.json();
        setError(data.message || 'Login failed');
        toast.error(data.message || 'Login failed');
      }
    } catch (err) {
      setError('Login failed');
      toast.error('Login failed');
    } finally {
      setLoading(false);
    }
  };

  const register = async (name: string, email: string, password: string) => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch('/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        body: JSON.stringify({ name, email, password }),
      });
      if (res.ok) {
        await refreshUser();
        toast.success('Registration successful!');
      } else {
        const data = await res.json();
        setError(data.message || 'Registration failed');
        toast.error(data.message || 'Registration failed');
      }
    } catch (err) {
      setError('Registration failed');
      toast.error('Registration failed');
    } finally {
      setLoading(false);
    }
  };

  const logout = async () => {
    setLoading(true);
    setError(null);
    try {
      await fetch('/auth/logout', { method: 'POST', credentials: 'include' });
      setUser(null);
      toast.success('Logged out successfully');
    } catch (err) {
      setError('Logout failed');
      toast.error('Logout failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <AuthContext.Provider value={{ user, loading, error, login, register, logout, refreshUser }}>
        {children}
      </AuthContext.Provider>
  {/* Toast container for notifications */}
  <ToastContainer position="top-right" autoClose={3000} hideProgressBar={false} newestOnTop closeOnClick pauseOnFocusLoss draggable pauseOnHover />
    </>
  );
};
