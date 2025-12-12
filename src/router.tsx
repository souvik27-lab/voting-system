import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import { Home } from './pages/Home';
import { CreatePoll } from './pages/CreatePoll';
import { Poll } from './pages/Poll';
import { Results } from './pages/Results';
import { NotFound } from './pages/NotFound';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'create',
        element: <CreatePoll />,
      },
      {
        path: 'poll/:id',
        element: <Poll />,
      },
      {
        path: 'poll/:id/results',
        element: <Results />,
      },
      {
        path: '*',
        element: <NotFound />,
      },
    ],
  },
]);
