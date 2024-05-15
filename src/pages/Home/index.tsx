import { useCookies } from 'react-cookie';
import { useNavigate } from "react-router";

const HomePage = () => {
  const [cookies, setCookie] = useCookies(['isAuthenticated']);
  const navigate = useNavigate();

  const checkAuth = () => {
    if (cookies.isAuthenticated === "success") {
      return true;
    } else {
      return false;
    }
  }

  return (
    <>
      <h1>Home Page</h1>
      <div className="font-medium">
        Anyone can access it, regardless of whether they are logged in or not!
      </div>
      <br />
      {!checkAuth() ? (
        <button
          onClick={() => {
            navigate("/blog/login");
          }}
        >
          Login Page
        </button>
      ) : (
        <div>
          <button
            onClick={() => {
              setCookie("isAuthenticated", 'failed');
            }}
          >
            Logout
          </button>
          <button
            onClick={() => {
              navigate("/blog/dashboard");
            }}
          >
            Dashboard
          </button>
        </div>
      )}
    </>
  );
};
export default HomePage;

