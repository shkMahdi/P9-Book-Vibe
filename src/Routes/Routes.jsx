import { createBrowserRouter } from "react-router";
import MainLayout from "../Layouts/MainLayout";
import Homepage from "../Pages/Homepage/Homepage";
import Books from "../Pages/Books/Books";
import ErrorPage from "../Pages/ErrorPage/Errorpage";
import BookDetails from "../Pages/BookDetails/BookDetails";
import { Suspense } from "react";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        index: true,
        element: <Homepage></Homepage>
      },
      {
        path: "/books",
        element: <Books></Books>
      },
      {
        path: '/bookdetails/:bookId',
        element: <Suspense fallback={<span className="loading loading-dots loading-xl"></span>}>
          <BookDetails></BookDetails>
        </Suspense>,
        loader: () => fetch('/data/booksData.json')
      }
    ],
    errorElement: <ErrorPage></ErrorPage>
  },
]);