import { getCookie, setCookie } from '@/utils/cookies';
import { useNavigate } from 'react-router';

export default function LoginPage() {
  const navigate = useNavigate();
  const visitedURL = getCookie('visitedURL');
  return (
    <>
      <h1>Login Page</h1>
      <div>Accessible only without logging in</div>
      <button onClick={() => {
          setCookie('isAuthenticated', "true");
          navigate(`${visitedURL}`);
        }}>Login</button>
    </>
  );
}
