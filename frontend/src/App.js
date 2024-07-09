import "./App.css";
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import axios from "axios";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import RabiesAndYou from "./pages/RabiesAndYou";
import RabiesAndDoctor from "./pages/RabiesAndDoctor";
import PreExposureVaccination from "./pages/PreExposureVaccination";
import RabiesVaccineSchedule from "./pages/RabiesVaccineSchedule";
import VaccineSchedulesReminder from "./pages/VaccineSchedulesReminder";
import BittenByDog from "./pages/BittenByDog";
import WhoAreAtRisk from "./pages/WhoAreAtRisk";
import Oath from "./pages/Oath";
import TestPage from "./pages/TestPage";
import Login from "./auth/Login";
import Register from "./auth/Register";
import Header from "./components/Header";
import Footer from "./components/Footer";
import PrivateRoutes from "./utils/PrivateRoutes";
import ScrollToTop from "./components/ScrollToTop";
import SideSocialIcons from "./components/SideSocialIcons";

function App() {
  axios.defaults.withCredentials = true;
  const [auth, setAuth] = useState(false);
  const [doctorId, setDoctorId] = useState("");

  return (
    <div className="App">
      <Router>
        <Header />
        <ScrollToTop />
        <SideSocialIcons />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/bitten-by-a-dog" element={<BittenByDog />} />
          <Route path="/who-are-at-risk" element={<WhoAreAtRisk />} />
          <Route path="/oath" element={<Oath />} />
          <Route path="/rabies-and-you" element={<RabiesAndYou />} />
          <Route element={<PrivateRoutes auth={auth} setAuth={setAuth} doctorId={doctorId} setDoctorId={setDoctorId} />}>
            <Route path="/rabies-and-doctor" element={<RabiesAndDoctor doctorId={doctorId} setDoctorId={setAuth} auth={auth} setAuth={setAuth} />} />
          </Route>
          <Route path="/pre-exposure-vaccination" element={<PreExposureVaccination />} />
          <Route path="/rabies-vaccine-schedule" element={<RabiesVaccineSchedule />} />
          <Route path="/rabies-vaccine-schedule-reminder/:first_dose_date" element={<VaccineSchedulesReminder />} />
          <Route path="/login" element={<Login setAuth={setAuth} setDoctorId={setDoctorId} />} />
          <Route path="/register" element={<Register />} />
          <Route path="/test-page" element={<TestPage />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
