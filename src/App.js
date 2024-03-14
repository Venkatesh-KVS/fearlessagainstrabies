import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import RabiesAndYou from "./pages/RabiesAndYou";
import RabiesAndDoctor from "./pages/RabiesAndDoctor";
import PreExposureVaccination from "./pages/PreExposureVaccination";
import RabiesVaccineSchedule from "./pages/RabiesVaccineSchedule";
import Login from "./auth/Login";
import Register from "./auth/Register";
import Header from "./components/Header";
import Footer from "./components/Footer";
import axios from "axios";

function App() {
  axios.defaults.withCredentials = true;

  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/rabies-and-you" element={<RabiesAndYou />} />
          <Route path="/rabies-and-doctor" element={<RabiesAndDoctor />} />
          <Route
            path="/pre-exposure-vaccination"
            element={<PreExposureVaccination />}
          />
          <Route
            path="/rabies-vaccine-schedule"
            element={<RabiesVaccineSchedule />}
          />

          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
