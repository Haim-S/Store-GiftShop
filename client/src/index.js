import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './app/App';
import reportWebVitals from './reportWebVitals';
import ProviderBrain from './context/contextTheBrain';
import ProviderAuth from "./context/contextAuth";
import ProviderContainer from "./context/contextController";
import ProviderOrder from './context/contextOrder';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ProviderBrain>
    <ProviderAuth>
      <ProviderContainer>
        <ProviderOrder>
    <App />
        </ProviderOrder>
      </ProviderContainer>
    </ProviderAuth>
    </ProviderBrain>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
