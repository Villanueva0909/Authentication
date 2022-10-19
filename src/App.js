import { Route, Routes } from "react-router-dom";
import { Login } from "./Pages/Login";
import { Register } from "./Pages/Register";
import { Welcome } from "./Pages/Welcome";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />;
        <Route path="/register" element={<Register />} />;
        <Route path="/welcome" element={<Welcome />} />;
      </Routes>
    </>
  );
}

export default App;
