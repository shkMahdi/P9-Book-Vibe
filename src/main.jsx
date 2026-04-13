import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import './index.css'
import App from './App.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: "Homepage",
  },
  {
    path: "/books",
    element: "Books",
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App></App>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
