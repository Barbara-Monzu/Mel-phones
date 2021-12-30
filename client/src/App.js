import React, { useState, useEffect, createContext } from 'react'
import { Redirect, Switch, Route } from 'react-router-dom'
// import Footer from "../footerNav/FooterNav";
import Navigation from "./components/pages/navigation/navigation";
import Footer from "./components/layout/footer";
import Catalog from "./components/pages/catalog/catalog"
import DetailsPhone from "./components/pages/details/detailsPhone"
import ShoppingCart from "./components/pages/shoppingCart/shoppingCart"
import './App.css'


export const AddToCart = React.createContext();

function App() {

  const [shoppingCart, setShoppingCart] = useState([])
  const [countCart, setCountCart] = useState(0)


  const addPhone = (phone) => {
    setShoppingCart([...shoppingCart, phone])
  }

  const countItems = () => setCountCart(shoppingCart.length)

  useEffect(() => {
    countItems()

  }, [shoppingCart])




  return (
<>
      <Navigation count={countCart} />
      <div className="general-routes">
        <AddToCart.Provider value={{ addPhone, shoppingCart, setCountCart }}>

          <Switch>
            <Route path="/" exact render={() => <Redirect to="/catalog" />} />
            <Route path="/catalog" exact render={() => <Catalog />} />
            <Route path="/details/:id" render={() => <DetailsPhone />} />
            <Route path="/cart" render={() => <ShoppingCart />} />
          </Switch>

        </AddToCart.Provider>
      </div>

      <div className="general-footer">
        <Footer />
      </div>

    </>
  );
}

export default App;
