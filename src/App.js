import './App.css';
import HomePage from './pages/HomePage/homepage.component';
import { Switch, Route } from 'react-router-dom';
import ShopPage from './pages/shop-page/shop.component';
import HeaderComponent from './components/header/header.component';

function App() {
  return (
    <div>
      <HeaderComponent />
      <Switch>
        <Route exact path="/" component={HomePage}></Route>
        <Route path="/shop" component={ShopPage}></Route>
      </Switch>
    </div>
  );
}

export default App;
