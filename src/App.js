import { Route, Routes } from "react-router";
import "./App.css";
import Content from "./components/Content";
import Yes from "./components/Yes";
import Surprise from "./components/Surprise";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Content />} />
        <Route path="/Surprise" element={<Surprise />} />
        <Route path="/Yes" element={<Yes />} />
      </Routes>
    </>
  );
}

export default App;
