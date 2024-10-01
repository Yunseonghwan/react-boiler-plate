import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './App';

import { store } from 'app/store';
import { BrowserRouter as Router } from 'react-router-dom';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import './styles/global.css';

const queryClient = new QueryClient();

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <Router>
          <App />
        </Router>
      </QueryClientProvider>
    </Provider>
  </React.StrictMode>
);
