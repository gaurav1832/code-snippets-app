import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./Components/navbar";
import Landing from "./Components/landing-page";
import CodeSnippetForm from "./Components/snippet-form";
import CodeSnippetList from "./Components/snippets";
import Footer from "./Components/footer";
function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/submit" element={<CodeSnippetForm />} />
        <Route path="/snippets" element={<CodeSnippetList />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
