import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Profile from "./pages/Profile";
import Network from "./pages/Network";
import Messages from "./pages/Messages";
import Notifications from "./pages/Notifications";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/login" element={<Login />} />

        <Route path="/register" element={<Register />} />

        <Route path="/profile" element={<Profile />} />

        <Route path="/network" element={<Network />} />

        <Route path="/messages" element={<Messages />} />

        <Route
          path="/notifications"
          element={<Notifications />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
  

