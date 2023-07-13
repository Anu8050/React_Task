import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Welcome from './Page/Welcome';
import Login from './Page/loginpage';
import Itempage from './Page/itempage'

function App() {
  return (
    <div className="App">
    <Router>
      <Routes>
        <Route path = '/' Component={Welcome}></Route>
        <Route path = '/loginpage' Component={Login}></Route>
        <Route path ='/itempage' Component={Itempage}></Route>
      </Routes>
    </Router>

    </div>
  );
}

export default App;
