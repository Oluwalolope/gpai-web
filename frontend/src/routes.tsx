import { createBrowserRouter } from "react-router-dom";
import App from "./App"; // This is your main landing page
import GPAiToolsPage from "./pages/GPAiToolsPage"; // This is your new tools page
import UnsubscribePage from "./pages/UnsubscribePage";
import AdminLoginPage from "./pages/AdminLoginPage";   // <-- Import new page
import UserLoginPage from "./pages/UserLoginPage";   // <-- Import new page
import UserDashboardPage from "./pages/UserDashboardPage"; // <-- Import new page
import AdminDashboardPage from "./pages/AdminDashboardPage"; // <-- Import new page
import ProtectedRoute from "./components/admin/ProtectedRoute"; 
import UserSignUpPage from "./pages/UserSignUpPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />, // The landing page component
  },
  {
    path: "/gpai-tools", // A separate route for the tools page
    element: <GPAiToolsPage />,
  },
  {
    path: "/unsubscribe", // <-- Add the new route
    element: <UnsubscribePage />,
  },
  {
    path: "/user/register", // The public-facing registration page
    element: <UserSignUpPage />,
  },
  {
    path: "/user/login", // The public-facing login page
    element: <UserLoginPage />,
  },
  {
    path: "/user/dashboard", // The protected dashboard
    element: (
      <ProtectedRoute role="user">
        <UserDashboardPage />
      </ProtectedRoute>
    ),
  },
  {
    path: "/admin/login", // The public-facing login page
    element: <AdminLoginPage />,
  },
  {
    path: "/admin/dashboard", // The protected dashboard
    element: (
      <ProtectedRoute role="admin">
        <AdminDashboardPage />
      </ProtectedRoute>
    ),
  },
]);

export default router;
