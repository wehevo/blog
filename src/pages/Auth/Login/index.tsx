import { getCookie, setCookie } from '@/utils/cookies';
import { useNavigate } from 'react-router';

export default function LoginPage() {
  const navigate = useNavigate();
  const visitedURL = getCookie('visitedURL');
  const onLogin = () => {
    setCookie('isAuthenticated', "true");
    navigate(`${visitedURL}`);
  }
  return (
    <>
      <h1>Login Page</h1>
      <p>Accessible only without logging in</p>
      <button onClick={onLogin}>Login</button>
    </>
  );
}
