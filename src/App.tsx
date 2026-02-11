import { HashRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { NotFound } from "./pages/NotFound";
import { Navbar } from "./components/shared/Navbar";
import { Footer } from "./components/shared/Footer";
import { ScrollToTop } from "./components/shared/ScrollToTop";


function App() {
  return (
    <HashRouter>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </div>
      <ScrollToTop />
    </HashRouter>
  );
}

export default App;