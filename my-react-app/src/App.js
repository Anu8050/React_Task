import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Welcome from './Components/Welcome';
import Login from './Components/loginpage';
import Itempage from './Components/itempage'
import { Provider } from 'react-redux';
import Test from './Components/Test';
import Store from './Components/Store'
import Information from './Components/Information';

function App() {
  return (
    <div className="App">
      <Provider store={Store}>
    <Router>
      <Routes>
          <Route path='/' Component={Test}></Route>
          <Route path='/information' Component={Information}></Route>
        {/* <Route path = '/' Component={Welcome}></Route>
        <Route path = '/loginpage' Component={Login}></Route>
        <Route path ='/itempage' Component={Itempage}></Route> */}
      </Routes>
    </Router>
    </Provider>
    </div>
  );
}

export default App;
