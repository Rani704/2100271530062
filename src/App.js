import React from 'react';
import { BrowserRouter as Router, Routes ,Route} from 'react-router-dom';
import AllProductsPage from './pages/AllProductsPage';
import ProductDetailsPage from './pages/ProductDetailsPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={AllProductsPage} />
        <Route path="/product/:id" element={ProductDetailsPage} />
      </Routes>
      </Router>
  );
}

export default App;
