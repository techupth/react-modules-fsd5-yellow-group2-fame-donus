import "./App.css";
import {
  Header,
  Footer,
  MainContent,
  ProductSection,
  FAQ,
} from "./components/components.jsx";
import * as React from "react";

function App() {
  return (
    <div>
      <Header />
      <MainContent />
      <ProductSection />
      <FAQ />
      <Footer />
    </div>
  );
}

export default App;
