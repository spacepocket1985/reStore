import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

import { Store } from './store/store';

import ErrorBoundary from './components/errorBoundary/ErrorBoundary';
import App from './App';

import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Provider store={Store}>
    <ErrorBoundary>
      <Router>
        <App />
      </Router>
    </ErrorBoundary>
  </Provider>
);
