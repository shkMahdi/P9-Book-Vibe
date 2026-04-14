import { StrictMode, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from "react-router/dom";
import { router } from './Routes/Routes.jsx';
import './index.css'
import BookProvider from './Context/BookProvider.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Suspense fallback={<span className="loading loading-dots loading-xl"></span>}>
      <BookProvider>
          <RouterProvider router={router}></RouterProvider>
      </BookProvider>
    </Suspense>
  </StrictMode>,
)
