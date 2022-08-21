import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Provider } from 'react-redux'

// import store from './redux/store/store'

import Vite from "./components/Vite"
import Layout from "./components/Layout"
import NotFound from './components/NotFound'

import store from './redux/store/store';

import Home from './components/Home';
import AddItem from './components/AddItem';
import Cart from './components/Cart';
import Order from './components/Order';

// import { loadUser } from './actions/authActions';
import { loadUser } from './service/auth.service'

// import 'bootstrap/dist/css/bootstrap.min.css';


class App extends React.Component {
    componentDidMount() {
        store.dispatch(loadUser());
    }
    render() {

        return (
            <Provider store={store}>

                <Router>
                    <Routes>
                        <Route path='/' element={<Layout />}>
                            <Route path='home' element={<Home />} />
                            <Route path='addItem' element={<AddItem />} />
                            <Route path='cart' element={<Cart />} />
                            <Route path='orders' element={<Order />} />
                            <Route path="vite" element={<Vite />} />
                            <Route path="*" element={<NotFound />} />
                        </Route>
                    </Routes>
                </Router>
            </Provider>
        )
    }
}

export default App;