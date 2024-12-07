import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ErrorPage from "./pages/ErrorPage";
import RegisterPage from "./pages/RegisterPage";
import TrainerPage from "./pages/TrainerPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/trainers" element={<TrainerPage />} />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
}

export default App;
