import {
  createBrowserRouter,
} from 'react-router-dom';

import Home from './routes/Home';
import About from './routes/About';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/about',
    element: <About />,
  },
]);

export default router;