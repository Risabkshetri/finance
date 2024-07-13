import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

function ProtectedRoute({ children }) {
  const authStatus = useSelector(state => state.auth.status);
  
  if (!authStatus) {
    return <Navigate to="/login" />;
  }
  return children;
}

export default ProtectedRoute;