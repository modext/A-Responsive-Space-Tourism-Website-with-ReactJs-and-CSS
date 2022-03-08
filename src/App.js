import './App.css';
import Header from './components/Header/Header';
import{ BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Destination from './components/Destination/Destination';
import Crew from './components/Crew/Crew';
import Technology from './components/Technology/Technology';
import Home from './components/Home/Home';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/destination" element={<Destination />} />
          <Route path="/crew" element={<Crew />} />
          <Route path="/technology" element={<Technology />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
