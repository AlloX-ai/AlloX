import { Route, Routes } from "react-router";
import { LandingPage } from "./pages/LandingPage";
import { ProductPage } from "./pages/ProductPage";
import { DocsPage } from "./pages/DocsPage";
import { FoundationPage } from "./pages/FoundationPage";
import { BlogPage } from "./pages/BlogPage";
import { BlogPostPage } from "./pages/BlogPostPage";
import { BetaAccessPage } from './pages/BetaAccessPage';
import { TermsPage } from "./pages/TermsPage";
import { Navbar } from "./components/Navbar";
import Footer from "./components/Footer";
import { PrivacyPage } from "./pages/PrivacyPage";

function App() {
  return (
   <>
   <Navbar />
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/product" element={<ProductPage />} />
      <Route path="/docs" element={<DocsPage />} />
      <Route path="/foundation" element={<FoundationPage />} />
      <Route path="/blog" element={<BlogPage />} />
      {/* <Route path="/blog/:postId" element={<BlogPostPage />} />
      <Route path="/beta" element={<BetaAccessPage />} /> */}
      <Route path="/terms" element={<TermsPage />} />
      <Route path="/privacy" element={<PrivacyPage />} />
    </Routes>
    <Footer />
   </>
  );
}

export default App;
