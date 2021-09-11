import './App.css';
import Navigation from './components/navigation';
import { lazy, Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';

const homgePage = lazy(() => import('./views/home/home'));
const productsPage = lazy(() => import('./views/products/products'));
const shopsPage = lazy(() => import('./views/shops/shops'));
const loungesPage = lazy(() => import('./views/lounges/lounges'));

function App() {
  return (
    <div className="App">
      <Navigation />
      <Suspense fallback={<div>Загрузка...</div>}>
        <Switch>
          <Route component={homgePage} path="/" exact />
          <Route component={productsPage} path="/products" />
          <Route component={shopsPage} path="/shops" />
          <Route component={loungesPage} path="/lounges" />
        </Switch>
      </Suspense>
    </div>
  );
}

export default App;
