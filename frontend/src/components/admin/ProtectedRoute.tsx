import { Navigate } from 'react-router-dom';

type Props = {
  role: 'admin' | 'user';
  children: React.ReactNode;
};

const ProtectedRoute = ({ children, role }: Props) => {
  // Check for the "isLoggedIn" flag in the browser's session storage
  const isLoggedIn = sessionStorage.getItem(`gpai-${role}-auth`) === 'true';

  if (!isLoggedIn) {
    // If not logged in, redirect to the login page
    return <Navigate to={`/${role}/login`} replace />;
  }

  // If logged in, render the component (the dashboard)
  return <>{children}</>;
};

export default ProtectedRoute;