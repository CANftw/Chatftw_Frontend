import { Route, Navigate } from "react-router-dom";

interface PrivateRouteProps {
  isAuthenticated: () => boolean;
  component: JSX.Element;
  path: string;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({
  isAuthenticated,
  component: Component,
  path,
}) => {
  return (
    <Route
      path={path}
      element={isAuthenticated() ? Component : <Navigate to="/login" />}
    />
  );
};

export default PrivateRoute;