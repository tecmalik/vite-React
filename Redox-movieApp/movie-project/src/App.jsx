
import Login from './components/auth/login';
import SignUp from './components/auth/signUp/SignUp.jsx';
import router from './routers/routes.js';
import { BrowserRouter } from 'react-router';


function App() {

  return (
    <>
     <RouterProvider router= {router}>  </RouterProvider>
    </>
  )
}

export default App
