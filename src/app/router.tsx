import { createBrowserRouter, Navigate } from "react-router-dom";
import NotRequireAuth from "../components/auth/not-require-auth";
import RequireAuth from "../components/auth/require-auth";
import PageWithBreadcrumbs from "../components/layout/page-with-breadcrumbs";
import ErrorPage from "../pages/error-page";
import HomePage from "../pages/home-page";
import LoginPage from "../pages/login-page";
import NotFoundPage from "../pages/not-found-page";
import App from "./app";

export const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <ErrorPage />,
    element: <App />,
    children: [
      {
        path: "login",
        element: (
          <NotRequireAuth>
            <PageWithBreadcrumbs>
              <LoginPage />
            </PageWithBreadcrumbs>
          </NotRequireAuth>
        ),
      },
      {
        path: "home",
        element: (
          <RequireAuth>
            <PageWithBreadcrumbs>
              <HomePage />
            </PageWithBreadcrumbs>
          </RequireAuth>
        ),
      },
      {
        path: "",
        element: <Navigate to="login" replace />,
      },
      {
        path: "*",
        element: <NotFoundPage />,
      },
    ],
  },
]);
