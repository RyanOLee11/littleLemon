import { Home } from './routes/Home';
import { Reservations } from './routes/Reservations';
import './App.css';

import {Route, Routes} from "react-router-dom";


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path = "/" element = {<Home />}/>
        <Route path = "/reservations" element = {<Reservations />}/>
      </Routes>
    </div>
  );
}

export default App;
