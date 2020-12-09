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
      products: []
    }

  }

  async componentDidMount() {
    // fetch("http://3.21.164.220/products?count=50")
    // .then((response) => response.json())
    // .then((data) => this.setState({ products: data}));

    var response = await fetch("http://3.21.164.220/products?count=50");
    var data = await response.json();
    this.setState({ products: data});


    console.log("component did in fact mount!!")

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
