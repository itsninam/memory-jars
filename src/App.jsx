import { Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./pages/auth/Login";
import Signup from "./pages/auth/Signup";
import ProtectedRoute from "./pages/ProtectedRoute";
import NotFound from "./components/NotFound";
import SealedJars from "./pages/jars/sealedJars/jars/SealedJars";
import JarEntries from "./pages/jars/sealedJars/jarEntries/JarEntries";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        <Route element={<ProtectedRoute />}>
          <Route path="/home" element={<SealedJars />} />
          <Route path="/home/:id" element={<JarEntries />} />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
