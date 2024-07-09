import { Route, Routes } from "react-router-dom";
import LandingPage from "./Pages/LandingPage/LandingPage";
import GetApp from "./Pages/GetApp/GetApp";
import AddRestraunt from "./Pages/AddRestraunt/AddRestraunt";

const App = () => {
  return (
    <div className="app overflow-x-hidden md:overflow-x-hidden">
      <Routes>
        <Route path="/" element={<LandingPage/>} />
        <Route path="/getapp" element={<GetApp/>}/>
        <Route path="partner-with-us" element={<AddRestraunt/>}/>
      </Routes>
    </div>
  );
};

export default App;
