// import logo from './logo.svg';
import './App.css';
import {Component} from 'react';
import {
  BrowserRouter,
  Switch,
  Route,
  Link
} from 'react-router-dom'
import ProductList from './components/ProductList'
import Product from './components/Product';

class App extends Component{
  constructor(props){
    super(props);
    this.state ={
      products: [
          {
             "id":1,
             "name":"Camo Onesie",
             "slogan":"Blend in to your crowd",
             "description":"The So Fatigues will wake you up and fit you in. This high energy camo will have you blending in to even the wildest surroundings.",
             "category":"Jackets",
             "default_price":"140"
          },
          {
             "id":2,
             "name":"Bright Future Sunglasses",
             "slogan":"You've got to wear shades",
             "description":"Where you're going you might not need roads, but you definitely need some shades. Give those baby blues a rest and let the future shine bright on these timeless lenses.",
             "category":"Accessories",
             "default_price":"69"
          }
      ]
    }

  }

  render(){
    return (
      <div className="App">
        <BrowserRouter>
          <div className="nav-header">I'm the header</div>
          <ul className="nav-links">
            <li><Link to="/">Home</Link> </li>
            <li><Link to="/products">Products</Link></li>
          </ul>
          <div className="main-area">
            <Switch>
              <Route exact path="/products">
                <ProductList productList={this.state.products} />   
              </Route>
              <Route exact path="/">
                <h1>SDI Clothing Shop</h1>
              </Route>
              <Route path="/products/:productId" >
                <Product productList={this.state.products} />
              </Route>
            </Switch>
            <h1>This is our Footer!</h1>
          </div>
        </BrowserRouter> 
      </div>
    )
  ;}
}

export default App;
