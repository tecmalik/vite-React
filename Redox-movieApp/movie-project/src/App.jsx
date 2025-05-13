
import Login from './components/auth/login/Login.jsx';
import SignUp from './components/auth/signUp/SignUp.jsx';
import router from './routers/routes';
import { RouterProvider } from 'react-router';



function App() {

  return (
    // <>
     <RouterProvider router= {router}></RouterProvider>
    // </>
  )
}

export default App
