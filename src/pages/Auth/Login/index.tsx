import { useCookies } from 'react-cookie';
import { useNavigate } from 'react-router';

export default function LoginPage() {
  const [cookies, setCookie] = useCookies(['visitedURL', 'isAuthenticated']);
  const navigate = useNavigate();
  const visitedURL = cookies.visitedURL || '/blog';
  const onLogin = () => {
    setCookie('isAuthenticated', 'success');
    navigate(`${visitedURL}`);
  }
  return (
    <>
      <h1>Login Page</h1>
      <p>!!!Accessible only without logging in</p>
      <button onClick={onLogin}>Login</button>
    </>
  );
}
