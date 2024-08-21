// import logo from './logo.svg';
import './App.css';
// import { Button } from 'react-bootstrap';
// import Header from './Header'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Login from './Login'
import Register from './Register'
import AddProduct from './AddProduct'
import Protected from './Protected'
import UpdateProduct from './UpdateProduct'
import ProductList from './ProductList'
import SearchComponent from './SearchProduct';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Switch>
        {/* <Header /> */}
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/register">
          <Register />
        </Route>
        <Route path="/add">
          <Protected Cmp={AddProduct} />
        </Route>
        <Route path="/update/:id">
          <Protected Cmp={UpdateProduct} />
        </Route>
        <Route path="/search">
          <Protected Cmp={SearchComponent} />
        </Route>
        <Route path="/">
          <Protected Cmp={ProductList} />
        </Route>
        <Route path="/search">
          <Protected Cmp={SearchComponent} />
        </Route>
        </Switch>
      </BrowserRouter>
        {/* <h1>E-Commerce Project</h1> */}
    </div>
  );
}

export default App;
