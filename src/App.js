import React,{useState} from 'react';
import Header from './components/header';
import homePage from './pages/homePage';
import countriesDetailsPage from './pages/countriesDetailsPage';
import {Route,Switch,Redirect, withRouter} from 'react-router-dom';
import HomePage from './pages/homePage';
import CountriesDetailsPage from './pages/countriesDetailsPage';

function App() {

  const [dark, setDark] = useState(false);
  const changeTheme = ()=> setDark(!dark);

  return (
    <div className={'theme ' + (dark ? 'theme--dark' : 'theme--default')}>
      <div className='base'>
        <Header changeTheme={changeTheme} dark={dark}/>
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/country/:alpha3Code' component={CountriesDetailsPage} />
          <Redirect to='/' />
        </Switch>
      </div>
    </div>
  );
}

export default App;
