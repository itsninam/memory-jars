import { Navigate, Route, Routes } from "react-router-dom";
import "./styles/App.scss";
import Login from "./pages/auth/Login";
import Signup from "./pages/auth/Signup";
import ProtectedRoute from "./pages/ProtectedRoute";
import NotFound from "./components/NotFound";
import JarEntries from "./pages/jars/sealedJars/jarEntries/JarEntries";
import JarsList from "./pages/jars/sealedJars/jars/JarsList";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        <Route element={<ProtectedRoute />}>
          <Route path="home" element={<Home />}>
            <Route index element={<Navigate to="sealed" replace />} />
            <Route path="sealed" element={<JarsList type="sealed" />} />
            <Route path="unsealed" element={<JarsList />} />
          </Route>
          <Route
            path="home/sealed/:theme/:id"
            element={<JarEntries type="sealed" />}
          />
          <Route path="home/unsealed/:theme/:id" element={<JarEntries />} />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
