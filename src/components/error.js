import { 
  useRouteError,
  Link 
} from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
 console.error('error', error);
 // eventually figure out how to get to operate in the test mode
 // {error.statusText || error.message}

  return (
    <div id="error-page">
      <h1>Oops!</h1>
      <p>Welcome to the {error.statusText}.</p>
      <p>[{error.status}] {error.data}</p>
      <Link to="/">Back to home</Link>
    </div>
  );
}