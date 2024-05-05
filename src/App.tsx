import {Routes, Route} from "react-router-dom"
import { router } from "./Routes";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer"
import LeaguesList from "./Components/LeaguesList"



function App() {
  return (
    <div className="App"> 
      <Navbar/>
      <div className="d-flex justify-content-center">
      <Routes>
        { router.map((item,j)=>(
        <Route key={j}  {...item}>   </Route>)) }
      </Routes>
      </div>
      <LeaguesList/>
      <Footer/>
    </div>
  );
}

export default App;
