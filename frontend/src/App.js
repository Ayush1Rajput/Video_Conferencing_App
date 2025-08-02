import "./App.css";
import LandingPage from "./pages/landing";
import Authentication from "./pages/authentication";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";
<<<<<<< HEAD
import VideoMeetComponent from './pages/VideoMeet';
=======
import VideoMeetComponent from './pages/VideoMeet'
>>>>>>> 8f197771ea04df4565418f8080bd0031cd1cec0d

function App() {
  return (
    <>
      <Router>
        <AuthProvider>
          <Routes>
            <Route path="/" element={<LandingPage />} />

            <Route path="/auth" element={<Authentication />} />

<<<<<<< HEAD
            <Route path="/url" element={<VideoMeetComponent/>} />
=======
            <Route path='/:url' element={<VideoMeetComponent/>} />
>>>>>>> 8f197771ea04df4565418f8080bd0031cd1cec0d
          </Routes>
        </AuthProvider>
      </Router>
    </>
  );
}

export default App;
