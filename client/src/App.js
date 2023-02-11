// import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from "./components/pages/Home";
function App() {
  return (
    <div>
       <Home/>
      {/* <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter> */}
    </div>
  );
}

export default App;
