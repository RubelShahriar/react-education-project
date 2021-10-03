import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './components/Home/Home';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import AboutUs from './components/AboutUs/AboutUs';
import Campus from './components/Campus/Campus';
import Service from './components/Service/Service';
import NotFound from './components/NotFound/NotFound';

function App() {
  return (
    <div className="App">
      <Router>
        <Header></Header>
        <Switch>
            <Route exact path='/home'>
              <Home></Home>
            </Route>
            <Route exact path='/'>
              <Home></Home>
            </Route>
            <Route exact path='/aboutUs'>
              <AboutUs></AboutUs>
            </Route>
            <Route exact path='/service'>
              <Service></Service>
            </Route>
            <Route exact path='/campus'>
              <Campus></Campus>
            </Route>
            <Route exact path='*'>
              <NotFound></NotFound>
            </Route>
        </Switch>
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
