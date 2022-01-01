import "./index.css";
// import Button from "@mui/material/Button";
import Home from "./pages/Home";
import Login from "./pages/Login";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import { useAuthContext } from "./hooks/useAuthContext";

const theme = createTheme({});

export default function App() {
  const { user, authIsReady } = useAuthContext();

  return (
    <ThemeProvider theme={theme}>
      { authIsReady &&   (
      <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={!user ? <Login /> : <Navigate to='/dashboard'/>} />
            <Route path="/signup" element={!user ? <Signup /> : <Navigate to='/dashboard'/>} />
            <Route path="/dashboard" element={user ? <Dashboard /> : <Navigate to='/login'/>} />
          </Routes>
        </BrowserRouter>
        )
      }
    </ThemeProvider>
  );
}
