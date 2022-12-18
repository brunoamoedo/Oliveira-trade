import firebase from './services/firebaseConnection';
import Routes from './routes';
import AuthProvider from './contexts/auth';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter } from 'react-router-dom';
import  'bootstrap/dist/css/bootstrap.min.css' ;
function App() {
  return(
    <AuthProvider>
      <BrowserRouter>
        <ToastContainer autoclose={3000}/>
        <Routes/>
      </BrowserRouter>
    </AuthProvider>
    );
}

export default App;
