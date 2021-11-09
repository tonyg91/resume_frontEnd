// Components
import {Route, Routes} from "react-router-dom"
import Header from "./components/Header"
import Footer from "./components/Footer"
//Pages
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";


function App() {
  // Heroku Url
  const URL = "https://ag-resume-lab.herokuapp.com/"
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/projects" element={<Projects URL={URL}/>}/>
        <Route exact path="/about" element={<About URL={URL}/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
