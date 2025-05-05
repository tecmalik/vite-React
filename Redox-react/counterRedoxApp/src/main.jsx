
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {store} from "./app/store.jsx";
import { Provider } from 'react-redux';

createRoot(document.getElementById('root')).render(
// binding
  <Provider store ={store}>
     <App />
  </Provider>
   
)
