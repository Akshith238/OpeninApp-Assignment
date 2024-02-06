import './tailwind.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Start from './components/Start';
import Home from './components/Home';

function App() {
  return (
    <BrowserRouter>
       <div className="App">
          <Routes>
            <Route exact path='/' Component={Start} />
            <Route path="/home" Component={Home} /> 
          </Routes>
      </div>
  </BrowserRouter> 
  );
}

export default App;
