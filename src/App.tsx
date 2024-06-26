import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

import { Store } from './store/store';
import ErrorBoundary from './components/errorBoundary/ErrorBoundary';
import { AppRouter } from './routes/AppRouter';
import { Header } from './components/header/Header';

import './App.css';
import ShoppingCartTable from './components/shoppingCartTable/ShoppingCartTable';

const App = () => {
  return (
    <Provider store={Store}>
      <ErrorBoundary>
        <Router>
          <Header />
          <AppRouter />
          <ShoppingCartTable/>
        </Router>
      </ErrorBoundary>
    </Provider>
  );
};

export default App;
