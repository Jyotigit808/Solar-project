import About from "./pages/About"
import Home from "./pages/Home"
import { BrowserRouter, Routes, Route } from "react-router";

function App() {

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/" element={<About />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
