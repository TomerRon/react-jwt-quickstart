import Home from './components/Home.jsx';
import LoginPage from './containers/LoginPage.jsx';
import SignUpPage from './containers/SignUpPage.jsx';
import LogoutPage from './containers/LogoutPage.jsx';
import ProtectedPage from './containers/ProtectedPage.jsx';

const routes = [
    {
      path: '/',
      component: Home
    },

    {
      path: '/login',
      component: LoginPage
    },

    {
      path: '/signup',
      component: SignUpPage
    },
    
    {
      path: '/logout',
      component: LogoutPage,
    },
    
    {
      path: '/protected',
      component: ProtectedPage,
    },
];

export default routes;
