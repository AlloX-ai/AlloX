import { Route, Routes } from "react-router";
import { NavbarComingSoon } from "./components/Navbar_ComingSoon";
import { ComingSoon } from "./pages/ComingSoon";

function App() {
  return (
    <>
      <NavbarComingSoon />
      <Routes>
        <Route path="/" element={<ComingSoon />} />
      </Routes>
    </>
  );
}

export default App;
