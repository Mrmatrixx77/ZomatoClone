import { Route, Routes } from "react-router-dom";
import LandingPage from "./Pages/LandingPage/LandingPage";
import GetApp from "./Pages/GetApp/GetApp";

const App = () => {
  return (
    <div className="app overflow-x-hidden md:overflow-x-hidden">
      <Routes>
        <Route path="/" element={<LandingPage/>} />
        <Route path="/getapp" element={<GetApp/>}/>
      </Routes>
    </div>
  );
};

export default App;
