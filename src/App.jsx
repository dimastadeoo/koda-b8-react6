import { createBrowserRouter, RouterProvider } from 'react-router';

// Import halaman dari folder components
import HomePage from './pages/HomePage';
import DetailPage from "./pages/DetailPage"
import NotFoundPage from './pages/NotFoundPage';

// Konfigurasi Peta Rute URL halaman
const router = createBrowserRouter([

  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/detail/:username/:slug",
    element: <DetailPage />,
  },
  {
    path: "/not-found",
    element: <NotFoundPage />,
  },
  {
    path: "*",
    element: <NotFoundPage />,
  }
  

]);

function App() {
  // Jalankan konfigurasi router ke dalam aplikasi React
  return <RouterProvider router={router} />;
}

export default App;