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
    <div className="bg-gray-100 flex justify-center items-center h-screen">
      <div className="w-1/2 h-screen hidden lg:block">
        <img src={require("@/assets/images/png/computer.png")} alt="Placeholder Image" className="object-cover w-full h-full" />
      </div>
      <div className="lg:p-36 md:p-52 sm:20 p-8 w-full lg:w-1/2">
        <h1 className="text-2xl font-semibold mb-4 text-gray-700">Login</h1>
        <div className="mb-4">
            <label htmlFor="username" className="block text-gray-600"> Username </label>
            <input type="text" id="username" name="username" className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500 text-black" autoComplete="off"/>
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-600">Password</label>
            <input type="password" id="password" name="password" className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500 text-black" autoComplete="off" />
          </div>
          <div className="mb-4 flex items-center">
            <input type="checkbox" id="remember" name="remember" className="text-blue-500" />
            <label htmlFor="remember" className="text-gray-600 ml-2">Remember Me</label>
          </div>
          <div className="mb-6 text-blue-500">
            <a href="#" className="hover:underline">Forgot Password?</a>
          </div>
          <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-md py-2 px-4 w-full" onClick={onLogin}>Login</button>
        <div className="mt-6 text-blue-500 text-center">
          <a href="#" className="hover:underline">Sign up Here</a>
        </div>
      </div>
    </div>
  );
}
