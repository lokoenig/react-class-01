import { 
  useRouteError,
  Link 
} from "react-router-dom";
export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page">
      <h1>Oops!</h1>
      <p>Welcome to the 404.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
      <Link to="/">Back to home</Link>
    </div>
  );
}