import { Route, Switch } from 'react-router-dom';
import 'antd/dist/antd.css';
import './sass/main.scss';
import DetailPage from './pages/DetailPage';
import Homepage from './pages/Homepage';
import LoginPage from './pages/Login';
import Navigation from './components/Navigation';
import Categories from './components/Categories';
import CategoryPage from './pages/CategoryPage';
import DescriptionPage from './pages/DescriptionPage';
import BasketPage from './pages/BasketPage';

function App() {
  return (
    <>
      <Navigation />
      <Route exact path="/" component={Categories} />
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/course/:id" component={DescriptionPage} />
        <Route exact path="/category/:id" component={CategoryPage} />
        <Route exact path="/login" component={LoginPage} />
        <Route exact path="/detail" component={DetailPage} />
        <Route exact path="/basket" component={BasketPage} />
      </Switch>
    </>
  );
}

export default App;