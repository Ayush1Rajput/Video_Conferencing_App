import "./App.css";
import LandingPage from "./pages/landing";
import Authentication from "./pages/authentication";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";

function App() {
  return (
    <>
      <Router>
        <AuthProvider>
          <Routes>
            <Route path="/" element={<LandingPage />} />

            <Route path="/auth" element={<Authentication />} />
          </Routes>
        </AuthProvider>
      </Router>
    </>
  );
}

export default App;
