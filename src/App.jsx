import { Route, Routes } from "react-router-dom";
import "./styles/App.scss";
import Login from "./pages/auth/Login";
import Signup from "./pages/auth/Signup";
import ProtectedRoute from "./pages/ProtectedRoute";
import NotFound from "./components/NotFound";
import JarEntries from "./pages/jars/sealedJars/jarEntries/JarEntries";
import SealedJarsList from "./pages/jars/sealedJars/jars/SealedJarsList";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        <Route element={<ProtectedRoute />}>
          <Route path="/home" element={<SealedJarsList />} />
          <Route path="/home/:theme/:id" element={<JarEntries />} />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
