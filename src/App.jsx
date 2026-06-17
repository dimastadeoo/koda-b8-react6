import { createBrowserRouter, RouterProvider } from 'react-router';

// Import halaman dari folder components
import HomePage from "./components/HomePage"
import DetailPage from "./components/DetailPage"




// Konfigurasi Peta Rute URL halaman
const router = createBrowserRouter([

  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/detail",
    element: <DetailPage />,
  },

]);

function App() {
  // Jalankan konfigurasi router ke dalam aplikasi React
  return <RouterProvider router={router} />;
}

export default App;