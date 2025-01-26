import { BrowserRouter, Routes, Route } from "react-router-dom";
import Providers from "./components/Providers";
import Home from "./pages/Home";

function App() {
  return (
    <Providers>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          {/* <Route path="/login" element={}></Route>
          <Route path="/signup" element={}></Route>
          <Route path="/movie/:id" element={} /> */}
        </Routes>
      </BrowserRouter>
    </Providers>
  );
}

export default App;
