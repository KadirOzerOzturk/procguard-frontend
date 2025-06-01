
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './redux/store';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
<BrowserRouter>
    <div className="font-grotesk bg-gray-900 text-white scroll-smooth">
      <App />
    </div>
  </BrowserRouter>
  </Provider>
);

