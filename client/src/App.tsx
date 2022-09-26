import React, { useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
//import './App.css';
import './sass/main.scss';
import Navigation from './components/Navigation';
import 'antd/dist/antd.css';
import HomePage from './pages/Homepage';
import Login from './pages/Login';
import DetailPage from './pages/DetailPage';
import Categories from './components/Categories';
import CategoryPage from './pages/CategoryPage';
import DescriptionPage from './pages/DescriptionPage';
import BasketPage from './pages/BasketPage';
import agent from './actions/agent';
import { useAppDispatch } from './redux/store/configureStore';
import { setBasket } from './redux/slice/basketSlice';
import Dashboard from './pages/Dashboard';

function App() {
  const dispatch = useAppDispatch();

  function getCookie(name: string) {
    return (
      document.cookie.match('(^|;)\\s*' + name + '\\s*=\\s*([^;]+)')?.pop() ||
      ''
    );
  }

  useEffect(() => {
    const clientId = getCookie('clientId');
    if (clientId) {
      agent.Baskets.get()
        .then((basket) => dispatch(setBasket(basket)))
        .catch((error) => console.log(error));
    }
  }, [dispatch]);
  return (
    <>
      <Navigation />
      <Route exact path="/" component={Categories} />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/course/:id" component={DescriptionPage} />
        <Route exact path="/basket" component={BasketPage} />
        <Route exact path="/category/:id" component={CategoryPage} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/detail" component={DetailPage} />
        <Route exact path="/profile" component={Dashboard} />
      </Switch>
    </>
  );
}

export default App;