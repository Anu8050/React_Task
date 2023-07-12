import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Welcome from './Page/Welcome';
import Login from './Page/loginpage';

function App() {
  return (
    <div className="App">

    <Router>
      <Routes>
        <Route path = '/' Component={Welcome}></Route>
        <Route path = '/loginpage' Component={Login}></Route>
      </Routes>
    </Router>

    </div>
  );
}

export default App;
