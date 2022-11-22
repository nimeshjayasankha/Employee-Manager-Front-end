import  { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store';
import { QueryClient, QueryClientProvider } from 'react-query';
const rootElement = document.getElementById('root') as HTMLElement;
const root = createRoot(rootElement);
const queryClient = new QueryClient();


root.render(
  <StrictMode>
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <Provider store={store}>
          <App />
        </Provider>
      </QueryClientProvider>
    </BrowserRouter>
  </StrictMode>
);
