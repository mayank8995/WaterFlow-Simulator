import logo from './logo.svg';
import './App.css';
import Configurator from './components/Configurator'
import Simulator from './components/Simulator';
import React from 'react';
import Context from './context/Context'
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
function App() {
  return (
    <React.Fragment>
      <Context.Provider>
          <BrowserRouter>
          <Routes>
            <Route path="/" element={<Configurator />}/>
            <Route path="/simulator" element={<Simulator />} />
          </Routes>
          </BrowserRouter>
      </Context.Provider>
    </React.Fragment>
   

  );
}

export default App;
